'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card'; // Cardコンポーネントのインポート
import { Button } from '@/components/ui/button'; // Buttonコンポーネントのインポート
import QRCode from 'qrcode'; // QRコードライブラリのインポート

type NftData = {
    title: string;
    owner: string;
    creator: string;
    imageUrl: string;
};

const isWalletAddress = (value: string): boolean => /^0x[a-fA-F0-9]{40}$/.test(value);

const shortenWalletAddress = (address: string, head = 6, tail = 4): string => {
    // 例: 0x123456…abcd
    if (!isWalletAddress(address)) return address;
    if (address.length <= head + tail + 1) return address;
    return `${address.slice(0, head)}…${address.slice(-tail)}`;
};

const formatAccountLabel = (value: string): string => shortenWalletAddress(value);

const drawKeyValueLine = (
    ctx: CanvasRenderingContext2D,
    params: {
        label: string;
        value: string;
        x: number;
        y: number;
        labelWidth: number;
        gap: number;
    },
) => {
    // ラベル列 + 値列に分けて、見た目を揃える
    const { label, value, x, y, labelWidth, gap } = params;
    ctx.fillText(label, x, y);
    ctx.fillText(value, x + labelWidth + gap, y);
};

const drawImageContain = (
    ctx: CanvasRenderingContext2D,
    image: CanvasImageSource,
    targetX: number,
    targetY: number,
    targetWidth: number,
    targetHeight: number,
    sourceWidth: number,
    sourceHeight: number,
) => {
    // CSSの object-fit: contain 相当（比率維持・余白あり）
    if (sourceWidth <= 0 || sourceHeight <= 0 || targetWidth <= 0 || targetHeight <= 0) return;

    const scale = Math.min(targetWidth / sourceWidth, targetHeight / sourceHeight);
    const drawWidth = sourceWidth * scale;
    const drawHeight = sourceHeight * scale;

    const dx = targetX + (targetWidth - drawWidth) / 2;
    const dy = targetY + (targetHeight - drawHeight) / 2;

    ctx.drawImage(image, dx, dy, drawWidth, drawHeight);
};

const loadImage = (src: string, crossOrigin: boolean): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const img = new Image();
        if (crossOrigin) img.crossOrigin = 'Anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Image failed to load'));
        img.src = src;
    });

const ImageDownloader = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    // デフォルトはオンチェーンでtokenURI/画像が取得できるNFT（Loot Bag #1）に設定
    const [url, setUrl] = useState('https://opensea.io/item/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/3258');
    const [nftData, setNftData] = useState<NftData | null>(null);
    const [loading, setLoading] = useState(false); // ローディング状態の追加

    // コンポーネントがマウントされたときにデフォルトのURLでデータを取得
    useEffect(() => {
        fetchNFTData(url);
    }, []);

    const fetchNFTData = async (url: string) => {
        setLoading(true); // ローディング開始
        try {
            const response = await fetch(`/api/opensea?url=${encodeURIComponent(url)}`);
            if (!response.ok) { // レスポンスが正常か確認
                // APIが返すエラーメッセージを優先表示
                try {
                    const errorBody = await response.json();
                    throw new Error(errorBody?.error ?? 'Failed to fetch NFT data');
                } catch {
                    throw new Error('Failed to fetch NFT data');
                }
            }
            const data: NftData = await response.json();
            setNftData(data);
            await drawCanvas(data); // データ取得後に描画
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            alert(message); // エラーメッセージを表示
        } finally {
            setLoading(false); // ローディング終了
        }
    };

    const downloadImage = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const link = document.createElement('a');
            link.download = 'download.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    };

    const drawCanvas = async (nftData: any) => { // 引数にデータを追加
        const canvas = canvasRef.current;
        if (canvas && nftData) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // QR生成と画像読み込みを並列化して、体感を短縮する
                try {
                    const [qrImg, nftImg] = await Promise.all([
                        QRCode.toDataURL(url).then((dataUrl) => loadImage(dataUrl, false)),
                        loadImage(nftData.imageUrl, true),
                    ]);

                    // 横長/縦長でも比率維持して収める（引き伸ばし防止）
                    drawImageContain(
                        ctx,
                        nftImg,
                        0,
                        0,
                        canvas.width,
                        canvas.height - 200,
                        nftImg.naturalWidth,
                        nftImg.naturalHeight,
                    );
                    drawText(ctx, nftData);
                    ctx.drawImage(qrImg, canvas.width - 175, canvas.height - 175, 150, 150);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };

    const drawText = (ctx: CanvasRenderingContext2D, nftData: any) => {
        ctx.fillStyle = 'white';
        const canvasHeight = canvasRef.current!.height;
        const leftPadding = 26;

        // 3行（タイトル / Created / Owned）の間隔を均等にする
        const bottomLineY = canvasHeight - 50;
        const lineGap = 40; // ベースライン間隔
        const createdLineY = bottomLineY - lineGap;
        const titleLineY = bottomLineY - lineGap * 2;

        // タイトル
        ctx.font = 'bold 24px Inter, Poppins, sans-serif';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText(nftData.title, 20, titleLineY);

        // キーバリュー（ラベルの開始位置を揃える）
        ctx.font = '20px Inter, Poppins, sans-serif';

        const createdLabel = 'Created by';
        const ownedLabel = 'Owned by';
        const labelWidth = Math.max(ctx.measureText(createdLabel).width, ctx.measureText(ownedLabel).width);
        const gap = 10;

        drawKeyValueLine(ctx, {
            label: createdLabel,
            value: formatAccountLabel(nftData.creator),
            x: leftPadding,
            y: createdLineY,
            labelWidth,
            gap,
        });
        drawKeyValueLine(ctx, {
            label: ownedLabel,
            value: formatAccountLabel(nftData.owner),
            x: leftPadding,
            y: bottomLineY,
            labelWidth,
            gap,
        });
    };

    return (
        <div className="max-w-2xl mx-auto pt-10 pb-20 px-5">
            <h2 className="text-2xl font-bold mb-4">Create your NFT showpiece</h2>
            <p className="text-gray-400 mb-4">Enter the OpenSea URL of the NFT you want to create.</p>
            <p className="text-xs text-gray-400 mb-6">
                対応チェーン（EVM）: Ethereum / Polygon / Base / Arbitrum / Optimism / ApeChain / Avalanche / BSC
            </p>
            <div className="flex items-center mb-4"> {/* 横並びにするためのdivを追加 */}
                <input 
                    type="text" 
                    placeholder="Enter OpenSea URL" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)}
                    className="p-3 border border-gray-600 rounded bg-gray-700 text-white w-full mr-2" // 右マージンを追加
                />
                <Button onClick={() => setUrl('')} className="bg-gray-600 hover:bg-gray-700">Clear URL</Button> {/* クリアボタンの追加 */}
            </div>
            <div className="flex space-x-4 mb-4 justify-center">
                <Button onClick={() => fetchNFTData(url)} disabled={!url || loading} className="bg-green-600 hover:bg-green-700 w-1/2">
                    {loading ? 'Loading...' : 'Create'} {/* ローディング中の表示 */}
                </Button>
                <Button onClick={downloadImage} disabled={loading} className="bg-red-600 hover:bg-red-700 w-1/2"> {/* ローディング中は無効化 */}
                    {loading ? 'Loading...' : 'Download Image'} {/* ローディング中の表示 */}
                </Button>
            </div>
            <Card className="p-6 bg-gray-800 text-white overflow-hidden relative">
                {loading && <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">Loading...</div>} {/* ローディング表示 */}
                <canvas ref={canvasRef} width={600} height={800} className="border border-gray-600 max-w-full" />
            </Card>
        </div>
    );
};

export default ImageDownloader;
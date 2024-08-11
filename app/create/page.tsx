'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card'; // Cardコンポーネントのインポート
import { Button } from '@/components/ui/button'; // Buttonコンポーネントのインポート
import QRCode from 'qrcode'; // QRコードライブラリのインポート

const ImageDownloader = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [url, setUrl] = useState('https://opensea.io/assets/ethereum/0x2eacf49b0c80d883cc699883e50a0ce10a453c7f/9'); // デフォルトのURLを設定
    const [nftData, setNftData] = useState<{ title: string; owner: string; creator: string; imageUrl: string } | null>(null);
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
                throw new Error('Invalid OpenSea URL'); // エラーメッセージを表示
            }
            const data = await response.json();
            setNftData(data);
            await drawCanvas(data); // データ取得後に描画
        } catch (error: any) {
            alert(error.message); // エラーメッセージを表示
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

                const qrCodeDataUrl = await QRCode.toDataURL(url);
                const qrCodeImg = new Image();
                qrCodeImg.src = qrCodeDataUrl;

                qrCodeImg.onload = () => {
                    const img = new Image();
                    img.crossOrigin = 'Anonymous'; // CORS対応を追加
                    img.src = nftData.imageUrl; // NFTの画像URLを使用
                    img.onload = () => {
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height - 200);
                        drawText(ctx, nftData); // テキスト描画を関数に分ける
                        ctx.drawImage(qrCodeImg, canvas.width - 175, canvas.height - 175, 150, 150);
                    };

                    img.onerror = () => {
                        console.error('Image failed to load');
                    };
                };

                qrCodeImg.onerror = () => {
                    console.error('QR Code failed to load');
                };
            }
        }
    };

    const drawText = (ctx: CanvasRenderingContext2D, nftData: any) => {
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Inter, Poppins, sans-serif';
        ctx.fillText(nftData.title, 20, canvasRef.current!.height - 130);
        ctx.font = '20px Inter, Poppins, sans-serif';
        ctx.fillText(`Created by ${nftData.creator}`, 26, canvasRef.current!.height - 95);
        ctx.fillText(`Owned by ${nftData.owner}`, 26, canvasRef.current!.height - 50);
    };

    return (
        <div className="max-w-2xl mx-auto pt-10 pb-20 px-5">
            <h2 className="text-2xl font-bold mb-4">Create your NFT showpiece</h2>
            <p className="text-gray-400 mb-4">Enter the OpenSea URL of the NFT you want to create.</p>
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
'use client';

import React, { useRef, useState } from 'react';
import { Card } from '@/components/ui/card'; // Cardコンポーネントのインポート
import { Button } from '@/components/ui/button'; // Buttonコンポーネントのインポート
import QRCode from 'qrcode'; // QRコードライブラリのインポート

const ImageDownloader = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [url, setUrl] = useState('https://opensea.io/assets/ethereum/0x2eacf49b0c80d883cc699883e50a0ce10a453c7f/4');
    const [nftData, setNftData] = useState<{ title: string; owner: string; creator: string; imageUrl: string } | null>(null);
    const [loading, setLoading] = useState(false); // ローディング状態の追加

    const fetchNFTData = async (url: string) => {
        setLoading(true); // ローディング開始
        const response = await fetch(`/api/opensea?url=${encodeURIComponent(url)}`);
        
        if (!response.ok) { // レスポンスが正常か確認
            alert('Please enter a valid link to an OpenSea NFT.'); // エラーメッセージを表示
            setLoading(false); // ローディング終了
            return; // 処理を終了
        }

        const data = await response.json();
        setNftData(data);
        setLoading(false); // ローディング終了
        await drawCanvas(data); // データ取得後に描画
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

    const drawCanvas = async (data: any) => { // 引数にデータを追加
        const canvas = canvasRef.current;
        if (canvas && data) {
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
                    img.src = data.imageUrl; // NFTの画像URLを使用
                    img.onload = () => {
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height - 200);

                        ctx.fillStyle = 'white';
                        ctx.font = '20px Poppins, sans-serif';

                        ctx.fillText(data.title, 20, canvas.height - 150);
                        ctx.fillText(`Created by ${data.creator}`, 20, canvas.height - 125);
                        ctx.fillText(`Owned by ${data.owner}`, 20, canvas.height - 75);

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
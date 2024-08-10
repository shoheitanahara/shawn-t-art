'use client';

import React, { useRef, useState } from 'react';
import { Card } from '@/components/ui/card'; // Cardコンポーネントのインポート
import { Button } from '@/components/ui/button'; // Buttonコンポーネントのインポート
import QRCode from 'qrcode'; // QRコードライブラリのインポート

const ImageDownloader = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [url, setUrl] = useState('https://opensea.io/assets/ethereum/0x2eacf49b0c80d883cc699883e50a0ce10a453c7f/4');

    const downloadImage = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const link = document.createElement('a');
            link.download = 'download.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    };

    const drawCanvas = async () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                const qrCodeDataUrl = await QRCode.toDataURL(url);
                const qrCodeImg = new Image();
                qrCodeImg.src = qrCodeDataUrl;

                qrCodeImg.onload = () => {
                    const img = new Image();
                    img.src = '/images/pfp/PFP-4.png';
                    img.onload = () => {
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height - 200);

                        ctx.fillStyle = 'white';
                        ctx.font = '20px Poppins, sans-serif';

                        ctx.fillText('Future Vintage PFP #4', 20, canvas.height - 150);
                        ctx.fillText('Created by test', 20, canvas.height - 125);
                        ctx.fillText('Owned by you', 20, canvas.height - 50);

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
            <input 
                type="text" 
                placeholder="Enter OpenSea URL" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)}
                className="mb-4 p-3 border border-gray-600 rounded bg-gray-700 text-white w-full"
            />
            <div className="flex space-x-4 mb-4 justify-center">
                <Button onClick={drawCanvas} disabled={!url} className="bg-blue-600 hover:bg-blue-700 w-1/2">Draw</Button>
                <Button onClick={downloadImage} className="bg-green-600 hover:bg-green-700 w-1/2">Download Image</Button>
            </div>
        <Card className="p-6 bg-gray-800 text-white overflow-hidden">
            <canvas ref={canvasRef} width={600} height={800} className="border border-gray-600 max-w-full" />
        </Card>
        </div>
    );
};

export default ImageDownloader;
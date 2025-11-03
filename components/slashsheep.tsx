import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"; // Cardコンポーネントをインポート
import { useEffect, useState } from "react";
import {  
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import SlashSheepModel from "@/components/slashsheep-model";

const SlashSheep: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // 追加: 現在のページを管理
  const [images, setImages] = useState<string[]>([]); // ここで初期値を空の配列に設定
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 追加: ローディング状態を管理
  const [totalPages, setTotalPages] = useState<number>(1); // 追加: 総ページ数を管理

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true); // 追加: ローディング開始
      const response = await fetch(`/api/images/slashsheep?page=${page}`); // 変更: ページ番号をクエリパラメータとして追加
      const data = await response.json(); // 変更: JSONを直接取得

      if (Array.isArray(data.images) && typeof data.totalPages === 'number') {
        setImages(data.images); // 変更: 画像データを設定
        setTotalPages(data.totalPages); // 追加: 総ページ数を設定
      } else {
        console.error('Error fetching images:', data.error);
      }
      setLoading(false); // 追加: ローディング終了
    };
    
    fetchImages(currentPage); // 変更: 現在のページを引数として渡す
  }, [currentPage]); // 変更: currentPageが変更されたときに再実行

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mx-auto flex justify-center items-center mt-6 mb-6">
        <h2 className="text-2xl font-bold">Slash Sheep</h2>
      </div>


      <div className="w-full lg:w-2/3 mx-auto mb-6 md:mb-12 mt-6">
        <SlashSheepModel />
      </div>

      <div className="w-full lg:w-2/3 mx-auto mb-6 md:mb-12 mt-6">
        <p>&quot;Slash Sheep&quot;</p>
        <p>Year: 2025</p>
        <p>Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a></p>

        <p className="text-lg mt-12 border-l-4 border-gray-500 pl-4 my-4">自由の傷を背負った、やさしい存在</p>

        <p className="mt-4">
          The Double Slash から生まれたこの羊は、自由と抑圧が静かに交わる場所に立っている。
        </p>
        <p className="mt-4">
          その身体に刻まれた線は、反逆ではなく、矛盾を受け入れるための印。やさしさと抵抗、静けさと力、そのすべてが共存している。
        </p>
        <p className="mt-4">
          それは、制約の中にも自由が息づいていることを思い出させる存在。
        </p>
        <p className="mt-4">
          自由は叫ばない。ときに、静けさの中に宿る。
        </p>

        <p className="text-lg italic mt-12 border-l-4 border-gray-500 pl-4 my-4">
          The gentle creature that carries the scars of freedom
        </p>

        <p className="mt-4">
          A pure being that bears marks of contradiction — traces of both gentleness and resistance.
        </p>

        <p className="mt-4">
          Each slash is not a rebellion, but a silent symbol of acceptance — a reminder that even within control, freedom breathes.
        </p>


        <p className="mt-4">
         Freedom does not roar. Sometimes, it rests in silence.
        </p>
      </div>

      {loading ? ( // 追加: ローディング中の表示
        <div className="text-lg h-[700px] md:h-[300px] flex items-center justify-center">Loading...</div>
      ) : (
        <>
          <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm grid grid-cols-1 flex md:grid-cols-2 lg:grid-cols-2">
            {images.map((image, index) => (
              <Card key={index} className="m-4 cursor-pointer h-80 md:h-64 lg:h-64 overflow-hidden" onClick={() => setSelectedImage(image)}>
                <CardContent className="grid gap-4">
                  <Image src={image} alt={`Image ${index}`} width={500} height={300} className="object-cover h-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
      <Pagination>
        <PaginationContent className="gap-5">
          <PaginationItem>
            <PaginationLink 
              onClick={currentPage > 1 ? () => setCurrentPage(1) : undefined} // Firstボタン
              className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} // 変更: スタイルを修正
            >
              First
            </PaginationLink> {/* 最初のページボタン */}
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious 
              onClick={currentPage > 1 ? () => setCurrentPage(currentPage - 1) : undefined}
              className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} // 変更: スタイルを修正
            /> {/* 前へボタン */}
          </PaginationItem>
          <PaginationItem>
            <span>{currentPage}</span> {/* 現在のページを表示 */}
          </PaginationItem>
          <PaginationItem>
            <PaginationNext 
              onClick={currentPage < totalPages ? () => setCurrentPage(currentPage + 1) : undefined} // 修正: 最後のページでのクリックを無効化
              className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`} // 変更: スタイルを修正
            /> {/* 次へボタン */}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              onClick={currentPage < totalPages ? () => setCurrentPage(totalPages) : undefined} // 修正: 最後のページでのクリックを無効化
              className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`} // 変更: スタイルを修正
            >
              Last
            </PaginationLink> {/* 最後のページボタン */}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Dialog open={!!selectedImage} onOpenChange={(open) => { 
        if (!open) setSelectedImage(null);
      }}>
        <DialogContent className="max-w-xl w-[90%] mx-auto">
          {selectedImage ? (
            <Image src={selectedImage} alt="Selected" width={800} height={600} className="max-w-full h-auto" />
          ) : (
            <div className="text-lg h-[400px] flex items-center justify-center">Loading...</div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SlashSheep;

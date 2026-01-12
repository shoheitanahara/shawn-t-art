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

const MarksOfFreedomTokyo2025: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // 追加: 現在のページを管理
  const [images, setImages] = useState<string[]>([]); // ここで初期値を空の配列に設定
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 追加: ローディング状態を管理
  const [totalPages, setTotalPages] = useState<number>(1); // 追加: 総ページ数を管理

  useEffect(() => {
    const controller = new AbortController();
  
    const fetchImages = async () => {
      setLoading(true);

      const response = await fetch(
        `/api/images/marksoffreedom-tokyo-2025?page=${currentPage}`,
        { signal: controller.signal },
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      if (Array.isArray(data.images) && typeof data.totalPages === "number") {
        setImages(data.images);
        setTotalPages(data.totalPages);
      } else {
        console.error("Invalid response:", data);
      }
      setLoading(false);
    };
  
    fetchImages();
    return () => controller.abort();
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center">

      {loading ? ( // 追加: ローディング中の表示
        <div className="text-lg h-[566px] md:h-[260px] lg:h-[250px] flex items-center justify-center">Loading...</div>
      ) : (
        <>
          <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm grid grid-cols-1 flex md:grid-cols-2 lg:grid-cols-2">
            {images.map((image, index) => (
              <Card key={image} className="m-4 cursor-pointer h-50 md:h-50 lg:h-50 object-contain" onClick={() => setSelectedImage(image)}>
                <CardContent className="grid gap-2 p-0">
                  <Image src={image} alt={`Image ${index}`} width={400} height={300} className="object-cover h-full" />
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
        <DialogContent className="max-w-2xl w-[90%] mx-auto">
          {selectedImage ? (
            <Image src={selectedImage} alt="Selected" width={800} height={600} className="max-w-full h-auto" />
          ) : (
            <div className="text-lg h-[400px] flex items-center justify-center">Loading...</div>
          )}
        </DialogContent>
      </Dialog>

      <div className="w-full lg:w-2/3 mb-6 md:mb-12 mt-6">
        <p>&quot;Marks of Freedom - Tokyo 2025&quot;</p>
        <p>Year: 2025</p>
        <p>Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a></p>
      </div>
    </div>
  );
};

export default MarksOfFreedomTokyo2025;

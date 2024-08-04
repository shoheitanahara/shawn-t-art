"use client"

import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
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

const ITEMS_PER_PAGE = 9; // 追加: 1ページあたりのアイテム数

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // 追加: 現在のページを管理
  const [images, setImages] = useState<string[]>([]); // ここで初期値を空の配列に設定
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 追加: ローディング状態を管理
  const [totalPages, setTotalPages] = useState<number>(1); // 追加: 総ページ数を管理

  const handlePageChange = (page: number) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); // 追加: ページを上部にスクロール
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true); // 追加: ローディング開始
      const response = await fetch(`/api/images/pfp?page=${page}`); // 変更: ページ番号をクエリパラメータとして追加
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
    <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-24 pt-10 pb-6 md:pb-24">
      <div className="container mx-auto flex justify-center items-center mb-6 md:mb-12">
        <h2 className="text-2xl font-bold">Future Vintage PFP</h2>
      </div>
      {loading ? ( // 追加: ローディング中の表示
        <div className="text-lg">Loading...</div>
      ) : (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:grid lg:grid-cols-3">
          {images.map((image, index) => (
            <Card key={index} className="m-4 cursor-pointer h-64 overflow-hidden" onClick={() => setSelectedImage(image)}>
              <CardContent className="grid gap-4">
                <Image src={image} alt={`Image ${index}`} width={500} height={300} className="object-cover h-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <Pagination>
        <PaginationContent className="gap-5">
          <PaginationItem>
            <PaginationLink 
              onClick={currentPage > 1 ? () => handlePageChange(1) : undefined} // Firstボタン
              className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} // 変更: スタイルを修正
            >
              First
            </PaginationLink> {/* 最初のページボタン */}
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious 
              onClick={currentPage > 1 ? () => handlePageChange(currentPage - 1) : undefined}
              className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} // 変更: スタイルを修正
            /> {/* 前へボタン */}
          </PaginationItem>
          <PaginationItem>
            <span>{currentPage}</span> {/* 現在のページを表示 */}
          </PaginationItem>
          <PaginationItem>
            <PaginationNext 
              onClick={() => handlePageChange(currentPage + 1)} // 次のページに移動
              className={`cursor-pointer ${images.length < ITEMS_PER_PAGE ? 'opacity-50 cursor-not-allowed' : ''}`} // 変更: スタイルを修正
            /> {/* 次へボタン */}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              onClick={currentPage < totalPages ? () => handlePageChange(totalPages) : undefined}
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
          {loading ? ( // 追加: ローディング中の表示
            <div className="text-lg">Loading...</div>
          ) : (
            <Image src={selectedImage || ''} alt="Selected" width={800} height={600} className="max-w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

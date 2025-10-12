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

const DoubleSlashLike: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // 追加: 現在のページを管理
  const [images, setImages] = useState<string[]>([]); // ここで初期値を空の配列に設定
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 追加: ローディング状態を管理
  const [totalPages, setTotalPages] = useState<number>(1); // 追加: 総ページ数を管理

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true); // 追加: ローディング開始
      const response = await fetch(`/api/images/doubleslash-like?page=${page}`); // 変更: ページ番号をクエリパラメータとして追加
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
      <div className="container mx-auto flex justify-center items-center mb-6">
        <h2 className="text-2xl font-bold">The Double Slash - LIKE</h2>
      </div>

      {loading ? ( // 追加: ローディング中の表示
        <div className="text-lg">Loading...</div>
      ) : (
        <>
          <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm grid grid-cols-1 flex lg:grid-cols-2">
            {images.map((image, index) => (
              <Card key={index} className="m-4 cursor-pointer h-64 overflow-hidden" onClick={() => setSelectedImage(image)}>
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
        <DialogContent className="max-w-2xl w-[90%] mx-auto">
          <Image src={selectedImage || ''} alt="Selected" width={800} height={600} className="max-w-full h-auto" />
        </DialogContent>
      </Dialog>

      <div className="container mx-auto w-auto lg:w-2/3 mb-6 md:mb-12 mt-6">
        <p>&quot;The Double Slash - LIKE&quot;</p>
        <p>Year: 2025</p>
        <p>Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a></p>

        <p className="mt-4">
          「いいね！」を集めるために投稿しているわけじゃない。
          数字に支配される生き方は、どこか違う気がする。
          それでも、いいね！をもらえるとやはり嬉しい。
        </p>
        <p className="mt-4">
          その素直な喜びと、胸の奥に残る違和感。
          そのふたつが、いつも心の中で同居している。
          この作品は、そんな揺れる感情をそのまま映し取ったものであり、
          同時に、現代を生きるすべての人が抱えるリアルでもあります。
        </p>
        <p className="mt-4">
          The Double Slash の二重線は、その葛藤を否定するためではなく、
          矛盾とともに生きることを肯定する線です。
          未完成であること、迷いを抱くこと。
          その不安定さこそが人間らしさなのだと、静かに語りかけます。
        </p>
        <p className="mt-4">
          LIKE と HEART の上を横切る赤い線は、
          承認欲求による抑圧と、自由への希求のあいだで揺れる“今”を描いています。
        </p>
        <p className="mt-4">
          I don’t post for likes.
          To live by numbers feels like losing something human.
          And yet, when a like appears — I still feel that quiet joy.
        </p>
        <p className="mt-4">
          That mixture of warmth and unease stays within me,
          and within all of us who live in this age of reflection and reaction.
          This work captures that shared tension —
          the tenderness and the discomfort of being seen.
        </p>
        <p className="mt-4">
          The two lines of The Double Slash do not deny the conflict;
          they affirm the beauty of living within it.
          To be unfinished, to be uncertain —
          that is what it means to be human.
        </p>
        <p className="mt-4">
          The red strokes across LIKE and HEART trace the fragile space
          between the pressure of wanting approval and the longing to remain free.
        </p>
      </div>
    </div>
  );
};

export default DoubleSlashLike;

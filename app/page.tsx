"use client"

import Image from "next/image";
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
import DoubleSlashSpam from "@/components/doubleslash-spam"; 
import DoubleSlashLike from "@/components/doubleslash-like";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // 追加: 現在のページを管理
  const [images, setImages] = useState<string[]>([]); // ここで初期値を空の配列に設定
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 追加: ローディング状態を管理
  const [totalPages, setTotalPages] = useState<number>(1); // 追加: 総ページ数を管理

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true); // 追加: ローディング開始
      const response = await fetch(`/api/images/doubleslash?page=${page}`); // 変更: ページ番号をクエリパラメータとして追加
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
    <main className="flex min-h-screen flex-col items-center justify-between pb-6">
      <div className="mb-6">
        <Image src="/images/firstview/firstview.png" alt="Shawn T. art" width={900} height={600} className="object-cover" />
      </div>

      <div className="container mx-auto mb-2 w-auto lg:w-2/3 text-center">
        <p>The Double Slash は、自由と抑圧のあいだにある現代人の葛藤を描いたシリーズです。</p>
        <p className="mt-6 lg:mt-2">The Double Slash explores the fragile balance between freedom and control in the modern age.</p>
      </div>

      <hr className="w-full mt-12 border-gray-300 mb-12" />

      <div className="container mx-auto flex justify-center items-center mb-6">
        <h2 className="text-2xl font-bold">The Double Slash</h2>
      </div>

      {loading ? ( // 追加: ローディング中の表示
        <div className="text-lg">Loading...</div>
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
          <Image src={selectedImage || ''} alt="Selected" width={800} height={600} className="max-w-full h-auto" />
        </DialogContent>
      </Dialog>


      <div className="container mx-auto mb-6 md:mb-12 mt-6 w-auto lg:w-2/3">
        <p>&quot;The Double Slash&quot;</p>
        <p>Year: 2025</p>
        <p>Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a></p>
        <p className="mt-4">
          The Double Slash は「自由」と「抑圧」のあいだにある緊張を探るシリーズです。
          壊れやすい美しさの上に引かれた二重の黒い線は、覆い隠すと同時に、その存在をより鮮烈に浮かび上がらせます。
          黒い線は検閲や制限を象徴しながらも、同時に消し去れない抵抗の痕跡です。美は覆われても透けて見え、抑圧されるほどに強く存在を主張します。
          この二重線は装飾ではなく、現代社会の矛盾を映すシンボルであり、作家自身のアイコンです。観る者はその線を通して「奪われる自由」と「消えない力」を読み取るでしょう。
        </p>
        <p className="mt-4">
        The Double Slash is a series about the tension between freedom and oppression.
        Two black lines are drawn over fragile beauty. They try to cover it, but at the same time make it stand out even more.
        These lines symbolize censorship and control, yet they also show the traces of resistance that cannot be erased. Beauty can still be seen through the cover, and the more it is oppressed, the stronger it insists on its presence.
        The double slash is not decoration. It is a symbol of the contradictions of today’s society and has become the artist’s own icon. Through these lines, viewers can feel both the freedom that is taken away and the power that refuses to disappear.
        </p>
      </div>

      <hr className="w-full mt-12 border-gray-300 mb-12" />

      <DoubleSlashSpam />

      <hr className="w-full mt-12 border-gray-300 mb-12" />

      <DoubleSlashLike />

    </main>
  );
}
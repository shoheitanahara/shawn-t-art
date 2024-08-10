import { NextResponse } from "next/server";
import { nftImageList } from "./data"; // 生成したデータをインポート

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10); // クエリパラメータからページ番号を取得
  const ITEMS_PER_PAGE = 9; // 1ページあたりのアイテム数

  try {
    const totalImages = nftImageList.length; // 画像の総数を取得
    const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE); // 総ページ数を計算
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalImages);
    
    const paginatedImageFiles = nftImageList.slice(startIndex, endIndex);
    
    // paginatedImageFilesをランダムにシャッフル
    const shuffledPaginatedImages = paginatedImageFiles.sort(() => Math.random() - 0.5);
    const paginatedImages = shuffledPaginatedImages.map((file) => `/images/nft/${file}`);

    return NextResponse.json({ images: paginatedImages, totalPages }); // ページネーションされた画像のURLと総ページ数を返す
  } catch (error) {
    console.error("Error reading images directory:", error);
    return NextResponse.json(
      { error: "Failed to read images" },
      { status: 500 },
    );
  }
}

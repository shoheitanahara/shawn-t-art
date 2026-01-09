import { NextResponse } from "next/server";
import { marksoffreedomTokyo2025ImageList } from "./data"; // 生成したデータをインポート

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10); // クエリパラメータからページ番号を取得
  const ITEMS_PER_PAGE = 2; // 1ページあたりのアイテム数

  try {
    const totalImages = marksoffreedomTokyo2025ImageList.length; // 画像の総数を取得
    const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE); // 総ページ数を計算
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalImages);
    
    const paginatedImageFiles = marksoffreedomTokyo2025ImageList.slice(startIndex, endIndex);
    
    const paginatedImages = paginatedImageFiles.map(
      (file) => `/images/marksoffreedom/tokyo-2025/${file}`,
    );

    return NextResponse.json({ images: paginatedImages, totalPages }); // ページネーションされた画像のURLと総ページ数を返す
  } catch (error) {
    console.error("Error reading images directory:", error);
    return NextResponse.json(
      { error: "Failed to read images" },
      { status: 500 },
    );
  }
}

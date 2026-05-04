import { NextResponse } from "next/server";
import { doubleslashDenimImageList } from "./data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const ITEMS_PER_PAGE = 2;

  try {
    const totalImages = doubleslashDenimImageList.length;
    const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalImages);

    const paginatedImageFiles = doubleslashDenimImageList.slice(startIndex, endIndex);
    const paginatedImages = paginatedImageFiles.map(
      (file) => `/images/doubleslash-denim/${file}`,
    );

    return NextResponse.json({ images: paginatedImages, totalPages });
  } catch (error) {
    console.error("Error reading images directory:", error);
    return NextResponse.json({ error: "Failed to read images" }, { status: 500 });
  }
}


import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Cardコンポーネントをインポート
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type ImagesApiResponse = {
  images?: string[];
  totalPages?: number;
  error?: string;
};

type AnimalGallerySectionProps = {
  title: string;
  apiPath: string; // 例: "/api/images/slashsheep"
  footer: React.ReactNode;
  /** アンカーリンク用（例: slashcow） */
  sectionId?: string;
};

async function fetchImagesPage(
  apiPath: string,
  page: number,
  signal: AbortSignal,
): Promise<{ images: string[]; totalPages: number }> {
  const response = await fetch(`${apiPath}?page=${page}`, { signal });
  const data = (await response.json()) as ImagesApiResponse;

  if (!response.ok) {
    throw new Error(data.error || `Failed to fetch images: ${response.status}`);
  }

  if (!Array.isArray(data.images) || typeof data.totalPages !== "number") {
    throw new Error("Invalid API response shape.");
  }

  return { images: data.images, totalPages: data.totalPages };
}

const AnimalGallerySection: React.FC<AnimalGallerySectionProps> = ({
  title,
  apiPath,
  footer,
  sectionId,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setErrorMessage(null);

    fetchImagesPage(apiPath, currentPage, controller.signal)
      .then(({ images, totalPages }) => {
        setImages(images);
        setTotalPages(totalPages);
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        const message =
          error instanceof Error ? error.message : "Failed to load images.";
        console.error("Error fetching images:", error);
        setErrorMessage(message);
        setImages([]);
        setTotalPages(1);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setLoading(false);
      });

    return () => controller.abort();
  }, [apiPath, currentPage]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const paginationLabel = useMemo(
    () => `${currentPage} / ${totalPages}`,
    [currentPage, totalPages],
  );

  return (
    <section
      id={sectionId}
      className={`w-full flex flex-col items-center justify-center${sectionId ? " scroll-mt-24" : ""}`}
    >
      <div className="container mx-auto flex justify-center items-center mt-6 mb-2">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {loading ? (
        <div className="text-lg h-[700px] md:h-[300px] flex items-center justify-center">Loading...</div>
      ) : errorMessage ? (
        <div className="text-lg h-[200px] flex items-center justify-center text-red-600">
          {errorMessage}
        </div>
      ) : (
        <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm grid grid-cols-1 md:grid-cols-2">
          {images.map((imageUrl, index) => (
            <Card
              key={`${imageUrl}-${index}`}
              className="m-4 cursor-pointer h-64 overflow-hidden"
              onClick={() => setSelectedImage(imageUrl)}
            >
              <CardContent className="grid gap-4">
                <Image
                  src={imageUrl}
                  alt={`${title} Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <Pagination>
        <PaginationContent className="gap-5">
          <PaginationItem>
            <PaginationLink 
              onClick={!isFirstPage ? () => setCurrentPage(1) : undefined} // Firstボタン
              className={`cursor-pointer ${isFirstPage ? "opacity-50 cursor-not-allowed" : ""}`} // 変更: スタイルを修正
              aria-disabled={isFirstPage}
            >
              First
            </PaginationLink> {/* 最初のページボタン */}
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious 
              onClick={
                !isFirstPage
                  ? () => setCurrentPage((p) => Math.max(1, p - 1))
                  : undefined
              }
              className={`cursor-pointer ${isFirstPage ? "opacity-50 cursor-not-allowed" : ""}`} // 変更: スタイルを修正
              aria-disabled={isFirstPage}
            /> {/* 前へボタン */}
          </PaginationItem>
          <PaginationItem>
            <span>{paginationLabel}</span> {/* 現在のページを表示 */}
          </PaginationItem>
          <PaginationItem>
            <PaginationNext 
              onClick={
                !isLastPage
                  ? () => setCurrentPage((p) => Math.min(totalPages, p + 1))
                  : undefined
              } // 修正: 最後のページでのクリックを無効化
              className={`cursor-pointer ${isLastPage ? "opacity-50 cursor-not-allowed" : ""}`} // 変更: スタイルを修正
              aria-disabled={isLastPage}
            /> {/* 次へボタン */}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              onClick={!isLastPage ? () => setCurrentPage(totalPages) : undefined} // 修正: 最後のページでのクリックを無効化
              className={`cursor-pointer ${isLastPage ? "opacity-50 cursor-not-allowed" : ""}`} // 変更: スタイルを修正
              aria-disabled={isLastPage}
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
            <Image
              src={selectedImage}
              alt={`${title} Selected`}
              width={800}
              height={600}
              className="max-w-full h-auto"
            />
          ) : (
            <div className="text-lg h-[400px] flex items-center justify-center">Loading...</div>
          )}
        </DialogContent>
      </Dialog>

      {footer}
    </section>
  );
};

const SlashAnimal: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <AnimalGallerySection
        title="Slash Sheep"
        apiPath="/api/images/slashsheep"
        sectionId="slashsheep"
        footer={
          <div className="w-full lg:w-2/3 mx-auto mb-6 md:mb-12 mt-6">
        <p>&quot;Slash Sheep&quot;</p>
        <p>Year: 2026</p>
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
        }
      />

      <div className="w-full max-w-5xl my-10 border-t border-gray-200" />

      <AnimalGallerySection
        title="Slash Cow"
        apiPath="/api/images/slashcow"
        sectionId="slashcow"
        footer={
          <div className="w-full lg:w-2/3 mx-auto mb-6 md:mb-12 mt-6">
            <p>&quot;Slash Cow&quot;</p>
            <p>Year: 2026</p>
            <p>
              Creator:{" "}
              <a
                href="https://x.com/shawn_t_art"
                target="_blank"
                rel="noopener noreferrer"
              >
                @shawn_t_art
              </a>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default SlashAnimal;

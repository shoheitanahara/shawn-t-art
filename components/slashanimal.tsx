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
import SlashSheepModel from "@/components/slashsheep-model";

type ImagesApiResponse = {
  images?: string[];
  totalPages?: number;
  error?: string;
};

type AnimalGallerySectionProps = {
  title: string;
  /** 表示順の画像 API（例: 3D レンダー → 既存スタディ） */
  apiPaths: string[];
  footer: React.ReactNode;
  /** タイトル直下・ギャラリー前（例: 3D モデル） */
  beforeGallery?: React.ReactNode;
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

type PaginatedImageGalleryProps = {
  apiPath: string;
  altPrefix: string;
};

/** 1 API 分のページネーション付き画像グリッド */
const PaginatedImageGallery: React.FC<PaginatedImageGalleryProps> = ({
  apiPath,
  altPrefix,
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
    <div className="mb-8 flex w-full flex-col items-center justify-center">
      {loading ? (
        <div className="flex h-[700px] items-center justify-center text-lg md:h-[300px]">
          Loading...
        </div>
      ) : errorMessage ? (
        <div className="flex h-[200px] items-center justify-center text-lg text-red-600">
          {errorMessage}
        </div>
      ) : (
        <div className="z-10 grid w-full max-w-2xl grid-cols-1 items-center justify-between font-mono text-sm md:grid-cols-2">
          {images.map((imageUrl, index) => (
            <Card
              key={`${imageUrl}-${index}`}
              className="m-4 h-64 cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(imageUrl)}
            >
              <CardContent className="grid gap-4">
                <Image
                  src={imageUrl}
                  alt={`${altPrefix} Image ${index + 1}`}
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
              onClick={!isFirstPage ? () => setCurrentPage(1) : undefined}
              className={`cursor-pointer ${isFirstPage ? "cursor-not-allowed opacity-50" : ""}`}
              aria-disabled={isFirstPage}
            >
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              onClick={
                !isFirstPage
                  ? () => setCurrentPage((p) => Math.max(1, p - 1))
                  : undefined
              }
              className={`cursor-pointer ${isFirstPage ? "cursor-not-allowed opacity-50" : ""}`}
              aria-disabled={isFirstPage}
            />
          </PaginationItem>
          <PaginationItem>
            <span>{paginationLabel}</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={
                !isLastPage
                  ? () => setCurrentPage((p) => Math.min(totalPages, p + 1))
                  : undefined
              }
              className={`cursor-pointer ${isLastPage ? "cursor-not-allowed opacity-50" : ""}`}
              aria-disabled={isLastPage}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={!isLastPage ? () => setCurrentPage(totalPages) : undefined}
              className={`cursor-pointer ${isLastPage ? "cursor-not-allowed opacity-50" : ""}`}
              aria-disabled={isLastPage}
            >
              Last
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent className="mx-auto w-[90%] max-w-xl">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt={`${altPrefix} Selected`}
              width={800}
              height={600}
              className="h-auto max-w-full"
            />
          ) : (
            <div className="flex h-[400px] items-center justify-center text-lg">
              Loading...
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AnimalGallerySection: React.FC<AnimalGallerySectionProps> = ({
  title,
  apiPaths,
  footer,
  beforeGallery,
  sectionId,
}) => {
  return (
    <section
      id={sectionId}
      className={`flex w-full flex-col items-center justify-center${sectionId ? " scroll-mt-24" : ""}`}
    >
      <div className="container mx-auto mb-2 mt-6 flex items-center justify-center">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {beforeGallery}

      {apiPaths.map((apiPath) => (
        <PaginatedImageGallery
          key={apiPath}
          apiPath={apiPath}
          altPrefix={title}
        />
      ))}

      {footer}
    </section>
  );
};

const SlashAnimal: React.FC = () => {
  return (
    <div className="mb-6 flex flex-col items-center justify-center">
      <div className="container mx-auto mb-8 mt-6 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Slash Animal</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.18em]">
          Sculpture Studies / 2026–Ongoing
        </p>
        <div className="mx-auto mt-4 w-full lg:w-2/3">
          <p>将来の彫刻作品に向けた視覚スタディ。</p>
          <p className="mt-2">
            AI-assisted visual studies for a future series of physical
            sculptures.
          </p>
        </div>
      </div>

      <AnimalGallerySection
        title="Slash Sheep"
        apiPaths={["/api/images/slashsheep-3d"]}
        sectionId="slashsheep"
        beforeGallery={
          <div className="mx-auto mb-6 mt-6 w-full lg:w-2/3 md:mb-12">
            <SlashSheepModel />
          </div>
        }
        footer={
          <div className="mx-auto mb-6 mt-6 w-full lg:w-2/3 md:mb-12">
            <p>&quot;Slash Sheep&quot;</p>
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

            <p className="my-4 mt-12 border-l-4 border-gray-500 pl-4 text-lg">
              自由の傷を背負った、やさしい存在
            </p>

            <p className="mt-4">
              The Double Slash
              から生まれたこの羊は、自由と抑圧が静かに交わる場所に立っている。
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

            <p className="my-4 mt-12 border-l-4 border-gray-500 pl-4 text-lg italic">
              The gentle creature that carries the scars of freedom
            </p>

            <p className="mt-4">
              A pure being that bears marks of contradiction — traces of both
              gentleness and resistance.
            </p>

            <p className="mt-4">
              Each slash is not a rebellion, but a silent symbol of acceptance —
              a reminder that even within control, freedom breathes.
            </p>

            <p className="mt-4">
              Freedom does not roar. Sometimes, it rests in silence.
            </p>
          </div>
        }
      />

      <div className="my-10 w-full max-w-5xl border-t border-gray-200" />

      <AnimalGallerySection
        title="Slash Sheep - Drawing"
        apiPaths={["/api/images/slashsheep"]}
        sectionId="slashsheep-drawing"
        footer={
          <div className="mx-auto mb-6 mt-6 w-full lg:w-2/3 md:mb-12">
            <p>&quot;Slash Sheep&quot;</p>
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

      <div className="my-10 w-full max-w-5xl border-t border-gray-200" />

      <AnimalGallerySection
        title="Slash Cow"
        apiPaths={["/api/images/slashcow"]}
        sectionId="slashcow"
        footer={
          <div className="mx-auto mb-6 mt-6 w-full lg:w-2/3 md:mb-12">
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

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ImageWithLoading } from "@/components/marksoffreedom/image-with-loading";

type Props = {
  apiPath: string;
  title: string;
  year: string;
};

export function MarksOfFreedomArchiveGallery({ apiPath, title, year }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiPath}?page=${currentPage}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        if (controller.signal.aborted) return;

        if (Array.isArray(data.images) && typeof data.totalPages === "number") {
          setImages(data.images);
          setTotalPages(data.totalPages);
        } else {
          console.error("Invalid response:", data);
        }
      } catch (err) {
        const aborted =
          (err instanceof DOMException && err.name === "AbortError") ||
          (err instanceof Error && err.name === "AbortError");
        if (aborted) return;
        console.error(err);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void fetchImages();
    return () => controller.abort("useEffect cleanup");
  }, [apiPath, currentPage]);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <div className="flex h-[566px] items-center justify-center text-lg text-neutral-400 md:h-[260px] lg:h-[250px]">
          Loading...
        </div>
      ) : (
        <div className="z-10 grid w-full max-w-2xl grid-cols-1 font-mono text-sm md:grid-cols-2">
          {images.map((image, index) => (
            <Card
              key={image}
              className="m-4 h-50 cursor-pointer object-contain md:h-50 lg:h-50"
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="grid gap-2 p-0">
                <ImageWithLoading
                  src={image}
                  alt={`${title} ${index + 1}`}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  wrapperClassName="relative min-h-[180px] w-full bg-neutral-950"
                  className="h-full w-full object-cover"
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
              onClick={currentPage > 1 ? () => setCurrentPage(1) : undefined}
              className={`cursor-pointer ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
            >
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              onClick={
                currentPage > 1
                  ? () => setCurrentPage(currentPage - 1)
                  : undefined
              }
              className={`cursor-pointer ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
            />
          </PaginationItem>
          <PaginationItem>
            <span>{currentPage}</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={
                currentPage < totalPages
                  ? () => setCurrentPage(currentPage + 1)
                  : undefined
              }
              className={`cursor-pointer ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={
                currentPage < totalPages
                  ? () => setCurrentPage(totalPages)
                  : undefined
              }
              className={`cursor-pointer ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
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
        <DialogContent className="mx-auto w-[90%] max-w-5xl">
          {selectedImage ? (
            <ImageWithLoading
              key={selectedImage}
              src={selectedImage}
              alt="Selected"
              width={2000}
              height={1500}
              wrapperClassName="relative min-h-[240px] w-full bg-neutral-950"
              className="h-auto max-w-full"
            />
          ) : null}
        </DialogContent>
      </Dialog>

      <div className="mb-6 mt-6 w-full lg:w-2/3 md:mb-12">
        <p>&quot;{title}&quot;</p>
        <p className="mt-2">Year: {year}</p>
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
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MarksOfFreedomGunma2026: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const controller = new AbortController();

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/images/marksoffreedom-gunma-2026?page=${currentPage}`,
          { signal: controller.signal },
        );
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
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <div className="text-lg h-[566px] md:h-[260px] lg:h-[250px] flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <>
          <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm grid grid-cols-1 flex md:grid-cols-2 lg:grid-cols-2">
            {images.map((image, index) => (
              <Card
                key={image}
                className="m-4 cursor-pointer h-50 md:h-50 lg:h-50 object-contain"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="grid gap-2 p-0">
                  <Image
                    src={image}
                    alt={`Image ${index}`}
                    width={800}
                    height={600}
                    className="object-cover h-full"
                  />
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
              onClick={currentPage > 1 ? () => setCurrentPage(1) : undefined}
              className={`cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              onClick={
                currentPage > 1 ? () => setCurrentPage(currentPage - 1) : undefined
              }
              className={`cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
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
              className={`cursor-pointer ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={
                currentPage < totalPages
                  ? () => setCurrentPage(totalPages)
                  : undefined
              }
              className={`cursor-pointer ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
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
        <DialogContent className="max-w-5xl w-[90%] mx-auto">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Selected"
              width={2000}
              height={1500}
              className="max-w-full h-auto"
            />
          ) : (
            <div className="text-lg h-[400px] flex items-center justify-center">
              Loading...
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="w-full lg:w-2/3 mb-6 md:mb-12 mt-6">
        <p>&quot;Marks of Freedom - Gunma 2026&quot;</p>
        <p className="mt-2">Year: 2026</p>
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
};

export default MarksOfFreedomGunma2026;

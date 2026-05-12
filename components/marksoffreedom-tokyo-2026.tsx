import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { marksoffreedomTokyo2026ImageList } from "@/app/api/images/marksoffreedom-tokyo-2026/data";
import { Card, CardContent } from "@/components/ui/card";
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

const TOKYO_2026_BASE = "/images/marksoffreedom/tokyo-2026";

const MarksOfFreedomTokyo2026: React.FC = () => {
  const imageUrls = useMemo(
    () =>
      marksoffreedomTokyo2026ImageList.map(
        (file) => `${TOKYO_2026_BASE}/${file}`,
      ),
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const total = imageUrls.length;
  const activeSrc = imageUrls[activeIndex] ?? "";
  const currentPage = activeIndex + 1;
  const totalPages = total;

  const goFirst = useCallback(() => setActiveIndex(0), []);
  const goPrev = useCallback(
    () => setActiveIndex((i) => Math.max(0, i - 1)),
    [],
  );
  const goNext = useCallback(
    () => setActiveIndex((i) => Math.min(total - 1, i + 1)),
    [total],
  );
  const goLast = useCallback(
    () => setActiveIndex(Math.max(0, total - 1)),
    [total],
  );

  if (total === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 text-center text-muted-foreground">
        No images yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <section
        className="w-full max-w-5xl flex flex-col items-stretch"
        aria-labelledby="mof-featured-heading"
      >
        <header className="mb-6 w-full text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
            Featured Series
          </p>
          <h3
            id="mof-featured-heading"
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Marks of Freedom — Tokyo 2026
          </h3>
        </header>

        <Card
          className="m-4 cursor-pointer object-contain"
          onClick={() => setSelectedImage(activeSrc)}
        >
          <CardContent className="grid gap-2 p-0">
            <Image
              src={activeSrc}
              alt={`Tokyo 2026 — ${currentPage} of ${totalPages}`}
              width={800}
              height={600}
              priority
              decoding="async"
              className="object-cover h-full w-full max-h-[min(70vh,720px)]"
            />
          </CardContent>
        </Card>

        <Pagination>
          <PaginationContent className="gap-5">
            <PaginationItem>
              <PaginationLink
                onClick={currentPage > 1 ? goFirst : undefined}
                className={`cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                First
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                onClick={currentPage > 1 ? goPrev : undefined}
                className={`cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              />
            </PaginationItem>
            <PaginationItem>
              <span>{currentPage}</span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={currentPage < totalPages ? goNext : undefined}
                className={`cursor-pointer ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={currentPage < totalPages ? goLast : undefined}
                className={`cursor-pointer ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Last
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="mt-6 w-full max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3 text-center md:text-left">
            Series
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
            {imageUrls.map((src, i) => (
              <li key={src}>
                <Card
                  className={`shrink-0 cursor-pointer overflow-hidden border p-0 shadow-none h-16 w-24 md:h-20 md:w-32 transition-opacity ${
                    i === activeIndex
                      ? "border-neutral-100 opacity-100 ring-1 ring-neutral-400"
                      : "border-neutral-800 opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <CardContent className="relative h-full w-full p-0">
                    <Image
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      sizes="128px"
                      loading={i === activeIndex ? "eager" : "lazy"}
                      decoding="async"
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

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

      <div className="w-full mt-8 pt-6 border-t border-neutral-800 text-sm text-neutral-400">
        <p>Year: 2026</p>
        <p className="mt-1">
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

export default MarksOfFreedomTokyo2026;

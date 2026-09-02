"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { MofPhoto, MofSeries } from "@/app/marksoffreedom/data";
import { getPhotoSrc, getPhotoThumbSrc, getVisiblePhotos } from "@/app/marksoffreedom/data";
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
  series: MofSeries;
  /** e.g. "Featured Series" — omit for archive entries */
  sectionLabel?: string;
};

export function MofSeriesGallery({ series, sectionLabel }: Props) {
  const photos = useMemo(() => getVisiblePhotos(series), [series]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  const total = photos.length;
  const activePhoto: MofPhoto | undefined = photos[activeIndex];
  const activeSrc = activePhoto ? getPhotoSrc(series, activePhoto) : "";
  const currentPage = activeIndex + 1;
  const totalPages = total;

  useEffect(() => {
    setActiveIndex(0);
  }, [series.id]);

  useEffect(() => {
    if (activeIndex >= total && total > 0) {
      setActiveIndex(total - 1);
    }
  }, [activeIndex, total]);

  useEffect(() => {
    if (typeof window === "undefined" || total === 0) return;
    const neighbors = [
      photos[activeIndex - 1],
      photos[activeIndex + 1],
    ]
      .filter(Boolean)
      .map((photo) => getPhotoSrc(series, photo));

    neighbors.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [activeIndex, photos, series, total]);

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

  if (total === 0) return null;

  const hasCaption =
    !!activePhoto?.caption?.ja || !!activePhoto?.caption?.en;

  return (
    <div className="flex flex-col items-center justify-center">
      <section
        className="flex w-full max-w-5xl flex-col items-stretch"
        aria-labelledby={`mof-series-${series.id}`}
      >
        <header className="mb-6 w-full text-center md:text-left">
          {sectionLabel ? (
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              {sectionLabel}
            </p>
          ) : null}
          <h3
            id={`mof-series-${series.id}`}
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            {series.title}
          </h3>
        </header>

        <Card
          className="m-4 cursor-pointer object-contain"
          onClick={() => setSelectedSrc(activeSrc)}
        >
          <CardContent className="grid gap-2 p-0">
            <ImageWithLoading
              key={activeSrc}
              src={activeSrc}
              alt={`${series.title} — ${currentPage} of ${totalPages}`}
              width={800}
              height={600}
              priority={activeIndex === 0}
              decoding="async"
              wrapperClassName="relative min-h-[220px] w-full bg-neutral-950"
              className="h-full max-h-[min(70vh,720px)] w-full object-cover"
            />
          </CardContent>
        </Card>

        {hasCaption ? (
          <div className="mx-4 mb-2 w-full max-w-5xl space-y-2 text-sm leading-relaxed text-neutral-300 md:text-base">
            {activePhoto?.caption?.ja ? (
              <p>{activePhoto.caption.ja}</p>
            ) : null}
            {activePhoto?.caption?.en ? (
              <p className="text-neutral-400">{activePhoto.caption.en}</p>
            ) : null}
          </div>
        ) : null}

        <Pagination>
          <PaginationContent className="gap-2 sm:gap-5">
            <PaginationItem className="shrink-0">
              <PaginationLink
                onClick={currentPage > 1 ? goFirst : undefined}
                className={`cursor-pointer ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
              >
                First
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="shrink-0">
              <PaginationPrevious
                onClick={currentPage > 1 ? goPrev : undefined}
                className={`cursor-pointer ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
              />
            </PaginationItem>
            <PaginationItem className="shrink-0">
              <span className="inline-flex min-w-[3.5rem] items-center justify-center whitespace-nowrap px-1 tabular-nums text-sm leading-none">
                {currentPage} / {totalPages}
              </span>
            </PaginationItem>
            <PaginationItem className="shrink-0">
              <PaginationNext
                onClick={currentPage < totalPages ? goNext : undefined}
                className={`cursor-pointer ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
              />
            </PaginationItem>
            <PaginationItem className="shrink-0">
              <PaginationLink
                onClick={currentPage < totalPages ? goLast : undefined}
                className={`cursor-pointer ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
              >
                Last
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="mx-auto mt-6 w-full max-w-5xl">
          <p className="mb-3 text-center text-xs uppercase tracking-widest text-neutral-500 md:text-left">
            Series
          </p>
          <ul className="flex flex-wrap justify-center gap-2 md:justify-start md:gap-3">
            {photos.map((photo, i) => {
              const src = getPhotoThumbSrc(series, photo);
              return (
                <li key={photo.file}>
                  <Card
                    className={`h-16 w-24 shrink-0 cursor-pointer overflow-hidden border p-0 shadow-none transition-opacity md:h-20 md:w-32 ${
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
                        loading={
                          Math.abs(i - activeIndex) <= 2 ? "eager" : "lazy"
                        }
                        decoding="async"
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Dialog
        open={!!selectedSrc}
        onOpenChange={(open) => {
          if (!open) setSelectedSrc(null);
        }}
      >
        <DialogContent className="mx-auto w-[90%] max-w-5xl">
          {selectedSrc ? (
            <ImageWithLoading
              key={selectedSrc}
              src={selectedSrc}
              alt="Selected"
              width={2000}
              height={1500}
              wrapperClassName="relative min-h-[240px] w-full bg-neutral-950"
              className="h-auto max-w-full"
            />
          ) : null}
        </DialogContent>
      </Dialog>

      <div className="mt-8 w-full border-t border-neutral-800 pt-6 text-sm text-neutral-400">
        <p>&quot;{series.title}&quot;</p>
        <p className="mt-1">Year: {series.year}</p>
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
}

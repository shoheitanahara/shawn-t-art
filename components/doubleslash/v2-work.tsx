"use client";

import Image from "next/image";
import { useState } from "react";
import type { DoubleSlashV2Work } from "@/app/thedoubleslash/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Props = {
  work: DoubleSlashV2Work;
};

export function DoubleSlashV2WorkBlock({ work }: Props) {
  const [activeImage, setActiveImage] = useState(work.mainImage);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div
      id={`v2-${work.id}`}
      className="flex w-full scroll-mt-24 flex-col items-center justify-center"
    >
      <div className="mb-6 flex w-full items-center justify-center px-1">
        <h2 className="text-center text-xl font-bold sm:text-2xl">
          {work.title}
        </h2>
      </div>

      <div className="mx-auto w-full max-w-2xl">
        <button
          type="button"
          className="block w-full"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={activeImage}
            alt={work.title}
            width={900}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 672px"
            priority={work.id === "rose"}
          />
        </button>

        {work.variations.length > 1 ? (
          <div className="mt-3 grid grid-cols-6 gap-1.5 sm:mt-4 sm:gap-2">
            {work.variations.map((src) => {
              const isActive = src === activeImage;
              return (
                <button
                  key={src}
                  type="button"
                  aria-label="Select color variation"
                  aria-pressed={isActive}
                  className={`relative aspect-square w-full overflow-hidden ${
                    isActive
                      ? "opacity-100 ring-1 ring-white"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setActiveImage(src)}
                >
                  <Image
                    src={src}
                    alt=""
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="mx-auto w-[90%] max-w-xl">
          <Image
            src={activeImage}
            alt={work.title}
            width={900}
            height={900}
            className="h-auto max-w-full"
          />
        </DialogContent>
      </Dialog>

      <div className="mt-6 w-full lg:w-2/3 md:mb-12">
        <p>&quot;{work.title}&quot;</p>
        <p>Year: {work.year}</p>
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
        {work.statement.ja.map((text) => (
          <p key={text} className="mt-4 leading-relaxed">
            {text}
          </p>
        ))}
        {work.statement.en.map((text) => (
          <p key={text} className="mt-4 leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

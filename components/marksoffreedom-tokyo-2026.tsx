import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { marksoffreedomTokyo2026ImageList } from "@/app/api/images/marksoffreedom-tokyo-2026/data";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

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
  const [lightbox, setLightbox] = useState<string | null>(null);

  const total = imageUrls.length;
  const activeSrc = imageUrls[activeIndex] ?? "";

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  if (total === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto py-12 text-center text-muted-foreground">
        No images yet.
      </div>
    );
  }

  return (
    <section
      className="w-full max-w-5xl mx-auto flex flex-col items-stretch"
      aria-labelledby="mof-featured-heading"
    >
      <header className="mb-6 text-center md:text-left">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Featured Series
        </p>
        <h3
          id="mof-featured-heading"
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Marks of Freedom — Tokyo 2026
        </h3>
        <p className="mt-2 text-sm md:text-base italic text-neutral-400">
          The city breathes between control and accident.
        </p>
      </header>

      <button
        type="button"
        className="relative w-full overflow-hidden rounded-sm border border-neutral-800 bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
        onClick={() => setLightbox(activeSrc)}
        aria-label="Open featured image larger"
      >
        <Image
          src={activeSrc}
          alt={`Tokyo 2026 — ${activeIndex + 1} of ${total}`}
          width={1600}
          height={1067}
          priority
          className="w-full h-auto object-contain max-h-[min(78vh,920px)]"
          sizes="(max-width: 768px) 100vw, min(1120px, 90vw)"
        />
      </button>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="rounded border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900 transition-colors"
          >
            Prev
          </button>
          <span className="text-sm text-neutral-500 tabular-nums px-2">
            {activeIndex + 1} / {total}
          </span>
          <button
            type="button"
            onClick={goNext}
            className="rounded border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900 transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3 text-center md:text-left">
          Series
        </p>
        <ul className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
          {imageUrls.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative h-16 w-24 overflow-hidden rounded border transition-opacity md:h-20 md:w-32 ${
                  i === activeIndex
                    ? "border-neutral-100 opacity-100 ring-1 ring-neutral-400"
                    : "border-neutral-800 opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${i + 1}`}
                aria-current={i === activeIndex ? "true" : undefined}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full mt-8 pt-6 border-t border-neutral-800 text-sm text-neutral-400">
        <p>Year: 2026</p>
        <p className="mt-1">
          Creator:{" "}
          <a
            href="https://x.com/shawn_t_art"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-neutral-200"
          >
            @shawn_t_art
          </a>
        </p>
      </div>

      <Dialog
        open={!!lightbox}
        onOpenChange={(open) => {
          if (!open) setLightbox(null);
        }}
      >
        <DialogContent className="max-w-5xl w-[95vw] mx-auto border-neutral-800 bg-black p-2">
          {lightbox ? (
            <Image
              src={lightbox}
              alt="Expanded"
              width={1600}
              height={1067}
              className="max-h-[85vh] w-auto max-w-full mx-auto object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MarksOfFreedomTokyo2026;

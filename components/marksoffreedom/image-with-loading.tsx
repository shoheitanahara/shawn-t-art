"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type Props = Omit<ImageProps, "onLoad" | "onLoadingComplete"> & {
  wrapperClassName?: string;
  loadingLabel?: string;
};

/** Shows a Loading state until the image finishes decoding. */
export function ImageWithLoading({
  wrapperClassName = "relative",
  loadingLabel = "Loading...",
  className,
  src,
  alt,
  ...props
}: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className={wrapperClassName}>
      {!loaded ? (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 text-sm text-neutral-300"
          aria-live="polite"
        >
          {loadingLabel}
        </div>
      ) : null}
      <Image
        {...props}
        src={src}
        alt={alt}
        className={`${className ?? ""} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

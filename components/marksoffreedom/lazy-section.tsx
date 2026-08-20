"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Extra space before the section enters the viewport. */
  rootMargin?: string;
  minHeightClassName?: string;
};

/** Mounts children only when scrolled near the viewport — reduces initial image load. */
export function LazySection({
  children,
  rootMargin = "200px 0px",
  minHeightClassName = "min-h-[280px]",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={visible ? undefined : minHeightClassName}>
      {visible ? (
        children
      ) : (
        <div className="flex h-[280px] items-center justify-center text-sm text-neutral-400">
          Loading...
        </div>
      )}
    </div>
  );
}

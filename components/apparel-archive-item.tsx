import Image from "next/image";
import type { ApparelArchiveItem } from "@/app/apparel/data";

type ApparelArchiveItemProps = {
  item: ApparelArchiveItem;
};

export function ApparelArchiveItemCard({ item }: ApparelArchiveItemProps) {
  const twoColumn = item.twoColumn ?? item.images.length > 1;

  return (
    <article className="w-full max-w-4xl">
      <div
        className={
          twoColumn
            ? "grid grid-cols-1 gap-4 bg-white p-4 sm:grid-cols-2 sm:p-6"
            : "bg-white p-4 sm:p-6"
        }
      >
        {item.images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={item.title}
            width={img.width}
            height={img.height}
            className="mx-auto h-auto w-full max-w-md object-contain"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ))}
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm text-foreground/70">price: NOT FOR SALE</p>
    </article>
  );
}

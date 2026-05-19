import type { Metadata } from "next";
import { ApparelArchiveItemCard } from "@/components/apparel-archive-item";
import { ApparelProductSet } from "@/components/apparel-product-set";
import {
  apparel2025aw,
  apparel2025ss,
  apparel2026ss,
} from "@/app/apparel/data";

export const metadata: Metadata = {
  title: "Apparel / Prints",
};

function ApparelSeasonSection({
  id,
  heading,
  children,
  className,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={className}
      aria-labelledby={id}
    >
      <h2
        id={id}
        className="border-b border-border pb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
      >
        {heading}
      </h2>
      <div className="mt-12 flex flex-col items-center gap-16 md:items-start md:gap-20">
        {children}
      </div>
    </section>
  );
}

export default function ApparelPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-16 md:px-12 md:pb-24">
      <header className="mb-12 text-center md:mb-16 md:text-left">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Apparel / Prints
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">
          Marks of Freedom、The Double Slash、Slash Animal
          など、各シリーズから生まれるプリントとアパレルのエディションです。展示や個展のために制作しています。
        </p>
        <p className="mt-2 text-sm font-light italic text-foreground/70">
          Printed editions from Marks of Freedom, The Double Slash, and Slash
          Animal. Made for exhibitions and solo shows—not for general sale.
        </p>
      </header>

      <ApparelSeasonSection
        id="apparel-2026ss-heading"
        heading="2026SS"
        className="mb-20 md:mb-28"
      >
        {apparel2026ss.map((product) => (
          <ApparelProductSet key={product.id} product={product} />
        ))}
      </ApparelSeasonSection>

      <ApparelSeasonSection
        id="apparel-2025ss-heading"
        heading="2025SS"
        className="mb-20 md:mb-28"
      >
        {apparel2025ss.map((item) => (
          <ApparelArchiveItemCard key={item.id} item={item} />
        ))}
      </ApparelSeasonSection>

      <ApparelSeasonSection id="apparel-2025aw-heading" heading="2025AW">
        {apparel2025aw.map((item) => (
          <ApparelArchiveItemCard key={item.id} item={item} />
        ))}
      </ApparelSeasonSection>
    </main>
  );
}

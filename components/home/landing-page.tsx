import Image from "next/image";
import Link from "next/link";

type SectionVariant = "dark" | "light";

function SectionShell({
  number,
  titleEn,
  variant,
  children,
  id,
  bodyJa,
  bodyEn,
  leftLink,
}: {
  number: string;
  titleEn: string;
  variant: SectionVariant;
  children: React.ReactNode;
  id?: string;
  bodyJa?: string;
  bodyEn?: string;
  leftLink?: { href: string; label: string };
}) {
  const surface =
    variant === "dark"
      ? "bg-background text-foreground border-gray-800"
      : "bg-white text-neutral-900 border-neutral-200";

  const muted =
    variant === "dark" ? "text-neutral-300" : "text-neutral-600";
  const mutedSoft =
    variant === "dark" ? "text-neutral-400" : "text-neutral-500";

  const numTone =
    variant === "dark" ? "text-neutral-100" : "text-neutral-900";
  const titleTone =
    variant === "dark" ? "text-neutral-100" : "text-neutral-900";

  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      className={`border-b ${surface}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <header className="md:col-span-3 lg:col-span-3 flex flex-col gap-5 md:pt-1">
            <span
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tabular-nums leading-none ${numTone}`}
            >
              {number}
            </span>

            <div>
              <h2
                id={headingId}
                className={`text-sm md:text-base lg:text-base font-semibold uppercase tracking-[0.2em] ${titleTone}`}
              >
                {titleEn}
              </h2>
              {bodyJa ? (
                <p
                  className={`mt-3 text-sm md:text-base leading-relaxed max-w-xs sm:max-w-sm ${muted}`}
                >
                  {bodyJa}
                </p>
              ) : null}
              {bodyEn ? (
                <p
                  className={`mt-2 text-sm md:text-base leading-relaxed max-w-xs sm:max-w-sm ${mutedSoft}`}
                >
                  {bodyEn}
                </p>
              ) : null}
              {leftLink ? (
                <Link
                  href={leftLink.href}
                  className={`inline-block mt-5 text-sm lg:text-base font-semibold uppercase tracking-[0.22em] border-b pb-0.5 transition-opacity hover:opacity-70 ${
                    variant === "dark"
                      ? "border-white/50 text-neutral-100"
                      : "border-neutral-900 text-neutral-900"
                  }`}
                >
                  {leftLink.label}
                </Link>
              ) : null}
            </div>
          </header>
          <div className="md:col-span-9 lg:col-span-9 min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <main className="antialiased">
      {/* Hello — 横いっぱい 1 枚 + 下に短文（番号なし） */}
      <section
        id="hello"
        className="max-w-5xl mx-auto border-b border-gray-800 bg-background scroll-mt-24"
        aria-label="Hello"
      >
        <div className="w-full">
          <Image
            src="/images/firstview/firstview.png"
            alt="Shawn T. Art — Art between freedom and oppression"
            width={1200}
            height={800}
            className="block h-auto w-full max-w-none object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-8 md:py-10 text-center text-sm md:text-base text-foreground leading-relaxed space-y-4">
          <p>
            The Double Slash は、自由と抑圧のあいだにある現代人の葛藤を描いたシリーズです。
          </p>
          <p className="font-light tracking-wide">
            The Double Slash explores the fragile balance between freedom and
            control in the modern age.
          </p>
        </div>
      </section>

      {/* 01 SELECTED WORKS — 白地 */}
      <SectionShell
        id="selected"
        number="01"
        titleEn="Selected works"
        variant="light"
        bodyJa="いくつかの作品から、世界の断片を。"
        bodyEn="Fragments from the world."
        leftLink={{ href: "/thedoubleslash", label: "VIEW ALL WORKS" }}
      >
        <div className="space-y-10">
          <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(140px,auto)]">
            <Tile
              href="/marksoffreedom"
              label="Marks of Freedom"
              src="/images/marksoffreedom/tokyo-2025/marksoffreedom_tokyo00017.jpg"
              className="col-span-12 md:col-span-7 md:row-span-2 min-h-[240px] md:min-h-[400px]"
              sizes="(max-width: 768px) 100vw, 58vw"
              variant="light"
            />
            <Tile
              href="/thedoubleslash#doubleslash-spam"
              label="The Double Slash"
              src="/images/doubleslash-spam/spam1.png"
              className="col-span-6 md:col-span-5 md:col-start-8 md:row-start-1 min-h-[160px] md:min-h-[190px]"
              sizes="42vw"
              variant="light"
            />
            <Tile
              href="/thedoubleslash#doubleslash-denim"
              label="The Double Slash"
              src="/images/doubleslash-denim/Denim1.png"
              className="col-span-6 md:col-span-5 md:col-start-8 md:row-start-2 min-h-[160px] md:min-h-[190px]"
              sizes="42vw"
              variant="light"
            />
            <Tile
              href="/marksoffreedom"
              label="Marks of Freedom"
              src="/images/marksoffreedom/sapporo-2025/marksoffreedom08.jpg"
              className="col-span-12 md:col-span-4 md:row-start-3 min-h-[170px] md:min-h-[200px]"
              sizes="33vw"
              variant="light"
            />
            <Tile
              href="/slashanimal#slashcow"
              label="Slash Animal"
              src="/images/slashanimal/slashcow/slashcow04.png"
              className="col-span-6 md:col-span-4 md:row-start-3 min-h-[170px] md:min-h-[200px]"
              sizes="33vw"
              variant="light"
            />
            <Tile
              href="/slashanimal#slashsheep"
              label="Slash Animal"
              src="/images/slashanimal/slashsheep/slashsheep01.png"
              className="col-span-6 md:col-span-4 md:row-start-3 min-h-[170px] md:min-h-[200px]"
              sizes="33vw"
              variant="light"
            />
          </div>
        </div>
      </SectionShell>

      {/* 02 WORLDS */}
      <SectionShell
        id="worlds"
        number="02"
        titleEn="Worlds / Series"
        variant="dark"
        bodyJa="3つの世界が、ひとつの呼吸でつながっている。"
        bodyEn="Three worlds, connected by the same breath."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
          <WorldCard
            href="/marksoffreedom"
            title="Marks of Freedom"
            subtitleEn="Traces of freedom found in everyday life."
            subtitleJa="日常のなかに見つける、自由のあと。"
            imageSrc="/images/marksoffreedom/tokyo-2026/tokyo01.png"
          />
          <WorldCard
            href="/thedoubleslash"
            title="The Double Slash"
            subtitleEn="A mark between freedom and oppression — not denial."
            subtitleJa="自由と抑圧のあいだの記号。「否定」ではない。"
            imageSrc="/images/doubleslash/flower01.png"
          />
          <WorldCard
            href="/slashanimal"
            title="Slash Animal"
            subtitleEn="Quiet emotions living inside modern noise."
            subtitleJa="現代のノイズの中にいる、静かな感情を持った存在。"
            imageSrc="/images/slashanimal/slashsheep/slashsheep01.png"
          />
        </div>
      </SectionShell>

      {/* 03 STATEMENT */}
      <SectionShell
        id="statement"
        number="03"
        titleEn="Statement"
        variant="light"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-start">
          <div className="space-y-8">
            <blockquote className="space-y-6 text-xl md:text-2xl lg:text-3xl font-light text-neutral-800 leading-relaxed">
              <p>
                Technology is my brush.
                <br />
                Emotion is my ink.
              </p>
              <p>
                Freedom is not escape from rules.
                <br />
                It is dancing within them.
              </p>
            </blockquote>
            <p className="text-sm md:text-base lg:text-base text-neutral-600 leading-relaxed max-w-md">
              テクノロジーは筆。感情はインク。
              <br />
              自由は、ルールからの逃亡ではなく、その枠のなかで踊ること。
            </p>
            <Link
              href="/philosophy"
              className="inline-flex w-fit items-center rounded-md border border-neutral-900 bg-white px-5 py-3 text-sm md:text-base font-medium text-neutral-900 shadow-sm transition-colors hover:bg-neutral-100"
            >
              Read full philosophy →
            </Link>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none lg:mx-0 border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/marksoffreedom/tokyo-2025/marksoffreedom_tokyo00007.jpg"
              alt=""
              fill
              className="object-cover grayscale contrast-125"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </div>
      </SectionShell>

      {/* 04 ZINES */}
      <SectionShell
        id="zines"
        number="04"
        titleEn="Zines / Exhibitions"
        variant="dark"
        bodyJa="記録し、残し、共有するために。"
        bodyEn="To record, to leave, to share."
        leftLink={{ href: "/collaborations", label: "Explore →" }}
      >
        <div className="space-y-10">
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            <ZineCard
              href="/collaborations"
              title="Zines / Editions"
              subtitle="ジン・エディション"
            />
            <ZineCard href="/event" title="Exhibitions" subtitle="展示" />
            <ZineCard
              href="/apparel"
              title="Posters / Prints"
              subtitle="アパレル・プリント"
            />
          </div>
        </div>
      </SectionShell>

      {/* 05 ABOUT */}
      <SectionShell
        id="about-teaser"
        number="05"
        titleEn="About"
        variant="light"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          <div className="space-y-6">
            <p className="text-base md:text-lg lg:text-lg text-neutral-800 leading-relaxed">
              ストリートカルチャーの熱とデジタル表現の精度を交差させながら、自由と抑圧、抵抗と順応の狭間にある「人間らしさ」を探っています。
            </p>
            <p className="text-sm md:text-base lg:text-base text-neutral-600 leading-relaxed">
              Crossing street culture's heat with the precision of digital
              expression, I look for what feels human — in the narrow space
              between freedom and oppression, resistance and adaptation.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm md:text-base font-semibold uppercase tracking-[0.2em] border-b border-neutral-900 pb-1 text-neutral-900 hover:opacity-70 transition-opacity"
            >
              Read more →
            </Link>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/about/icon.jpg"
              alt=""
              fill
              className="object-cover object-top grayscale contrast-125"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </div>
      </SectionShell>
    </main>
  );
}

function Tile({
  href,
  label,
  src,
  className,
  sizes,
  variant,
}: {
  href: string;
  label: string;
  src: string;
  className: string;
  sizes: string;
  variant: "light" | "dark";
}) {
  const labelTone =
    variant === "light"
      ? "bg-white/90 text-neutral-900"
      : "bg-background/80 text-foreground";
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden border border-neutral-300 ${className}`}
    >
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes={sizes}
      />
      <span
        className={`absolute left-3 bottom-3 px-2 py-1 text-xs uppercase tracking-widest ${labelTone}`}
      >
        {label}
      </span>
    </Link>
  );
}

function WorldCard({
  href,
  title,
  subtitleEn,
  subtitleJa,
  imageSrc,
}: {
  href: string;
  title: string;
  subtitleEn: string;
  subtitleJa: string;
  imageSrc: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`${title} — Explore`}
      className="group relative isolate block aspect-[3/5] w-full overflow-hidden border border-white/[0.12] bg-neutral-950 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-[border-color,box-shadow] duration-500 ease-out hover:border-white/22 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_24px_48px_-24px_rgba(0,0,0,0.6)]"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover grayscale contrast-[1.03] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:contrast-[1.08]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black from-0% via-black/80 via-35% to-transparent to-58%"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 to-transparent to-45%"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end px-6 pb-7 pt-20 md:px-8 md:pb-9 md:pt-24 lg:px-9 lg:pb-10">
        <h3 className="mb-3 text-sm md:text-sm lg:text-base font-bold uppercase leading-tight tracking-[0.2em] text-white md:tracking-[0.22em]">
          {title}
        </h3>
        <p className="mb-2 text-sm md:text-base lg:text-base font-light leading-snug tracking-wide text-white/92">
          {subtitleJa}
        </p>
        <p className="mb-8 max-w-full text-sm md:text-sm lg:text-base font-light leading-relaxed text-white/60 md:leading-relaxed">
          {subtitleEn}
        </p>
        <span className="inline-flex w-fit items-center gap-1.5 border-b border-white/35 pb-0.5 text-sm md:text-sm lg:text-base font-semibold uppercase tracking-[0.28em] text-white transition-[gap,border-color,color] duration-300 ease-out group-hover:gap-2.5 group-hover:border-white/70 group-hover:text-white">
          Explore
          <span aria-hidden className="translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function ZineCard({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      href={href}
      className="group block border border-white/10 px-5 py-8 md:py-10 hover:border-white/25 transition-colors"
    >
      <h3 className="text-sm md:text-base lg:text-base font-semibold uppercase tracking-[0.18em] text-neutral-100 mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-neutral-300 mb-6">{subtitle}</p>
      <span className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-neutral-200">
        Explore →
      </span>
    </Link>
  );
}

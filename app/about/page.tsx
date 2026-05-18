import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const proseBlock = "space-y-4 text-sm leading-relaxed md:text-base md:leading-relaxed";
const sectionTitle =
  "text-lg font-bold tracking-tight md:text-xl";
const listClass =
  "list-none space-y-1 border-l border-border pl-4 text-foreground/90";

function TensionList({ items }: { items: string[] }) {
  return (
    <ul className={listClass}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-10 md:px-8 md:py-14">
      <article>
        <header className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="relative aspect-[4/5] w-36 shrink-0 overflow-hidden sm:w-40 lg:w-44">
            <Image
              src="/images/about/portrait.png"
              alt="Shawn T. Art"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 144px, 176px"
              priority
            />
          </div>
          <div className="min-w-0 space-y-3 pt-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Shawn T. Art
            </p>
            <h1 className="text-2xl font-bold leading-tight md:text-3xl">
              Art Between Freedom and Control
            </h1>
            <p className="text-base italic text-foreground/90 md:text-lg">
              「Every Star Starts as a Nobody」
            </p>
          </div>
        </header>

        <section
          lang="ja"
          aria-labelledby="about-ja-heading"
          className="space-y-8 border-t border-border pt-10"
        >
          <h2 id="about-ja-heading" className={sectionTitle}>
            自由と抑圧のあいだにあるアート
          </h2>

          <div className={proseBlock}>
            <p>
              Shawn T. Art は、日本出身のアーティスト／ミュージシャン。
            </p>
            <p>
              ストリートカルチャーの熱、
              <br />
              都市に残るノイズ、
              <br />
              そしてデジタル表現の精度を交差させながら、
              <br />
              自由と抑圧、抵抗と順応、その狭間に残る“人間らしさ”を探っています。
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              代表作 「The Double Slash」 シリーズでは、
              <br />
              二本の線 “//” をモチーフとして使用。
            </p>
            <p>それは単なる記号ではなく、</p>
            <TensionList
              items={[
                "検閲と抵抗",
                "自由と制御",
                "ノイズと沈黙",
                "美しさと違和感",
              ]}
            />
            <p>
              といった、矛盾した感情をそのまま受け入れるためのサインとして存在しています。
            </p>
            <p>
              線で覆うことは、
              <br />
              消すことではありません。
            </p>
            <p>
              むしろ、
              <br />
              隠されたものの存在を逆説的に浮かび上がらせる行為です。
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              写真作品 「Marks of Freedom」 では、
              <br />
              都市、壁、道路、傷跡、光、影、
              <br />
              偶然現れる線や痕跡の中に、
              <br />
              現代社会に埋もれた“自由の痕跡”を記録しています。
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              Shawn T. Art は、
              <br />
              AIやデジタル技術を単なる効率化の道具としてではなく、
              <br />
              人間性を再発見するための創作パートナーとして活用しています。
            </p>
            <p>
              テクノロジーが加速し続ける時代の中で、
              <br />
              感情、矛盾、温度、未完成さを失わないために、
              <br />
              デジタルと人間性が共存できる表現を模索しています。
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              また 「Mutant HipHop」 では、
              <br />
              音楽、アイデンティティ、Web3カルチャーを融合し、
              <br />
              視覚だけでなく聴覚を通しても
              <br />
              “Freedom and Control” のテーマを表現。
            </p>
            <p>
              初期Web3シーンにも深く関わりながら、
              <br />
              NFT、コミュニティ、デジタル所有の変化を、
              <br />
              現代における新しい表現文化として記録しています。
            </p>
          </div>

          <blockquote className="border-l-2 border-foreground/30 pl-5 space-y-3 not-italic">
            <p className="text-sm text-muted-foreground">モットーは、</p>
            <p className="text-base font-medium italic md:text-lg">
              「Every Star Starts as a Nobody」
            </p>
            <p className={proseBlock}>
              名声を目的にするのではなく、
              <br />
              現代の矛盾や感情、希望を“記録”として残すこと。
            </p>
          </blockquote>

          <p className="text-base leading-relaxed md:text-lg">
            Shawn T. Art は、
            <br />
            テクノロジーと人間性のあいだに残る、
            <br />
            静かな感情を記録し続けています。
          </p>
        </section>

        <section
          lang="en"
          aria-labelledby="about-en-heading"
          className="mt-14 space-y-8 border-t border-border pt-10"
        >
          <p
            id="about-en-heading"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"
          >
            English Version
          </p>
          <h2 className={sectionTitle}>Art Between Freedom and Control</h2>

          <div className={proseBlock}>
            <p>
              Shawn T. Art is a Japanese artist and musician exploring the
              relationship between freedom, control, technology, and human
              emotion in contemporary society.
            </p>
            <p>
              Blending the raw energy of street culture, the silence hidden
              inside urban environments, and the precision of digital
              expression, his work searches for traces of humanity that remain
              between resistance and conformity.
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              His signature project, The Double Slash, uses two lines “//” as a
              recurring symbol.
            </p>
            <p>More than a graphic motif, it represents contradiction itself:</p>
            <TensionList
              items={[
                "freedom and control",
                "noise and silence",
                "beauty and discomfort",
                "censorship and persistence",
              ]}
            />
            <p>The Double Slash does not deny what lies beneath it.</p>
            <p>
              Instead, covering becomes a way to reveal presence — a paradoxical
              act that emphasizes what cannot completely disappear.
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              Through the photography series Marks of Freedom, Shawn documents
              accidental lines, scars, shadows, walls, streets, and traces hidden
              inside everyday urban landscapes.
            </p>
            <p>
              These works are not intended to explain the world, but to discover
              quiet signs of freedom already existing within it.
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              Shawn actively incorporates AI and digital technology into his
              creative process — not simply as tools for efficiency, but as
              creative partners for rediscovering humanity itself.
            </p>
            <p>
              As technology continues to reshape society, his practice explores
              how emotion, imperfection, warmth, and contradiction can still
              survive inside digital culture.
            </p>
          </div>

          <div className={proseBlock}>
            <p>
              Beyond visual art, Shawn expands this philosophy through Mutant
              HipHop, a project merging music, identity, and Web3 culture to
              express themes of freedom and control through sound as well as
              visuals.
            </p>
            <p>
              As an early participant in Web3 culture, he also documents the
              evolving relationship between NFTs, digital ownership, community,
              and contemporary artistic expression.
            </p>
          </div>

          <blockquote className="border-l-2 border-foreground/30 pl-5 space-y-3 not-italic">
            <p className="text-sm text-muted-foreground">
              Anchored by the motto,
            </p>
            <p className="text-base font-medium italic md:text-lg">
              “Every Star Starts as a Nobody,”
            </p>
            <p>
              his work seeks not fame, but the preservation of emotion,
              contradiction, silence, and hope as a living archive of our time.
            </p>
          </blockquote>

          <p className="text-base leading-relaxed md:text-lg">
            Shawn T. Art continues to explore the fragile space between technology
            and humanity.
          </p>
        </section>

        <footer className="mt-14 space-y-4 border-t border-border pt-10 text-sm leading-relaxed text-muted-foreground">
          <p className="italic">
            すべての画像や音楽は私たちのオリジナルであり、無断使用や権利侵害は厳禁です。これに違反した場合、法的措置を講じることがありますので、ご了承ください。
          </p>
          <p className="italic" lang="en">
            All images and music are our original works, and unauthorized use or
            infringement of rights is strictly prohibited. Legal action may be
            taken in case of violation, so please be aware.
          </p>
          <p className="text-foreground/80">
            © {new Date().getUTCFullYear()} Shawn T. Art All rights reserved.
          </p>
        </footer>
      </article>
    </main>
  );
}

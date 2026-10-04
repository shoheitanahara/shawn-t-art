"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type CodePiece = {
  number: string;
  title: string;
  slug: string;
  code: string;
  bodyJa: string[];
  bodyEn: string[];
};

const pieces: CodePiece[] = [
  {
    number: "01",
    title: "Life",
    slug: "life",
    code: `let life = 0;

function day() {
  life += 1;
  life -= 1;
}

setInterval(day, 24 * 60 * 60 * 1000);

// Shawn T. Art - 2026`,
    bodyJa: [
      "何も変わらなかったように見える一日にも、小さな喜びがあり、小さな悲しみがある。最後にはまた同じ場所に戻ったように見えても、その一日には確かに変化が存在していた。日々の些細な変化を、もう少し楽しんでみよう。",
    ],
    bodyEn: [
      "Even on a day when nothing seems to have changed, there are small joys and small sorrows. You may end up in the same place where you started, but small changes still happened during the day. Maybe we can enjoy these small changes in everyday life a little more.",
    ],
  },
  {
    number: "02",
    title: "Human",
    slug: "human",
    code: `let human = 100;
let power = 0;
let desire = 1;

while (human) {
  // TODO: decide when to stop.
  power += desire;
  human -= desire;
}

// Shawn T. Art - 2026`,
    bodyJa: [
      "欲望は、生きるために必要なものだ。もっと欲しい。もっと良くなりたい。その気持ちが、人を前へ進ませる。でも、自分の欲望を満たすために、誰かを傷つけてはいないだろうか。欲望の暴走をどこで止めるべきか。それを決めるのも、人間である。",
    ],
    bodyEn: [
      "Desire is necessary for us to live. We want more. We want something better. These feelings can help us move forward. But while trying to satisfy our own desires, are we hurting someone around us? When should we stop before our desire goes too far? That is something we have to decide as humans.",
    ],
  },
  {
    number: "03",
    title: "Relationship",
    slug: "relationship",
    code: `const trueFriend = 100;
let relationship = 0;

function chance() {
  return [-1, 1][Math.floor(Math.random() * 2)];
}

while (relationship < trueFriend) {
  // You can change chance() to choose().
  relationship += chance();

  if (relationship === -trueFriend) break;
}
  
// Shawn T. Art - 2026`,
    bodyJa: [
      "人間関係は、とても繊細だ。何気ないひと言で少し近づき、何気ないひと言で少し離れる。あなたの言葉に救われる人もいれば、深く傷つく人もいる。関係は偶然に揺らいでいるように見える。それでもあなたは、自分の行動を自分で選ぶことができる。",
    ],
    bodyEn: [
      "Human relationships are very fragile. A simple word can bring someone closer, and another word can push someone away. Your words may help someone, or hurt someone deeply. Relationships may seem to change by chance. Even so, you can still choose how you act.",
    ],
  },
];

function imageSrc(slug: string) {
  return `/images/unusefulcodes/${slug}.png`;
}

/** 一覧のコード余白（インライン表示用） */
const codePadClass = "px-5 py-8 md:px-8 md:py-10";
const codeTextClass =
  "font-mono text-[12px] leading-relaxed text-white/90 md:text-sm";

function CodeBlock({
  code,
  title,
  onOpen,
}: {
  code: string;
  title: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${title} image`}
      className={`block w-full cursor-zoom-in overflow-x-auto border border-white/15 bg-black text-left transition-opacity hover:opacity-90 ${codePadClass}`}
    >
      <pre>
        <code className={`whitespace-pre ${codeTextClass}`}>{code}</code>
      </pre>
    </button>
  );
}

export default function UnusefulCodes() {
  const [selected, setSelected] = useState<CodePiece | null>(null);

  return (
    <div className="w-full lg:w-3/4 px-6 md:px-12 lg:mx-auto pb-16">
      <header className="mx-auto mt-6 mb-14 max-w-3xl text-center md:mb-20">
        <h1 className="text-2xl font-bold tracking-wide md:text-3xl">
          Unuseful Codes
        </h1>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-foreground/70">
          Code as Expression / 2026
        </p>
      </header>

      <section className="mx-auto mb-16 max-w-3xl space-y-5 md:mb-24">
        <div className="space-y-4 text-sm leading-relaxed md:text-base">
          <p>コードは通常、何かを解決するために書かれる。</p>
          <p>
            私はこれまで The Double Slash や Marks of Freedom
            を通して、ルールや構造の中に生まれる自由や、人間の葛藤・選択について考えてきた。
          </p>
          <p>コードもまた、ルールによって世界を動かすものだ。</p>
          <p>
            AIの急速な発展により、AIが高度なコードを書くことが当たり前になった。WEBエンジニアである私にとって、それはとても強い衝撃であった。
          </p>
          <p>その時代に、あえて何の役にも立たないコードを書く。</p>
          <p>
            機械にとって意味のないコードによって、人間にしか感じ取れない表現を試みる。
          </p>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-foreground/85 md:text-base">
          <p>Code is usually written to solve something.</p>
          <p>
            In my previous works, The Double Slash and Marks of Freedom, I
            explored freedom within rules and structures, and the choices we
            make as humans, and the struggles we face.
          </p>
          <p>Code is also a system of rules.</p>
          <p>
            As AI has developed very quickly, it has become common for AI to
            write advanced code. As a web engineer, this change had a strong
            impact on me.
          </p>
          <p>In this age, I choose to write code with no practical use.</p>
          <p>
            Through code that has no meaning to a machine, I try to create
            something that only humans can feel.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-20 md:space-y-28">
        {pieces.map((piece) => (
          <article key={piece.number} id={piece.title.toLowerCase()}>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] md:mb-8 md:text-base">
              <span className="text-foreground/55">{piece.number}</span>
              <span className="mx-3 text-foreground/30" aria-hidden>
                —
              </span>
              {piece.title}
            </h2>

            <CodeBlock
              code={piece.code}
              title={piece.title}
              onOpen={() => setSelected(piece)}
            />

            <div className="mt-8 border-t border-neutral-800 pt-6 text-sm text-neutral-400">
              <p>&quot;Unuseful Codes — {piece.title}&quot;</p>
              <p className="mt-1">Year: 2026</p>
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

            <div className="mt-8 space-y-4 text-sm leading-relaxed md:mt-10 md:text-base">
              {piece.bodyJa.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/80 md:text-base">
              {piece.bodyEn.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="mx-auto w-[min(90vw,36rem)] max-w-xl border-0 bg-transparent p-0 shadow-none [&>button]:right-2 [&>button]:top-2 [&>button]:z-10 [&>button]:text-white">
          {selected ? (
            <>
              <DialogTitle className="sr-only">
                Unuseful Codes — {selected.title}
              </DialogTitle>
              <div className="overflow-hidden border border-white/15 bg-black">
                <Image
                  src={imageSrc(selected.slug)}
                  alt={`Unuseful Codes — ${selected.title}`}
                  width={1200}
                  height={1200}
                  className="h-auto w-full"
                  unoptimized
                  priority
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

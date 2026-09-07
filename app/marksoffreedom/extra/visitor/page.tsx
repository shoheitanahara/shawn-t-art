"use client";

import Link from "next/link";
import { getSeriesById } from "@/app/marksoffreedom/data";
import { MofSeriesGallery } from "@/components/marksoffreedom/series-gallery";

const MarksOfFreedomExtraVisitorPage = () => {
  const series = getSeriesById("extra-visitor");

  if (!series || series.visible === false) {
    return (
      <main className="w-full px-6 pb-6 lg:mx-auto lg:w-3/4 md:px-12">
        <p className="py-16 text-center text-neutral-400">Coming soon.</p>
      </main>
    );
  }

  return (
    <main className="w-full px-6 pb-6 lg:mx-auto lg:w-3/4 md:px-12">
      <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
        Marks of Freedom — Extra
      </p>
      <h2 className="mb-4 text-center text-3xl font-bold">VISITOR</h2>

      <div className="mx-auto mb-6 mt-6 w-auto text-center lg:w-2/3 md:mb-12">
        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-500">
          Extra series
        </p>
      </div>

      <MofSeriesGallery series={series} sectionLabel="Extra Series" />

      <div className="mx-auto mb-6 mt-12 w-auto text-left lg:w-2/3 md:mb-12">
        <p className="mt-4">
          先日、杉本博司の展示で《Dioramas》を見て、強く感銘を受けた。
          <br />
          博物館のジオラマを撮影したその写真群には、まるで本物の風景や生命を撮影したかのようなリアリティがあった。
        </p>
        <p className="mt-4">
          その翌日、たまたま立ち寄った場所で、その感覚を自分でも確かめてみたくなった。
          <br />
          まるで自分が本当に魔法界を訪れた人であるかのように、その世界を撮ってみる。
        </p>
        <p className="mt-4">
          精密に作られた世界が、写真を通すことで、まるで実在する場所のような臨場感を持ちはじめる。
        </p>
        <p className="mt-4">
          そんな感覚を自分でも追体験してみた、小さな実験である。
        </p>

        <p className="mt-12">
          Recently, I saw Hiroshi Sugimoto&apos;s{" "}
          <strong>
            <em>Dioramas</em>
          </strong>{" "}
          at an exhibition and was deeply impressed.
          <br />
          His photographs of museum dioramas had a realism that made them feel
          as if they were photographs of real landscapes and living creatures.
        </p>
        <p className="mt-4">
          The next day, I happened to visit a place where I wanted to test that
          feeling for myself.
          <br />
          I tried photographing the world as if I were someone who had truly
          visited the wizarding world.
        </p>
        <p className="mt-4">
          Through photography, a carefully constructed world begins to take on
          the presence of a place that really exists.
        </p>
        <p className="mt-4">
          This is a small experiment in trying to experience that feeling for
          myself.
        </p>
      </div>

      <hr className="mb-12 mt-12 w-full border-neutral-700" />

      <p className="mb-6 text-center text-sm text-neutral-500">
        <Link
          href="/marksoffreedom"
          className="underline underline-offset-4 hover:text-neutral-300"
        >
          ← Marks of Freedom
        </Link>
      </p>
    </main>
  );
};

export default MarksOfFreedomExtraVisitorPage;

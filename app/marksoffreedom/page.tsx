"use client";

import React from "react";
import MarksOfFreedomTokyo2026 from "@/components/marksoffreedom-tokyo-2026";
import MarksOfFreedomGunma2026 from "@/components/marksoffreedom-gunma-2026";
import MarksOfFreedomSapporo2025 from "@/components/marksoffreedom-sapporo-2025";
import MarksOfFreedomIshikawa2025 from "@/components/marksoffreedom-ishikawa-2025";
import MarksOfFreedomTokyo2025 from "@/components/marksoffreedom-tokyo-2025";

const MarksOfFreedomVideoComponent = () => (
  <div>
    <video width="960" height="540" autoPlay loop muted>
      <source src="/videos/marksoffreedom_ishikawa.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const MarksOfFreedomPage = () => {
  return (
    <main className="w-full lg:w-3/4 px-6 md:px-12 lg:mx-auto pb-6">
      <h2 className="text-3xl font-bold text-center mb-4">Marks of Freedom</h2>

      <div className="w-auto mx-auto lg:w-2/3 mb-6 md:mb-12 mt-6 text-center">
        <p className="text-lg mt-4">自由を感じた瞬間に、シャッターを切る。</p>
        <p className="text-lg italic">I press the shutter at the moment I feel free.</p>
      </div>

      <MarksOfFreedomTokyo2026 />

      <div className="w-auto mx-auto lg:w-2/3 mb-6 md:mb-12 mt-6 text-left">
        <p className="text-lg">― 現実世界に残された、自由の痕跡 ―</p>
        <p className="text-lg border-l-4 border-gray-500 pl-4 my-4">自由を感じた瞬間に、シャッターを切る。</p>

        <p className="mt-4">
          本シリーズは、都市の風景や構造物、光の反射など、人間が作り上げた秩序の中に潜む「自由」と「抑圧」の痕跡を記録しようとする実験です。
        </p>
        <p className="mt-4">
          デジタルというテクノロジーを通して、私は“人間的な感覚”を探っています。建築の影や反射、街の静けさの中に、わずかな呼吸のような自由を見出したいと思っています。
        </p>
        <p className="mt-4">
          それは、The Double Slash で描いてきた「自由と制約のあいだにある線」を、現実の空間と時間の中で捉えようとする試みでもあります。
        </p>
        <p className="mt-4">
          世界はノイズに満ちている。だからこそ、まだそこに残る静かな兆しを探している。
        </p>
        <p className="mt-4">
          この写真群は、自由を肯定しながらも、その自由がどのように制御され、どこにまだ息づいているのかを見つめる行為です。
        </p>

        <p className="text-lg italic mt-12">
          — Traces of Freedom in the Real World —
        </p>

        <p className="text-lg border-l-4 border-gray-500 pl-4 my-4">
          I press the shutter at the moment I feel free.

        </p>

        <p className="mt-4">
          This series is an experiment to document the traces of freedom and restraint
          that exist quietly within real landscapes — in architecture, light, and reflection.

        </p>

        <p className="mt-4">
          Through digital technology, I search for what still feels human.
          In the shadows and reflections of buildings, and in the silence of the city,
          I try to find the faint breath of freedom.

        </p>

        <p className="mt-4">
          It is also an attempt to capture, within real space and time,
          the same “line between freedom and control” that I have explored in The Double Slash.

        </p>

        <p className="mt-4">
          The world is filled with noise.
          That is why I look for the quiet signs that still remain.
        </p>

        <p className="mt-4">
          This body of work affirms freedom,
          while observing how it is shaped, restrained,
          and still quietly alive within our constructed world.
        </p>
      </div>

      <hr className="w-full mt-16 border-neutral-700 mb-12" />

      <section aria-labelledby="mof-archive-heading" className="w-full">
        <h3
          id="mof-archive-heading"
          className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-10 text-center md:text-left"
        >
          Archive / Selected Series
        </h3>

        <div className="w-full mt-12 border-neutral-700 mb-12">
          <MarksOfFreedomGunma2026 />
        </div>

        <hr className="w-full mt-12 border-neutral-700 mb-12" />

        <MarksOfFreedomTokyo2025 />

        <hr className="w-full mt-12 border-neutral-700 mb-12" />

        <MarksOfFreedomIshikawa2025 />

        <hr className="w-full mt-12 border-neutral-700 mb-12" />

        <MarksOfFreedomSapporo2025 />
      </section>

      <hr className="w-full mt-12 border-neutral-700 mb-12" />

      
    </main>
  );
};

export default MarksOfFreedomPage;


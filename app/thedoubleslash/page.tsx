"use client";

import Image from "next/image";
import Link from "next/link";
import { DoubleSlashV2WorkBlock } from "@/components/doubleslash/v2-work";
import { FromV1ToV2 } from "@/components/doubleslash/from-v1-to-v2";
import { doubleslashV2Works, v2Intro } from "@/app/thedoubleslash/data";

export default function TheDoubleSlashPage() {
  return (
    <main
      id="top"
      className="flex min-h-screen w-full flex-col items-center justify-between px-6 pb-6 md:px-12"
    >
      <div className="flex w-full max-w-5xl flex-col items-center justify-center">
        <div id="firstview" className="mb-6 w-full scroll-mt-24">
          <Image
            src="/images/firstview/firstview.png"
            alt="Shawn T. art"
            width={900}
            height={600}
            className="mx-auto h-auto w-full max-w-[900px] object-contain"
            priority
          />
        </div>

        <div
          id="intro"
          className="mb-2 w-full scroll-mt-24 text-left lg:w-2/3 lg:text-center"
        >
          <p>
            The Double Slash
            は、自由と抑圧のあいだにある現代人の葛藤を描いたシリーズです。
          </p>
          <p className="mt-4 lg:mt-2">
            The Double Slash explores the fragile balance between freedom and
            control in the modern age.
          </p>
        </div>

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        <div
          id="v2"
          className="mb-6 flex w-full scroll-mt-24 items-center justify-center"
        >
          <h2 className="text-center text-2xl font-bold">{v2Intro.title}</h2>
        </div>

        <div className="mb-6 w-full lg:w-2/3">
          {v2Intro.ja.map((text) => (
            <p key={text} className="mt-4 first:mt-0">
              {text}
            </p>
          ))}
          {v2Intro.en.map((text) => (
            <p key={text} className="mt-4">
              {text}
            </p>
          ))}
        </div>

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        {doubleslashV2Works.map((work, index) => (
          <div key={work.id} className="w-full">
            <DoubleSlashV2WorkBlock work={work} />
            {index < doubleslashV2Works.length - 1 ? (
              <hr className="mb-12 mt-12 w-full border-gray-300" />
            ) : null}
          </div>
        ))}

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        <FromV1ToV2 />

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        <div className="mb-12 w-full text-center lg:w-2/3">
          <p>
            初期の探求作品（V1）は、別ページでご覧いただけます。
          </p>
          <p className="mt-2">
            Earlier exploration works (V1) are on a separate page.
          </p>
          <p className="mt-6">
            <Link href="/thedoubleslash/v1" className="underline underline-offset-4">
              The Double Slash (V1)
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

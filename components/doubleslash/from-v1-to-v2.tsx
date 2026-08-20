import Image from "next/image";
import {
  doubleslashComparisons,
  fromV1ToV2Copy,
} from "@/app/thedoubleslash/data";

export function FromV1ToV2() {
  return (
    <section id="from-v1-to-v2" className="w-full scroll-mt-24">
      <div className="mb-6 flex w-full items-center justify-center">
        <h2 className="text-2xl font-bold">{fromV1ToV2Copy.title}</h2>
      </div>

      <div className="mb-8 w-full lg:w-2/3 lg:mx-auto">
        {fromV1ToV2Copy.ja.map((text) => (
          <p key={text} className="mt-4 first:mt-0">
            {text}
          </p>
        ))}
        {fromV1ToV2Copy.en.map((text) => (
          <p key={text} className="mt-4">
            {text}
          </p>
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-3xl gap-8 md:grid-cols-2">
        {doubleslashComparisons.map((pair) => (
          <div key={pair.motif}>
            <p className="mb-3 text-center text-sm font-bold">{pair.motif}</p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <figure>
                <Image
                  src={pair.v1Image}
                  alt={pair.v1Label}
                  width={500}
                  height={500}
                  className="aspect-square h-auto w-full object-cover"
                />
                <figcaption className="mt-2 text-center text-xs sm:text-sm">
                  <p>{pair.v1Label}</p>
                </figcaption>
              </figure>
              <figure>
                <Image
                  src={pair.v2Image}
                  alt={pair.v2Label}
                  width={500}
                  height={500}
                  className="aspect-square h-auto w-full object-cover"
                />
                <figcaption className="mt-2 text-center text-xs sm:text-sm">
                  <p>{pair.v2Label}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

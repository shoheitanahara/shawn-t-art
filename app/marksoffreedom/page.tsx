"use client";

import { getVisibleSeries } from "@/app/marksoffreedom/data";
import { LazySection } from "@/components/marksoffreedom/lazy-section";
import { MofSeriesGallery } from "@/components/marksoffreedom/series-gallery";

const MarksOfFreedomPage = () => {
  const featuredSeries = getVisibleSeries("featured");
  const archiveSeries = getVisibleSeries("archive");

  return (
    <main className="w-full px-6 pb-6 lg:mx-auto lg:w-3/4 md:px-12">
      <h2 className="mb-4 text-center text-3xl font-bold">Marks of Freedom</h2>

      <div className="mx-auto mb-6 mt-6 w-auto text-center lg:w-2/3 md:mb-12">
        <p className="mt-4 text-lg">自由を感じた瞬間に、シャッターを切る。</p>
        <p className="text-lg italic">I press the shutter when I feel freedom.</p>
      </div>

      {featuredSeries.map((series) => (
        <MofSeriesGallery
          key={series.id}
          series={series}
          sectionLabel="Featured Series"
        />
      ))}

      <div className="mx-auto mb-6 mt-6 w-auto text-left lg:w-2/3 md:mb-12">
        <p className="text-lg">― 現実世界に残された、自由の痕跡 ―</p>
        <p className="my-4 border-l-4 border-gray-500 pl-4 text-lg">
          自由を感じた瞬間に、シャッターを切る。
        </p>

        <p className="mt-4">自由は、制約の外にあるものではない。</p>
        <p className="mt-4">
          私たちの生活は、社会、経済、人間関係、制度、環境など、無数の制約の中にある。
          <br />
          完全に自由な状態など、ほとんど存在しない。
        </p>
        <p className="mt-4">
          それでも、私たちは制約の中で自由を感じることがある。
          <br />
          制約の中で、踊ることができる。
        </p>
        <p className="mt-4">
          Marks of Freedom は、日常の風景に残された、自由の痕跡を探す写真シリーズである。
        </p>
        <p className="mt-4">
          構造物、光と影、空間の区切り、その中にある生命。
        </p>
        <p className="mt-4">
          人間によって形づくられた世界の中で、ふと自由が立ち上がる瞬間がある。
        </p>
        <p className="mt-4">私は、その小さな自由を拾い集めている。</p>
        <p className="mt-4">
          The Double Slash
          が自由とコントロールの間にある緊張を「記号」として描いてきたのに対し、Marks
          of Freedom は、その同じ問いを現実の世界へ向ける。
        </p>

        <p className="mt-12 text-lg italic">
          — Traces of freedom left in the real world —
        </p>
        <p className="my-4 border-l-4 border-gray-500 pl-4 text-lg">
          I press the shutter when I feel freedom.
        </p>

        <p className="mt-4">Freedom does not exist outside control.</p>

        <p className="mt-4">
          Our lives are surrounded by countless forms of control — society,
          money, relationships, systems, and the environment.
          <br />
          Complete freedom almost never exists.
        </p>
        <p className="mt-4">
          Still, there are moments when we feel freedom within control.
          <br />
          We can dance within it.
        </p>
        <p className="mt-4">
          Marks of Freedom is a photo series that looks for traces of freedom in
          everyday scenes.
        </p>
        <p className="mt-4">
          Structures, light and shadow, divided spaces, and the life within
          them.
        </p>
        <p className="mt-4">
          In a world shaped by human hands, there are moments when freedom
          suddenly appears.
        </p>
        <p className="mt-4">I collect those small moments of freedom.</p>
        <p className="mt-4">
          While The Double Slash has explored the tension between freedom and
          control through a symbol, Marks of Freedom turns the same question
          toward the real world.
        </p>
      </div>

      {archiveSeries.length > 0 ? (
        <>
          <hr className="mb-12 mt-16 w-full border-neutral-700" />

          <section aria-labelledby="mof-archive-heading" className="w-full">
            <h3
              id="mof-archive-heading"
              className="mb-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 md:text-left"
            >
              Archive / Selected Series
            </h3>

            {archiveSeries.map((series, index) => (
              <div key={series.id}>
                {index > 0 ? (
                  <hr className="mb-12 mt-12 w-full border-neutral-700" />
                ) : null}
                <LazySection>
                  <MofSeriesGallery series={series} />
                </LazySection>
              </div>
            ))}
          </section>
        </>
      ) : null}

      <hr className="mb-12 mt-12 w-full border-neutral-700" />
    </main>
  );
};

export default MarksOfFreedomPage;

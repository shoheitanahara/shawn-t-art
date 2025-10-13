import { FC } from 'react'

const CuratorsNotePage: FC = () => {
  return (
    <div className="container mx-auto px-8 lg:px-8 my-4 max-w-4xl">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <h2 id="curators-notes" className="text-xl tracking-widest text-neutral-400">VOICES FROM NOWHERE</h2>
          <p className="mt-2 text-3xl font-semibold text-white">Fictional Curators’ Notes</p>
          <p className="mt-1 text-sm text-neutral-400">架空キュレーターのノート</p>
        </header>

        <div className="grid gap-6 md:grid-cols-1">
          {/* Curator A */}
          <article className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-wide text-neutral-400">Fictional Curator A</p>
            <p className="text-[11px] text-neutral-500">Independent Art Writer — Tokyo</p>
            <p className="text-xs uppercase tracking-wide text-neutral-400">架空キュレーター A</p>
            <p className="text-[11px] text-neutral-500">独立アートライター — 東京</p>

            <blockquote className="mt-4 space-y-3">
              <p lang="en">
                “The Double Slash” visualizes the tension between freedom and conformity in digital culture.
                We perform individuality while obeying invisible systems. These two lines — bold, heavy,
                almost violent — expose how control is not imposed, but internalized.
              </p>
              <p lang="en">
                Shawn T. Art’s work is not about rebellion; it’s about diagnosis. He doesn’t break the system —
                he mirrors it, pixel by pixel.
              </p>
              <hr className="my-3 border-neutral-800" />
              <p lang="ja">
                「The Double Slash」は、デジタル文化における“自由と同調”の緊張を可視化している。
                私たちは個性を演じながら、見えないシステムに従って生きている。二重線――重く、荒々しく、
                暴力的ですらある線――は、抑圧が外から与えられるのではなく、内側に組み込まれていることを暴く。
              </p>
              <p lang="ja">
                Shawn T. Art の作品は反抗ではなく、診断である。彼はシステムを壊すのではなく、
                ピクセル単位でそれを映し出す。
              </p>
            </blockquote>
          </article>

          {/* Curator B */}
          <article className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-wide text-neutral-400">Fictional Curator B</p>
            <p className="text-[11px] text-neutral-500">Philosophy & Aesthetics — London</p>
            <p className="text-xs uppercase tracking-wide text-neutral-400">架空キュレーター B</p>
            <p className="text-[11px] text-neutral-500">哲学と美学 — ロンドン</p>

            <blockquote className="mt-4 space-y-3">
              <p lang="en">
                Every line Shawn draws is an act of acceptance. The Double Slash does not deny contradiction; it gives it form.
                In this way, his work belongs to a lineage of thinkers who see beauty in tension — where resistance and
                surrender become indistinguishable.
              </p>
              <p lang="en">
                These are not digital paintings; they are meditations.
              </p>
              <hr className="my-3 border-neutral-800" />
              <p lang="ja">
                Shawn が引く一本の線は、すべて“受け入れ”の行為である。The Double Slash は矛盾を否定せず、
                それに形を与える。彼の作品は“緊張の中に美を見る思想”の系譜に連なる。
                抵抗と受容が区別できなくなるその瞬間に、彼の美学は宿る。
              </p>
              <p lang="ja">
                これらはデジタルペインティングではない。瞑想である。
              </p>
            </blockquote>
          </article>

          {/* Curator C */}
          <article className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-wide text-neutral-400">Fictional Curator C</p>
            <p className="text-[11px] text-neutral-500">Humanities — Berlin</p>
            <p className="text-xs uppercase tracking-wide text-neutral-400">架空キュレーター C</p>
            <p className="text-[11px] text-neutral-500">人文科学 — ベルリン</p>

            <blockquote className="mt-4 space-y-3">
              <p lang="en">
                Beneath the two slashes, something tender remains. Whether it’s a flower, a can, or a “like” —
                all are symbols of human desire. The Double Slash doesn’t erase them; it protects them.
                As if saying, “Even under control, our hearts still bloom.”
              </p>
              <p lang="en">
                The silence in his work is not emptiness — it’s care.
              </p>
              <hr className="my-3 border-neutral-800" />
              <p lang="ja">
                二本の線の下には、かすかなやさしさが残っている。花でも、スパム缶でも、「いいね」でも、
                それは人間の欲望の象徴だ。The Double Slash はそれを消すのではなく、守っている。
                まるで「制約の中でも、心は咲き続ける」と語るように。
              </p>
              <p lang="ja">
                作品に流れる静けさは、空虚ではない。やさしさである。
              </p>
            </blockquote>
          </article>
        </div>
      </div>
    </div>
  )
}

export default CuratorsNotePage
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
          {/* K – The Philosopher – 思想家のキュレーター */}
          <article className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-wide text-neutral-400">K – The Philosopher’s View</p>
            <p className="text-[11px] text-neutral-500">Philosophy Analysis — World</p>
            <p className="text-xs uppercase tracking-wide text-neutral-400">思想家のキュレーター</p>
            <p className="text-[11px] text-neutral-500">世界の哲学分析</p>

            <blockquote className="mt-4 space-y-3">
              <h3 lang="en">“His double lines are not marks of denial, but symbols of acceptance.”</h3>
              <p lang="en">
                Shawn T. Art observes the human paradox itself.
                We long for freedom, yet we also crave structure.
                Within that contradiction, he finds balance—two lines holding both forces at once.

                These are not lines that reject, but ones that embrace.
                They stand for the beauty of imperfection,
                the acceptance of being unfinished.
                In them lies the most honest reflection of modern life.
              </p>
              <h3 lang="ja">「彼の二重線は、否定ではなく肯定の記号だ。」</h3>
              <p lang="ja">
                Shawn T. Art は、“矛盾”という人間の本質を見つめている。
                私たちは自由を求めながら、同時にルールを必要としている。
                その相反する力を、彼は二本の線の中に閉じ込めた。

                それは拒絶の線ではなく、受け入れる線。
                “完成ではなく、未完成を肯定する線”。
                そこに、現代を生きる私たちのリアルがある。
              </p>
            </blockquote>
          </article>

          {/* L – The Emotional Curator – 感情的なキュレーター */}
          <article className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-wide text-neutral-400">L – The Emotional Curator’s View</p>
            <p className="text-[11px] text-neutral-500">Emotion Analysis — Personal</p>
            <p className="text-xs uppercase tracking-wide text-neutral-400">感情的なキュレーター</p>
            <p className="text-[11px] text-neutral-500">個人的な感情分析</p>

            <blockquote className="mt-4 space-y-3">
              <h3 lang="en">“The moment I saw those lines, I felt something tighten inside my chest.”</h3>
              <p lang="en">
                There’s a kind of emotion in his work that words can’t explain.
                Not anger, not sorrow—something quieter, like a heart still beating in silence.
                The red lines pulse gently, almost like a confession that refuses to speak.

                I would call this series “Silent Confessions.”
                In a world where everyone performs themselves online,
                Shawn paints what we try to hide.
              </p>
              <h3 lang="ja">「この線を見た瞬間、胸の奥が少し痛くなった。」</h3>
              <p lang="ja">
                彼の作品には、理屈では説明できない感情がある。
                それは怒りでも悲しみでもなく、“静かな叫び”のようなもの。
                赤い線はまるで心臓の鼓動のようで、
                無音の中で確かに鳴っている。

                私はこのシリーズを“沈黙の告白”と呼びたい。
                SNSで演じながら、心の中で押し殺している何かを、
                彼はまっすぐ描いている。
              </p>
            </blockquote>
          </article>

          {/* R – The Critic – 批評家のキュレーター */}
          <article className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-wide text-neutral-400">R – The Critic’s View</p>
            <p className="text-[11px] text-neutral-500">Critics Analysis — Global</p>
            <p className="text-xs uppercase tracking-wide text-neutral-400">批評家のキュレーター</p>
            <p className="text-[11px] text-neutral-500">世界の批評的分析</p>

            <blockquote className="mt-4 space-y-3">
              <h3 lang="en">“Shawn T. Art transforms the language of protest into the language of reflection.”</h3>
              <p lang="en">
                His visual grammar recalls the strategies of post-conceptual art—
                repetition, reduction, semiotic play—
                yet his tone is strikingly introspective.
                The Double Slash does not confront power; it exposes how power has moved inside us.

                In this sense, his art belongs not to the street but to the screen,
                where control is invisible, and freedom becomes self-surveillance.
                The red lines are not barriers; they are mirrors.

                It’s a subtle shift—from political resistance to psychological truth.
              </p>
              <h3 lang="ja">「Shawn T. Art は、“抗議の言語”を“内省の言語”へと変換している。」</h3>
              <p lang="ja">
                彼の視覚言語は、ポスト・コンセプチュアル・アートの戦略──
                反復、削減、記号的遊戯──を思わせる。
                だが、その語り口は驚くほど内向的だ。

                The Double Slash は権力に対して叫ぶのではなく、
                権力が私たちの内側に入り込んでいることを暴く。

                そういう意味で、彼のアートは「ストリート」ではなく「スクリーン」に属する。
                そこでは支配は見えず、自由は自己監視へと変わる。
                赤い線は“壁”ではなく、“鏡”なのだ。

                それは、政治的レジスタンスから心理的リアリズムへの静かな転換である。
              </p>
            </blockquote>
          </article>

          <p className="mt-6 text-center text-xs text-neutral-500 italic">
            These curators are fictional voices imagined by the artist to explore multiple readings of “The Double Slash”.
            <br />
            これらのキュレーターは、アーティストが「The Double Slash」の多面的な読み方を探るために想像した架空の声です。
          </p>
        </div>
      </div>
    </div>
  )
}

export default CuratorsNotePage
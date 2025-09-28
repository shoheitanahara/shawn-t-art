import { FC } from 'react'

const AboutPage: FC = () => {
  return (
    <div className="container mx-auto px-8 md:px-8 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Shawn T. Art</h1>
      
      <div className="mb-8">
        <h2 className="text-md">Web3-based digital artist inspired by street culture</h2>
        <p className="text-lg italic">「Every Star Starts as a Nobody」</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">AIとWeb3の時代に、アートの新しい可能性を探る</h3>
        <p>日本出身のアーティスト／ミュージシャン。ストリートカルチャーの美学とデジタル表現を軸に、AIなど新しいテクノロジーを実験的に取り入れつつ、コンセプトやディレクションはすべて自ら手がけています。</p>
        <p>代表作には The Double Slash、Mutant Hip Hop、そしてその他Web3ネイティブなコレクションなどがあり、NFTコレクション（MAYC, Meebits, BAG等）のホルダーとして、Web3初期のアートシーンに積極的に参加しています。</p>
        <p>私の作品は、街の生々しいエネルギーとテクノロジーの最前線を交差させ、自由・抑圧・希望というテーマを探る“実験”です。<br />
          「どのスターも誰でもないところから始まる」というモットーのもと、作品を通して人々に刺激を与え、Web3文化を形づくる一員として名を刻むことを目指しています。</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">English Version</h2>
        <div className="space-y-4">
        <h3 className="text-lg font-bold">Exploring what art can be in the age of AI and Web3</h3>
        <p>I’m an artist and musician from Japan, blending street-culture aesthetics with digital expression. I experiment with emerging technologies such as AI while directing and curating every concept myself.</p>
        <p>My signature works include The Double Slash, Mutant Hip Hop, and other Web3-native collections. As a holder of NFT collections such as MAYC, Meebits, and BAG, I’m actively engaged in the early Web3 art scene.</p>
        <p>My practice is an experiment at the intersection of street energy and cutting-edge technology—exploring themes of freedom, control, and hope. Anchored by “Every Star Starts as a Nobody,” my goal is to inspire and to help shape Web3 culture as a pioneering artist.</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg italic">すべての画像や音楽は私たちのオリジナルであり、無断使用や権利侵害は厳禁です。これに違反した場合、法的措置を講じることがありますので、ご了承ください。</p>
        <p className="text-lg italic">All images and music are our original works, and unauthorized use or infringement of rights is strictly prohibited. Legal action may be taken in case of violation, so please be aware.</p>
        <p>© 2025 Shawn T. Art All rights reserved.</p>
      </div>
    </div>
  )
}

export default AboutPage
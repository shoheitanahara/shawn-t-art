import { FC } from 'react'
import Image from 'next/image'

const AboutPage: FC = () => {
  return (
    <div className="container mx-auto px-8 md:px-8 py-8 max-w-4xl">
      <div className="flex items-center mb-8">
        <Image src="/images/about/icon.jpg" alt="Icon" className="w-16 h-16 mr-4 lg:w-32 lg:h-32 lg:mr-12" width={128} height={128} />
        <h1 className="text-3xl font-bold">Shawn T. Art</h1>
      </div>
      
      
      <div className="mb-8">
        <h2 className="text-md">Art Between Freedom and Control</h2>
        <p className="text-lg italic">「Every Star Starts as a Nobody」</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold">自由と抑圧のあいだにあるアート</h3>
        <p>Shawn T. Art は、日本出身のアーティスト／ミュージシャン。ストリートカルチャーの熱とデジタル表現の精度を交差させながら、自由と抑圧、抵抗と順応の狭間にある“人間らしさ”を探っています。</p>
        <p>代表作 「The Double Slash」 シリーズでは、二本の黒い線 “//” をモチーフに、検閲と抵抗、美と抑制という相反するテーマを表現。見せられるものと、隠さなければならないもののあいだにある緊張を、 美そのものとして描き出しています。</p>
        <p>デジタルメディアを中心に、AIも創作の一部として積極的に活用しながら、人間の感情とテクノロジーが交わる新しいアート表現の可能性を模索しています。</p>
        <p>また 「Mutant HipHop」 では、音楽とアイデンティティ、Web3カルチャーを融合させ、視覚だけでなく聴覚を通じても“自由と抑圧”のテーマを表現しています。</p>
        <p>NFTコレクターとしても活動し、MAYC、Meebits、BasedApeGang などを保有しながら、アートとブロックチェーン文化を結ぶ初期のWeb3シーンに積極的に関わっています。</p>
        <p>モットーは</p>

        <p><i>「Every Star Starts as a Nobody（すべての星は、無名から始まる）」名声ではなく“記録”としてアートを残すこと。現代の矛盾と希望をアーカイブし、未来へと渡すことを目指しています。</i></p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">English Version</h2>
        <div className="space-y-4">
        <h3 className="text-lg font-bold">Art Between Freedom and Control</h3>
        <p>Shawn T. Art is a Japanese artist and musician exploring how freedom, control, and technology shape human expression in the digital age. Blending the raw energy of street culture with the precision of digital creation, his works challenge the boundaries between resistance and conformity, chaos and order.</p>
        <p>His signature project, The Double Slash, uses two bold black lines “//” as a symbol of tension—representing both censorship and persistence. Each piece visualizes the struggle between what can be shown and what must be hidden, transforming restraint itself into beauty.</p>
        <p>Working mainly with digital media and actively using AI as part of his creative process, Shawn explores new possibilities of artistic expression that connect human emotion and technology.</p>
        <p>Beyond visual art, he extends this philosophy through Mutant HipHop, merging music, identity, and Web3 culture. As both an NFT collector and creator, he actively participates in shaping the early Web3 art scene—holding collections such as MAYC, Meebits, and BasedApeGang, and bridging fine art with blockchain-native expression.</p>
        <p>Anchored by his motto, </p>
        <p><i>“Every Star Starts as a Nobody,” Shawn’s practice seeks not fame, but legacy — to archive the energy, contradictions, and hope of our time.</i></p>
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
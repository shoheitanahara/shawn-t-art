import { FC } from 'react'

const AboutPage: FC = () => {
  return (
    <div className="container mx-auto px-8 md:px-8 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Shawn T. Art</h1>
      
      <div className="mb-8">
        <p className="text-lg italic">「どのスターも普通の人から始まる」</p>
      </div>

      <div className="space-y-4">
        <p>私はShawn T.です。日本で生まれ育ち、50年代のアメリカ音楽や古いハリウッド映画に強く影響を受けています。私のテーマは「どのスターも普通の人から始まる」であり、才能と努力によってスターになる人々の旅を称賛しています。私の作品は、過去の要素を新しいひねりと組み合わせた、親しみやすくも新鮮なアートと音楽を創造しています。</p>
        <p>日常の空間を鮮やかに描写し、観る人に新しい視点を提供することを目指しています。私が描くインテリアや風景、人物は、色彩のコントラストが際立ち、見る人を引き込む魅力があります。特に、私の作品に見られる大胆な色使いと幾何学的な形状は、視覚的な楽しさを生み出します。</p>
        <p>最新技術を駆使して、高速で動作するこのサイトは、私のアートと音楽の美しさを際立たせています。作品はNFTとして公開予定で、デジタルアートの新しい可能性を探求しています。私はWebエンジニアでもあり、アートと技術の融合を追求しています。</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">English Version</h2>
        <div className="space-y-4">
          <p className="italic">&ldquo;Every Star starts as a Nobody.&rdquo;</p>
          <p>My name is Shawn T. I am an artist and musician from Japan, deeply inspired by 50s American music and classic Hollywood films. My theme, &ldquo;Every Star starts as a Nobody&rdquo; celebrates the journey of ordinary people who become stars through talent and hard work. I create art and music that feel both familiar and fresh, combining elements of the past with a new twist.</p>
          <p>I strive to vividly depict everyday spaces, offering viewers a fresh perspective. The interiors, landscapes, and figures I illustrate stand out with striking color contrasts, drawing the audience in with their charm. Notably, my bold use of color and geometric shapes creates a delightful visual experience.</p>
          <p>Utilizing the latest technology, this site operates at high speed, highlighting the beauty of my art and music. My works are set to be released as NFTs, exploring new possibilities in digital art. I am also a web engineer, pursuing the fusion of art and technology.</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg italic">すべての画像や音楽は私たちのオリジナルであり、無断使用や権利侵害は厳禁です。これに違反した場合、法的措置を講じることがありますので、ご了承ください。</p>
        <p className="text-lg italic">All images and music are our original works, and unauthorized use or infringement of rights is strictly prohibited. Legal action may be taken in case of violation, so please be aware.</p>
      </div>
    </div>
  )
}

export default AboutPage
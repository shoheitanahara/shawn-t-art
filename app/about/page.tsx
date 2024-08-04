import { FC } from 'react'

const AboutPage: FC = () => {
  return (
    <div className="container mx-auto px-8 md:px-8 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">私のポートフォリオへようこそ</h1>
      
      <div className="mb-8">
        <p className="text-lg italic">「未来とヴィンテージの融合」</p>
      </div>

      <div className="space-y-4">
        <p>私はShawn T.です。ポップアートに強く影響を受け、2100年代の未来と1900年代のヴィンテージを融合させた独創的で不思議な絵を描いています。私の作品は、色彩豊かで視覚的に魅力的なスタイルが特徴です。</p>
        <p>日常の空間を鮮やかに描写し、観る人に新しい視点を提供することを目指しています。私が描くインテリアや風景、人物は、色彩のコントラストが際立ち、見る人を引き込む魅力があります。特に、私の作品に見られる大胆な色使いと幾何学的な形状は、視覚的な楽しさを生み出します。</p>
        <p>最新技術を駆使して、高速で動作するこのサイトは、私のアートの美しさとサイトの美しさを際立たせています。作品はNFTとして公開予定で、デジタルアートの新しい可能性を探求しています。私のアートが未来のアートシーンにおいて重要な役割を果たすことを願っています。</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">English Version</h2>
        <div className="space-y-4">
          <p className="italic">&ldquo;A Fusion of Future and Vintage.&rdquo;</p>
          <p>My name is Shawn T. I create unique and whimsical art that is heavily influenced by pop art, blending the futuristic visions of 2100 with the vintage aesthetics of the 1950s. My works are characterized by vibrant colors and visually captivating styles.</p>
          <p>I strive to vividly depict everyday spaces, offering viewers a fresh perspective. The interiors, landscapes, and figures I illustrate stand out with striking color contrasts, drawing the audience in with their charm. Notably, my bold use of color and geometric shapes creates a delightful visual experience.</p>
          <p>Utilizing the latest technology, this site operates at high speed, highlighting the beauty of my art and the site itself. My works are set to be released as NFTs, exploring new possibilities in digital art. I hope my art will play a significant role in shaping the future art scene.</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg italic">すべての画像は私たちの著作物であり、無断使用や権利侵害は厳禁です。これに違反した場合、法的措置を講じることがありますので、ご了承ください。</p>
      </div>
    </div>
  )
}

export default AboutPage
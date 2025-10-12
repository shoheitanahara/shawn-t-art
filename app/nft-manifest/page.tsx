import { FC } from 'react'

const NFTManifestPage: FC = () => {
  return (
    <div className="container mx-auto px-8 md:px-8 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">NFT Manifest</h1>
        <p className="text-md font-semibold">by Shawn T. Art</p>
      </div>

      <div className="space-y-4">
        <p>NFT(Non-Fungible Token)は、金のように扱うために生まれたものではありません。時間に消されないインクのようなものです。</p>
        <p>私は「売ること」に反対しているわけではありません。ただ、アートは売られるためではなく、理解されるために存在すると考えています。そして理解されたとき、初めて“売る”という行為が意味を持つのだと思っています。</p>
        <p>一つのミントは、静かな記憶の行為です。投機のためではなく、つながりのために作ります。作品が本当に理解され、その沈黙が誰かに届いたとき——そのとき初めて、このアートは世界に出る準備が整うのだと思います。</p>
        <p>取引のためではなく、痕跡のために。そして、本当に見つめられるその日まで。</p>

        <hr className="w-full mt-12 border-gray-300 mb-12" />

        <p>NFT(Non-Fungible Token) was never meant to be gold. They were meant to be ink. A way to leave a mark that time cannot erase.</p>
        <p>I am not against selling. But I believe art must earn its moment to be sold — not as a product of hype, but as a reflection of meaning.</p>
        <p>Each mint is a quiet act of memory. I create not for speculation, but for connection. When the art is understood, when its silence is heard — then, and only then, it may be ready to meet the world.</p>
        <p>Not for trade, but for trace — until it’s truly seen.</p>
        
      </div>
    </div>
  )
}

export default NFTManifestPage
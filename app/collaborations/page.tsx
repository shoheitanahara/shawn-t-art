
import React from "react";

const CollaborationsPage = () => {
  return (
    <main className="px-6 md:px-24 pb-6">
      <h2 className="text-2xl font-bold text-center mb-4">Collaborations</h2>
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-2xl font-bold text-center mb-4">UndeadBear x The Double Slash</h2>
        <p>Year: 2025, Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a>, <a href="https://x.com/Runne0808" target="_blank" rel="noopener noreferrer">@Runne0808</a></p>
        <p className="mt-4 w-full lg:w-1/2">
          The Double Slash シリーズ初のコラボレーション作品です。Runneの「UndeadBear」が持つキュートさと不気味さを、「The Double Slash」の象徴的な二重線で包み込みました。
          UndeadBear NFT のオーナーでもある Shawn T. Art は、その甘さとダークさが同居する世界観に惹かれ、「自由と抑圧」というテーマにぴったりだと感じて、このコラボが生まれました。
          遊び心のあるベアーに、スプレーのような質感と赤い二重線が走る、反骨とやさしさをあわせ持つアートです。
        </p>
        <p className="mt-4 w-full lg:w-1/2">
          This is the first collaboration in the Double Slash series. It wraps the cute yet eerie charm of Runne’s UndeadBear in the iconic double lines of The Double Slash.
          As the owner of the original UndeadBear NFT, Shawn T. Art was drawn to its world where sweetness and darkness coexist, and felt it perfectly matched the theme of “freedom and control.” That’s how this collaboration was born.
          A playful bear with spray-paint textures and vivid red double lines, this artwork carries both a rebellious spirit and a gentle touch.
        </p>
        <div className="w-full lg:w-2/3 mb-8">
          <div className="flex flex-col items-center justify-center mt-4">
            <img src="/images/collaborations/undeadbear/undeadbear1.png" alt="Event" className="w-full lg:w-1/2 h-auto" />
            <h3 className="text-lg font-bold mt-2">UndeadBear 1</h3>
            <a href="https://x.com/Runne0808" target="_blank" rel="noopener noreferrer">@Runne0808</a>
          </div>
        </div>
        <div className="w-full lg:w-2/3 mb-8">
          <div className="flex flex-col items-center justify-center mt-4">
            <img src="/images/collaborations/undeadbear/undeadbear2.png" alt="Event" className="w-full lg:w-1/2 h-auto" />
            <h3 className="text-lg font-bold mt-2">UndeadBear 2</h3>
            <a href="https://x.com/Runne0808" target="_blank" rel="noopener noreferrer">@Runne0808</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollaborationsPage;


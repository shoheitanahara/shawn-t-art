
import React from "react";

const TulipVideoComponent = () => (
  <div>
    <video width="960" height="540" autoPlay loop muted>
      <source src="/videos/tulip.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const SpamVideoComponent = () => (
  <div>
    <video width="960" height="540" autoPlay loop muted>
      <source src="/videos/spam.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const LikeVideoComponent = () => (
  <div>
    <video width="960" height="540" autoPlay loop muted>
      <source src="/videos/like.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const VideosPage = () => {
  return (
    <main className="w-full lg:w-3/4 px-6 md:px-12 lg:mx-auto pb-6">
      <h2 className="text-2xl font-bold text-center mb-4">The Double Slash – Motion Series</h2>

      <div className="flex flex-col items-center justify-between">
        <p className="mt-4 w-full lg:w-2/3">
          このページでは、「The Double Slash」シリーズを映像として再構成した作品群を展示しています。
          静止画で描かれた緊張や感情を、時間と動きの中でそっと呼び覚ます試みです。
        </p>
        <p className="mt-4 w-full lg:w-2/3">
          ペイントが静かに滴り落ち、
          止まった線の上に、わずかな変化だけが生まれていく。
          その最小限の動きが、デジタルの空間に新たな呼吸を与えます。
        </p>
        <p className="mt-4 w-full lg:w-2/3">
          このシリーズは、オンライン上に構築されたデジタルインスタレーション。
          映像を通して、もう一度「The Double Slash」の問いを投げかけます。
        </p>

        <p className="mt-8 w-full lg:w-2/3">
          This page presents a collection of The Double Slash works reinterpreted as moving images.
          Each piece quietly reawakens the tension and emotion once captured in stillness.
        </p>
        <p className="mt-4 w-full lg:w-2/3">
          Paint drips slowly —
          only the faintest movement unfolds upon the silent lines,
          giving a new breath to the digital space.
        </p>
        <p className="mt-4 w-full lg:w-2/3">
          This series stands as a digital installation within the web,
          using motion to once again ask the questions of The Double Slash.
        </p>
      </div>

      <hr className="w-full mt-12 border-gray-300 mb-12" />

      <div className="flex flex-col items-center justify-between">
        <div className="w-full lg:w-2/3 mb-8">
          <div className="flex flex-col items-center justify-center mt-4">
            <TulipVideoComponent />
          </div>
        </div>
        <div className="text-left w-full lg:w-2/3">
          <p>”The Double Slash - Tulip”</p>  
          <p>Year: 2025</p>
          <p>Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a></p>
        </div>
      </div>

      <hr className="w-full mt-12 border-gray-300 mb-12" />

      <div className="flex flex-col items-center justify-between">
        <div className="w-full lg:w-2/3 mb-8">
          <div className="flex flex-col items-center justify-center mt-4">
            <SpamVideoComponent />
          </div>
        </div>
        <div className="text-left w-full lg:w-2/3">
          <p>”The Double Slash - SPAM”</p>  
          <p>Year: 2025</p>
          <p>Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a></p>
        </div>
      </div>

      <hr className="w-full mt-12 border-gray-300 mb-12" />

      <div className="flex flex-col items-center justify-between">
        <div className="w-full lg:w-2/3 mb-8">
          <div className="flex flex-col items-center justify-center mt-4">
            <LikeVideoComponent />
          </div>
        </div>
        <div className="text-left w-full lg:w-2/3">
          <p>”The Double Slash - Like”</p>  
          <p>Year: 2025</p>
          <p>Creator: <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer">@shawn_t_art</a></p>
        </div>
      </div>
    </main>
  );
};

export default VideosPage;


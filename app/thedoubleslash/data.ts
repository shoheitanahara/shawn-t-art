export type BilingualParagraphs = {
  ja: string[];
  en: string[];
};

export type DoubleSlashV2Work = {
  id: string;
  title: string;
  year: string;
  mainImage: string;
  variations: string[];
  statement: BilingualParagraphs;
};

export type DoubleSlashComparison = {
  motif: string;
  v1Image: string;
  v1Label: string;
  v2Image: string;
  v2Label: string;
};

/** Add new V2 works here — page maps this array. */
export const doubleslashV2Works: DoubleSlashV2Work[] = [
  {
    id: "rose",
    title: "The Double Slash — Rose",
    year: "2026",
    mainImage: "/images/doubleslash-v2/rose/rose-05.png",
    variations: [
      "/images/doubleslash-v2/rose/rose-05.png",
      "/images/doubleslash-v2/rose/rose-01.png",
      "/images/doubleslash-v2/rose/rose-06.png",
      "/images/doubleslash-v2/rose/rose-04.png",
      "/images/doubleslash-v2/rose/rose-03.png",
      "/images/doubleslash-v2/rose/rose-02.png",
    ],
    statement: {
      ja: [
        "The Double Slash は「自由」と「抑圧」のあいだにある緊張を探るシリーズです。壊れやすい美しさの上に引かれた二重の赤い線は、覆い隠すと同時に、その存在をより鮮烈に浮かび上がらせます。",
        "二重線は検閲や制限を象徴しながらも、同時に消し去れない抵抗の痕跡です。美は覆われても透けて見え、抑圧されるほどに強く存在を主張します。",
        "この二重線は装飾ではなく、現代社会の矛盾を映すシンボルであり、作家自身のアイコンです。観る者はその線を通して「奪われる自由」と「消えない力」を読み取るでしょう。",
      ],
      en: [
        "The Double Slash is a series about the tension between freedom and oppression. Two red lines are drawn over fragile beauty. They try to cover it, but at the same time make it stand out even more.",
        "These lines symbolize censorship and control, yet they also show the traces of resistance that cannot be erased. Beauty can still be seen through the cover, and the more it is oppressed, the stronger it insists on its presence.",
        "The double slash is not decoration. It is a symbol of the contradictions of today’s society and has become the artist’s own icon. Through these lines, viewers can feel both the freedom that is taken away and the power that refuses to disappear.",
      ],
    },
  },
  {
    id: "spam",
    title: "The Double Slash — SPAM",
    year: "2026",
    mainImage: "/images/doubleslash-v2/spam/spam-01.png",
    variations: [
      "/images/doubleslash-v2/spam/spam-01.png",
      "/images/doubleslash-v2/spam/spam-05.png",
      "/images/doubleslash-v2/spam/spam-06.png",
      "/images/doubleslash-v2/spam/spam-04.png",
      "/images/doubleslash-v2/spam/spam-03.png",
      "/images/doubleslash-v2/spam/spam-02.png",
    ],
    statement: {
      ja: [
        "この作品は、否定からではなく、身近さから生まれました。SPAMは、沖縄で育った私にとって家庭の食卓に当たり前のようにあったもの。もともと保存食として作られ、戦争をきっかけに食料として世界中に広まり、その後、静かに日常の中に根づいていった存在です。",
        "その中には、“生き延びるための食”としての記憶、そして戦争という時代の痕跡が今も残っています。それを知りながら、私は今もこの日常を愛している。だからこそ、そこにある矛盾を強く感じます。戦争の影から広まったものが、平和の中でも愛され続けているということ。",
        "The Double Slash の二重線は、自由とコントロール、美と抑圧、記憶と習慣のあいだにある緊張を描いています。この線は、SPAMを否定するためではなく、“安らぎの中に眠る歴史”をそっと浮かび上がらせるためにあります。",
        "これは抗議ではなく、観察です。戦争と平和、過去と現在、愛と矛盾が、ひとつの缶の中で静かに共存している——その事実を見つめています。",
      ],
      en: [
        "This work began not from rejection, but from familiarity. SPAM was simply one of the foods on my family’s table in Okinawa — a product that spread around the world as a source of food during wartime, and quietly became part of everyday life afterward.",
        "It carries traces of that history — a history born from survival and conflict — yet it also holds the comfort of home and peace. I don’t hate it. It’s part of what I grew up with, part of what I still love. But when I look at it now, I can’t ignore the contradiction — how something tied to war could become a symbol of daily life.",
        "In The Double Slash series, the parallel lines represent tension: between freedom and control, beauty and restraint, memory and habit. Here, they cut across SPAM not to reject it, but to reveal the quiet coexistence of history and comfort.",
        "This is not a protest. It’s a reflection on how war, peace, and daily life can live together in the same familiar object.",
      ],
    },
  },
];

export const doubleslashComparisons: DoubleSlashComparison[] = [
  {
    motif: "Rose",
    v1Image: "/images/doubleslash/flower11.png",
    v1Label: "Rose / V1",
    v2Image: "/images/doubleslash-v2/rose/rose-05.png",
    v2Label: "Rose / V2",
  },
  {
    motif: "SPAM",
    v1Image: "/images/doubleslash-spam/spam1.png",
    v1Label: "SPAM / V1",
    v2Image: "/images/doubleslash-v2/spam/spam-01.png",
    v2Label: "SPAM / V2",
  },
];

export const v2Intro = {
  title: "The Double Slash (V2)",
  ja: [
    "The Double Slash の現在の形。",
    "自身で撮影した写真を切り抜き、白黒化し、コラージュと手描きの // を重ねて再構成しています。",
    "V2では、目の前に実在した物、記憶、日常の断片を出発点にし、それらへ二重線を介入させています。",
  ],
  en: [
    "The current form of The Double Slash.",
    "Original photographs are cut, reduced, layered, and crossed by hand-drawn // marks.",
    "V2 begins with something that existed in front of me — an object, a memory, a fragment of everyday life — and reconstructs it through photography, collage, and paint.",
  ],
};

export const fromV1ToV2Copy = {
  title: "From V1 to V2",
  ja: [
    "Double Slash（//）という概念の初期探求（V1）では、AIを実験的な筆として使用しました。",
    "V2ではその構想をさらに深め、自身の撮影した写真と手作業によるペイントを加えることで、身近な記憶やリアリティを宿した固有の言語へと進化させています。",
    "The Double Slashの思想を別の制作方法で再構築しています。",
  ],
  en: [
    "In the early exploration of The Double Slash (V1), AI was used as an experimental brush to visualize and explore the concept of //.",
    "In V2, the same idea is developed further through original photography, collage, and hand-drawn paint, bringing personal memories and everyday reality into the work.",
    "The idea of The Double Slash is rebuilt through a different process.",
  ],
};

export const v1Intro = {
  title: "The Double Slash (V1)",
  ja: [
    "現在の写真・手描きによる制作へ進む以前、The Double SlashではAI生成画像を使い、コンセプトの視覚的な可能性を探っていました。",
    "これらは破棄された下書きではなく、モチーフ、色、そして繰り返される // という記号を試行しながら、現在の表現へとつながった初期の視覚実験です。",
  ],
  en: [
    "Before the current photographic and hand-drawn process, The Double Slash was explored through AI-generated imagery.",
    "These works are not discarded drafts. They are early visual experiments in which the concept, motifs, colors, and recurring // gesture were tested and developed.",
  ],
};

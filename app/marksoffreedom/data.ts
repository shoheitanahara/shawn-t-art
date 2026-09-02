import { marksoffreedomGunma2026ImageList } from "@/app/api/images/marksoffreedom-gunma-2026/data";
import { marksoffreedomIshikawa2025ImageList } from "@/app/api/images/marksoffreedom-ishikawa-2025/data";
import { marksoffreedomSapporo2025ImageList } from "@/app/api/images/marksoffreedom-sapporo-2025/data";
import { marksoffreedomTokyo2025ImageList } from "@/app/api/images/marksoffreedom-tokyo-2025/data";
import { marksoffreedomTokyo2026ImageList } from "@/app/api/images/marksoffreedom-tokyo-2026/data";

export type MofCaption = {
  ja?: string;
  en?: string;
};

export type MofPhoto = {
  file: string;
  /** Default: true */
  visible?: boolean;
  caption?: MofCaption;
};

export type MofSeriesSection = "featured" | "archive";

export type MofSeries = {
  id: string;
  title: string;
  year: string;
  /** Default: true — set false to hide the entire series */
  visible?: boolean;
  section: MofSeriesSection;
  imageDir: string;
  photos: MofPhoto[];
};

/** Per-file overrides: visibility and captions without re-listing every filename. */
type PhotoOverrides = Record<string, { visible?: boolean; caption?: MofCaption }>;

function photosFromFiles(
  files: string[],
  overrides: PhotoOverrides = {},
): MofPhoto[] {
  return files.map((file) => ({
    file,
    ...overrides[file],
  }));
}

/**
 * Marks of Freedom series registry.
 *
 * - Series: set `visible: false` to hide a whole series.
 * - Photos: set `visible: false` in overrides, or on individual entries.
 * - Captions: add `caption: { ja: "...", en: "..." }` in overrides or per photo.
 */
export const mofSeries: MofSeries[] = [
  {
    id: "tokyo-2026",
    title: "Marks of Freedom — Tokyo 2026",
    year: "2026",
    visible: true,
    section: "featured",
    imageDir: "/images/marksoffreedom/tokyo-2026",
    photos: photosFromFiles(marksoffreedomTokyo2026ImageList, {
      "tokyo01.png": {
        caption: {
          ja: "工場地帯の航空写真の上に立つ。",
          en: "Standing on an aerial photo of a factory area.",
        },
      },
      "tokyo02.png": {
        caption: {
          ja: "とあるクラブの壁に飾られた書き初め。",
          en: "New Year's calligraphy on the wall of a club.",
        },
      },
      "tokyo03.png": {
        caption: {
          ja: "細かく区切られた街と広い空。",
          en: "A city split into small blocks and a wide open sky.",
        },
      },
      "tokyo04.png": {
        caption: {
          ja: "時代を遡ったようなガラス美術館。",
          en: "A glass museum that feels like another time.",
        },
      },
      "tokyo05.png": {
        caption: {
          ja: "広大な川と山の中に小さく潜む細道。",
          en: "A narrow path hidden in a wide river and mountains.",
        },
      },
      "tokyo06.png": {
        caption: {
          ja: "巨大なステンドグラス。",
          en: "A huge stained-glass window.",
        },
      },
      "tokyo07.png": {
        caption: {
          ja: "都会のバーでふと感じた静寂。",
          en: "A sudden silence I felt in a city bar.",
        },
      },
      "tokyo08.png": {
        caption: {
          ja: "オフィスビルの中にふと現れた彫刻。",
          en: "A sculpture that suddenly appeared inside an office building.",
        },
      },
      "tokyo09.png": {
        caption: {
          ja: "住宅街の中に現れた圧倒的建築。",
          en: "Powerful architecture standing in a residential area.",
        },
      },
      "tokyo10.png": {
        caption: {
          ja: "目黒川の桜並木。コントロールされた美しい生命。",
          en: "Cherry trees along the Meguro River. Beautiful life, kept under control.",
        },
      },
      "tokyo11.png": { visible: false },
      "tokyo12.png": {
        caption: {
          ja: "完璧に制御されたツツジ。",
          en: "Azaleas shaped with perfect control.",
        },
      },
      "tokyo13.png": {
        caption: {
          ja: "ヴィンテージタバコ。",
          en: "Vintage cigarettes.",
        },
      },
      "tokyo14.png": {
        caption: {
          ja: "生きた山、硫黄の匂い。",
          en: "A living mountain. The smell of sulfur.",
        },
      },
      "tokyo15.png": {
        caption: {
          ja: "凛と立つキリン。",
          en: "A giraffe standing tall and still.",
        },
      },
    }),
  },
  {
    id: "gunma-2026",
    title: "Marks of Freedom — Gunma 2026",
    year: "2026",
    visible: true,
    section: "archive",
    imageDir: "/images/marksoffreedom/gunma-2026",
    photos: photosFromFiles(marksoffreedomGunma2026ImageList),
  },
  {
    id: "tokyo-2025",
    title: "Marks of Freedom — Tokyo 2025",
    year: "2025",
    visible: true,
    section: "archive",
    imageDir: "/images/marksoffreedom/tokyo-2025",
    photos: photosFromFiles(marksoffreedomTokyo2025ImageList),
  },
  {
    id: "ishikawa-2025",
    title: "Marks of Freedom — Kanazawa 2025",
    year: "2025",
    visible: true,
    section: "archive",
    imageDir: "/images/marksoffreedom/ishikawa-2025",
    photos: photosFromFiles(marksoffreedomIshikawa2025ImageList),
  },
  {
    id: "sapporo-2025",
    title: "Marks of Freedom — Sapporo 2025",
    year: "2025",
    visible: true,
    section: "archive",
    imageDir: "/images/marksoffreedom/sapporo-2025",
    photos: photosFromFiles(marksoffreedomSapporo2025ImageList),
  },
];

export function getPhotoSrc(series: MofSeries, photo: MofPhoto): string {
  return `${series.imageDir}/${photo.file}`;
}

/** WebP thumbnails live in `{imageDir}/thumbs/` — generated by generateMofThumbnails. */
export function getPhotoThumbSrc(series: MofSeries, photo: MofPhoto): string {
  const base = photo.file.replace(/\.[^.]+$/, "");
  return `${series.imageDir}/thumbs/${base}.webp`;
}

export function getVisiblePhotos(series: MofSeries): MofPhoto[] {
  if (series.visible === false) return [];
  return series.photos.filter((photo) => photo.visible !== false);
}

export function getVisibleSeries(section?: MofSeriesSection): MofSeries[] {
  return mofSeries.filter(
    (series) =>
      series.visible !== false &&
      (section === undefined || series.section === section),
  );
}

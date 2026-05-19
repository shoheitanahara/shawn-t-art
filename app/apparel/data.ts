import type { ApparelProduct } from "@/components/apparel-product-set";

const ss2026 = "/images/apparel/2026ss";
const ss2025 = "/images/apparel/2025ss";
const aw2025 = "/images/apparel/2025aw";

export const apparel2026ss: ApparelProduct[] = [
  {
    id: "tokyo-01",
    title: "2026SS Marks of Freedom Tee — Tokyo 01",
    subtitle: "Marks of Freedom — Tokyo",
    teeSrc: `${ss2026}/tokyo-01-tee.png`,
    teeWidth: 1000,
    teeHeight: 1000,
    designSrc: `${ss2026}/tokyo-01-design.png`,
    designWidth: 1024,
    designHeight: 767,
  },
  {
    id: "tokyo-09",
    title: "2026SS Marks of Freedom Tee — Tokyo 09",
    subtitle: "Marks of Freedom — Tokyo",
    teeSrc: `${ss2026}/tokyo-09-tee.png`,
    teeWidth: 1000,
    teeHeight: 1000,
    designSrc: `${ss2026}/tokyo-09-design.png`,
    designWidth: 1024,
    designHeight: 767,
  },
  {
    id: "gunma-09",
    title: "2026SS Marks of Freedom Tee — Gunma 09",
    subtitle: "Marks of Freedom — Gunma",
    teeSrc: `${ss2026}/gunma-09-tee.png`,
    teeWidth: 1000,
    teeHeight: 1000,
    designSrc: `${ss2026}/gunma-09-design.png`,
    designWidth: 1024,
    designHeight: 767,
  },
  {
    id: "hokkaido",
    title: "2026SS Marks of Freedom Tee — Hokkaido",
    subtitle: "Marks of Freedom — Sapporo / Hokkaido",
    teeSrc: `${ss2026}/hokkaido-tee.png`,
    teeWidth: 1000,
    teeHeight: 1000,
    designSrc: `${ss2026}/hokkaido-design.png`,
    designWidth: 1024,
    designHeight: 767,
  },
];

export type ApparelArchiveItem = {
  id: string;
  title: string;
  images: { src: string; width: number; height: number }[];
  twoColumn?: boolean;
};

export const apparel2025ss: ApparelArchiveItem[] = [
  {
    id: "tulip-tee-1",
    title: "2025SS Tulip Tee",
    images: [{ src: `${ss2025}/tulip-tee-1.png`, width: 1000, height: 1000 }],
  },
  {
    id: "tulip-tee-2",
    title: "2025SS Tulip Tee 2",
    twoColumn: true,
    images: [
      { src: `${ss2025}/tulip-tee-2-a.png`, width: 1000, height: 1000 },
      { src: `${ss2025}/tulip-tee-2-b.png`, width: 1000, height: 1000 },
    ],
  },
  {
    id: "tulip-photo-tee",
    title: "2025SS Tulip Photo Tee",
    images: [
      { src: `${ss2025}/tulip-photo-tee.png`, width: 1000, height: 1000 },
    ],
  },
];

export const apparel2025aw: ApparelArchiveItem[] = [
  {
    id: "tulip-sweatshirt-1",
    title: "2025AW Tulip Sweatshirt 1",
    images: [
      { src: `${aw2025}/tulip-sweatshirt-1.png`, width: 1000, height: 1000 },
    ],
  },
  {
    id: "tulip-sweatshirt-2",
    title: "2025AW Tulip Sweatshirt 2",
    twoColumn: true,
    images: [
      { src: `${aw2025}/tulip-sweatshirt-2-a.png`, width: 1000, height: 1000 },
      { src: `${aw2025}/tulip-sweatshirt-2-b.png`, width: 1000, height: 1000 },
    ],
  },
];

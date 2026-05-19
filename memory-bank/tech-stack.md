# Tech Stack & Implementation

## スタック

| 項目 | バージョン・備考 |
|------|------------------|
| Node.js | `v22.9.0`（`.nvmrc`） |
| Next.js | 16（App Router） |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3 + `tailwindcss-animate` |
| UI | **shadcn/ui（Radix UI）** |
| 3D | `@google/model-viewer` |
| チェーン | `viem`（OpenSea API） |
| QR | `qrcode`（`/create`） |

## ディレクトリ

```
app/              # ページ・layout・Route Handlers（app/api/）
components/       # UI・ギャラリー・site-menu 等
components/ui/    # shadcn コンポーネント（編集は慎重に）
public/images/    # 静的画像
hooks/            # ビルド前スクリプト（before.ts）
memory-bank/      # 本フォルダ
lib/utils.ts      # cn() 等
```

## UI 方針（shadcn 中心）

### 原則

- **インタラクティブ UI は `components/ui/*` を優先**
- サイト固有の組み立ては `components/` 直下（例: `site-menu.tsx`, `home/landing-page.tsx`）
- 新規 shadcn 追加: `npx shadcn@latest add <component>` → `components/ui/` に配置

### 導入済み（`components/ui/`）

| コンポーネント | 主な使用箇所 |
|----------------|--------------|
| `button` | `/create` 等 |
| `card` | ギャラリー一覧 |
| `dialog` | 画像拡大 |
| `dropdown-menu` | `site-menu` |
| `pagination` | ギャラリー |

### Server / Client の境界

| ファイル | 種別 |
|----------|------|
| `app/layout.tsx` | Server（`SiteMenu` のみ Client 子） |
| `components/site-menu.tsx` | `"use client"` |
| ギャラリー各ページ・コンポーネント | 多くが `"use client"`（fetch・Dialog） |
| `app/about/page.tsx` 等 | Server 可（metadata 付き） |

- **ルート layout を Client にしない**
- Dropdown / Dialog があるコンポーネントは Client

### スタイリング

- `cn()`（`lib/utils.ts`）でクラス結合
- テーマ色は `globals.css` の CSS 変数 — ハードコード色は zinc/white/black の例外用途のみ
- `next-themes` は導入済みだが、**本番は `html.dark` 固定**（`ModeToggle` は `/cryptostars` 等限定的）

## 画像・API

- 一覧: `GET /api/images/<series>?page=1`
- リスト元: `app/api/images/<series>/data.ts`（ビルド前生成 — [image-workflow.md](./image-workflow.md)）
- プロキシ: `app/api/image/route.ts`
- OpenSea: `app/api/opensea/route.ts`

## ビルド

```bash
npm run build   # hooks/before.ts → next build
npm run dev
npm run lint
npm run format  # Prettier
```

## 環境変数（任意）

| 変数 | 用途 |
|------|------|
| `IMAGE_PROXY_ALLOW_HOSTS` | 画像プロキシ許可ホスト（カンマ区切り） |
| `IPFS_GATEWAY_BASE` | OpenSea 用 IPFS |
| `ETHEREUM_RPC_URL` 等 | 各チェーン RPC |

## 実装で避けること

- shadcn を迂回した独自 Modal / Menu の新規実装
- 理由なく新 UI ライブラリを追加
- `img` タグの多用（`next/image` を使う）
- ギャラリー画像リストの手動メンテ（生成スクリプトを更新する）

## デプロイ

- Vercel 想定（Next.js 標準）

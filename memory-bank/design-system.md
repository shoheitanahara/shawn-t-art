# Design System（Web）

`art-director.md` のビジュアル方針を **サイト UI に翻訳したルール**。  
クリエイティブ判断は art-director、実装の見た目は本書を優先。

## トーン

- ミニマル・強い余白・静けさ
- モノクロ基調（写真は `grayscale` + わずかな `contrast` 調整可）
- 叫ばない UI（過剰なアニメ・派手なグラデ禁止）
- 「ただオシャレ」なテンプレ感を避ける

## カラー・テーマ

- `html` は `className="dark"` 固定（`app/layout.tsx`）
- トークン: `app/globals.css` の CSS 変数（`background`, `foreground`, `border` 等）
- ダーク背景: おおよそ `#121212`（`--background: 0 0% 7%`）
- ライトセクション: トップの `SectionShell` の `variant="light"` → `bg-white text-zinc-950`
- 枠線（ダーク時）: 白系 `--border`（Menu 等のアウトライン）

## タイポグラフィ

| 用途 | 目安 |
|------|------|
| セクション番号 | `text-5xl`〜`text-8xl` `font-extralight` `tabular-nums` |
| 英見出し | `uppercase` `tracking-[0.2em]` `font-semibold` |
| 本文下限 | `text-sm` = **14px**（`tailwind.config.ts` で固定） |
| キャプション | `text-xs` = 12px |

## レイアウト（正: ランディング）

**参照:** `components/home/landing-page.tsx`

### SectionShell

- `variant`: `"dark"` | `"light"` — セクションごとに交互
- 最大幅: `max-w-[1400px]`
- グリッド: 左 3 列（番号・見出し・短文）/ 右 9 列（コンテンツ）
- パディング: `py-16 md:py-24 lg:py-28`

### パターン

| コンポーネント | 用途 |
|----------------|------|
| `SectionShell` | 番号付きセクション |
| `Tile` | Selected works の画像タイル |
| `WorldCard` | 3 Worlds（縦長・グラデーションオーバーレイ） |
| `ZineCard` | Record 系のテキストカード |

### ギャラリー（C 型ページ）

- shadcn: `Card`, `Dialog`, `Pagination`
- ホバー: `scale-[1.03]` 程度の控えめな transform
- 従来型の `text-3xl font-bold text-center` は**新規では使わない**

## ナビゲーション

- `components/site-menu.tsx` — セクション見出し（`WORLDS` 等）`text-[10px] tracking-[0.22em] text-white/45`
- ロゴ: `text-2xl font-bold` — `Shawn T. Art`
- ヘッダー: **非 sticky**（`site-architecture.md` 参照）

## 画像

- 必ず `next/image`
- `sizes` を適切に指定
- 装飾・作品: `alt` は作品名または空（意味のある説明のみ）

## 新規ページの原則

1. まず `landing-page.tsx` のパターンに寄せられるか検討（A/B）
2. ギャラリーなら既存 C 型コンポーネントをコピー・拡張
3. art-director の「余白」「静けさ」に反する UI は採用しない

## 避けるもの

- 汎用ポートフォリオ UI（中央寄せ大見出し + カードだらけ）の増殖
- ライト/ダークの無秩序な混在（セクション単位で dark/light を設計）
- Inter / Roboto 等のデフォルト感（現状はシステムフォント寄り — 将来フォント導入時は本書を更新）

## 未統一（リファクタ対象）

- `/philosophy` — prose のみ、SectionShell 未適用
- `/marksoffreedom`, `/thedoubleslash`, `/slashanimal` — C 型（ギャラリー UI）
- 詳細は [progress.md](./progress.md)

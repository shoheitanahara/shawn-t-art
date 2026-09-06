# Marks of Freedom — 実装ガイド

MOF ページ専用のデータ構造・ギャラリー UI・サムネイル運用。  
ページ: `/marksoffreedom` — `app/marksoffreedom/page.tsx`

## アーキテクチャ（2026 年時点）

```
app/marksoffreedom/
├── page.tsx          # ページ本体（Featured + マニフェスト + Archive）
└── data.ts           # ★ シリーズ・写真・キャプション・表示 ON/OFF の単一ソース

components/marksoffreedom/
├── series-gallery.tsx      # ★ 全シリーズ共通ギャラリー（1枚ずつ表示）
├── image-with-loading.tsx  # ロード中オーバーレイ付き next/image
└── lazy-section.tsx        # Archive 用：ビューポート接近までマウントしない

public/images/marksoffreedom/
├── tokyo-2026/       # Featured
│   ├── tokyo01.png …
│   └── thumbs/      # 自動生成 WebP サムネイル
├── gunma-2026/      # Archive
├── tokyo-2025/
├── ishikawa-2025/   # 表示名は Kanazawa 2025
└── sapporo-2025/
```

**旧構成（非推奨・ページから未使用）**

- `components/marksoffreedom-tokyo-2026.tsx` — Featured 専用 UI
- `components/marksoffreedom-*-2025.tsx` 等 — Archive 2列グリッドラッパー
- `components/marksoffreedom/archive-gallery.tsx` — API fetch + 2枚/ページ
- `app/api/images/marksoffreedom-*/route.tsx` — ページネーション API（MOF ページは未使用）

## ページ構成

1. タイトル + リード文（日英1行）
2. **Featured** — `section: "featured"` のシリーズ（現状 Tokyo 2026）
3. **マニフェスト** — 日英の長文（`page.tsx` 内に直書き）
4. **Archive / Selected Series** — `section: "archive"` のシリーズ（LazySection で遅延マウント）

Featured / Archive とも **同じ `MofSeriesGallery`** を使う。Featured のみ `sectionLabel="Featured Series"` を付与。

## データ（`app/marksoffreedom/data.ts`）

### 型

| 型 | 用途 |
|----|------|
| `MofSeries` | シリーズ1件（title, year, section, imageDir, photos） |
| `MofPhoto` | 写真1枚（file, visible?, caption?） |
| `MofCaption` | 写真下の短文 `{ ja?, en? }` |

### 表示 ON/OFF

```ts
// シリーズ全体を非表示
{ id: "gunma-2026", visible: false, ... }

// 特定写真を非表示（overrides）
photos: photosFromFiles(marksoffreedomTokyo2026ImageList, {
  "tokyo03.png": { visible: false },
}),
```

### 写真ごとのキャプション

```ts
photos: photosFromFiles(marksoffreedomTokyo2026ImageList, {
  "tokyo15.png": {
    caption: {
      ja: "檻の中の、小さな自由。",
      en: "A small freedom inside the enclosure.",
    },
  },
}),
```

### ヘルパー

| 関数 | 返すもの |
|------|----------|
| `getPhotoSrc(series, photo)` | 原寸 `/images/.../file.png` |
| `getPhotoThumbSrc(series, photo)` | サムネ `/images/.../thumbs/{base}.webp` |
| `getVisiblePhotos(series)` | visible !== false の写真配列 |
| `getVisibleSeries("featured" \| "archive")` | 表示対象シリーズ |

ファイル名リストは引き続き `app/api/images/marksoffreedom-*/data.ts` から import（`generateImageList` がビルド前に生成）。**キャプション・visible は `data.ts` の overrides で管理。**

## ギャラリー UI（`MofSeriesGallery`）

- **1枚ずつ** メイン表示（`aspect-[4/3]`）+ First / Prev / Next / Last
- サムネイル帯 — **4:3 の軽量 WebP**（原寸は読まない）
- クリック → Dialog で拡大（枠も 4:3）
- キャプションがあればメイン画像の下に日英表示
- Archive は `LazySection` で初回表示を遅延

## サムネイル（重要）

原画像はシリーズ合計 **約 270MB**。サムネイル帯で原寸を読むとページが極端に重くなる。

### 生成

| 項目 | 値 |
|------|-----|
| スクリプト | `hooks/scripts/generateMofThumbnails.ts` |
| 実行 | `npm run generate-mof-thumbs` |
| ビルド | `hooks/before.ts` 内で `generateImageList` の直後に自動実行 |
| 出力先 | `{seriesDir}/thumbs/{basename}.webp` |
| 仕様 | **4:3**（320×240）、WebP quality 78、cover クロップ、EXIF 回転補正 |
| 再生成 | 原画像より古い thumb はスキップ（mtime 比較） |

全 5 シリーズ・78 枚 → サムネイル合計 **約 724KB**。

### 新シリーズを `generateMofThumbnails.ts` に追加

`MOF_SERIES_DIRS` に `public/images/marksoffreedom/<新フォルダ>` を追加。

### 新しい写真を追加するとき

1. `public/images/marksoffreedom/<series>/` に原寸を配置
2. `npm run generate-mof-thumbs`（または `npm run build`）
3. `generateImageList` がファイル名リストを更新 → `data.ts` の import 元が自動反映
4. 必要なら `data.ts` の overrides に caption / visible を追加
5. **`thumbs/` を git に含める**（デプロイ先ですぐ軽量表示）

## 新シリーズ追加チェックリスト

- [ ] `public/images/marksoffreedom/<id>/` に画像
- [ ] `hooks/scripts/generateImageList.ts` の `collections` にエントリ
- [ ] `hooks/scripts/generateMofThumbnails.ts` の `MOF_SERIES_DIRS` にパス
- [ ] `app/marksoffreedom/data.ts` の `mofSeries` にエントリ
- [ ] `npm run generate-mof-thumbs` で thumb 生成
- [ ] 本ファイル + [image-workflow.md](./image-workflow.md) を必要なら更新

## マニフェスト文言

長文は `app/marksoffreedom/page.tsx` 内。変更時は [content-guidelines.md](./content-guidelines.md) のトーンに合わせる。

---

## 日英テキストの書き方

MOF でテキストを書く場所は **2か所** だけ。

### 1. ページ全体の文章 → `app/marksoffreedom/page.tsx`

| ブロック | 場所 | 内容 | 表示 |
|----------|------|------|------|
| **リード** | ページ上部（ギャラリーの前） | 日1行 + 英1行（italic） | 中央揃え |
| **マニフェスト（日本語）** | Featured ギャラリーの下 | 見出し2行 + 本文 `<p>` | 左揃え |
| **マニフェスト（英語）** | 日本語ブロックの続き | 見出し2行 + 本文 `<p>` | 左揃え |

**リードの例**（`page.tsx` 15〜18行付近）:

```tsx
<p className="mt-4 text-lg">自由を感じた瞬間に、シャッターを切る。</p>
<p className="text-lg italic">I press the shutter when I feel freedom.</p>
```

**マニフェストの例** — 日本語を先に段落 `<p className="mt-4">` で書き、その後 `mt-12` で英語ブロックを続ける。見出し・引用行は既存の `<p className="text-lg">` / `border-l-4` パターンに合わせる。

英訳は [content-guidelines.md](./content-guidelines.md) の **英検2級レベル** に従う。

### 2. 写真ごとの短文 → `app/marksoffreedom/data.ts`

各シリーズの `photos` 内、対象ファイル名をキーに `caption` を書く。

```ts
photos: photosFromFiles(marksoffreedomTokyo2026ImageList, {
  "tokyo15.png": {
    caption: {
      ja: "檻の中の、小さな自由。",
      en: "A small freedom inside the enclosure.",
    },
  },
}),
```

| 項目 | 説明 |
|------|------|
| `ja` | 日本語キャプション（任意） |
| `en` | 英語キャプション（任意） — 英検2級レベル |
| 表示位置 | メイン写真の直下（`MofSeriesGallery`） |
| 両方省略 | キャプション行は出ない |

**caption だけ書きたいとき** — `ja` と `en` は独立。片方だけでも可。

**シリーズ名・年** — `data.ts` の `title` / `year`（英語表記。例: `Marks of Freedom — Tokyo 2026`）。ギャラリー見出しとフッターに表示。

### 書かない場所（参考）

| ファイル | 役割 |
|----------|------|
| `app/api/images/marksoffreedom-*/data.ts` | ファイル名リストのみ（ビルド自動生成） |
| `components/marksoffreedom/series-gallery.tsx` | 表示ロジックのみ — 文言は入れない |

### 追加・編集の流れ

1. **長文を変える** → `page.tsx` を編集
2. **1枚の写真にコメント** → `data.ts` の overrides に `caption` 追加
3. **写真を非表示** → 同じ overrides に `visible: false`
4. 英訳は英検2級 — 短く、平易に（[content-guidelines.md](./content-guidelines.md)）

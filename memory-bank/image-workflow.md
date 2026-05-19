# Image Workflow

ギャラリー用画像の追加・リスト自動生成の手順。

## 配置場所

```
public/images/
├── apparel/
│   ├── 2026ss/          # T シャツ + デザイン（*-tee.png / *-design.png）
│   ├── 2025ss/          # Tulip Tee 系
│   └── 2025aw/          # Tulip Sweatshirt 系
├── firstview/           # トップ・DS ファーストビュー（手動参照）
├── doubleslash/
├── doubleslash-spam/
├── doubleslash-like/
├── doubleslash-denim/
├── marksoffreedom/
│   ├── tokyo-2026/
│   ├── gunma-2026/
│   └── …
├── slashanimal/
│   └── slashsheep/
├── cryptostars/
└── …
```

- 対応形式: `.jpg` `.jpeg` `.png` `.gif` `.webp`
- ファイル名はソートされる（`localeCompare`）— 意図した順ならゼロ埋め番号推奨

## ビルド前リスト生成

`npm run build` の先頭で `hooks/before.ts` → `hooks/scripts/generateImageList.ts` が実行される。

### 登録済みコレクション（`generateImageList.ts` の `collections`）

| 画像ディレクトリ | 出力 `data.ts` | export 名 |
|------------------|----------------|-----------|
| `public/images` | `app/api/images/data.ts` | `imageList` |
| `public/images/cryptostars` | `…/cryptostars/data.ts` | `cryptostarsImageList` |
| `public/images/doubleslash` | `…/doubleslash/data.ts` | `doubleslashImageList` |
| `public/images/doubleslash-spam` | `…/doubleslash-spam/data.ts` | `doubleslashSpamImageList` |
| `public/images/doubleslash-like` | `…/doubleslash-like/data.ts` | `doubleslashLikeImageList` |
| `public/images/doubleslash-denim` | `…/doubleslash-denim/data.ts` | `doubleslashDenimImageList` |
| `public/images/marksoffreedom/sapporo-2025` | `…/marksoffreedom-sapporo-2025/data.ts` | … |
| `public/images/marksoffreedom/ishikawa-2025` | `…/marksoffreedom-ishikawa-2025/data.ts` | … |
| `public/images/marksoffreedom/tokyo-2025` | `…/marksoffreedom-tokyo-2025/data.ts` | … |
| `public/images/marksoffreedom/gunma-2026` | `…/marksoffreedom-gunma-2026/data.ts` | … |
| `public/images/marksoffreedom/tokyo-2026` | `…/marksoffreedom-tokyo-2026/data.ts` | … |
| `public/images/slashanimal/slashsheep` | `…/slashsheep/data.ts` | `slashsheepImageList` |

### 手動管理の可能性

`slashcow`, `slashsheep-3d` 等、`data.ts` はあるが `collections` に無いものは **手動更新** または **generateImageList にエントリ追加** が必要。

## 新しいギャラリーを増やすとき

1. `public/images/<新フォルダ>/` に画像を置く
2. `hooks/scripts/generateImageList.ts` の `collections` に 1 エントリ追加
3. `app/api/images/<series>/route.tsx` と `data.ts` パスを用意（既存 route をコピー可）
4. ページコンポーネントから `fetch('/api/images/<series>?page=…')` を接続
5. `npm run build` または `npx ts-node … hooks/before.ts` でリスト再生成
6. [site-architecture.md](./site-architecture.md) を更新

## 静的参照（API 以外）

トップや About などは `next/image` で `/images/...` を直接参照。  
ファーストビュー変更時は `public/images/firstview/` を更新。

## チェックリスト

- [ ] 画像をコミット（またはデプロイ環境に配置）
- [ ] `generateImageList` 更新（該当する場合）
- [ ] ビルド成功・該当 API が件数を返す
- [ ] `sizes` / レイアウト崩れなし

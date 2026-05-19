# Memory Bank — Shawn T. Art

このフォルダは、**AI エージェントと将来の自分**向けのプロジェクト文脈です。  
人間向けのセットアップ手順はリポジトリ直下の [README.md](../README.md) を参照してください。

## 読む順序（タスク別）

| やること | 読むファイル（順） |
|----------|-------------------|
| コピー・世界観・作品判断 | [art-director.md](./art-director.md) |
| ページ追加・ナビ・URL | [site-architecture.md](./site-architecture.md) |
| UI・レイアウト・見た目 | [design-system.md](./design-system.md) → art-director |
| 実装・コンポーネント・API | [tech-stack.md](./tech-stack.md) |
| 文言・表記 | [content-guidelines.md](./content-guidelines.md) |
| 画像の追加 | [image-workflow.md](./image-workflow.md) |
| 何が終わっていて何が残っているか | [progress.md](./progress.md) |

## ファイル一覧

| ファイル | 役割 |
|----------|------|
| [art-director.md](./art-director.md) | ブランド哲学・作品方向性（**常に最優先**） |
| [site-architecture.md](./site-architecture.md) | ルート・メニュー・ページ分類・公開状態 |
| [design-system.md](./design-system.md) | Web UI のビジュアル・パターン |
| [tech-stack.md](./tech-stack.md) | 技術スタック・実装規約（shadcn 中心等） |
| [content-guidelines.md](./content-guidelines.md) | 日英・固有名・トーン |
| [image-workflow.md](./image-workflow.md) | 画像配置とビルド前リスト生成 |
| [progress.md](./progress.md) | 完成度・バックログ（随時更新） |

## 更新ルール

- **メニュー・ルートを変えたら** → `site-architecture.md`
- **UI パターンを増やしたら** → `design-system.md`（参照コンポーネントを明記）
- **shadcn コンポーネントを追加したら** → `tech-stack.md`
- **画像フォルダを増やしたら** → `image-workflow.md` + `hooks/scripts/generateImageList.ts`
- **スプリントの区切り** → `progress.md`

## 本番 URL

- https://shawn-t-art.com/

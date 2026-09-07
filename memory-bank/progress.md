# Progress & Backlog

最終更新の目安: メニュー案 A 導入後。随時ここだけ書き換えてよい。

## できていること

- [x] トップ `LandingPage`（SectionShell / 01〜05）
- [x] メニュー案 A（`components/site-menu.tsx`）
- [x] 3 Worlds 各ギャラリー・コンテンツ充実
- [x] MOF 統一ギャラリー（`data.ts` + `MofSeriesGallery`、1枚表示）
- [x] MOF サムネイル自動生成（`generate-mof-thumbs`、~724KB / 78枚）
- [x] About（ある程度整った prose + 画像）
- [x] memory-bank 最小構成

## 進行中・優先バックログ

| 優先 | 項目 | メモ |
|------|------|------|
| 高 | Philosophy を design-system B 型へ | SectionShell 化 |
| 高 | サブページの UI 温度統一 | C/D → A/B へ段階的に |
| 中 | MOF 写真ごとキャプション追加 | `data.ts` overrides で随時 |
| 低 | 旧 MOF コンポーネント・API ルート削除 | 未使用（archive-gallery 等） |
| 中 | The Double Slash → `/motion` 導線 | ページ内リンク |
| 低 | 作品ページのみ sticky ヘッダー | 要検討（site-architecture 参照） |

## 未公開・WIP

| 項目 | 状態 |
|------|------|
| Shop（Footer） | Coming soon |
| Zines（Collaborations ページ） | 制作中表記 |
| `/cryptostars` | Coming soon / メニュー非掲載 |

## 見送り・決定済み

- 全ページ常時固定ヘッダー → **見送り**（静けさ優先）
- メニューに create / cryptostars → **非掲載**
- Slash Sheep 3D 単独ページ → **削除**（`/slashanimal` に統合済み）

## 完成度のざっくり感（参考）

| 領域 | 目安 |
|------|------|
| 作品コンテンツ | 高 |
| トップ・世界観伝達 | 高 |
| サイト全体 UI 統一 | 中 |
| コマース・Shop | 未 |

批評メモ: トップは展覧会入口、奥はアーカイブ倉庫 — 統一が次の一手。

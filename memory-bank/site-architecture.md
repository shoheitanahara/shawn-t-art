# Site Architecture

サイトの情報設計・ルーティング・ナビゲーションの単一ソース。  
メニュー実装: `components/site-menu.tsx` / レイアウト: `app/layout.tsx`

## 情報設計（核）

```
                    ┌─────────────┐
                    │  / トップ    │
                    └──────┬──────┘
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
    Marks of Freedom  The Double Slash  Slash Animal
           │               │               │
           └───────────────┴───────────────┘
                    （同一の呼吸で接続）
```

- **3 Worlds** が作品の中心（トップ `02 Worlds` と一致）
- **ARTIST** = 思想と作家
- **RECORD** = ジン・展示・アパレルなど「残す・共有する」
- **MORE** = 派生媒体・外部・補助導線

## メニュー（案 A — 現行）

| セクション | ラベル | パス |
|------------|--------|------|
| WORLDS | Marks of Freedom | `/marksoffreedom` |
| WORLDS | The Double Slash | `/thedoubleslash` |
| WORLDS | Slash Animal | `/slashanimal` |
| ARTIST | Philosophy | `/philosophy` |
| ARTIST | About | `/about` |
| RECORD | Zines / Collaborations | `/collaborations` |
| RECORD | Exhibitions | `/event` |
| RECORD | Apparel / Prints | `/apparel` |
| MORE | Motion | `/motion` |
| MORE | Music | `/music` |
| MORE | NFT Manifest | `/nft-manifest` |
| MORE | Links | `/links` |
| MORE | Meebits Runway & GIF ↗ | `https://meebits-runway.vercel.app/`（外部） |

### メニューに載せない（意図的）

| パス | 理由 | 導線 |
|------|------|------|
| `/slashsheep-3d` | Slash Animal の派生 | 将来 SA ページ内（未実装） |
| `/create` | OpenSea QR ユーティリティ | 直 URL・必要ならページ内リンク |
| `/cryptostars` | WIP / Coming soon | 非掲載 |

### Footer

- `/links`（SNS / Links）
- Shop — **Coming soon**（未実装、`layout.tsx`）

## ルート一覧

| パス | メニュー | 状態 | UI テンプレート |
|------|----------|------|-----------------|
| `/` | — | 公開 | A: ランディング（`LandingPage`） |
| `/philosophy` | ARTIST | 公開 | D: 静的 prose（要 B 化） |
| `/about` | ARTIST | 公開 | D: 静的 prose（やや整備済） |
| `/marksoffreedom` | WORLDS | 公開 | C: ギャラリー + 長文 |
| `/thedoubleslash` | WORLDS | 公開 | C: ギャラリー + サブシリーズ |
| `/slashanimal` | WORLDS | 公開 | C: ギャラリー（複数動物） |
| `/motion` | MORE | 公開 | D: 動画一覧（DS 派生） |
| `/music` | MORE | 公開 | D: 静的 |
| `/collaborations` | RECORD | 公開 | D: 静的（Zine は制作中表記） |
| `/event` | RECORD | 公開 | D: 静的 |
| `/apparel` | RECORD | 公開 | D: 静的 |
| `/links` | MORE | 公開 | D: リンク集 |
| `/nft-manifest` | MORE | 公開 | D: 静的 prose |
| `/slashsheep-3d` | 非掲載 | 公開 | 3D（model-viewer） |
| `/create` | 非掲載 | 公開 | ユーティリティ |
| `/cryptostars` | 非掲載 | WIP | C: ギャラリー（Coming soon 要素あり） |

### UI テンプレート定義

| 型 | 説明 | 正とする実装 |
|----|------|--------------|
| **A** | 編集型ランディング | `components/home/landing-page.tsx` |
| **B** | A と同系の prose + SectionShell（目標） | 未着手（Philosophy 等） |
| **C** | 画像ギャラリー（Card + Dialog + Pagination） | MoF / DS / SA 各コンポーネント |
| **D** | 従来型（container + 見出し中央） | 多数のサブページ |

新規ページは **A または B** に寄せる。C はギャラリー専用。

## トップのセクション（アンカー）

| ID | 内容 | 主な導線 |
|----|------|----------|
| `hello` | ファーストビュー | — |
| `selected` | Selected works | `/thedoubleslash`, `/marksoffreedom`, `/slashanimal` |
| `worlds` | 3 Worlds | 各シリーズトップ |
| `statement` | 哲学要約 | `/philosophy` |
| `zines` | Record 系 | `/collaborations`, `/event`, `/apparel` |
| `about-teaser` | About 抜粋 | `/about` |

## API（ギャラリー）

- `app/api/images/[series]/route.tsx` — ページネーション付き画像 URL 返却
- `app/api/images/[series]/data.ts` — ビルド前に `hooks/before.ts` で生成（一部手動あり）
- `app/api/image/route.ts` — 画像プロキシ
- `app/api/opensea/route.ts` — OpenSea / `viem`

## ヘッダー方針（決定メモ）

- **全ページ常時固定**: 見送り（静けさ・没入感優先）
- 将来: 作品ページのみ `sticky` + コンパクト化を検討可

## 変更時チェックリスト

- [ ] `components/site-menu.tsx` の `menuSections`
- [ ] 本ファイルのルート表
- [ ] トップ `landing-page.tsx` の導線リンク
- [ ] `README.md` の主なページ表（大きな追加・削除時のみ）

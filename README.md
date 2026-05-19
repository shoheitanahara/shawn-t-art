# Shawn T. Art

日本のアーティスト **Shawn T.** の公式ポートフォリオサイトです。Next.js（App Router）・TypeScript・Tailwind CSS で構築し、写真・シンボル作品・3D・音楽・NFT 関連コンテンツを一つのサイトで閲覧できます。

## 主な機能

- トップのランディングページ（作品セクションへの導線）
- 各シリーズ・企画ごとのギャラリーページ（画像の一覧・拡大表示・ページネーション）
- Marks of Freedom、The Double Slash、Slash Animal など複数コレクション
- Slash Sheep 3D（`@google/model-viewer` による 3D 表示）
- Music、Apparel、Collaborations、Event などの静的コンテンツ
- NFT Manifest、OpenSea 連携 API（`viem` によるチェーン RPC）
- 画像プロキシ API（外部ホストの許可リスト対応）

## 技術スタック

- [Next.js](https://nextjs.org/) 16（App Router）
- React 18 / TypeScript 5
- Tailwind CSS 3、Radix UI、shadcn/ui 系コンポーネント
- `@google/model-viewer`（3D）、`viem`（ブロックチェーン RPC）、`qrcode`

## 必要条件

- **Node.js** `v22.9.0`（`.nvmrc` 参照。`nvm use` 推奨）
- **npm**（`package-lock.json` あり）

## セットアップ

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/shoheitanahara/shawn-t-art.git
   cd shawn-t-art
   ```

2. Node のバージョンを合わせます（任意）。

   ```bash
   nvm use
   ```

3. 依存関係をインストールします。

   ```bash
   npm install
   ```

4. 開発サーバーを起動します。

   ```bash
   npm run dev
   ```

5. ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## 利用可能なスクリプト

| コマンド        | 説明 |
|-----------------|------|
| `npm run dev`   | 開発サーバー起動 |
| `npm run build` | 画像リスト生成（`hooks/before.ts`）のあと本番ビルド |
| `npm run start` | 本番サーバー起動（`build` 後） |
| `npm run lint`  | ESLint |
| `npm run format`| Prettier でフォーマット |

## 環境変数（任意）

`.env.local` などで設定できます。未設定時は各 API のデフォルト値が使われます。

| 変数名 | 用途 |
|--------|------|
| `IMAGE_PROXY_ALLOW_HOSTS` | 画像プロキシで許可する追加ホスト（カンマ区切り） |
| `IPFS_GATEWAY_BASE` | OpenSea 用 IPFS ゲートウェイのベース URL |
| `ETHEREUM_RPC_URL` など | `app/api/opensea` で利用する各チェーンの RPC URL |

## ディレクトリ構成

```
app/                 # ページ・レイアウト・App Router の API（app/api/）
components/          # UI・ギャラリー・3D などのコンポーネント
public/images/       # 静的画像アセット
hooks/               # ビルド前スクリプト（画像リスト自動生成）
memory-bank/         # 設計・ブランド・運用ドキュメント（索引: memory-bank/README.md）
```

### Memory Bank（`memory-bank/`）

AI・開発向けの文脈ドキュメント。セットアップ手順は本 README、判断基準は memory-bank を参照。

| ファイル | 内容 |
|----------|------|
| `README.md` | 索引・読む順序 |
| `art-director.md` | ブランド・哲学・作品方向性 |
| `site-architecture.md` | ルート・メニュー・ページ分類 |
| `design-system.md` | Web UI・レイアウトパターン |
| `tech-stack.md` | 技術スタック・shadcn 規約 |
| `content-guidelines.md` | 文言・表記 |
| `image-workflow.md` | 画像追加・ビルド前生成 |
| `progress.md` | バックログ・完成度 |

### 主なページ（`app/`）

| パス | 内容 |
|------|------|
| `/` | ランディング |
| `/about`, `/philosophy` | プロフィール・思想 |
| `/thedoubleslash`, `/marksoffreedom`, `/slashanimal` | 各シリーズ |
| `/slashsheep-3d`, `/motion`, `/music` | 3D・モーション・音楽 |
| `/collaborations`, `/apparel`, `/event`, `/links` | コラボ・アパレル・イベント・リンク |
| `/nft-manifest`, `/cryptostars`, `/create` | NFT 関連 |

## ビルド時の画像リスト

`npm run build` 実行時に `hooks/before.ts` が `public/images/` を走査し、各ギャラリー用の画像リスト（`app/api/images/**/data.ts` など）を更新します。`public/images/` に画像を追加したあとは、本番ビルドまたは該当スクリプトの再実行で一覧が反映されます。

## デプロイ

[Vercel](https://vercel.com/) など Next.js 対応ホストへのデプロイを想定しています。詳細は [Next.js のデプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。

## 学習リソース

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## ライセンス

リポジトリ内にライセンスファイルは含まれていません。利用・再配布の条件はリポジトリオーナーにお問い合わせください。

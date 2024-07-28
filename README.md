# AI-PRO

このプロジェクトは、Next.jsを使用して構築された画像ギャラリーアプリケーションです。ユーザーは画像を閲覧し、選択した画像を表示することができます。また、ページネーション機能を備えており、画像が多い場合でも快適に閲覧できます。

## 機能

- 画像の表示
- 画像の選択と拡大表示
- ページネーションによる画像のナビゲーション
- ダークモードとライトモードの切り替え

## 必要条件

- Node.js (v22.5.1)
- npm または yarn

## セットアップ

1. リポジトリをクローンします。

   ```bash
   git clone https://github.com/your-username/ai-pro.git
   cd ai-pro
   ```

2. 依存関係をインストールします。

   ```bash
   npm install
   # または
   yarn install
   ```

3. 開発サーバーを起動します。

   ```bash
   npm run dev
   # または
   yarn dev
   ```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開き、アプリケーションを確認します。

## ディレクトリ構成

- `app/`: アプリケーションのメインコード
- `components/`: UIコンポーネント
- `public/images/`: 画像ファイル
- `api/`: APIエンドポイント

## 学習リソース

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて学ぶ
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル

## デプロイ

このアプリケーションは、[Vercel](https://vercel.com/)を使用してデプロイできます。詳細については、[Next.jsのデプロイメントドキュメント](https://nextjs.org/docs/deployment)を参照してください。

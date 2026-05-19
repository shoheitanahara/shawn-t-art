# Content Guidelines

コピー・表記・日英のルール。思想・トーンは [art-director.md](./art-director.md) が上位。

## 言語

- 英語は **TOEIC 700 点レベル**を想定する（難語・長文・回りくどい表現は避け、読みやすい短文で）
- **日英併記**が基本（海外コレクター・ギャラリー向け）
- パターン例:
  - 英: 短い見出し・キーフレーズ
  - 日: やや長い説明・文脈
- 片方のみのページは避ける（既存の例外は順次併記化）

## 固有名詞（表記ゆれ禁止）

| 正 | 避ける |
|----|--------|
| Shawn T. Art | Shawn T Art, Shawntart |
| The Double Slash | Double Slash（冠詞なし）、ダブルスラッシュのみ |
| Marks of Freedom | Mark of Freedom |
| Slash Animal | SlashAnimal, スラッシュアニマル（UI 英表記では） |

### シリーズ・サブタイトル

- The Double Slash — Spam / Denim / Like 等は英語表記を維持
- Marks of Freedom — `Tokyo 2026`, `Gunma 2026` のように **地名 + 年**

## メニュー・UI ラベル

現行（`site-menu.tsx`）に合わせる:

| UI | ラベル |
|----|--------|
| 展示 | **Exhibitions**（Event ではない） |
| コラボ | **Zines / Collaborations** |
| アパレル | **Apparel / Prints** |
| SNS | **Links**（Footer は「SNS / Links」可） |

## トーン

- 静か・率直・説教臭くない
- 叫び・ハイプ・「革新的」「圧倒的」等のマーケ語を避ける
- NFT 関連は [nft-manifest](/nft-manifest) のトーンに合わせる（投機ではなく痕跡・理解）

## 画像 `alt`

- 作品タイル: シリーズ名または作品名
- 純装飾・オーバーレイ前提: `alt=""` 可
- 作家ポートレート: `Shawn T. Art`

## メタデータ

- `title`: ページ名 | Shawn T. Art（`layout.tsx` template）
- `description`: 英語 1 文で「自由と抑圧のあいだ」系の軸を維持

## 更新時

- トップ `landing-page.tsx` の短文と矛盾しないか確認
- 新キャッチコピーは art-director の 5 原則と照合

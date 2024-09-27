import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public/images');
const pfpImagesDir = path.join(process.cwd(), 'public/images/pfp');
const nftImagesDir = path.join(process.cwd(), 'public/images/nft'); // NFT画像のディレクトリ
const cryptostarsImagesDir = path.join(process.cwd(), 'public/images/cryptostars'); // Cryptostars画像のディレクトリ
const outputFilePath = path.join(process.cwd(), 'app/api/images/data.ts');
const pfpOutputFilePath = path.join(process.cwd(), 'app/api/images/pfp/data.ts');
const nftOutputFilePath = path.join(process.cwd(), 'app/api/images/nft/data.ts'); // NFTデータの出力先
const cryptostarsOutputFilePath = path.join(process.cwd(), 'app/api/images/cryptostars/data.ts'); // Cryptostarsデータの出力先

export default function generateImageList() {
  if (!fs.existsSync(imagesDir)) {
    console.error("Images directory does not exist");
    return;
  }

  // 画像ファイル名を取得
  const imageFiles = fs.readdirSync(imagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

  // pfp画像ファイル名を取得
  const pfpImageFiles = fs.readdirSync(pfpImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

  // nft画像ファイル名を取得
  const nftImageFiles = fs.readdirSync(nftImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file)); // NFT画像の取得

  // cryptostars画像ファイル名を取得
  const cryptostarsImageFiles = fs.readdirSync(cryptostarsImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file)); // Cryptostars画像の取得

  // 配列をシャッフルする関数
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // 画像ファイル名をランダムにシャッフル
  const shuffledImageFiles = shuffleArray(imageFiles);
  const shuffledPfpImageFiles = shuffleArray(pfpImageFiles);
  const shuffledNftImageFiles = shuffleArray(nftImageFiles); // NFT画像のシャッフル
  const shuffledCryptostarsImageFiles = shuffleArray(cryptostarsImageFiles); // Cryptostars画像のシャッフル

  // data.tsファイルの内容を生成
  const content = `export const imageList = ${JSON.stringify(shuffledImageFiles)};`;

  // data.tsファイルに書き込む
  fs.writeFileSync(outputFilePath, content, 'utf8');
  console.log(`Image list generated: ${outputFilePath}`);

  // pfp画像の内容を生成
  const pfpContent = `export const pfpImageList = ${JSON.stringify(shuffledPfpImageFiles)};`;
  fs.writeFileSync(pfpOutputFilePath, pfpContent, 'utf8');
  console.log(`PFP image list generated: ${pfpOutputFilePath}`);

  // NFT画像の内容を生成
  const nftContent = `export const nftImageList = ${JSON.stringify(shuffledNftImageFiles)};`;
  fs.writeFileSync(nftOutputFilePath, nftContent, 'utf8');
  console.log(`NFT image list generated: ${nftOutputFilePath}`);

  // Cryptostars画像の内容を生成
  const cryptostarsContent = `export const cryptostarsImageList = ${JSON.stringify(shuffledCryptostarsImageFiles)};`;
  fs.writeFileSync(cryptostarsOutputFilePath, cryptostarsContent, 'utf8');
  console.log(`Cryptostars image list generated: ${cryptostarsOutputFilePath}`);
}
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public/images');
const cryptostarsImagesDir = path.join(process.cwd(), 'public/images/cryptostars'); // Cryptostars画像のディレクトリ
const outputFilePath = path.join(process.cwd(), 'app/api/images/data.ts');
const cryptostarsOutputFilePath = path.join(process.cwd(), 'app/api/images/cryptostars/data.ts'); // Cryptostarsデータの出力先
const doubleslashImagesDir = path.join(process.cwd(), 'public/images/doubleslash');
const doubleslashOutputFilePath = path.join(process.cwd(), 'app/api/images/doubleslash/data.ts');
const doubleslashSpamImagesDir = path.join(process.cwd(), 'public/images/doubleslash-spam');
const doubleslashSpamOutputFilePath = path.join(process.cwd(), 'app/api/images/doubleslash-spam/data.ts');
const doubleslashLikeImagesDir = path.join(process.cwd(), 'public/images/doubleslash-like');
const doubleslashLikeOutputFilePath = path.join(process.cwd(), 'app/api/images/doubleslash-like/data.ts');
const marksoffreedomSapporo2025ImagesDir = path.join(process.cwd(), 'public/images/marksoffreedom/sapporo-2025');
const marksoffreedomSapporo2025OutputFilePath = path.join(process.cwd(), 'app/api/images/marksoffreedom-sapporo-2025/data.ts');
const marksoffreedomIshikawa2025ImagesDir = path.join(process.cwd(), 'public/images/marksoffreedom/ishikawa-2025');
const marksoffreedomIshikawa2025OutputFilePath = path.join(process.cwd(), 'app/api/images/marksoffreedom-ishikawa-2025/data.ts');

export default function generateImageList() {
  if (!fs.existsSync(imagesDir)) {
    console.error("Images directory does not exist");
    return;
  }

  // 画像ファイル名を取得
  const imageFiles = fs.readdirSync(imagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

  // cryptostars画像ファイル名を取得
  const cryptostarsImageFiles = fs.readdirSync(cryptostarsImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file)); // Cryptostars画像の取得

  // doubleslash画像ファイル名を取得
  const doubleslashImageFiles = fs.readdirSync(doubleslashImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

  // doubleslash-spam画像ファイル名を取得
  const doubleslashSpamImageFiles = fs.readdirSync(doubleslashSpamImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

  // doubleslash-like画像ファイル名を取得
  const doubleslashLikeImageFiles = fs.readdirSync(doubleslashLikeImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

  // marks of freedom sapporo 2025画像ファイル名を取得
  const marksoffreedomSapporo2025ImageFiles = fs.readdirSync(marksoffreedomSapporo2025ImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

  // marks of freedom ishikawa 2025画像ファイル名を取得
  const marksoffreedomIshikawa2025ImageFiles = fs.readdirSync(marksoffreedomIshikawa2025ImagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

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
  const shuffledCryptostarsImageFiles = shuffleArray(cryptostarsImageFiles); // Cryptostars画像のシャッフル
  const shuffledDoubleslashImageFiles = shuffleArray(doubleslashImageFiles);
  const shuffledDoubleslashSpamImageFiles = shuffleArray(doubleslashSpamImageFiles);
  const shuffledDoubleslashLikeImageFiles = shuffleArray(doubleslashLikeImageFiles);
  const shuffledMarksoffreedomSapporo2025ImageFiles = shuffleArray(marksoffreedomSapporo2025ImageFiles);
  const shuffledMarksoffreedomIshikawa2025ImageFiles = shuffleArray(marksoffreedomIshikawa2025ImageFiles);

  // data.tsファイルの内容を生成
  const content = `export const imageList = ${JSON.stringify(shuffledImageFiles)};`;

  // data.tsファイルに書き込む
  fs.writeFileSync(outputFilePath, content, 'utf8');
  console.log(`Image list generated: ${outputFilePath}`);

  // Cryptostars画像の内容を生成
  const cryptostarsContent = `export const cryptostarsImageList = ${JSON.stringify(shuffledCryptostarsImageFiles)};`;
  fs.writeFileSync(cryptostarsOutputFilePath, cryptostarsContent, 'utf8');
  console.log(`Cryptostars image list generated: ${cryptostarsOutputFilePath}`);

  // doubleslash画像の内容を生成
  const doubleslashContent = `export const doubleslashImageList = ${JSON.stringify(shuffledDoubleslashImageFiles)};`;
  fs.writeFileSync(doubleslashOutputFilePath, doubleslashContent, 'utf8');
  console.log(`Doubleslash image list generated: ${doubleslashOutputFilePath}`);

  // doubleslash-spam画像の内容を生成
  const doubleslashSpamContent = `export const doubleslashSpamImageList = ${JSON.stringify(shuffledDoubleslashSpamImageFiles)};`;
  fs.writeFileSync(doubleslashSpamOutputFilePath, doubleslashSpamContent, 'utf8');
  console.log(`Doubleslash spam image list generated: ${doubleslashSpamOutputFilePath}`);

  // doubleslash-like画像の内容を生成
  const doubleslashLikeContent = `export const doubleslashLikeImageList = ${JSON.stringify(shuffledDoubleslashLikeImageFiles)};`;
  fs.writeFileSync(doubleslashLikeOutputFilePath, doubleslashLikeContent, 'utf8');
  console.log(`Doubleslash like image list generated: ${doubleslashLikeOutputFilePath}`);

  // marks of freedom sapporo 2025画像の内容を生成
  const marksoffreedomSapporo2025Content = `export const marksoffreedomSapporo2025ImageList = ${JSON.stringify(shuffledMarksoffreedomSapporo2025ImageFiles)};`;
  fs.writeFileSync(marksoffreedomSapporo2025OutputFilePath, marksoffreedomSapporo2025Content, 'utf8');
  console.log(`Marks of freedom sapporo 2025 image list generated: ${marksoffreedomSapporo2025OutputFilePath}`);

  // marks of freedom ishikawa 2025画像の内容を生成
  const marksoffreedomIshikawa2025Content = `export const marksoffreedomIshikawa2025ImageList = ${JSON.stringify(shuffledMarksoffreedomIshikawa2025ImageFiles)};`;
  fs.writeFileSync(marksoffreedomIshikawa2025OutputFilePath, marksoffreedomIshikawa2025Content, 'utf8');
  console.log(`Marks of freedom ishikawa 2025 image list generated: ${marksoffreedomIshikawa2025OutputFilePath}`);
}
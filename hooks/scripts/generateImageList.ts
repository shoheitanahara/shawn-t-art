import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public/images');
const outputFilePath = path.join(process.cwd(), 'app/api/images/data.ts');

export default function generateImageList() {
  if (!fs.existsSync(imagesDir)) {
    console.error("Images directory does not exist");
    return;
  }

  // 画像ファイル名を取得
  const imageFiles = fs.readdirSync(imagesDir).filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

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

  // data.tsファイルの内容を生成
  const content = `export const imageList = ${JSON.stringify(shuffledImageFiles)};`;

  // data.tsファイルに書き込む
  fs.writeFileSync(outputFilePath, content, 'utf8');
  console.log(`Image list generated: ${outputFilePath}`);
}

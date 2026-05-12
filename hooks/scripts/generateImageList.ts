import fs from 'fs';
import path from 'path';

type ImageCollection = {
  imagesDir: string;
  outputFilePath: string;
  exportConstName: string;
};

const projectRoot = process.cwd();

const collections: ImageCollection[] = [
  {
    imagesDir: path.join(projectRoot, 'public/images'),
    outputFilePath: path.join(projectRoot, 'app/api/images/data.ts'),
    exportConstName: 'imageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/cryptostars'),
    outputFilePath: path.join(projectRoot, 'app/api/images/cryptostars/data.ts'),
    exportConstName: 'cryptostarsImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/doubleslash'),
    outputFilePath: path.join(projectRoot, 'app/api/images/doubleslash/data.ts'),
    exportConstName: 'doubleslashImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/doubleslash-spam'),
    outputFilePath: path.join(projectRoot, 'app/api/images/doubleslash-spam/data.ts'),
    exportConstName: 'doubleslashSpamImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/doubleslash-like'),
    outputFilePath: path.join(projectRoot, 'app/api/images/doubleslash-like/data.ts'),
    exportConstName: 'doubleslashLikeImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/doubleslash-denim'),
    outputFilePath: path.join(
      projectRoot,
      'app/api/images/doubleslash-denim/data.ts',
    ),
    exportConstName: 'doubleslashDenimImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/marksoffreedom/sapporo-2025'),
    outputFilePath: path.join(
      projectRoot,
      'app/api/images/marksoffreedom-sapporo-2025/data.ts',
    ),
    exportConstName: 'marksoffreedomSapporo2025ImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/marksoffreedom/ishikawa-2025'),
    outputFilePath: path.join(
      projectRoot,
      'app/api/images/marksoffreedom-ishikawa-2025/data.ts',
    ),
    exportConstName: 'marksoffreedomIshikawa2025ImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/marksoffreedom/tokyo-2025'),
    outputFilePath: path.join(
      projectRoot,
      'app/api/images/marksoffreedom-tokyo-2025/data.ts',
    ),
    exportConstName: 'marksoffreedomTokyo2025ImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/marksoffreedom/gunma-2026'),
    outputFilePath: path.join(
      projectRoot,
      'app/api/images/marksoffreedom-gunma-2026/data.ts',
    ),
    exportConstName: 'marksoffreedomGunma2026ImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/marksoffreedom/tokyo-2026'),
    outputFilePath: path.join(
      projectRoot,
      'app/api/images/marksoffreedom-tokyo-2026/data.ts',
    ),
    exportConstName: 'marksoffreedomTokyo2026ImageList',
  },
  {
    imagesDir: path.join(projectRoot, 'public/images/slashanimal/slashsheep'),
    outputFilePath: path.join(projectRoot, 'app/api/images/slashsheep/data.ts'),
    exportConstName: 'slashsheepImageList',
  },
];

export default function generateImageList() {
  const listImageFiles = (dirPath: string): string[] => {
    if (!fs.existsSync(dirPath)) return [];
    return fs
      .readdirSync(dirPath)
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b));
  };

  const ensureParentDir = (filePath: string) => {
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
  };

  const toTsExport = (exportConstName: string, files: string[]) =>
    `export const ${exportConstName} = ${JSON.stringify(files)};\n`;

  for (const collection of collections) {
    const imageFiles = listImageFiles(collection.imagesDir);
    ensureParentDir(collection.outputFilePath);

    const content = toTsExport(collection.exportConstName, imageFiles);
    fs.writeFileSync(collection.outputFilePath, content, 'utf8');

    console.log(
      `Image list generated: ${collection.outputFilePath} (${imageFiles.length} files)`,
    );
  }
}
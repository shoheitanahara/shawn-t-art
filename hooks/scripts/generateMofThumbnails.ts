import fs from "fs";
import path from "path";
import sharp from "sharp";

const projectRoot = process.cwd();

/** Matches app/marksoffreedom/data.ts imageDir paths (without leading slash). */
const MOF_SERIES_DIRS = [
  "public/images/marksoffreedom/tokyo-2026",
  "public/images/marksoffreedom/gunma-2026",
  "public/images/marksoffreedom/tokyo-2025",
  "public/images/marksoffreedom/ishikawa-2025",
  "public/images/marksoffreedom/sapporo-2025",
];

const THUMB_MAX_WIDTH = 256;
const THUMB_QUALITY = 78;

const IMAGE_PATTERN = /\.(jpg|jpeg|png|gif|webp)$/i;

function isImageFile(name: string): boolean {
  return IMAGE_PATTERN.test(name);
}

function thumbName(sourceFile: string): string {
  const base = path.parse(sourceFile).name;
  return `${base}.webp`;
}

async function generateThumb(
  sourcePath: string,
  thumbPath: string,
): Promise<void> {
  await sharp(sourcePath)
    .rotate()
    .resize({ width: THUMB_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY })
    .toFile(thumbPath);
}

export default async function generateMofThumbnails() {
  let created = 0;
  let skipped = 0;

  for (const relativeDir of MOF_SERIES_DIRS) {
    const seriesDir = path.join(projectRoot, relativeDir);
    const thumbsDir = path.join(seriesDir, "thumbs");

    if (!fs.existsSync(seriesDir)) {
      console.warn(`Skip missing directory: ${relativeDir}`);
      continue;
    }

    fs.mkdirSync(thumbsDir, { recursive: true });

    const files = fs
      .readdirSync(seriesDir)
      .filter((file) => isImageFile(file))
      .sort((a, b) => a.localeCompare(b));

    for (const file of files) {
      const sourcePath = path.join(seriesDir, file);
      const thumbPath = path.join(thumbsDir, thumbName(file));

      if (fs.existsSync(thumbPath)) {
        const sourceStat = fs.statSync(sourcePath);
        const thumbStat = fs.statSync(thumbPath);
        if (thumbStat.mtimeMs >= sourceStat.mtimeMs) {
          skipped += 1;
          continue;
        }
      }

      await generateThumb(sourcePath, thumbPath);
      created += 1;
    }

    console.log(
      `MOF thumbnails: ${relativeDir} (${files.length} sources, ${thumbsDir})`,
    );
  }

  console.log(
    `MOF thumbnail generation done — created/updated: ${created}, skipped: ${skipped}`,
  );
}

if (require.main === module) {
  generateMofThumbnails().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

import generateImageList from './scripts/generateImageList';
import generateMofThumbnails from './scripts/generateMofThumbnails';

(async () => {
  await generateImageList();
  await generateMofThumbnails();
  process.exit();
})();
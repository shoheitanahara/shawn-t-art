'use client';

import { useEffect } from 'react';

export default function SlashSheepModelBlack() {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    // 型エラーを避けるために @ts-expect-error を追加
    // @ts-expect-error
    <model-viewer
      src="/models/slashsheep-black.glb"
      camera-controls
      auto-rotate
      shadow-intensity="1"
      exposure="0.8"
      rotation-per-minute="0"
      orientation="0deg 0deg 240deg"
      style={{ width: '100%', height: '300px', background: '#505050' }}
    />
  );
}
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { tracks } from "./tracks";

export default function MusicPage() {
  return (
    <main className="w-full lg:w-3/4 px-6 md:px-12 lg:mx-auto pb-6">
      <h2 className="text-3xl font-bold text-center mb-8">Music</h2>

      <section
        aria-label="Music gallery"
        className="grid grid-cols-2 md:grid-cols-3 gap-2"
      >
        {tracks.map((track) => (
          <Dialog key={track.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{track.title}</CardTitle>
                  {track.artist ? (
                    <CardDescription>{track.artist}</CardDescription>
                  ) : null}
                  {track.year ? (
                    <CardDescription>{track.year}</CardDescription>
                  ) : null}
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={track.coverSrc}
                      alt={`${track.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </CardContent>

                {/* 一覧には歌詞を載せない（ここは無しでOK） */}
              </Card>
            </DialogTrigger>

            <DialogContent className="w-[90vw] max-w-3xl">
              <DialogHeader className="text-left">
                <DialogTitle>{track.title}</DialogTitle>
                {track.artist ? (
                  <DialogDescription>{track.artist}</DialogDescription>
                ) : null}
                {track.year ? (
                  <DialogDescription>{track.year}</DialogDescription>
                ) : null}
              </DialogHeader>

              <div className="grid gap-6 md:grid-cols-2">
                {/* 左：ジャケット + 再生 */}
                <div className="grid gap-4">
                <h3 className="text-base font-semibold">Jacket</h3>
                  <div className="relative aspect-square mx-auto w-1/2 md:w-full overflow-hidden rounded-md">
                    <Image
                      src={track.coverSrc}
                      alt={`${track.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={track.id === tracks[0]?.id} // 先頭だけ優先（任意）
                    />
                  </div>

                  <audio
                    className="w-full"
                    controls
                    preload="metadata"
                    src={track.audioSrc}
                  >
                    お使いのブラウザは audio タグに対応していません。
                  </audio>
                </div>

                {/* 右：歌詞（Dialogだけ） */}
                <div className="grid gap-2">
                  <h3 className="text-base font-semibold">Lyrics</h3>

                  {track.lyrics ? (
                    <div className="max-h-[30vh] md:max-h-[50vh] overflow-auto rounded-md p-4">
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {track.lyrics}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      歌詞は未登録です。
                    </p>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </section>
    </main>
  );
}
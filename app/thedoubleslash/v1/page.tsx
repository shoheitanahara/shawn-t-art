"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import DoubleSlashSpam from "@/components/doubleslash-spam";
import DoubleSlashLike from "@/components/doubleslash-like";
import DoubleSlashDenim from "@/components/doubleslash-denim";
import { v1Intro } from "@/app/thedoubleslash/data";

export default function TheDoubleSlashV1Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true);
      const response = await fetch(`/api/images/doubleslash?page=${page}`);
      const data = await response.json();

      if (Array.isArray(data.images) && typeof data.totalPages === "number") {
        setImages(data.images);
        setTotalPages(data.totalPages);
      } else {
        console.error("Error fetching images:", data.error);
      }
      setLoading(false);
    };

    fetchImages(currentPage);
  }, [currentPage]);

  return (
    <main
      id="top"
      className="flex min-h-screen w-full flex-col items-center justify-between px-6 pb-6 md:px-12"
    >
      <div className="flex w-full max-w-5xl flex-col items-center justify-center">
        <div className="mb-6 mt-4 w-full text-center lg:w-2/3">
          <p>
            <Link href="/thedoubleslash" className="underline underline-offset-4">
              ← The Double Slash (V2)
            </Link>
          </p>
        </div>

        <div className="mb-6 flex w-full items-center justify-center">
          <h2 className="text-center text-2xl font-bold">{v1Intro.title}</h2>
        </div>

        <div className="mb-6 w-full lg:w-2/3">
          {v1Intro.ja.map((text) => (
            <p key={text} className="mt-4 first:mt-0">
              {text}
            </p>
          ))}
          {v1Intro.en.map((text) => (
            <p key={text} className="mt-4">
              {text}
            </p>
          ))}
        </div>

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        <div
          id="doubleslash"
          className="mb-6 flex w-full scroll-mt-24 items-center justify-center"
        >
          <h2 className="text-2xl font-bold">The Double Slash</h2>
        </div>

        {loading ? (
          <div className="flex h-[700px] items-center justify-center text-lg md:h-[300px]">
            Loading...
          </div>
        ) : (
          <div className="z-10 grid w-full max-w-2xl grid-cols-1 items-center justify-between font-mono text-sm md:grid-cols-2">
            {images.map((image, index) => (
              <Card
                key={image}
                className="m-4 h-80 cursor-pointer overflow-hidden md:h-64 lg:h-64"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="grid gap-4">
                  <Image
                    src={image}
                    alt={`Image ${index}`}
                    width={500}
                    height={300}
                    className="h-full object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Pagination>
          <PaginationContent className="gap-5">
            <PaginationItem>
              <PaginationLink
                onClick={currentPage > 1 ? () => setCurrentPage(1) : undefined}
                className={`cursor-pointer ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
              >
                First
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious
                onClick={
                  currentPage > 1
                    ? () => setCurrentPage(currentPage - 1)
                    : undefined
                }
                className={`cursor-pointer ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
              />
            </PaginationItem>
            <PaginationItem>
              <span>{currentPage}</span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={
                  currentPage < totalPages
                    ? () => setCurrentPage(currentPage + 1)
                    : undefined
                }
                className={`cursor-pointer ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={
                  currentPage < totalPages
                    ? () => setCurrentPage(totalPages)
                    : undefined
                }
                className={`cursor-pointer ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
              >
                Last
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => {
            if (!open) setSelectedImage(null);
          }}
        >
          <DialogContent className="mx-auto w-[90%] max-w-xl">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Selected"
                width={800}
                height={600}
                className="h-auto max-w-full"
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center text-lg">
                Loading...
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="mb-6 mt-6 w-full lg:w-2/3 md:mb-12">
          <p>&quot;The Double Slash&quot;</p>
          <p>Year: 2025</p>
          <p>
            Creator:{" "}
            <a
              href="https://x.com/shawn_t_art"
              target="_blank"
              rel="noopener noreferrer"
            >
              @shawn_t_art
            </a>
          </p>
          <p className="mt-4">
            The Double Slash
            は「自由」と「抑圧」のあいだにある緊張を探るシリーズです。
            壊れやすい美しさの上に引かれた二重の黒い線は、覆い隠すと同時に、その存在をより鮮烈に浮かび上がらせます。
            黒い線は検閲や制限を象徴しながらも、同時に消し去れない抵抗の痕跡です。美は覆われても透けて見え、抑圧されるほどに強く存在を主張します。
            この二重線は装飾ではなく、現代社会の矛盾を映すシンボルであり、作家自身のアイコンです。観る者はその線を通して「奪われる自由」と「消えない力」を読み取るでしょう。
          </p>
          <p className="mt-4">
            The Double Slash is a series about the tension between freedom and
            oppression. Two black lines are drawn over fragile beauty. They try
            to cover it, but at the same time make it stand out even more.
            These lines symbolize censorship and control, yet they also show
            the traces of resistance that cannot be erased. Beauty can still be
            seen through the cover, and the more it is oppressed, the stronger
            it insists on its presence. The double slash is not decoration. It
            is a symbol of the contradictions of today’s society and has become
            the artist’s own icon. Through these lines, viewers can feel both
            the freedom that is taken away and the power that refuses to
            disappear.
          </p>
        </div>

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        <section id="doubleslash-spam" className="w-full scroll-mt-24">
          <DoubleSlashSpam />
        </section>

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        <section id="doubleslash-like" className="w-full scroll-mt-24">
          <DoubleSlashLike />
        </section>

        <hr className="mb-12 mt-12 w-full border-gray-300" />

        <section id="doubleslash-denim" className="w-full scroll-mt-24">
          <DoubleSlashDenim />
        </section>
      </div>
    </main>
  );
}

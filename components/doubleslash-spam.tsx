"use client";

import Image from "next/image";
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

const DoubleSlashSpam = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true);
      const response = await fetch(`/api/images/doubleslash-spam?page=${page}`);
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
    <div className="flex flex-col items-center justify-center">
      <div className="container mx-auto mb-6 flex items-center justify-center">
        <h2 className="text-2xl font-bold">The Double Slash - SPAM</h2>
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

      <div className="container mx-auto mb-6 mt-6 w-full px-0 lg:w-2/3 md:mb-12">
        <p>&quot;The Double Slash - SPAM&quot;</p>
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
          この作品は、否定からではなく、身近さから生まれました。
          SPAMは、沖縄で育った私にとって家庭の食卓に当たり前のようにあったもの。
          もともと保存食として作られ、戦争をきっかけに食料として世界中に広まり、
          その後、静かに日常の中に根づいていった存在です。
        </p>
        <p className="mt-4">
          その中には、“生き延びるための食”としての記憶、
          そして戦争という時代の痕跡が今も残っています。
          それを知りながら、私は今もこの日常を愛している。
          だからこそ、そこにある矛盾を強く感じます。
          戦争の影から広まったものが、平和の中でも愛され続けているということ。
        </p>
        <p className="mt-4">
          The Double Slash の二重線は、
          自由とコントロール、美と抑圧、記憶と習慣のあいだにある緊張を描いています。
          この線は、SPAMを否定するためではなく、
          “安らぎの中に眠る歴史”をそっと浮かび上がらせるためにあります。
        </p>
        <p className="mt-4">
          これは抗議ではなく、観察です。
          戦争と平和、過去と現在、愛と矛盾が、
          ひとつの缶の中で静かに共存している——その事実を見つめています。
        </p>
        <p className="mt-4">
          This work began not from rejection, but from familiarity.
          SPAM was simply one of the foods on my family’s table in Okinawa —
          a product that spread around the world as a source of food during wartime,
          and quietly became part of everyday life afterward.
        </p>
        <p className="mt-4">
          It carries traces of that history —
          a history born from survival and conflict —
          yet it also holds the comfort of home and peace.
          I don’t hate it.
          It’s part of what I grew up with, part of what I still love.
          But when I look at it now, I can’t ignore the contradiction —
          how something tied to war could become a symbol of daily life.
        </p>
        <p className="mt-4">
          In The Double Slash series, the parallel lines represent tension:
          between freedom and control, beauty and restraint, memory and habit.
          Here, they cut across SPAM not to reject it,
          but to reveal the quiet coexistence of history and comfort.
        </p>
        <p className="mt-4">
          This is not a protest.
          It’s a reflection on how war, peace, and daily life
          can live together in the same familiar object.
        </p>
      </div>
    </div>
  );
};

export default DoubleSlashSpam;

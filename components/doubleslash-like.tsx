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

const DoubleSlashLike = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true);
      const response = await fetch(`/api/images/doubleslash-like?page=${page}`);
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
        <h2 className="text-2xl font-bold">The Double Slash - LIKE</h2>
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
        <p>&quot;The Double Slash - LIKE&quot;</p>
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
          「いいね！」を集めるために投稿しているわけじゃない。
          数字に支配される生き方は、どこか違う気がする。
          それでも、いいね！をもらえるとやはり嬉しい。
        </p>
        <p className="mt-4">
          その素直な喜びと、胸の奥に残る違和感。
          そのふたつが、いつも心の中で同居している。
          この作品は、そんな揺れる感情をそのまま映し取ったものであり、
          同時に、現代を生きるすべての人が抱えるリアルでもあります。
        </p>
        <p className="mt-4">
          The Double Slash の二重線は、その葛藤を否定するためではなく、
          矛盾とともに生きることを肯定する線です。
          未完成であること、迷いを抱くこと。
          その不安定さこそが人間らしさなのだと、静かに語りかけます。
        </p>
        <p className="mt-4">
          LIKE と HEART の上を横切る赤い線は、
          承認欲求による抑圧と、自由への希求のあいだで揺れる“今”を描いています。
        </p>
        <p className="mt-4">
          I don’t post for likes.
          To live by numbers feels like losing something human.
          And yet, when a like appears — I still feel that quiet joy.
        </p>
        <p className="mt-4">
          That mixture of warmth and unease stays within me,
          and within all of us who live in this age of reflection and reaction.
          This work captures that shared tension —
          the tenderness and the discomfort of being seen.
        </p>
        <p className="mt-4">
          The two lines of The Double Slash do not deny the conflict;
          they affirm the beauty of living within it.
          To be unfinished, to be uncertain —
          that is what it means to be human.
        </p>
        <p className="mt-4">
          The red strokes across LIKE and HEART trace the fragile space
          between the pressure of wanting approval and the longing to remain free.
        </p>
      </div>
    </div>
  );
};

export default DoubleSlashLike;

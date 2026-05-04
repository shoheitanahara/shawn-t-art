import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const DoubleSlashDenim: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchImages = async (page: number) => {
      setLoading(true);
      const response = await fetch(`/api/images/doubleslash-denim?page=${page}`);
      const data = await response.json();

      if (Array.isArray(data.images) && typeof data.totalPages === 'number') {
        setImages(data.images);
        setTotalPages(data.totalPages);
      } else {
        console.error('Error fetching images:', data.error);
      }
      setLoading(false);
    };

    fetchImages(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container mx-auto flex justify-center items-center mb-6">
        <h2 className="text-2xl font-bold">The Double Slash - WWII Denim</h2>
      </div>

      {loading ? (
        <div className="text-lg h-[700px] md:h-[300px] flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm grid grid-cols-1 flex md:grid-cols-2 lg:grid-cols-2">
          {images.map((image, index) => (
            <Card
              key={index}
              className="m-4 cursor-pointer h-80 md:h-64 lg:h-64 overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="grid gap-4">
                <Image
                  src={image}
                  alt={`Image ${index}`}
                  width={500}
                  height={300}
                  className="object-cover h-full"
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
              className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              onClick={currentPage > 1 ? () => setCurrentPage(currentPage - 1) : undefined}
              className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </PaginationItem>
          <PaginationItem>
            <span>{currentPage}</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={currentPage < totalPages ? () => setCurrentPage(currentPage + 1) : undefined}
              className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={currentPage < totalPages ? () => setCurrentPage(totalPages) : undefined}
              className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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
        <DialogContent className="max-w-xl w-[90%] mx-auto">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className="max-w-full h-auto"
            />
          ) : (
            <div className="text-lg h-[400px] flex items-center justify-center">
              Loading...
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="container mx-auto w-auto lg:w-2/3 mb-6 md:mb-12 mt-6">
        <p>&quot;The Double Slash - WWII Denim&quot;</p>
        <p>Year: 2026</p>
        <p>
          Creator:{' '}
          <a
            href="https://x.com/shawn_t_art"
            target="_blank"
            rel="noopener noreferrer"
          >
            @shawn_t_art
          </a>
        </p>
        <p className="mt-4">
          大戦モデルのデニムは、いま古着市場で高い人気を持ち、ヴィンテージデニムを愛する私にとって憧れの象徴でもあります。
          一方でそれは、戦時中という限られた資源が武器へと優先される時代の中で、ディテールが簡略化され、
          その制約の中で生まれた美しさを持つ存在でもあります。
        </p>
        <p className="mt-4">
          その美しさに惹かれながらも、その背景にある歴史を無視することはできません。
        </p>
        <p className="mt-4">
          The Double Slash は、この憧れと葛藤を消すためのものではなく、そのまま受け止めるための印です。
          美しさと歴史、肯定できない感情と惹かれてしまう気持ちが同時に存在しているという、
          自己の中の矛盾をそのまま見つめるための作品です。
        </p>
        <p className="mt-4">
          WWII denim is very popular in the vintage market today. As a denim lover, it is a strong symbol of what I admire.
          At the same time, this model was made during the war. Materials like fabric and metal were limited and used for weapons,
          so the design was simplified. That limitation created a unique kind of beauty.
        </p>
        <p className="mt-4">
          I am drawn to this beauty, but I cannot ignore the history behind it.
        </p>
        <p className="mt-4">
          The Double Slash is not here to solve this conflict. It is a mark of accepting it.
          My admiration for the denim, and my discomfort with its background, both exist inside me. This work reflects that contradiction as it is.
        </p>
      </div>
    </div>
  );
};

export default DoubleSlashDenim;


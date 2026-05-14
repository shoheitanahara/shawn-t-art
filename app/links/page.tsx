import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Links",
};

function LinkSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 w-full">
      <h2 className="mb-5 text-base font-semibold uppercase tracking-[0.18em] text-white md:text-lg lg:text-xl">
        {title}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

const LinkPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pb-12 md:px-24">
      <div className="flex w-full flex-col lg:w-1/2">
        <h1 className="mb-10 text-center text-2xl font-bold">Links</h1>

        <LinkSection title="SNS">
          <a
            href="https://x.com/shawn_t_art"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>X / Twitter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/x.png"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>@shawn_t_art</span>
                </div>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://www.instagram.com/shawn_t_art/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/instagram.png"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>@shawn_t_art</span>
                </div>
              </CardContent>
            </Card>
          </a>
        </LinkSection>

        <LinkSection title="NFT">
          <a
            href="https://opensea.io/collection/the-double-slash"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>The Double Slash</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/opensea.png"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>OpenSea / Not for sale for now</span>
                </div>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://opensea.io/collection/marks-of-freedom"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>Marks of Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/opensea.png"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>OpenSea / Not for sale for now</span>
                </div>
              </CardContent>
            </Card>
          </a>
        </LinkSection>

        <LinkSection title="Music">
          <a
            href="https://open.spotify.com/artist/3ZYFGl1L2vffhP6ertkvXg"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>Mutant Hip Hop</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/spotify.png"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>Listen on Spotify.</span>
                </div>
              </CardContent>
            </Card>
          </a>
        </LinkSection>

        <LinkSection title="Project">
          <a
            href="https://www.spatial.io/s/sora-Halloween-ver-66bca7d4d0fe4cae0ac8cc9c?share=142495709783127535"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>SORA — Spatial Metaverse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/spatial.jpeg"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>
                    SORA creator team is building a metaverse for the culture.
                  </span>
                </div>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://nft.hexanft.com/users/mDZaBv93VPorsU/issued/SORA%20Halloween%202025"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>Hexa — SORA Halloween 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/hexa.png"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>
                    Hexa NFT. First music NFT collection for the SORA Halloween
                    event.
                  </span>
                </div>
              </CardContent>
            </Card>
          </a>
        </LinkSection>

        <LinkSection title="Meebits Commitment">
          <a
            href="https://meebits-runway.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle>Meebits Runway &amp; GIF</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Image
                    src="/images/links/4274.png"
                    alt=""
                    className="mr-4 h-auto w-8"
                    width={32}
                    height={32}
                  />
                  <span>Meebits are art.</span>
                </div>
              </CardContent>
            </Card>
          </a>
        </LinkSection>
      </div>
    </main>
  );
};

export default LinkPage;

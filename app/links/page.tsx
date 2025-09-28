
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const LinkPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-24 pb-6">
      <div className="flex flex-col w-full lg:w-1/2">
        <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>Twitter</CardTitle>
            </CardHeader>
            <CardContent>@shawn_t_art</CardContent>
          </Card>
        </a>
        <a href="https://www.instagram.com/shawn_t_art/" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>Instagram</CardTitle>
            </CardHeader>
            <CardContent>@shawn_t_art</CardContent>
          </Card>
        </a>
        <a href="https://www.spatial.io/s/sora-Halloween-ver-66bca7d4d0fe4cae0ac8cc9c?share=142495709783127535" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>SORA Spatial Metaverse</CardTitle>
            </CardHeader>
            <CardContent>SORA creater team is building a metaverse for the culture.</CardContent>
          </Card>
        </a>
        <a href="https://opensea.io/collection/the-double-slash" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>The Double Slash</CardTitle>
            </CardHeader>
            <CardContent>
              <p>OpenSea / Not for sale for now</p>
            </CardContent>
          </Card>
        </a>
        <a href="https://open.spotify.com/artist/3ZYFGl1L2vffhP6ertkvXg" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>Mutant Hip Hop</CardTitle>
            </CardHeader>
            <CardContent>
            <p>Listen to my music on Spotify.</p>
            </CardContent>
          </Card>
        </a>
        <a href="https://nft.hexanft.com/users/mDZaBv93VPorsU/issued/SORA%20Halloween%202025" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>SORA Halloween 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hexa NFT. My fist music NFT collection. For SORA Halloween event. </p>
            </CardContent>
          </Card>
        </a>
      </div>
    </main>
  );
};

export default LinkPage;


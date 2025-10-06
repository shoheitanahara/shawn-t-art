
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const LinkPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-24 pb-6">
      <div className="flex flex-col w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-center mb-4">Links</h2>
        <a href="https://x.com/shawn_t_art" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>X/Twitter</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex items-center">
                <img src="/images/links/x.png" alt="X Logo" className="w-8 h-auto mr-4" />
                <span>@shawn_t_art</span>
            </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://www.instagram.com/shawn_t_art/" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>Instagram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <img src="/images/links/instagram.png" alt="Instagram Logo" className="w-8 h-auto mr-4" />
                <span>@shawn_t_art</span>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://opensea.io/collection/the-double-slash" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>The Double Slash</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <img src="/images/links/opensea.png" alt="OpenSea Logo" className="w-8 h-auto mr-4" />
                <span>OpenSea / Not for sale for now</span>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://www.spatial.io/s/sora-Halloween-ver-66bca7d4d0fe4cae0ac8cc9c?share=142495709783127535" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>SORA Spatial Metaverse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <img src="/images/links/spatial.jpeg" alt="Spatial Logo" className="w-8 h-auto mr-4" />
                <span>SORA creater team is building a metaverse for the culture.</span>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://open.spotify.com/artist/3ZYFGl1L2vffhP6ertkvXg" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>Mutant Hip Hop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <img src="/images/links/spotify.png" alt="Spotify Logo" className="w-8 h-auto mr-4" />
                <span>Listen to my music on Spotify.</span>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="https://nft.hexanft.com/users/mDZaBv93VPorsU/issued/SORA%20Halloween%202025" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>SORA Halloween 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <img src="/images/links/hexa.png" alt="Hexa Logo" className="w-8 h-auto mr-4" />
                <span>Hexa NFT. My first music NFT collection. For SORA Halloween event.</span>
              </div>
            </CardContent>
          </Card>
        </a>
      </div>
    </main>
  );
};

export default LinkPage;


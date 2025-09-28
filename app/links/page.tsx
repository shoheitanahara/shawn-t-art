
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
        <a href="https://opensea.io/collection/the-double-slash" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>The Double Slash</CardTitle>
            </CardHeader>
            <CardContent>
              <p>OpenSea / Not for sale for now</p>
              <img src="/images/links/thedoubleslash.png" alt="OpenSea Thumbnail" className="w-full h-auto mt-2 mb-4" />
            </CardContent>
          </Card>
        </a>
        <a href="https://open.spotify.com/artist/3ZYFGl1L2vffhP6ertkvXg" target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Card>
            <CardHeader>
              <CardTitle>Mutant Hip Hop</CardTitle>
            </CardHeader>
            <CardContent>
            <p>Listen to music on Spotify.</p>
              <img src="/images/links/mutanthiphop.png" alt="Spotify Thumbnail" className="w-full h-auto mt-2mb-4" />
            </CardContent>
          </Card>
        </a>
      </div>
    </main>
  );
};

export default LinkPage;


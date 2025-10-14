import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// RootLayoutPropsの型を定義
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Shawn T. Art | The Double Slash',
  description: 'Welcome to Shawn T. Art. Explore how Japanese artist Shawn T. blends the raw energy of street culture with the precision of digital art. Known for "The Double Slash," his work transforms the tension between censorship and beauty into stunning visuals. As an NFT collector and creator, Shawn T. is actively shaping the Web3 art scene. His motto, "Every Star Starts as a Nobody," captures a quest to archive the hopes and contradictions of our time. Discover more on our site.',
  icons: {
    icon: '/favicon.ico', // faviconのパスを指定
  },
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="jp">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/*
        DarkModeの実装の影響
        Warning: Extra attributes from the server: class,style が
        発生するがきしなくてOK
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex justify-between items-center w-full px-6 md:px-24 pt-5 pb-6 md:pb-12">
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="outline" asChild>
                <Link href="/">Top</Link> 
              </Button>
            </div>
            <div className="text-2xl font-bold flex items-center space-x-2 md:space-x-4">
                <a href="/">Shawn T. Art</a>
            </div>
            <DropdownMenu>
              <div className="flex items-center border rounded-md">
                  <DropdownMenuTrigger className="flex items-center space-x-2 md:space-x-4 py-2 px-4">Menu</DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black">
                    <DropdownMenuItem>
                      <Link href="/about">About</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/philosophy">Philosophy</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/nft-manifest">NFT Manifest</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/videos">Videos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/collaborations">Collaborations</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/apparel">Apparel</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/event">Event</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/links">Links</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                  </div>

                </DropdownMenu>
          </nav>
          {children}
          <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} Shawn T. Art All rights
                reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
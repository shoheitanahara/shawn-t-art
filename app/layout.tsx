import type { Metadata } from 'next';
import '@/app/globals.css';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// RootLayoutPropsの型を定義
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'Shawn T. Art',
    template: '%s | Shawn T. Art',
  },
  description:
    'Japanese artist Shawn T. — art between freedom and control: Marks of Freedom, The Double Slash, SlashAnimal, and more.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="ja" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground">
        <nav className="flex w-full items-center justify-between px-6 pt-5 pb-6 md:px-24 md:pb-12">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            Shawn T. Art
          </Link>
          <DropdownMenu>
            <div className="flex items-center border rounded-md">
              <DropdownMenuTrigger className="flex items-center space-x-2 md:space-x-4 py-2 px-4">
                Menu
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black">
                <DropdownMenuItem>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/philosophy">Philosophy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/thedoubleslash">The Double Slash</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/motion">Motion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/marksoffreedom">Marks of Freedom</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/slashanimal">Slash Animal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/slashsheep-3d">Slash Sheep 3D</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/music">Music</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/collaborations">Zines / Collab</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/apparel">Apparel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="https://meebits-runway.vercel.app/">
                    Meebits Runway & GIF
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/event">Event</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/links">Links</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/nft-manifest">NFT Manifest</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>
        </nav>
        {children}
        <footer className="border-t border-border bg-background px-6 py-8 text-sm text-foreground md:px-24 md:py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 md:justify-start">
              <Link
                href="/links"
                className="text-foreground transition-opacity hover:opacity-80"
              >
                SNS / Links
              </Link>
              <span
                className="cursor-not-allowed text-foreground/45"
                title="Coming soon"
              >
                Shop
              </span>
            </nav>
            <p className="text-center text-foreground md:text-right">
              &copy; {new Date().getUTCFullYear()} Shawn T. Art All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
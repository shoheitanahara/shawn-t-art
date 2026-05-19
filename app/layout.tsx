import type { Metadata } from 'next';
import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { SiteMenu } from '@/components/site-menu';

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
            className="inline-flex shrink-0 transition-opacity hover:opacity-80"
            aria-label="Shawn T. Art — Home"
          >
            <Image
              src="/images/logo/shawn-t-art-logo.png"
              alt="Shawn T. Art"
              width={335}
              height={110}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <SiteMenu />
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
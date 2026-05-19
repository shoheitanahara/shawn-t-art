import type { Metadata } from 'next';
import '@/app/globals.css';
import Link from 'next/link';
import { SiteLogo } from '@/components/site-logo';
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
          <SiteLogo />
          <SiteMenu />
        </nav>
        {children}
        <footer className="border-t border-border bg-background px-6 py-10 text-sm text-foreground md:px-24 md:py-14">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
            <SiteLogo size="footer" />
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
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
            <p className="text-center text-foreground/80">
              &copy; {new Date().getUTCFullYear()} Shawn T. Art All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
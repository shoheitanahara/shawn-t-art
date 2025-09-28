import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';

// RootLayoutPropsの型を定義
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Shawn T. Art | CryptoStars',
  description: 'Explore the unique and imaginative world of Shawn T., a Japanese artist and musician. His work blends the vibrant energy of pop art with futuristic and vintage aesthetics. Discover a fast and seamless experience powered by cutting-edge technologies like Next.js, Vercel, and Tailwind CSS.',
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex justify-between items-center w-full px-6 md:px-24 pt-5 pb-6 md:pb-12">
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="outline" asChild>
                <Link href="/">Top</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cryptostars">CryptoStars</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button variant="outline" asChild>
                <Link href="/about">About</Link>
              </Button>
              <ModeToggle />
            </div>
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
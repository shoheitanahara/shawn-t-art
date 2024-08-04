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
  title: 'Shawn T. Art | A Fusion of Future and Vintage',
  description: 'Shawn T. Art | Showcasing unique and whimsical art influenced by pop art, blending futuristic visions with vintage aesthetics. Fast portfolio using the latest technologies like Next.js, Vercel, Tailwind CSS, Radix UI, and more.',
  icons: {
    icon: 'app/images/00200-495783960.png', // faviconのパスを指定
  },
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="jp">
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
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/">Top</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pfp">PFP</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link href="/about">About</Link>
              </Button>
              <ModeToggle />
            </div>
          </nav>
          <div className="container mx-auto flex justify-center items-center">
            <h1 className="text-4xl font-bold">Shawn T. Art</h1>
          </div>
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
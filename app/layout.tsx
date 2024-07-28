import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

// RootLayoutPropsの型を定義
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Shawn T. Art',
  description: 'Shawn T. Art | Showcasing our AI-generated art masterpieces. Fast portofolio using the latest technologies like Stable Diffusion, Next.js, Vercel, Tailwind CSS, Radix UI, and more.',
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
          {children}
          <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
              <p>
                &copy; {new Date().getFullYear()} Shawn T. All rights
                reserved.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { ThemeSwitcher } from 'ui';
import 'ui/globals.css';
import 'ui/style.css';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'QBAir',
  description: 'Technical Assessment for Sr. Software Engineer Frontend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-dvh h-full ${notoSans.variable}`}>
        <div className="absolute z-10 top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2">
          <ThemeSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}

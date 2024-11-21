import './globals.css';

import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';

const geistSans = Inter({
  variable: '--font-inter',
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap'
});
const geistMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  weight: 'variable',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Next.js 14 template',
  description: 'A Next.js template with Tailwind CSS and ESLint'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

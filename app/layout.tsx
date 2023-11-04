'use client'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }: any) {

  return (
      <html lang="en" data-theme={'winter'}>
      <body className={inter.className}>{children}</body>
      </html>
  );
}

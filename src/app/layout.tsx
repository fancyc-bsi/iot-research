// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import '@/styles/syntax.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IoT Security Research Blog',
  description: 'Exploring the security of IoT devices through detailed analysis and research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900`}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
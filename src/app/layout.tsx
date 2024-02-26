import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ConvexClientProvider from '@/lib/providers/convex';
import { ChildrenProps } from '@/types';
import { NextAuthProvider } from '@/lib/providers/next-auth';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthProvider>
          <ConvexClientProvider>
            {children}
          <Toaster richColors position="top-center" />
          </ConvexClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

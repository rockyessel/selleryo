import '@/styles/globals.css';

import { Toaster } from 'sonner';
import { ChildrenProps } from '@/types';
import { Inter } from 'next/font/google';
import ConvexClientProvider from '@/lib/providers/convex';
import { NextAuthProvider } from '@/lib/providers/next-auth';
import { ConvexStorageContextProvider } from '@/context/convex-storage';

const inter = Inter({ subsets: ['latin'] });

const GeneralLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthProvider>
          <ConvexClientProvider>
            <ConvexStorageContextProvider>
              {children}
              <Toaster richColors position='top-center' />
            </ConvexStorageContextProvider>
          </ConvexClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default GeneralLayout;

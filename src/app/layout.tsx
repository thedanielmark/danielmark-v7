import '@/styles/globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: '',
  description: ''
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'font-primary')} suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

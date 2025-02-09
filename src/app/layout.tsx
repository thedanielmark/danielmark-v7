import '@/styles/globals.css';

import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Open_Sans } from 'next/font/google';

import AppLayout from 'src/layouts/AppLayout';

export const metadata: Metadata = {
  title: 'Daniel Mark | Engineering Portfolio & Personal Website',
  description:
    "Experienced Web3 Front-End Engineer specializing in NFT platforms, DeFi applications, and blockchain integrations. With 7+ years in full-stack development, I've led multi-million-dollar projects, co-founded ventures, and built seamless, high-performance user experiences. Passionate about innovation, decentralization, and the intersection of design and technology.",
  openGraph: {
    type: 'website',
    url: 'https://thedanielmark.com/',
    title: 'Daniel Mark | Engineering Portfolio & Personal Website',
    description:
      "Experienced Web3 Front-End Engineer specializing in NFT platforms, DeFi applications, and blockchain integrations. With 7+ years in full-stack development, I've led multi-million-dollar projects, co-founded ventures, and built seamless, high-performance user experiences. Passionate about innovation, decentralization, and the intersection of design and technology.",
    images: [
      {
        url: 'https://thedanielmark.com/meta-image.jpg',
        width: 1200,
        height: 630,
        alt: "Daniel Mark's Portfolio"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Mark | Engineering Portfolio & Personal Website',
    description:
      "Experienced Web3 Front-End Engineer specializing in NFT platforms, DeFi applications, and blockchain integrations. With 7+ years in full-stack development, I've led multi-million-dollar projects, co-founded ventures, and built seamless, high-performance user experiences. Passionate about innovation, decentralization, and the intersection of design and technology.",
    images: ['https://thedanielmark.com/meta-image.jpg']
  }
};

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap'
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={openSans.className}>
      <body className="h-screen w-screen" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5T4LTF8F"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
};

export default RootLayout;

'use client';

import { motion } from 'framer-motion';
import HeadingSection from '@/components/HeadingSection';
import IntroSection from '@/components/IntroSection';
import WorkSection from '@/components/WorkSection';
import SocialLinks from '@/components/SocialLinks';
import { social } from 'src/utilities/socials';
import Script from 'next/script';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: unknown[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).clarity =
        (window as any).clarity ||
        function (...args: unknown[]) {
          ((window as any).clarity.q = (window as any).clarity.q || []).push(args);
        };
    }
  }, []);

  return (
    <motion.div initial="initial" animate="animate">
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
        })(window,document,'script','dataLayer','GTM-5T4LTF8F');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){ 
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; 
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; 
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); 
        })(window, document, "clarity", "script", "q74mfewi3p");`}
      </Script>
      <HeadingSection />
      <IntroSection />
      <WorkSection />
      <SocialLinks socials={social} />
    </motion.div>
  );
}

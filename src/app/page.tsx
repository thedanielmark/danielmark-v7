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

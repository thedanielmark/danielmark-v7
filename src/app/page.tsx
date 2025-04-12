'use client';

import { motion } from 'framer-motion';
import { HeadingSection } from '@/components/HeadingSection';
import { IntroSection } from '@/components/IntroSection';
import { WorkSection } from '@/components/WorkSection';
import { SocialLinks } from '@/components/SocialLinks';
import { social } from '@/utilities/socials';
import { ClarityScript } from '@/components/ClarityScript';

export default function HomePage() {
  return (
    <>
      <ClarityScript />
      <motion.div initial="initial" animate="animate" className="flex flex-col gap-y-5">
        <HeadingSection />
        <IntroSection />
        <WorkSection />
        <SocialLinks socials={social} />
      </motion.div>
    </>
  );
}

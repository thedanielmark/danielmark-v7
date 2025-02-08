'use client';

import { motion } from 'framer-motion';
import HeadingSection from '@/components/HeadingSection';
import IntroSection from '@/components/IntroSection';
import WorkSection from '@/components/WorkSection';
import SocialLinks from '@/components/SocialLinks';
import { social } from 'src/utilities/socials';

const HomePage = () => (
  <motion.div initial="initial" animate="animate">
    <HeadingSection />
    <IntroSection />
    <WorkSection />
    <SocialLinks socials={social} />
  </motion.div>
);

export default HomePage;

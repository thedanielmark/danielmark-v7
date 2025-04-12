'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] } }
};

export const HeadingSection = () => (
  <motion.section
    variants={fadeIn}
    initial="initial"
    animate="animate"
    aria-label="Daniel Mark - Web3 Engineer"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
      Hey there! My name is Daniel Mark.
    </h1>
  </motion.section>
);

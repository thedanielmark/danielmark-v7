'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const HeadingSection = () => (
  <motion.div variants={fadeIn}>
    <h1 className="text-3xl text-white font-bold">Hey there! My name is Daniel Mark.</h1>
  </motion.div>
);

export default HeadingSection;

'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const IntroSection = () => (
  <motion.div variants={fadeIn} initial="initial" animate="animate">
    <p className="text-zinc-500 text-lg md:text-xl font-normal leading-relaxed">
      I'm a front-end software engineer specializing in Web3, crafting seamless user experiences for
      NFT platforms, DeFi applications, and blockchain integrations. With 7+ years in full-stack
      development, I've led multi-million-dollar projects and co-founded successful ventures.
      Passionate about innovation, I bridge design, technology, and decentralized ecosystems.
    </p>
  </motion.div>
);

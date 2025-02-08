'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const IntroSection = () => (
  <motion.div variants={fadeIn} className="mt-5">
    <p className="text-zinc-400 font-regular">
      I'm a front-end software engineer specializing in Web3, crafting seamless user experiences for
      NFT platforms, DeFi applications, and blockchain integrations. With 7+ years in full-stack
      development, I've led multi-million-dollar projects and co-founded successful ventures.
      Passionate about innovation, I bridge design, technology, and decentralized ecosystems.
    </p>
  </motion.div>
);

export default IntroSection;

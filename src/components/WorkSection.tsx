'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] } }
};

export const WorkSection = () => (
  <motion.div variants={fadeIn} initial="initial" animate="animate">
    <p className="text-zinc-400 text-lg font-medium">
      I've had the privilege of working with some of the best companies in the industry.
    </p>
    <div className="flex flex-wrap justify-start gap-8 mt-6">
      <Link href="https://www.hashgraph.swiss/" target="_blank" aria-label="Hashgraph">
        <Image src="/logos/tha.png" alt="THA" width={120} height={48} className="object-contain" />
      </Link>
      <Link href="https://neo.org/" target="_blank" aria-label="Neo">
        <Image src="/logos/neo.png" alt="Neo" width={120} height={48} className="object-contain" />
      </Link>
      <Link href="https://www.hpe.com/" target="_blank" aria-label="HP Enterprise">
        <Image
          src="/logos/hpe.png"
          alt="HP Enterprise"
          width={120}
          height={48}
          className="object-contain"
        />
      </Link>
    </div>
  </motion.div>
);

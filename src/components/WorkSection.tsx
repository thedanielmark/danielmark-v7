'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const WorkSection = () => (
  <motion.div variants={fadeIn} className="mt-10">
    <p className="text-zinc-200 font-light">I've worked with some of the best companies so far.</p>
    <div className="flex items-center gap-10 mt-5">
      <Link href="https://www.hashgraph.swiss/" target="_blank">
        <Image src="/logos/tha.png" alt="THA" width={100} height={40} />
      </Link>
      <Link href="https://neo.org/" target="_blank">
        <Image src="/logos/neo.png" alt="Neo" width={100} height={40} />
      </Link>
      <Link href="https://www.hpe.com/" target="_blank">
        <Image src="/logos/hpe.png" alt="HP Enterprise" width={100} height={40} />
      </Link>
    </div>
  </motion.div>
);

export default WorkSection;

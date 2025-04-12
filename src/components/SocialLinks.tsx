import { motion } from 'framer-motion';
import { JSX, SVGProps } from 'react';

interface SocialLink {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] } }
};

export const SocialLinks = ({ socials }: { socials: SocialLink[] }) => (
  <motion.div variants={fadeIn} initial="initial" animate="animate">
    <p className="text-zinc-400 text-lg font-medium">Let's build the future of Web3 together.</p>
    <div className="mt-5 flex space-x-8">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 dark:hover:text-zinc-200 transition-colors duration-300 ease-in-out"
        >
          <span className="sr-only">{name}</span>
          <Icon className="h-7 w-7" aria-hidden="true" />
        </a>
      ))}
    </div>
  </motion.div>
);

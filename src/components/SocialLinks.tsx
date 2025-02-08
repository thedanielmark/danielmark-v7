import { motion } from 'framer-motion';
import { JSX, SVGProps } from 'react';

interface SocialLink {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2.5, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const SocialLinks = ({ socials }: { socials: SocialLink[] }) => (
  <motion.div variants={fadeIn} className="mt-12">
    <p className="text-zinc-200 font-light">Let's build the future of Web3 together.</p>
    <div className="mt-3 flex justify-start space-x-6">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_top"
          className="text-gray-400 hover:text-gray-500 dark:hover:text-zinc-200 duration-200 ease-in-out"
        >
          <span className="sr-only">{name}</span>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  </motion.div>
);

export default SocialLinks;

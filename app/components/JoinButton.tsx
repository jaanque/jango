'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const JoinButton = () => {
  return (
    <Link href="/register" passHref>
      <motion.div
        className="group hidden sm:inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Únete Ahora</span>
        <ArrowIcon />
      </motion.div>
    </Link>
  );
};

export default JoinButton;

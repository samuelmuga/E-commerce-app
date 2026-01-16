
"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProductGrid({ children }: any) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
    >
      {children.map((child: any, i: number) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

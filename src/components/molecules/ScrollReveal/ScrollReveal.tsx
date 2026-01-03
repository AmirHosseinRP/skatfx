"use client";

import { motion, useInView } from "motion/react";
import { type PropsWithChildren, useRef } from "react";

interface Props {
  delay?: number;
  className?: string;
}

export default function ScrollReveal(props: PropsWithChildren<Props>) {
  const { children, delay = 0, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

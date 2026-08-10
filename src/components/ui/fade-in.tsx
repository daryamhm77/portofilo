"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
  x?: number;
  y?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  inView = true,
  x = 0,
  y = 24,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}
      {...(inView
        ? {
            whileInView: { opacity: 1, x: 0, y: 0 },
            viewport: { once: true, margin: "-80px" },
          }
        : { animate: { opacity: 1, x: 0, y: 0 } })}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

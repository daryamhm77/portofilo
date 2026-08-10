"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";

type Metric = {
  value: number | "infinity";
  suffix: string;
  label: string;
};

const METRICS: Metric[] = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: "infinity", suffix: "", label: "Problems Solved" },
];

export function Metrics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <FadeIn>
        <div className="grid grid-cols-2 gap-y-12 rounded-3xl border border-edge bg-surface px-8 py-10 md:grid-cols-4 md:px-4">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center gap-1 text-center md:border-l md:border-edge md:first:border-l-0"
            >
              <div className="font-mono text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <p className="text-sm text-subtle">{m.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function Counter({ value, suffix }: { value: number | "infinity"; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === "infinity") return;

    const controls = animate(0, value, {
      duration: reduceMotion ? 0 : 1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {value === "infinity" ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          ∞
        </motion.span>
      ) : (
        <>
          {display}
          {suffix}
        </>
      )}
    </span>
  );
}

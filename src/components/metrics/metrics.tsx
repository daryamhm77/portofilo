"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";

const METRICS = [
  { value: 15, suffix: "+", label: "Microservices" },
] as const;

export function Metrics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <FadeIn>
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-edge bg-surface px-8 py-12 text-center md:flex-row md:gap-16 md:py-14">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1">
              <div className="font-mono text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <p className="font-mono text-sm tracking-[0.12em] text-subtle uppercase">
                {m.label}
              </p>
              <p className="mt-2 max-w-xs text-xs text-muted">
                Verified from ETM Passport — a 15+ NestJS microservices architecture.
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: reduceMotion ? 0 : 1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

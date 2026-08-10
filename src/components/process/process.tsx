"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand the problem.",
  },
  {
    number: "02",
    title: "Architect",
    desc: "Design the system.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Implement the product.",
  },
  {
    number: "04",
    title: "Validate",
    desc: "Test, optimize and secure.",
  },
  {
    number: "05",
    title: "Ship",
    desc: "Deploy and monitor.",
  },
];

export function Process() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Process"
        title="From idea to production."
        description="A clear path from discovery through shipping and monitoring."
      />

      <div ref={ref} className="relative mt-14">
        <div className="absolute left-0 right-0 top-5 hidden h-px bg-edge md:block" />
        <motion.div
          style={{ scaleX: reduceMotion ? 1 : scrollYProgress }}
          className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-accent md:block"
        />

        <ol className="grid gap-6 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.number} className="relative">
              <FadeIn delay={i * 0.06}>
                <div className="rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-accent/30 md:border-0 md:bg-transparent md:p-0">
                  <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-background font-mono text-xs text-accent shadow-[0_0_0_4px_rgba(59,158,255,0.12)]">
                    {s.number}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight uppercase">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

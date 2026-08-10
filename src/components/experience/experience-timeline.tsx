"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const EXPERIENCE = [
  {
    company: "PANTOhealth",
    role: "Backend Developer",
    period: "2025 — Present",
    items: ["REST / GraphQL APIs", "Database architecture", "Redis caching", "RabbitMQ", "Docker", "Testing"],
  },
  {
    company: "Selltory",
    role: "Full-Stack Developer",
    period: "2024 — 2025",
    items: ["REST / GraphQL APIs", "Database architecture", "Redis caching", "RabbitMQ", "Docker", "Testing"],
  },
  {
    company: "KalaLotous",
    role: "Backend Developer",
    period: "2023 — 2024",
    items: ["REST / GraphQL APIs", "Database architecture", "Redis caching", "RabbitMQ", "Docker", "Testing"],
  },
];

export function Experience() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Career"
        title="Experience"
        description="Where I've built production systems."
      />

      <div ref={ref} className="relative mt-14 pl-12">
        <div className="absolute bottom-2 left-0 top-2 w-px bg-edge" />
        <motion.div
          style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
          className="absolute bottom-2 left-0 top-2 w-px origin-top bg-accent"
        />

        <ol className="space-y-14">
          {EXPERIENCE.map((e, i) => (
            <li key={e.company} className="relative">
              <span className="absolute left-[-48px] top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(52,211,153,0.15)]" />
              <FadeIn delay={i * 0.08}>
                <div className="rounded-2xl border border-edge bg-surface p-7 transition-colors hover:border-accent/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                    <span className="font-mono text-xs text-accent">{e.period}</span>
                  </div>
                  <p className="mt-1 font-mono text-sm text-subtle">{e.company}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {e.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-edge px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

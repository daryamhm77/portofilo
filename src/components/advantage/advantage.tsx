"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { TEAM } from "@/lib/site";

const DARYA = [
  "NestJS",
  "Next.js",
  "Microservices",
  "APIs",
  "Databases",
  "Messaging",
  "Real-Time Systems",
  "Cloud Infrastructure",
];

const NIMA = [
  "Next.js",
  "React",
  "TypeScript",
  "Frontend Architecture",
  "IC Design",
  "RTL",
  "Embedded Systems",
  "Simulation",
];

export function Advantage() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="advantage" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Advantage"
        title="Two disciplines. One engineering mindset."
        description="Backend & full-stack with NestJS and Next.js, plus frontend and deep-tech architecture — connected into real products."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <FadeIn y={24} className="h-full">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface p-8 transition-colors hover:border-accent/40">
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(100% 80% at 0% 0%, rgba(59,158,255,0.12), transparent 65%)",
              }}
            />
            <p className="relative font-mono text-xs tracking-[0.18em] text-accent uppercase">
              {TEAM.darya.name.split(" ")[0]}
            </p>
            <h3 className="relative mt-3 text-xl font-semibold tracking-tight">
              Backend &amp; Full-Stack
            </h3>
            <ul className="relative mt-8 space-y-3">
              {DARYA.map((item) => (
                <li key={item} className="font-mono text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {["BACKEND", "FULL-STACK", "NESTJS", "NEXT.JS"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] tracking-wide text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn y={24} delay={0.1} className="h-full">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface p-8 transition-colors hover:border-accent-violet/40">
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(100% 80% at 100% 0%, rgba(139,92,246,0.14), transparent 65%)",
              }}
            />
            <p className="relative font-mono text-xs tracking-[0.18em] text-accent-violet uppercase">
              {TEAM.nima.name.split(" ")[0]}
            </p>
            <h3 className="relative mt-3 text-xl font-semibold tracking-tight">
              Frontend &amp; Deep Tech
            </h3>
            <ul className="relative mt-8 space-y-3">
              {NIMA.map((item) => (
                <li key={item} className="font-mono text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {["FRONTEND", "NEXT.JS", "REACT", "DEEP-TECH"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-accent-violet/30 bg-accent-violet/10 px-2.5 py-1 font-mono text-[10px] tracking-wide text-accent-violet"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.15}>
        <div className="mt-5 overflow-hidden rounded-2xl border border-edge bg-surface px-6 py-10 text-center">
          <p className="font-mono text-sm tracking-tight text-foreground">
            WHISPER<span className="text-accent">⚡</span>VOLT
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-muted sm:gap-6">
            <span>SOFTWARE</span>
            <motion.span
              aria-hidden="true"
              className="text-accent"
              animate={reduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              ◄──────────────►
            </motion.span>
            <span>HARDWARE</span>
          </div>
          <p className="mt-6 font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
            System Architecture → Real Products
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

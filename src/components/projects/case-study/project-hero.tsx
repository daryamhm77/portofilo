"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/projects";
import { ProjectMockup } from "@/components/projects/project-mockup";
import { FadeIn } from "@/components/ui/fade-in";

export function ProjectHero({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(52,211,153,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-24 md:pt-36">
        <FadeIn inView={false}>
          <Link
            href="/#work"
            className="font-mono text-sm text-subtle transition-colors hover:text-accent"
          >
            ← Back to Work
          </Link>
        </FadeIn>

        <div className="mt-12 max-w-3xl">
          <FadeIn inView={false}>
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
              Case Study
            </p>
          </FadeIn>
          <FadeIn inView={false} delay={0.08}>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
          </FadeIn>
          <FadeIn inView={false} delay={0.16}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {project.description}
            </p>
          </FadeIn>
          <FadeIn inView={false} delay={0.24}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-edge px-3.5 py-1.5 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn inView={false} delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-[#03251a] transition-colors hover:bg-accent-strong"
              >
                Live Demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full border border-edge-strong px-6 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </FadeIn>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16"
        >
          <motion.div style={reduceMotion ? undefined : { y }}>
            <div className="overflow-hidden rounded-2xl border border-edge bg-surface shadow-[0_32px_90px_-32px_rgba(0,0,0,0.9)]">
              <ProjectMockup title={project.name} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

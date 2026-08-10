"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { PROJECTS } from "@/lib/projects";
import { ProjectMockup } from "@/components/projects/project-mockup";
import { SectionHeading } from "@/components/ui/section";

export function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Work"
        title="Selected Work"
        description="A selection of systems and applications I've designed and built."
      />

      <div className="mt-16 flex flex-col gap-24 md:gap-32">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} slug={p.slug} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          View All Projects
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ slug, flip }: { slug: string; flip: boolean }) {
  const project = PROJECTS.find((p) => p.slug === slug)!;
  const reduceMotion = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);

  const image = (
    <div ref={imgRef} className="overflow-hidden">
      <motion.div style={reduceMotion ? undefined : { y }}>
        <Link
          href={`/projects/${project.slug}`}
          className="group block overflow-hidden rounded-2xl border border-edge bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)] transition-colors hover:border-accent/40"
        >
          <ProjectMockup title={project.name} />
        </Link>
      </motion.div>
    </div>
  );

  const info = (
    <div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="rounded-full border border-edge px-3 py-1 font-mono text-[11px] text-subtle"
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
        {project.name}
      </h3>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{project.short}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent"
      >
        View Case Study
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </div>
  );

  return (
    <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: flip ? -60 : 60 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={flip ? "md:order-2" : ""}
      >
        {image}
      </motion.div>
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: flip ? 60 : -60 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={flip ? "md:order-1" : ""}
      >
        {info}
      </motion.div>
    </article>
  );
}

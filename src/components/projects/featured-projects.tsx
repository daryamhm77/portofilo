"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/section";

export function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Systems we've built."
        description="Production platforms spanning SaaS products, agency sites, distributed backends, and deep-tech engineering."
      />

      <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} slug={p.slug} index={i} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          View All Projects
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ slug, index }: { slug: string; index: number }) {
  const project = PROJECTS.find((p) => p.slug === slug)!;
  const reduceMotion = useReducedMotion();
  const isDeepTech = project.variant === "deep-tech";
  const stack = (project.frontend ?? project.technologies).slice(0, 5);
  const features = (project.features ?? project.architecture ?? []).slice(0, 4);

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-edge bg-surface transition-colors duration-300 hover:border-accent/40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isDeepTech
            ? "radial-gradient(80% 60% at 80% 0%, rgba(139,92,246,0.12), transparent 70%)"
            : "radial-gradient(80% 60% at 20% 0%, rgba(59,158,255,0.1), transparent 70%)",
        }}
      />

      <Link href={`/work/${project.slug}`} className="relative flex h-full flex-1 flex-col">
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-edge bg-surface-2">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-xs tracking-[0.2em] text-subtle uppercase">
              {project.name}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-7 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs text-accent">
              Project {String(index + 1).padStart(2, "0")}
            </span>
            {project.role && (
              <span className="font-mono text-[11px] text-subtle">{project.role}</span>
            )}
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 line-clamp-1 text-sm text-accent">{project.short}</p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {features.length > 0 && (
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="line-clamp-1">{f}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-1.5 border-t border-edge pt-5">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-edge px-2 py-1 font-mono text-[10px] text-subtle"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                View Case Study
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              {project.demo && (
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-subtle">
                  Live
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

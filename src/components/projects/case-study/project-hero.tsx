import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { FadeIn } from "@/components/ui/fade-in";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(59,158,255,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 md:pb-20 md:pt-36">
        <FadeIn inView={false}>
          <Link
            href="/work"
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
          {project.role && (
            <FadeIn inView={false} delay={0.1}>
              <p className="mt-3 font-mono text-xs text-subtle">{project.role}</p>
            </FadeIn>
          )}
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
          {(project.demo || project.github) && (
            <FadeIn inView={false} delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-[#041018] transition-colors hover:bg-accent-strong"
                  >
                    Visit Live Site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center rounded-full border border-edge-strong px-6 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}

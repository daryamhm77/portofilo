import Link from "next/link";
import type { Project } from "@/lib/projects";
import { FadeIn } from "@/components/ui/fade-in";

export function NextProject({ project }: { project: Project | null }) {
  if (project) {
    return (
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-6">
        <FadeIn>
          <Link
            href={`/projects/${project.slug}`}
            className="group flex flex-col gap-6 rounded-3xl border border-edge bg-surface p-10 transition-colors hover:border-accent/50 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
                Next Project
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{project.name}</h2>
              <p className="mt-2 max-w-lg text-muted">{project.short}</p>
            </div>
            <span className="text-2xl text-subtle transition-all group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
          </Link>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-6">
      <FadeIn>
        <div className="rounded-3xl border border-edge bg-surface p-10 text-center sm:p-16">
          <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
            Let&apos;s talk
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Tell me what you&apos;re building and I&apos;ll show you how to take it from idea to
            production.
          </p>
          <a
            href="mailto:hello@darya.dev"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-semibold text-[#03251a] transition-colors hover:bg-accent-strong"
          >
            Start a Project
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

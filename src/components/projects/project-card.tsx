import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectMockup } from "@/components/projects/project-mockup";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface transition-colors hover:border-accent/40"
    >
      <ProjectMockup title={project.name} />
      <div className="flex flex-1 flex-col p-6">
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
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          View Case Study
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}

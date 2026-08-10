import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectMockup } from "@/components/projects/project-mockup";

export function ProjectCard({ project }: { project: Project }) {
  const stack = (project.frontend ?? project.technologies).slice(0, 3);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface transition-colors hover:border-accent/40"
    >
      {project.image ? (
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-edge bg-surface-2">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="shrink-0 overflow-hidden border-b border-edge">
          <ProjectMockup title={project.name} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex min-h-[1.75rem] flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-edge px-3 py-1 font-mono text-[11px] text-subtle"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-4 line-clamp-1 text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {project.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          View Case Study
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}

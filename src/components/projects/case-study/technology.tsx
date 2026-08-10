import type { Project } from "@/lib/projects";
import { CaseStudySection } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Technology({ project }: { project: Project }) {
  const hasSplit = Boolean(project.frontend?.length || project.backend?.length);

  return (
    <CaseStudySection
      eyebrow="Stack"
      title="Technology"
      description={
        hasSplit
          ? "Frontend and backend stacks used to ship this product."
          : undefined
      }
    >
      {hasSplit ? (
        <div className="grid gap-5 md:grid-cols-2">
          {project.frontend && project.frontend.length > 0 && (
            <FadeIn>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
                  Frontend
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.frontend.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-edge px-3.5 py-1.5 font-mono text-sm text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
          {project.backend && project.backend.length > 0 && (
            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-edge bg-surface p-6">
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent-violet uppercase">
                  Backend
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.backend.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-edge px-3.5 py-1.5 font-mono text-sm text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      ) : (
        <FadeIn>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-edge px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
      )}
    </CaseStudySection>
  );
}

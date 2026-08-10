import type { Project } from "@/lib/projects";
import { CaseStudySection } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Results({ results }: { results: Project["results"] }) {
  return (
    <CaseStudySection eyebrow="Outcome" title="Results">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {results.map((r, i) => (
          <FadeIn key={r.label} delay={i * 0.06} className="h-full">
            <div className="h-full rounded-2xl border border-edge bg-surface p-7 text-center">
              <div className="font-mono text-3xl font-semibold tracking-tight text-accent">
                {r.value}
              </div>
              <p className="mt-2 text-sm text-subtle">{r.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </CaseStudySection>
  );
}

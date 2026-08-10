import type { Project } from "@/lib/projects";
import { CaseStudySection } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Challenges({ challenges }: { challenges: Project["challenges"] }) {
  return (
    <CaseStudySection eyebrow="Difficult Parts" title="Challenges">
      <div className="space-y-4">
        {challenges.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.06}>
            <div className="flex gap-6 rounded-2xl border border-edge bg-surface p-7">
              <span className="font-mono text-2xl font-semibold text-subtle">0{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </CaseStudySection>
  );
}

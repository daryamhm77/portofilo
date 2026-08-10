import { CaseStudySection } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Technology({ technologies }: { technologies: string[] }) {
  return (
    <CaseStudySection eyebrow="Stack" title="Technology">
      <FadeIn>
        <div className="flex flex-wrap gap-3">
          {technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-edge px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </FadeIn>
    </CaseStudySection>
  );
}

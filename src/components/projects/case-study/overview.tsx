import { CaseStudySection } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Overview({ overview }: { overview: string }) {
  return (
    <CaseStudySection eyebrow="Overview" title="Project Overview">
      <FadeIn>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{overview}</p>
      </FadeIn>
    </CaseStudySection>
  );
}

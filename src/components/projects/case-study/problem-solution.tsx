import type { Project } from "@/lib/projects";
import { CaseStudySection } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function ProblemSolution({
  problem,
  solution,
}: {
  problem: Project["problem"];
  solution: string[];
}) {
  return (
    <CaseStudySection eyebrow="Problem / Solution" title="From Problem to Solution">
      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <FadeIn x={-30} y={0}>
          <div className="h-full rounded-2xl border border-edge bg-surface p-8">
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-[#f87171]/80 uppercase">
              The Problem
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">{problem.text}</p>
            <ul className="mt-5 space-y-2.5">
              {problem.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 text-[#f87171]/60">−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn x={30} y={0}>
          <div className="h-full rounded-2xl border border-accent/25 bg-surface p-8">
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
              The Solution
            </p>
            <div className="mt-5 space-y-4">
              {solution.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </CaseStudySection>
  );
}

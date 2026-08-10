import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/fade-in";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <FadeIn>
        <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
          {eyebrow}
        </p>
      </FadeIn>
      <FadeIn delay={0.06}>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </FadeIn>
      )}
    </div>
  );
}

type CaseStudySectionProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
};

export function CaseStudySection({
  eyebrow,
  title,
  description,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}

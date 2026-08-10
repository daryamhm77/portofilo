import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const PRINCIPLES = [
  {
    title: "Architecture First",
    desc: "Understand the system before implementing it.",
  },
  {
    title: "Designed for Change",
    desc: "Build boundaries that allow systems to evolve.",
  },
  {
    title: "Performance Matters",
    desc: "Optimize the right bottlenecks instead of prematurely optimizing everything.",
  },
  {
    title: "Security by Design",
    desc: "Authentication, authorization, data protection and secure infrastructure are part of engineering—not afterthoughts.",
  },
  {
    title: "Observable Systems",
    desc: "Production systems should be measurable, debuggable and maintainable.",
  },
  {
    title: "Hardware & Software Should Speak",
    desc: "When software meets physical systems, architecture must consider both sides.",
  },
];

export function EngineeringPrinciples() {
  return (
    <section id="philosophy" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Engineering Philosophy"
        title="We don't just write code. We engineer systems."
        description="Six principles behind every WhisperVolt engagement."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <FadeIn key={p.title} y={30} delay={(i % 3) * 0.08} className="h-full">
            <div className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
              <span className="font-mono text-sm text-subtle transition-colors group-hover:text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
              <div className="mt-3 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const PRINCIPLES = [
  { title: "Clean Architecture", desc: "Readable systems. Clear boundaries. Maintainable code." },
  { title: "Type Safety", desc: "Types as contracts — catch errors before they reach production." },
  { title: "Secure by Design", desc: "Auth, validation and least privilege baked in from the start." },
  { title: "Testable Systems", desc: "Dependency-injected, testable modules from day one." },
  { title: "Scalable Infrastructure", desc: "Designed to grow horizontally and predictably." },
  { title: "Observability", desc: "Logs, metrics and tracing so production is understandable." },
];

export function EngineeringPrinciples() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Approach"
        title="How I Engineer"
        description="The principles behind every system I build."
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
              <p className="mt-4 translate-y-1.5 text-sm leading-relaxed text-muted opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {p.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

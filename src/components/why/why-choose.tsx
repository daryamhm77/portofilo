import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const REASONS = [
  {
    number: "01",
    title: "Engineering Depth",
    desc: "Not just UI implementation. We understand the systems underneath.",
  },
  {
    number: "02",
    title: "Full-Stack Capability",
    desc: "Frontend + backend + infrastructure.",
  },
  {
    number: "03",
    title: "Distributed Systems",
    desc: "Microservices, messaging, caching and real-time systems.",
  },
  {
    number: "04",
    title: "Deep-Tech Experience",
    desc: "IC, RTL, embedded systems and physical simulation.",
  },
  {
    number: "05",
    title: "Production Mindset",
    desc: "Docker, CI/CD, testing, security and deployment.",
  },
  {
    number: "06",
    title: "Long-Term Architecture",
    desc: "Systems designed to evolve with the product.",
  },
];

export function WhyChoose() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Why WhisperVolt"
        title="Why clients choose WhisperVolt"
        description="Depth across software and deep-tech, with a production-first mindset."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <FadeIn key={r.number} y={24} delay={(i % 3) * 0.07} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-edge bg-surface p-7 transition-colors hover:border-accent/40">
              <span className="font-mono text-xs text-accent">{r.number}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

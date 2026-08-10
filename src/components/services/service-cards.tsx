import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const SERVICES = [
  {
    number: "01",
    title: "Backend Development",
    sub: "NestJS / Node.js",
    description:
      "Production-ready APIs, authentication, business logic, database architecture and integrations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Full-Stack Development",
    sub: "Next.js + NestJS",
    description:
      "Complete web applications with modern frontend and scalable backend architecture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "System Architecture",
    sub: "Microservices / Event-driven",
    description:
      "Designing systems that remain maintainable as products and teams grow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25 4.5 5.25v5.25c0 4.875 3.188 9.24 7.5 10.5 4.312-1.26 7.5-5.625 7.5-10.5V5.25L12 2.25ZM9.75 14.25l3-3m0 0 3 3m-3-3v6"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Performance & Infrastructure",
    sub: "Redis / Docker / PostgreSQL",
    description:
      "Database optimization, caching, queues and production infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5h4.5l1.5-6 3 12 2.25-9 1.5 3h4.5"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Services"
        title="What I Build"
        description="From backend architecture to complete web applications, I build reliable software designed for real-world production."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.number} y={30} delay={i * 0.1} className="h-full">
            <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-edge bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 50% 0%, rgba(52,211,153,0.09), transparent 70%)",
                }}
              />
              <div className="relative flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-edge bg-surface-2 text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/40">
                  {s.icon}
                </div>
                <span className="font-mono text-xs text-subtle">{s.number}</span>
              </div>
              <div className="relative">
                <p className="font-mono text-[11px] tracking-wide text-accent uppercase">{s.sub}</p>
                <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

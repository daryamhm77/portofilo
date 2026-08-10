import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const BUILDS = [
  {
    number: "01",
    title: "Full-Stack Applications",
    description:
      "We design and build modern web applications using Next.js, React, TypeScript and scalable backend architectures.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "Node.js"],
  },
  {
    number: "02",
    title: "Backend & Distributed Systems",
    description:
      "Production-grade APIs and distributed services designed for reliability, performance and scale.",
    tech: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "GraphQL", "WebSockets"],
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    description:
      "We build deployment and infrastructure foundations that allow applications to operate reliably in production.",
    tech: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "Linux", "AWS S3", "MinIO", "Redis"],
  },
  {
    number: "04",
    title: "Hardware / Software Co-Design",
    description: "Bridging software systems with physical engineering.",
    tech: ["VHDL", "Verilog", "STM32", "ESP32", "AVR", "Embedded Systems"],
  },
  {
    number: "05",
    title: "IC & Digital Engineering",
    description: "Deep-tech engineering from RTL logic to silicon-level architecture.",
    tech: ["CMOS", "Digital IC Design", "RTL", "VHDL", "Verilog", "Digital Verification", "Timing & Power"],
  },
  {
    number: "06",
    title: "Simulation & Engineering Modeling",
    description: "Physical modeling and simulation across electromagnetic and circuit domains.",
    tech: ["Ansys", "SPICE", "LTspice", "Proteus", "MATLAB", "Simulink", "DSP"],
  },
];

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="What We Build"
        title="From product idea to production system."
        description="Software, infrastructure, and deep-tech engineering under one roof."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {BUILDS.map((b, i) => (
          <FadeIn key={b.number} y={30} delay={(i % 2) * 0.08} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-accent">{b.number}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{b.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{b.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {b.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-edge bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-subtle transition-colors group-hover:border-accent/30 group-hover:text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

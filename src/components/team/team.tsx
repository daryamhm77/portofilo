"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section";
import { TEAM } from "@/lib/site";

const DARYA_CORE = [
  "NestJS",
  "Next.js",
  "Node.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Docker",
  "AWS S3",
  "MinIO",
  "GraphQL",
  "WebSockets",
];

const DARYA_ARCH = [
  "Microservices",
  "Hexagonal Architecture",
  "Clean Architecture",
  "DDD",
  "CQRS",
  "Event-Driven Architecture",
  "API Gateway",
];

const NIMA_FRONTEND = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "GitHub Actions",
  "Nginx",
  "Vercel",
];

const NIMA_HARDWARE = [
  "VHDL",
  "Verilog",
  "CMOS",
  "IC Design",
  "STM32",
  "ESP32",
  "AVR",
  "RTL Verification",
  "Ansys",
  "SPICE",
  "LTspice",
  "Proteus",
  "MATLAB",
  "Simulink",
  "DSP",
];

export function Team() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Team"
        title="Meet the engineers."
        description="A backend & full-stack engineer and a frontend & deep-tech architect building as one studio."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="group rounded-2xl border border-edge bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
        >
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Backend &amp; Full-Stack
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{TEAM.darya.name}</h3>
          <p className="mt-1 text-sm text-muted">{TEAM.darya.role}</p>
          <p className="mt-1 font-mono text-xs text-subtle">{TEAM.darya.focus}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">{TEAM.darya.bio}</p>

          <div className="mt-5 flex gap-4 font-mono text-xs text-subtle">
            <a
              href={TEAM.darya.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub →
            </a>
            <a
              href={TEAM.darya.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn →
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">Core</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DARYA_CORE.map((t) => (
              <span
                key={t}
                className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-subtle"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
            Architecture
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DARYA_ARCH.map((t) => (
              <span
                key={t}
                className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-subtle"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.08 }}
          className="group rounded-2xl border border-edge bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40"
        >
          <p className="font-mono text-xs tracking-[0.18em] text-accent-violet uppercase">
            Frontend &amp; Deep Tech
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{TEAM.nima.name}</h3>
          <p className="mt-1 text-sm text-muted">{TEAM.nima.role}</p>
          <p className="mt-1 font-mono text-xs text-subtle">{TEAM.nima.focus}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">{TEAM.nima.bio}</p>

          <div className="mt-5 flex gap-4 font-mono text-xs text-subtle">
            <a
              href={TEAM.nima.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-violet"
            >
              GitHub →
            </a>
            <a
              href={TEAM.nima.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-violet"
            >
              LinkedIn →
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
            Frontend
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {NIMA_FRONTEND.map((t) => (
              <span
                key={t}
                className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-subtle"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
            Hardware
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {NIMA_HARDWARE.map((t) => (
              <span
                key={t}
                className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-subtle"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

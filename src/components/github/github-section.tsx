"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const WEEKS = 52;
const DAYS = 7;

const REPOS = [
  {
    name: "nest-arch",
    desc: "Opinionated NestJS starter with modules, validation and testing wired up.",
    stars: "12",
    lang: "TypeScript",
  },
  {
    name: "event-bus",
    desc: "Lightweight RabbitMQ wrapper for typed event-driven flows in NestJS.",
    stars: "8",
    lang: "TypeScript",
  },
  {
    name: "redis-cache-decorators",
    desc: "Declarative caching decorators with TTL and invalidation for NestJS.",
    stars: "5",
    lang: "TypeScript",
  },
];

function activityLevel(week: number, day: number) {
  const n = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  const frac = n - Math.floor(n);
  if (frac > 0.92) return 4;
  if (frac > 0.75) return 3;
  if (frac > 0.5) return 2;
  if (frac > 0.25) return 1;
  return 0;
}

const LEVEL_STYLES = [
  "bg-white/[0.04]",
  "bg-accent/20",
  "bg-accent/40",
  "bg-accent/60",
  "bg-accent",
];

export function GitHub() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="GitHub"
        title="Open Source & Code"
        description="A selection of open work and the code I write when no one is looking."
      />

      <FadeIn y={30}>
        <div className="mt-12 rounded-3xl border border-edge bg-surface p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-surface-2 font-mono text-lg font-semibold text-accent">
                D
              </div>
              <div>
                <p className="font-semibold">github.com/darya</p>
                <p className="font-mono text-sm text-subtle">Backend / Full-Stack Developer</p>
              </div>
            </div>
            <a
              href="https://github.com/darya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-edge-strong px-6 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              View GitHub →
            </a>
          </div>

          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-[3px]">
              {Array.from({ length: DAYS }).map((_, day) => (
                <div key={day} className="flex flex-col gap-[3px]">
                  {Array.from({ length: WEEKS }).map((_, week) => {
                    const level = activityLevel(week, day);
                    return (
                      <motion.span
                        key={week}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.25,
                          delay: reduceMotion ? 0 : (week * DAYS + day) * 0.0012,
                        }}
                        className={`h-2.5 w-2.5 rounded-[3px] ${LEVEL_STYLES[level]}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {REPOS.map((repo, i) => (
          <FadeIn key={repo.name} y={30} delay={i * 0.08} className="h-full">
            <div className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-6 transition-colors hover:border-accent/40">
              <div className="flex items-start justify-between gap-2">
                <p className="font-mono text-sm text-accent">{repo.name}</p>
                <span className="flex items-center gap-1 font-mono text-xs text-subtle">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.859 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
                  </svg>
                  {repo.stars}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{repo.desc}</p>
              <p className="mt-4 flex items-center gap-2 font-mono text-xs text-subtle">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {repo.lang}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

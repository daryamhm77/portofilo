"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import * as si from "simple-icons";
import type { TechLogo } from "@/lib/tech-stack";
import { TECH_CONSTELLATION, TECH_LAYERS } from "@/lib/tech-stack";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(112,66,248,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(59,158,255,0.08), transparent 50%), #050505",
        }}
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <div className="welcome-box inline-flex items-center gap-2 border border-[rgba(112,66,248,0.55)] px-3 py-2">
              <span className="text-sm text-[#b49bff]" aria-hidden="true">
                ✦
              </span>
              <span className="welcome-text text-[13px] font-medium">Advantage</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Two disciplines. One engineering mindset.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-3 max-w-xl text-base text-muted">
              Backend &amp; full-stack with NestJS and Next.js, plus frontend and deep-tech
              architecture — connected into real products.
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <h3 className="mt-10 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Building with{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                modern technologies
              </span>
              .
            </h3>
          </FadeIn>
        </div>

        <div
          className="relative mt-14 flex flex-col items-center gap-5 sm:gap-6 md:scale-[0.95]"
          style={{ transformOrigin: "top center" }}
        >
          {TECH_CONSTELLATION.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5"
            >
              {row.map((tech, i) => (
                <TechLogoTile key={`${tech.name}-${i}`} tech={tech} index={rowIndex * 8 + i} />
              ))}
            </div>
          ))}

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(112,66,248,0.35), rgba(59,158,255,0.12), transparent 70%)",
            }}
          />
        </div>

        <div className="mt-16 space-y-4">
          <SectionHeading
            eyebrow="Technology Universe"
            title="Layers of the stack."
            description="Grouped the way systems are actually built — not just a logo wall."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_LAYERS.map((layer, i) => (
              <FadeIn key={layer.name} y={20} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-[rgba(112,66,248,0.28)] bg-[rgba(3,0,20,0.37)] p-5 backdrop-blur-md">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-[#b49bff] uppercase">
                    {layer.name}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-edge bg-surface-2/80 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechLogoTile({ tech, index }: { tech: TechLogo; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const icon = si[tech.icon] as { hex: string; path: string; title: string };
  const hex = tech.color ?? icon.hex;
  const fill = `#${hex}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 12 }}
      transition={{ delay: reduceMotion ? 0 : index * 0.05, duration: 0.45 }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.06 }}
      className="group relative"
      title={tech.name}
    >
      <div
        className="flex h-[64px] w-[64px] items-center justify-center rounded-2xl border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.55)] shadow-[0_0_20px_rgba(123,44,191,0.18)] backdrop-blur-md transition-colors duration-300 group-hover:border-[rgba(112,66,248,0.7)] group-hover:shadow-[0_0_28px_rgba(59,158,255,0.25)] sm:h-[72px] sm:w-[72px]"
        style={{
          boxShadow: `inset 0 -6px 14px rgba(164,143,255,0.08), 0 0 18px ${fill}22`,
        }}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 sm:h-9 sm:w-9"
          aria-label={tech.name}
        >
          <title>{tech.name}</title>
          <path d={icon.path} fill={fill} />
        </svg>
      </div>
      <span className="pointer-events-none absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-edge bg-surface px-2 py-0.5 font-mono text-[9px] text-muted opacity-0 transition-opacity group-hover:opacity-100">
        {tech.name}
      </span>
    </motion.div>
  );
}

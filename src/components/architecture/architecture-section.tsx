"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

type Tab = {
  id: string;
  label: string;
  lines: string[];
};

const TABS: Tab[] = [
  {
    id: "backend",
    label: "Backend",
    lines: [
      "API",
      "  │",
      "  ▼",
      "Application",
      "  │",
      "  ▼",
      "Domain",
      "  │",
      "  ▼",
      "Infrastructure",
      "  │",
      "  ┌──────┼──────┐",
      "  ▼      ▼      ▼",
      "DB     Redis   Queue",
    ],
  },
  {
    id: "microservices",
    label: "Microservices",
    lines: [
      "           API Gateway",
      "                │",
      " ┌──────────────┼──────────────┐",
      " ▼              ▼              ▼",
      "Auth          Users          Orders",
      " │              │              │",
      " └──────────────┼──────────────┘",
      "                ▼",
      "            RabbitMQ",
    ],
  },
  {
    id: "realtime",
    label: "Real-Time",
    lines: [
      "Client",
      "  │",
      "  ▼",
      "WebSocket",
      "  │",
      "  ▼",
      "Gateway",
      "  │",
      "  ▼",
      "Redis Pub/Sub",
      "  │",
      "  ├── Client A",
      "  ├── Client B",
      "  └── Client C",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    lines: [
      "Application",
      "  │",
      "  ▼",
      "Docker",
      "  │",
      "  ▼",
      "CI/CD · GitHub Actions",
      "  │",
      "  ▼",
      "Nginx",
      "  │",
      "  ┌──────┼──────┐",
      "  ▼      ▼      ▼",
      "S3    Redis   DB",
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    lines: [
      "Specification",
      "  ↓",
      "Architecture",
      "  ↓",
      "RTL",
      "  ↓",
      "VHDL / Verilog",
      "  ↓",
      "Verification",
      "  ↓",
      "Hardware",
      "  ↓",
      "Embedded System",
    ],
  },
];

export function ArchitectureSection() {
  const [tab, setTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === tab)!;
  const reduceMotion = useReducedMotion();

  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Engineering Architecture"
        title="How we think about systems."
        description="An interactive playground of the patterns we use across backend, realtime, cloud and hardware."
      />

      <FadeIn y={24}>
        <div className="mt-12 overflow-hidden rounded-3xl border border-edge bg-surface">
          <div className="flex flex-wrap gap-1 border-b border-edge p-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`rounded-xl px-4 py-2 font-mono text-xs transition-colors ${
                  tab === t.id
                    ? "bg-accent/15 text-accent"
                    : "text-muted hover:bg-surface-2 hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative min-h-[360px] p-6 md:p-10">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(59,158,255,0.08), transparent 70%)",
              }}
            />
            <motion.pre
              key={active.id}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-x-auto font-mono text-[12px] leading-6 text-muted sm:text-[13px]"
            >
              {active.lines.map((line, i) => (
                <div key={`${active.id}-${i}`} className="whitespace-pre">
                  {line.split(/(API Gateway|RabbitMQ|Redis Pub\/Sub|WebSocket|RTL|VHDL \/ Verilog)/).map((part, j) =>
                    ["API Gateway", "RabbitMQ", "Redis Pub/Sub", "WebSocket", "RTL", "VHDL / Verilog"].includes(
                      part,
                    ) ? (
                      <span key={j} className="text-accent">
                        {part}
                      </span>
                    ) : (
                      <span key={j}>{part}</span>
                    ),
                  )}
                </div>
              ))}
            </motion.pre>

            {!reduceMotion && (
              <div className="absolute bottom-6 right-6 flex items-center gap-2 font-mono text-[10px] text-subtle">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                ● ───────────────► ●
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

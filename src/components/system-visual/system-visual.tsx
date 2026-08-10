"use client";

import { motion, useReducedMotion } from "motion/react";

const EDGES = [
  { d: "M160 88 L160 128", delay: 0 },
  { d: "M480 88 L480 128", delay: 0.15 },
  { d: "M160 168 L160 208", delay: 0.3 },
  { d: "M480 168 L480 208", delay: 0.35 },
  { d: "M160 236 C160 280, 320 280, 320 300", delay: 0.5 },
  { d: "M480 236 C480 280, 320 280, 320 300", delay: 0.55 },
  { d: "M320 348 L320 388", delay: 0.7 },
];

function Node({
  x,
  y,
  label,
  sub,
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <rect
        x={x - 70}
        y={y - 22}
        width={140}
        height={44}
        rx={10}
        fill="#0d0d0d"
        stroke="rgba(255,255,255,0.12)"
      />
      <circle cx={x - 52} cy={y - 6} r={2.5} fill="#3b9eff" />
      <text
        x={x}
        y={sub ? y - 2 : y + 4}
        textAnchor="middle"
        className="fill-foreground font-mono text-[12px] font-medium"
      >
        {label}
      </text>
      {sub && (
        <text x={x} y={y + 14} textAnchor="middle" className="fill-subtle font-mono text-[9px]">
          {sub}
        </text>
      )}
    </g>
  );
}

export function SystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-edge bg-surface p-4 sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,158,255,0.1), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 640 460"
        className="relative h-auto w-full"
        role="img"
        aria-label="Software to systems to silicon architecture graph"
      >
        <defs>
          <filter id="hero-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <text
          x={320}
          y={28}
          textAnchor="middle"
          className="fill-muted font-mono text-[11px] tracking-[0.28em]"
        >
          WHISPER⚡VOLT
        </text>

        <text x={160} y={58} textAnchor="middle" className="fill-accent font-mono text-[10px] tracking-[0.2em]">
          SOFTWARE
        </text>
        <text x={480} y={58} textAnchor="middle" className="fill-accent-violet font-mono text-[10px] tracking-[0.2em]">
          HARDWARE
        </text>

        {EDGES.map((e) => (
          <g key={e.d}>
            <path d={e.d} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={1.5} />
            {!reduceMotion && (
              <motion.path
                d={e.d}
                fill="none"
                stroke="#3b9eff"
                strokeWidth={1.5}
                strokeDasharray="4 10"
                initial={{ strokeDashoffset: 28 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 1.4,
                  delay: e.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
                opacity={0.7}
              />
            )}
            {!reduceMotion && (
              <motion.circle
                r={2.5}
                fill="#3b9eff"
                filter="url(#hero-glow)"
                style={{ offsetPath: `path("${e.d}")` }}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{
                  duration: 2,
                  delay: e.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
          </g>
        ))}

        <Node x={160} y={148} label="Next.js" sub="NestJS" />
        <Node x={480} y={148} label="VHDL" sub="Verilog" />
        <Node x={320} y={324} label="SYSTEMS" />
        <Node x={320} y={418} label="REAL PRODUCTS" />
      </svg>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";

export type ArchNode = { id: string; label: string; sub: string; x: number; y: number };
export type ArchParticle = { d: string; duration?: number; delay?: number };

const NODE_SIZE = { w: 150, h: 56 };

type ArchitectureDiagramProps = {
  nodes: ArchNode[];
  edges: string[];
  particles?: ArchParticle[];
  className?: string;
};

export function ArchitectureDiagram({
  nodes,
  edges,
  particles = [],
  className = "",
}: ArchitectureDiagramProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`rounded-3xl border border-edge bg-surface p-4 sm:p-10 ${className}`}
    >
      <svg
        viewBox="0 0 640 660"
        className="h-auto w-full"
        role="img"
        aria-label="System architecture diagram"
      >
        <defs>
          <filter id="particle-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map((d) => (
          <path key={d} d={d} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={1.5} />
        ))}

        <g filter="url(#particle-glow)">
          {particles.map((p, i) =>
            reduceMotion ? (
              <circle
                key={i}
                r={2.5}
                fill="#3b9eff"
                opacity={0.35}
                style={{ offsetPath: `path("${p.d}")`, offsetDistance: "50%" }}
              />
            ) : (
              <motion.circle
                key={i}
                r={2.5}
                fill="#3b9eff"
                style={{ offsetPath: `path("${p.d}")` }}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: ["0%", "100%"] }}
                transition={{
                  duration: p.duration ?? 2,
                  delay: p.delay ?? 0,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ),
          )}
        </g>

        {nodes.map((node) => (
          <g key={node.id} className="group cursor-default">
            <rect
              x={node.x - NODE_SIZE.w / 2}
              y={node.y - NODE_SIZE.h / 2}
              width={NODE_SIZE.w}
              height={NODE_SIZE.h}
              rx={12}
              fill="#111111"
              stroke="rgba(255,255,255,0.12)"
              className="transition-colors duration-300 group-hover:stroke-accent"
            />
            <circle cx={node.x - NODE_SIZE.w / 2 + 16} cy={node.y - 8} r={3} fill="#3b9eff" />
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              className="fill-foreground font-mono text-[13px] font-medium"
            >
              {node.label}
            </text>
            <text
              x={node.x}
              y={node.y + 16}
              textAnchor="middle"
              className="fill-subtle font-mono text-[10px]"
            >
              {node.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

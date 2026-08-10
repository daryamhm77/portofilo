"use client";

import { motion, useReducedMotion } from "motion/react";
import * as si from "simple-icons";

type OrbitLogo = {
  name: string;
  icon: keyof typeof si;
  color?: string;
  /** percent from left */
  x: number;
  /** percent from top */
  y: number;
  delay: number;
};

/** Radar orbit — frontend + backend stack (WhisperVolt). */
const ORBIT: OrbitLogo[] = [
  { name: "React", icon: "siReact", x: 14, y: 12, delay: 0.05 },
  { name: "NestJS", icon: "siNestjs", x: 48, y: 6, delay: 0.1 },
  { name: "TypeScript", icon: "siTypescript", x: 78, y: 14, delay: 0.15 },
  { name: "Node.js", icon: "siNodedotjs", x: 88, y: 38, delay: 0.2 },
  { name: "Next.js", icon: "siNextdotjs", color: "FFFFFF", x: 82, y: 64, delay: 0.25 },
  { name: "PostgreSQL", icon: "siPostgresql", x: 58, y: 82, delay: 0.3 },
  { name: "Docker", icon: "siDocker", x: 28, y: 84, delay: 0.35 },
  { name: "Redis", icon: "siRedis", x: 8, y: 62, delay: 0.4 },
  { name: "GraphQL", icon: "siGraphql", x: 6, y: 36, delay: 0.45 },
  { name: "MongoDB", icon: "siMongodb", x: 32, y: 28, delay: 0.5 },
  { name: "RabbitMQ", icon: "siRabbitmq", x: 68, y: 32, delay: 0.55 },
  { name: "Nginx", icon: "siNginx", x: 42, y: 52, delay: 0.6 },
  { name: "Prisma", icon: "siPrisma", color: "5A67D8", x: 62, y: 56, delay: 0.65 },
  { name: "GitHub", icon: "siGithub", color: "FFFFFF", x: 22, y: 58, delay: 0.7 },
];

function LogoTile({
  logo,
  reduceMotion,
}: {
  logo: OrbitLogo;
  reduceMotion: boolean | null;
}) {
  const icon = si[logo.icon] as { path: string; hex: string; title: string };
  const fill = `#${logo.color ?? icon.hex}`;

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${logo.x}%`, top: `${logo.y}%` }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: reduceMotion ? 0 : logo.delay, duration: 0.5 }}
    >
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -5, 0] }
        }
        transition={{
          duration: 3.6 + logo.delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: logo.delay,
        }}
        className="group relative"
        title={logo.name}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(112,66,248,0.42)] bg-[rgba(3,0,20,0.55)] shadow-[0_0_18px_rgba(123,44,191,0.22)] backdrop-blur-md sm:h-14 sm:w-14 sm:rounded-2xl"
          style={{
            boxShadow: `inset 0 -6px 12px rgba(164,143,255,0.1), 0 0 16px ${fill}28`,
          }}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7"
            aria-label={logo.name}
          >
            <title>{logo.name}</title>
            <path d={icon.path} fill={fill} />
          </svg>
        </div>
        <span className="pointer-events-none absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-edge bg-surface px-1.5 py-0.5 font-mono text-[8px] text-muted opacity-0 transition-opacity group-hover:opacity-100">
          {logo.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function StackOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-3xl border border-[rgba(112,66,248,0.28)]"
      style={{ background: "#030014" }}
      role="img"
      aria-label="WhisperVolt technology stack orbit — NestJS, Next.js, React, Node.js, PostgreSQL, Redis, Docker and more"
    >
      {/* Nebula light source (top-left) */}
      <div
        className="pointer-events-none absolute left-[-20%] top-[-25%] h-[70%] w-[70%] rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.75) 0%, rgba(112,66,248,0.35) 35%, transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[8%] top-[6%] h-24 w-24 rounded-full opacity-80 blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.55), rgba(168,85,247,0.2), transparent 70%)",
        }}
      />

      {/* Starfield */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 22%, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 28% 68%, rgba(255,255,255,0.55), transparent), radial-gradient(1.5px 1.5px at 44% 18%, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 62% 74%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 78% 28%, rgba(255,255,255,0.65), transparent), radial-gradient(1.5px 1.5px at 88% 58%, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 18% 88%, rgba(255,255,255,0.45), transparent), radial-gradient(1px 1px at 52% 42%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 70% 12%, rgba(255,255,255,0.55), transparent), radial-gradient(1px 1px at 36% 48%, rgba(255,255,255,0.35), transparent)",
        }}
      />

      {/* Radar grid */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.38]"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="55" fill="none" stroke="rgba(180,155,255,0.45)" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="95" fill="none" stroke="rgba(180,155,255,0.38)" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="135" fill="none" stroke="rgba(180,155,255,0.32)" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="175" fill="none" stroke="rgba(180,155,255,0.28)" strokeWidth="0.8" />
        {[0, 30, 60, 90, 120, 150].map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="200"
            x2={200 + Math.cos((deg * Math.PI) / 180) * 175}
            y2={200 + Math.sin((deg * Math.PI) / 180) * 175}
            stroke="rgba(180,155,255,0.28)"
            strokeWidth="0.7"
          />
        ))}
        {!reduceMotion && (
          <motion.circle
            cx="200"
            cy="200"
            r="135"
            fill="none"
            stroke="rgba(59,158,255,0.35)"
            strokeWidth="1"
            strokeDasharray="4 12"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px" }}
          />
        )}
      </svg>

      {/* Soft center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(59,158,255,0.25), transparent 70%)",
        }}
      />

      {ORBIT.map((logo) => (
        <LogoTile key={logo.name} logo={logo} reduceMotion={reduceMotion} />
      ))}
    </div>
  );
}

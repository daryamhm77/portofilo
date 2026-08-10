import * as si from "simple-icons";

export type TechLogo = {
  name: string;
  /** simple-icons export key, e.g. siNestjs */
  icon: keyof typeof si;
  /** Hex without # — use light fills for dark-bg brands that ship as black */
  color?: string;
};

/** Tapering constellation rows — only real brand icons (no empty monograms). */
export const TECH_CONSTELLATION: TechLogo[][] = [
  [
    { name: "Next.js", icon: "siNextdotjs", color: "FFFFFF" },
    { name: "React", icon: "siReact" },
    { name: "TypeScript", icon: "siTypescript" },
    { name: "NestJS", icon: "siNestjs" },
    { name: "Node.js", icon: "siNodedotjs" },
    { name: "Tailwind", icon: "siTailwindcss" },
    { name: "GraphQL", icon: "siGraphql" },
    { name: "Docker", icon: "siDocker" },
  ],
  [
    { name: "PostgreSQL", icon: "siPostgresql" },
    { name: "MongoDB", icon: "siMongodb" },
    { name: "Redis", icon: "siRedis" },
    { name: "Prisma", icon: "siPrisma", color: "5A67D8" },
    { name: "RabbitMQ", icon: "siRabbitmq" },
    { name: "Express", icon: "siExpress", color: "FFFFFF" },
  ],
  [
    { name: "Nginx", icon: "siNginx" },
    { name: "Linux", icon: "siLinux", color: "FCC624" },
    { name: "Vercel", icon: "siVercel", color: "FFFFFF" },
    { name: "GitHub Actions", icon: "siGithubactions" },
    { name: "MinIO", icon: "siMinio" },
    { name: "Socket.IO", icon: "siSocketdotio", color: "FFFFFF" },
  ],
];

export const TECH_LAYERS = [
  {
    name: "Application",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "GraphQL", "REST", "WebSockets"],
  },
  {
    name: "Backend",
    items: ["Node.js", "NestJS", "Express", "Apollo"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "TypeORM"],
  },
  {
    name: "Distributed Systems",
    items: ["RabbitMQ", "Microservices", "CQRS", "DDD", "Event-Driven Architecture", "API Gateway"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "Linux", "AWS S3", "MinIO", "Vercel"],
  },
  {
    name: "Hardware",
    items: ["VHDL", "Verilog", "STM32", "ESP32", "AVR", "CMOS"],
  },
  {
    name: "Simulation",
    items: ["Ansys", "SPICE", "LTspice", "Proteus", "MATLAB", "Simulink"],
  },
] as const;

import type { ArchNode, ArchParticle } from "@/components/architecture/architecture-diagram";

type Architecture = {
  nodes: ArchNode[];
  edges: string[];
  particles: ArchParticle[];
};

export const HOME_ARCHITECTURE: Architecture = {
  nodes: [
    { id: "next", label: "Next.js", sub: "Frontend", x: 320, y: 62 },
    { id: "gateway", label: "API Gateway", sub: "NestJS", x: 320, y: 162 },
    { id: "auth", label: "Auth", sub: "JWT", x: 130, y: 302 },
    { id: "orders", label: "Orders", sub: "Service", x: 320, y: 302 },
    { id: "events", label: "Events", sub: "RabbitMQ", x: 510, y: 302 },
    { id: "pg", label: "PostgreSQL", sub: "Database", x: 320, y: 452 },
    { id: "redis", label: "Redis", sub: "Cache", x: 320, y: 532 },
  ],
  edges: [
    "M320 90 L320 134",
    "M320 190 C 320 232, 130 232, 130 274",
    "M320 190 L320 274",
    "M320 190 C 320 232, 510 232, 510 274",
    "M130 330 C 130 380, 285 380, 285 424",
    "M320 330 L320 424",
    "M510 330 C 510 380, 355 380, 355 424",
    "M320 480 L320 504",
  ],
  particles: [
    { d: "M320 90 L320 134", duration: 1.6, delay: 0 },
    { d: "M320 190 C 320 232, 130 232, 130 274", duration: 2.2, delay: 0.2 },
    { d: "M320 190 L320 274", duration: 1.8, delay: 0.4 },
    { d: "M320 190 C 320 232, 510 232, 510 274", duration: 2.2, delay: 0.1 },
    { d: "M130 330 C 130 380, 285 380, 285 424", duration: 2.4, delay: 0.3 },
    { d: "M320 330 L320 424", duration: 1.8, delay: 0 },
    { d: "M510 330 C 510 380, 355 380, 355 424", duration: 2.4, delay: 0.5 },
    { d: "M320 480 L320 504", duration: 1.4, delay: 0.2 },
  ],
};

export const CASE_STUDY_ARCHITECTURE: Architecture = {
  nodes: [
    { id: "next", label: "Next.js", sub: "Frontend", x: 320, y: 62 },
    { id: "gateway", label: "API Gateway", sub: "NestJS", x: 320, y: 162 },
    { id: "auth", label: "Auth", sub: "JWT", x: 130, y: 302 },
    { id: "users", label: "Users", sub: "Service", x: 320, y: 302 },
    { id: "orders", label: "Orders", sub: "Service", x: 510, y: 302 },
    { id: "pg", label: "PostgreSQL", sub: "Database", x: 320, y: 452 },
    { id: "redis", label: "Redis", sub: "Cache", x: 320, y: 532 },
    { id: "mq", label: "RabbitMQ", sub: "Queue", x: 320, y: 610 },
  ],
  edges: [
    "M320 90 L320 134",
    "M320 190 C 320 232, 130 232, 130 274",
    "M320 190 L320 274",
    "M320 190 C 320 232, 510 232, 510 274",
    "M130 330 C 130 380, 285 380, 285 424",
    "M320 330 L320 424",
    "M510 330 C 510 380, 355 380, 355 424",
    "M320 480 L320 504",
    "M320 560 L320 582",
  ],
  particles: [
    { d: "M320 90 L320 134", duration: 1.6, delay: 0 },
    { d: "M320 190 C 320 232, 130 232, 130 274", duration: 2.2, delay: 0.2 },
    { d: "M320 190 L320 274", duration: 1.8, delay: 0.4 },
    { d: "M320 190 C 320 232, 510 232, 510 274", duration: 2.2, delay: 0.1 },
    { d: "M130 330 C 130 380, 285 380, 285 424", duration: 2.4, delay: 0.3 },
    { d: "M320 330 L320 424", duration: 1.8, delay: 0 },
    { d: "M510 330 C 510 380, 355 380, 355 424", duration: 2.4, delay: 0.5 },
    { d: "M320 480 L320 504", duration: 1.4, delay: 0.2 },
    { d: "M320 560 L320 582", duration: 1.6, delay: 0.1 },
  ],
};

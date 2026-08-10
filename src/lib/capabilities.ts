export type CapabilityGroup = {
  label: string;
  items: string[];
};

export type CapabilityDetailSection = {
  title: string;
  items: string[];
};

export type Capability = {
  id: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  hoverGroups: CapabilityGroup[];
  detailIntro: string;
  detailSections: CapabilityDetailSection[];
};

export const CAPABILITIES: Capability[] = [
  {
    id: "software-systems",
    number: "01",
    title: "Software Systems",
    summary: "Scalable infrastructure for products that need to perform.",
    tags: ["Backend", "Distributed", "Data", "Cloud"],
    hoverGroups: [
      {
        label: "Backend",
        items: ["NestJS", "Node.js", "TypeScript", "REST", "GraphQL", "WebSockets"],
      },
      {
        label: "Distributed",
        items: ["Microservices", "RabbitMQ", "Event-Driven", "CQRS"],
      },
      {
        label: "Data",
        items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM"],
      },
      {
        label: "Infrastructure",
        items: ["Docker", "Nginx", "AWS S3", "MinIO", "CI/CD", "Linux"],
      },
    ],
    detailIntro:
      "We build backend systems designed for reliability, scalability and maintainability.",
    detailSections: [
      {
        title: "Backend Engineering",
        items: [
          "REST & GraphQL APIs",
          "Authentication & Authorization",
          "RBAC / ABAC",
          "WebSocket systems",
          "Business logic",
          "Third-party integrations",
        ],
      },
      {
        title: "Distributed Architecture",
        items: [
          "Microservices",
          "API Gateway",
          "RabbitMQ",
          "Event-driven systems",
          "CQRS",
          "Service-to-service communication",
        ],
      },
      {
        title: "Data & Performance",
        items: [
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Query optimization",
          "Caching strategies",
          "Geospatial queries",
        ],
      },
      {
        title: "Production",
        items: [
          "Docker",
          "CI/CD",
          "Nginx",
          "Object storage",
          "Logging",
          "Monitoring",
        ],
      },
    ],
  },
  {
    id: "product-engineering",
    number: "02",
    title: "Product Engineering",
    summary: "From product idea to polished, production-ready application.",
    tags: ["Frontend", "Architecture", "UX", "Full-Stack"],
    hoverGroups: [
      {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        label: "Product Architecture",
        items: ["App Router", "Server Components", "API Integration", "State Management"],
      },
      {
        label: "User Experience",
        items: ["Responsive UI", "Design Systems", "Accessible Components", "Performance"],
      },
      {
        label: "Full-Stack",
        items: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Authentication", "Payments"],
      },
    ],
    detailIntro:
      "We design and ship product interfaces that feel fast, coherent, and ready for real users — from first screen to production release.",
    detailSections: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Component systems"],
      },
      {
        title: "Product Architecture",
        items: [
          "App Router",
          "Server Components",
          "API integration",
          "State management",
          "Routing & data boundaries",
          "SSR / SSG strategies",
        ],
      },
      {
        title: "User Experience",
        items: [
          "Responsive UI",
          "Design systems",
          "Accessible components",
          "Performance budgets",
          "Interaction polish",
          "Empty / loading / error states",
        ],
      },
      {
        title: "Full-Stack Delivery",
        items: [
          "Next.js + NestJS products",
          "PostgreSQL & Redis",
          "Authentication flows",
          "Payments integrations",
          "Admin / dashboard surfaces",
          "Production deploys",
        ],
      },
    ],
  },
  {
    id: "deep-tech",
    number: "03",
    title: "Deep Tech",
    summary: "From software constraints to silicon-level engineering.",
    tags: ["IC", "RTL", "Embedded", "Simulation"],
    hoverGroups: [
      {
        label: "IC & Digital",
        items: ["CMOS", "Digital IC Design", "RTL", "Verification"],
      },
      {
        label: "HDL",
        items: ["VHDL", "Verilog", "Timing", "Power"],
      },
      {
        label: "Embedded",
        items: ["STM32", "ESP32", "AVR", "Firmware"],
      },
      {
        label: "Simulation",
        items: ["Ansys", "SPICE", "LTspice", "MATLAB", "Simulink"],
      },
    ],
    detailIntro:
      "We bridge software systems with physical engineering — digital IC design, embedded platforms, and electromagnetic simulation under one architecture conversation.",
    detailSections: [
      {
        title: "IC & Digital Engineering",
        items: [
          "Digital IC design",
          "RTL architecture",
          "VHDL / Verilog",
          "Digital verification",
          "Timing & power awareness",
          "CMOS logic foundations",
        ],
      },
      {
        title: "Embedded Systems",
        items: [
          "STM32",
          "ESP32",
          "AVR",
          "Firmware bring-up",
          "Hardware–software interfaces",
          "Sensor integration",
        ],
      },
      {
        title: "Simulation & Modeling",
        items: [
          "Ansys electromagnetic simulation",
          "SPICE / LTspice",
          "Proteus",
          "MATLAB / Simulink",
          "DSP foundations",
          "Physical model correlation",
        ],
      },
      {
        title: "Co-Design",
        items: [
          "Register maps & contracts",
          "Firmware + RTL alignment",
          "Validation loops",
          "Prototype to product path",
        ],
      },
    ],
  },
];

export function getCapability(id: string) {
  return CAPABILITIES.find((c) => c.id === id);
}

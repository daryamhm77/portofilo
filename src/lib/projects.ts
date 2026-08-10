export type Project = {
  slug: string;
  name: string;
  short: string;
  description: string;
  role?: string;
  variant?: "software" | "deep-tech";
  architecture?: string[];
  features?: string[];
  frontend?: string[];
  backend?: string[];
  technologies: string[];
  demo?: string;
  github?: string;
  image?: string;
  overview: string;
  problem: {
    text: string;
    items: string[];
  };
  solution: string[];
  decisions: { title: string; text: string }[];
  challenges: { title: string; text: string }[];
  results: { value: string; label: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "tabflows",
    name: "Tabflows",
    short: "SaaS for tab management and time management",
    description:
      "A modern SaaS product for managing tabs and time — built with a fast, practical dashboard layout designed for everyday productivity workflows.",
    role: "WhisperVolt — Full-Stack",
    features: [
      "Modern dashboard structure",
      "High-performance, responsive UI",
      "Clean, practical SaaS layout",
      "Tab and time management workflows",
      "Fast navigation and lightweight interactions",
    ],
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    backend: ["NestJS", "Node.js", "PostgreSQL", "Redis", "REST APIs"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Vercel",
    ],
    demo: "https://tabflows.com",
    image: "/work/tabflows.png",
    overview:
      "Tabflows is a SaaS tool focused on tab management and time management. The product emphasizes a modern dashboard structure, high speed, and a principled SaaS layout that stays practical for daily use — clear hierarchy, fast interactions, and an interface that scales from first-run simplicity to power-user workflows.",
    problem: {
      text: "Users needed a product that could:",
      items: [
        "Organize tabs and work sessions without friction",
        "Support time-management workflows in one place",
        "Feel fast enough for daily, high-frequency use",
        "Present a clean SaaS dashboard without clutter",
      ],
    },
    solution: [
      "Designed and shipped a Next.js + NestJS SaaS with a dashboard-first information architecture, performance-minded frontend rendering, and a backend ready for authenticated product workflows.",
      "Prioritized layout clarity, responsive density, and interaction speed so the product feels like a tool people can live in all day.",
    ],
    decisions: [
      {
        title: "Why a dashboard-first SaaS layout?",
        text: "Tab and time workflows are habitual. A clear dashboard hierarchy reduces cognitive load and keeps primary actions one step away.",
      },
      {
        title: "Why Next.js + NestJS?",
        text: "Next.js delivers a fast product UI and App Router structure; NestJS gives a typed, modular API layer for auth, data, and future feature growth.",
      },
      {
        title: "Why Redis?",
        text: "Hot session and dashboard reads benefit from caching so the UI stays snappy under repeated use.",
      },
    ],
    challenges: [
      {
        title: "Speed without sacrificing structure",
        text: "Kept the dashboard dense but scannable — strong visual hierarchy, restrained motion, and lean client bundles so the product feels instant.",
      },
      {
        title: "Practical SaaS UX",
        text: "Avoided decorative complexity. Every panel and control had to earn its place in everyday tab and time workflows.",
      },
    ],
    results: [
      { value: "SaaS", label: "Product type" },
      { value: "Dashboard", label: "Primary UX" },
      { value: "Fast", label: "Performance focus" },
    ],
  },
  {
    slug: "left-coast-design",
    name: "Left Coast Design Studio",
    short: "Digital design & development agency website",
    description:
      "A minimal marketing site for a luxury hospitality and retail design studio — soft Motion animations, modern typography, and an App Router / SSR architecture.",
    role: "Nima — Frontend Developer",
    features: [
      "Minimal, editorial visual design",
      "Soft Motion / Framer Motion animations",
      "Modern typography and spacing system",
      "Next.js App Router with SSR",
      "Project showcase and studio storytelling",
    ],
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "App Router",
      "SSR",
      "Vercel",
    ],
    backend: ["Next.js Server Components", "API Routes", "Vercel Edge"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "App Router",
      "SSR",
      "Vercel",
    ],
    demo: "https://leftcoast.refractweb.com",
    overview:
      "Left Coast Design Studio is a digital presence for a San Francisco–founded luxury hospitality and retail design studio. The site uses a minimal aesthetic, soft Motion animations, modern typography, and a Next.js App Router architecture with server-side rendering — so the brand feels premium while staying fast and crawlable.",
    problem: {
      text: "The studio needed a site that could:",
      items: [
        "Communicate executive creative leadership without visual noise",
        "Showcase retail and hospitality work with calm motion",
        "Feel typographically refined and brand-forward",
        "Ship on a modern SSR / App Router stack",
      ],
    },
    solution: [
      "Built a Next.js App Router site with SSR for primary routes, Motion for restrained entrance and scroll moments, and a typography-led layout that keeps the brand story and project work front and center.",
    ],
    decisions: [
      {
        title: "Why App Router + SSR?",
        text: "Marketing pages benefit from server rendering for first paint and SEO, while still supporting polished client motion where it adds presence.",
      },
      {
        title: "Why soft Motion?",
        text: "Luxury brands need motion that feels composed — fade, reveal, and layout transitions instead of noisy effects.",
      },
      {
        title: "Why typography-led UI?",
        text: "The studio’s authority comes through writing and work. Type hierarchy carries more brand signal than heavy decoration.",
      },
    ],
    challenges: [
      {
        title: "Motion without distraction",
        text: "Tuned animation timing and reduced-motion fallbacks so the site feels alive without competing with project imagery.",
      },
      {
        title: "Minimal layout, strong hierarchy",
        text: "Balanced whitespace, section rhythm, and CTA placement so the site reads as premium rather than empty.",
      },
    ],
    results: [
      { value: "SSR", label: "Rendering" },
      { value: "Motion", label: "Interaction" },
      { value: "Minimal", label: "Design system" },
    ],
  },
  {
    slug: "refractweb",
    name: "RefractWeb",
    short: "Award-winning digital studio website",
    description:
      "A premium dark-theme marketing site for a digital studio — glassmorphism navigation, selected-work showcase, and end-to-end brand storytelling built for performance and polish.",
    role: "Nima — Frontend Developer",
    features: [
      "Dark premium UI with glassmorphism nav",
      "Selected-work grid with laptop mockups",
      "Soft motion and scroll-driven presence",
      "Services, awards, and social proof sections",
      "High-performance marketing architecture",
    ],
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Figma",
      "Vercel",
    ],
    backend: ["Next.js Server Components", "API Routes", "AWS", "Vercel"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "AWS",
      "Vercel",
    ],
    demo: "https://refractweb.com",
    image: "/work/refractweb.png",
    overview:
      "RefractWeb is the digital studio site behind brands like Left Coast Design Studio and COBE Construction. The experience centers on a dark, premium selected-work gallery, frosted navigation, and motion that feels intentional — built so the studio can show end-to-end craft without sacrificing speed.",
    problem: {
      text: "The studio needed a homepage that could:",
      items: [
        "Present selected work with premium visual weight",
        "Communicate services from web to branding and 3D",
        "Feel award-level without becoming heavy",
        "Support fast marketing pages and contact conversion",
      ],
    },
    solution: [
      "Shipped a Next.js App Router marketing site with a glassmorphism nav, project mockup grid, capability sections, and polished Motion/GSAP moments tuned for a dark premium brand system.",
    ],
    decisions: [
      {
        title: "Why a dark selected-work first layout?",
        text: "For a studio site, the work is the product. Large mockups and calm spacing sell craft faster than long copy.",
      },
      {
        title: "Why GSAP + Motion?",
        text: "Marketing presence needs scroll sequences and hover polish; Motion covers UI motion while GSAP handles more cinematic moments.",
      },
    ],
    challenges: [
      {
        title: "Polish without bloat",
        text: "Balanced imagery, motion, and bundle size so the site stays premium on first load and responsive on mobile.",
      },
    ],
    results: [
      { value: "Awwwards", label: "Recognition" },
      { value: "Dark UI", label: "Brand system" },
      { value: "Works", label: "Primary CTA path" },
    ],
  },
  {
    slug: "rahnema-college",
    name: "Rahnema College",
    short: "Educational platform & career accelerator",
    description:
      "An advanced learning and career platform for tech bootcamps — connecting learners, mentors, and organizations with pathways into the job market.",
    role: "WhisperVolt — Full-Stack",
    features: [
      "Bootcamp discovery and registration flows",
      "Career-path exploration and role showcases",
      "Success stories and graduate outcomes",
      "Organization / partner collaboration surfaces",
      "Auth, dashboards, and high-traffic content pages",
    ],
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "RTL / Persian UI",
    ],
    backend: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "REST APIs",
      "Auth",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
    ],
    demo: "https://rahnemacollege.com/",
    image: "/work/rahnema-college.png",
    overview:
      "Rahnema College is an educational platform and career accelerator built to bridge academia and the tech industry. The product surfaces bootcamps, career paths, success stories, and organization partnerships — with a polished Persian-first UI and a backend designed for registrations, content, and high-demand seasonal campaigns.",
    problem: {
      text: "The platform needed to support:",
      items: [
        "Browse and register for intensive bootcamps",
        "Explain career paths across engineering, data, and marketing",
        "Showcase graduate outcomes and employer partners",
        "Handle authenticated learner and admin workflows at scale",
      ],
    },
    solution: [
      "Built a Next.js frontend with Motion-led hero and card systems, paired with a NestJS API layer for auth, registrations, content, and partner workflows — with Redis caching and RabbitMQ for bursty enrollment operations.",
    ],
    decisions: [
      {
        title: "Why NestJS + Redis + RabbitMQ?",
        text: "Enrollment spikes and content reads need a durable API, hot-path caching, and async jobs so registration campaigns stay reliable.",
      },
      {
        title: "Why a Persian-first product UI?",
        text: "The primary audience is local. RTL layout, typography, and CTA hierarchy had to feel native, not translated.",
      },
    ],
    challenges: [
      {
        title: "Campaign traffic",
        text: "Bootcamp open windows create sharp traffic peaks. Caching and queue-backed workflows keep the registration path stable.",
      },
      {
        title: "Career storytelling + conversion",
        text: "Balanced inspirational content with clear enrollment CTAs so visitors understand outcomes and still convert.",
      },
    ],
    results: [
      { value: "Bootcamps", label: "Core product" },
      { value: "RTL", label: "Locale UX" },
      { value: "Full-stack", label: "Delivery" },
    ],
  },
  {
    slug: "depoco",
    name: "Depo Cantin",
    short: "Industrial containers & modular structures website",
    description:
      "An industrial e-commerce and content site for buying, selling, and customizing containers, kiosks, and project camps — multilingual RTL product catalog with a dark premium brand system.",
    role: "WhisperVolt — Full-Stack",
    features: [
      "RTL multilingual product catalog (FA / EN / AR)",
      "Container, kiosk, and camp product taxonomy",
      "Hero carousel and industrial brand storytelling",
      "Inquiry / pre-order and price-list workflows",
      "Magazine / content section for SEO and education",
    ],
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "RTL Layout",
      "i18n",
    ],
    backend: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "CMS / Content APIs",
      "File storage",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "i18n",
      "RTL",
    ],
    demo: "https://depoco.ir/",
    image: "/work/depoco.png",
    overview:
      "Depo Cantin (Depoco) is the digital presence for an industrial complex specializing in containers, prefabricated units, and project camps. The site combines a dark industrial aesthetic with a deep product catalog, multilingual support, inquiry flows, and content that supports SEO for high-intent product searches.",
    problem: {
      text: "The business needed a site that could:",
      items: [
        "Present a large catalog of containers and modular products",
        "Support Persian, English, and Arabic audiences",
        "Convert visitors into inquiries and pre-orders",
        "Communicate 30+ years of industrial authority",
      ],
    },
    solution: [
      "Delivered a Next.js + NestJS product site with RTL-first navigation, multilingual product taxonomy, hero storytelling, and backend APIs for catalog, inquiries, and content.",
    ],
    decisions: [
      {
        title: "Why a catalog-first information architecture?",
        text: "Buyers arrive with product intent. Clear taxonomy and price/inquiry paths outperform generic brochure layouts.",
      },
      {
        title: "Why multilingual RTL support?",
        text: "The market spans local and regional buyers. Locale-aware UI and content structure are part of the conversion path.",
      },
    ],
    challenges: [
      {
        title: "Deep product taxonomy",
        text: "Structured nested categories so users can move from container type to variant without getting lost.",
      },
      {
        title: "Industrial brand on the web",
        text: "Kept gold/dark visual language strong while preserving readability and mobile usability.",
      },
    ],
    results: [
      { value: "RTL", label: "Locale system" },
      { value: "Catalog", label: "Primary UX" },
      { value: "Industrial", label: "Brand tone" },
    ],
  },
  {
    slug: "etm-passport",
    name: "ETM Passport",
    short: "Enterprise Digital Product Passport Platform",
    description:
      "A distributed enterprise platform built around a multi-service NestJS architecture.",
    role: "Darya — Backend & Full-Stack",
    architecture: [
      "API Gateway",
      "Auth · Core · Data services",
      "RabbitMQ",
      "Redis · MinIO · PostgreSQL",
    ],
    technologies: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "Microservices",
      "RabbitMQ",
      "Redis",
      "JWT",
      "RBAC",
      "ABAC",
      "Docker",
      "MinIO",
      "CI/CD",
      "REST",
      "API Gateway",
    ],
    overview:
      "ETM Passport is an enterprise digital product passport platform built as a 15+ NestJS microservices architecture. Services communicate through RabbitMQ, with an API Gateway, Redis caching, MinIO object storage, and PostgreSQL as the system of record. Auth is enforced with JWT plus RBAC/ABAC policies across service boundaries.",
    problem: {
      text: "The platform needed to support:",
      items: [
        "Multi-service ownership across domains",
        "Secure identity and fine-grained authorization",
        "Reliable async workflows",
        "Shared caching and object storage",
        "Production-ready containerized delivery",
      ],
    },
    solution: [
      "Designed a NestJS microservices platform with an API Gateway, RabbitMQ messaging, Redis, MinIO and PostgreSQL.",
      "Separated Auth, Core and Data domains behind clear contracts so services could evolve independently while remaining observable in production.",
    ],
    decisions: [
      {
        title: "Why microservices?",
        text: "Domain ownership and independent deployability mattered more than a single deployable for this enterprise surface.",
      },
      {
        title: "Why RabbitMQ?",
        text: "Async workflows needed durable messaging without coupling every service to a synchronous call path.",
      },
      {
        title: "Why RBAC + ABAC?",
        text: "Role checks alone were not enough for product-passport access rules that depend on attributes and context.",
      },
    ],
    challenges: [
      {
        title: "Cross-service authorization",
        text: "Centralized JWT validation at the gateway while keeping attribute-aware policy checks close to each domain service.",
      },
      {
        title: "Operational complexity",
        text: "Dockerized services and CI/CD pipelines kept local and production topology aligned as the service count grew past 15.",
      },
    ],
    results: [
      { value: "15+", label: "NestJS services" },
      { value: "JWT", label: "Auth layer" },
      { value: "RBAC/ABAC", label: "Access control" },
      { value: "Docker", label: "Delivery" },
    ],
  },
  {
    slug: "mitabase",
    name: "Mitabase",
    short: "Real-Time Driver & Vehicle Tracking",
    description:
      "A real-time monitoring system for live vehicle and driver tracking.",
    role: "Darya — Backend & Full-Stack",
    architecture: [
      "Web Client",
      "WebSocket Gateway",
      "Tracking · Chat",
      "Redis GEO · Redis Pub/Sub",
    ],
    features: [
      "Live driver tracking",
      "Real-time vehicle monitoring",
      "Bidirectional WebSocket communication",
      "One-to-one direct chat",
      "Redis GEO location queries",
      "Redis Pub/Sub",
    ],
    technologies: [
      "Socket.IO",
      "WebSockets",
      "Redis GEO",
      "Redis Pub/Sub",
      "MinIO",
      "Hexagonal Architecture",
    ],
    overview:
      "Mitabase is a real-time monitoring system for live vehicle and driver tracking. A WebSocket gateway fans out location and chat events, with Redis GEO for spatial queries and Redis Pub/Sub for fan-out. The backend follows hexagonal architecture so transport concerns stay isolated from domain logic.",
    problem: {
      text: "The product needed:",
      items: [
        "Live driver and vehicle positions",
        "Low-latency bidirectional updates",
        "Geo queries at city scale",
        "Direct chat between participants",
      ],
    },
    solution: [
      "Built a Socket.IO gateway with Redis GEO for location queries and Redis Pub/Sub for realtime fan-out.",
      "Kept tracking and chat as separate domain paths behind a shared gateway so each could scale independently.",
    ],
    decisions: [
      {
        title: "Why Redis GEO?",
        text: "Nearby-driver queries are native to Redis GEO and avoid round-tripping heavy spatial SQL for hot reads.",
      },
      {
        title: "Why hexagonal architecture?",
        text: "Transport and persistence adapters needed to change without rewriting core tracking rules.",
      },
    ],
    challenges: [
      {
        title: "Fan-out under load",
        text: "Pub/Sub channels per trip kept chat and location updates isolated while the gateway stayed thin.",
      },
    ],
    results: [
      { value: "WS", label: "Realtime channel" },
      { value: "GEO", label: "Location queries" },
      { value: "Pub/Sub", label: "Event fan-out" },
    ],
  },
  {
    slug: "pantohealth",
    name: "PANTOhealth",
    short: "IoT Railway Monitoring Platform",
    description:
      "Enterprise IoT infrastructure for railway monitoring and predictive maintenance.",
    role: "Darya — Backend & Full-Stack",
    architecture: ["IoT Data", "Backend Services", "MongoDB", "Redis", "RabbitMQ", "AWS S3"],
    technologies: ["NestJS", "MongoDB", "Redis", "RabbitMQ", "AWS S3", "Docker", "CI/CD"],
    demo: "https://pantohealth.com/",
    overview:
      "PANTOhealth is enterprise IoT infrastructure for railway monitoring and predictive maintenance. High-volume sensor streams flow through NestJS services into MongoDB, with Redis caching, RabbitMQ workflows, AWS S3 storage and Dockerized production environments.",
    problem: {
      text: "The platform needed to handle:",
      items: [
        "High-volume IoT sensor ingestion",
        "Reliable async processing",
        "Fast reads for operational dashboards",
        "Durable object storage for artifacts",
      ],
    },
    solution: [
      "Designed NestJS services for ingestion and processing with MongoDB as the document store, Redis for hot paths, RabbitMQ for workflows and S3 for artifacts.",
    ],
    decisions: [
      {
        title: "Why MongoDB?",
        text: "Sensor payloads vary by device type; a document model fit evolving schemas better than rigid relational tables.",
      },
      {
        title: "Why RabbitMQ?",
        text: "Predictive-maintenance jobs are bursty and benefit from durable queues instead of synchronous request chains.",
      },
    ],
    challenges: [
      {
        title: "Ingestion volume",
        text: "Buffered writes and Redis caching reduced pressure on MongoDB during peak sensor windows.",
      },
    ],
    results: [
      { value: "IoT", label: "Sensor pipelines" },
      { value: "MongoDB", label: "Document store" },
      { value: "S3", label: "Object storage" },
    ],
  },
  {
    slug: "fullstack-platform",
    name: "Frontend Platform",
    short: "Nima's Frontend Architecture",
    description:
      "Modern frontend platform architecture spanning Next.js App Router, React, data layers and production delivery.",
    role: "Nima — Frontend Developer",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Vercel",
    ],
    overview:
      "A frontend platform demonstrating App Router architecture with React and TypeScript, Prisma/PostgreSQL and MongoDB data layers, plus Docker, GitHub Actions, Nginx and Vercel delivery.",
    problem: {
      text: "The stack needed to cover:",
      items: [
        "App Router product surfaces",
        "Typed data access",
        "Relational and document stores",
        "CI/CD and edge-friendly deploys",
      ],
    },
    solution: [
      "Composed Next.js App Router with Prisma/PostgreSQL for transactional data, MongoDB where document flexibility mattered, and a Docker + GitHub Actions pipeline to production.",
    ],
    decisions: [
      {
        title: "Why Prisma?",
        text: "Typed queries and migrations keep the application layer honest as schemas evolve.",
      },
    ],
    challenges: [
      {
        title: "Environment parity",
        text: "Dockerized services and CI kept local, preview and production topology close enough to trust releases.",
      },
    ],
    results: [
      { value: "App Router", label: "Frontend" },
      { value: "Prisma", label: "Data access" },
      { value: "CI/CD", label: "Delivery" },
    ],
  },
  {
    slug: "deep-tech-engineering",
    name: "Deep-Tech Engineering",
    short: "Silicon → Simulation → Embedded",
    description:
      "RTL-to-hardware engineering path with electromagnetic simulation and embedded systems.",
    role: "Nima — Deep-Tech Architect",
    variant: "deep-tech",
    architecture: [
      "RTL → VHDL/Verilog → Digital Logic → Verification",
      "Embedded Hardware → STM32 / ESP32 / AVR",
      "Physical Model → Ansys → EM Simulation → Sensors",
    ],
    technologies: [
      "RTL",
      "VHDL",
      "Verilog",
      "CMOS",
      "STM32",
      "ESP32",
      "AVR",
      "Ansys",
      "SPICE",
      "MATLAB",
    ],
    overview:
      "Deep-tech engineering spanning digital IC design from RTL through VHDL/Verilog verification, embedded targets on STM32/ESP32/AVR, and electromagnetic simulation with Ansys, SPICE and MATLAB for sensor-facing physical models.",
    problem: {
      text: "Hardware programs needed:",
      items: [
        "RTL and digital verification",
        "Embedded bring-up",
        "Electromagnetic simulation",
        "Software–hardware co-design",
      ],
    },
    solution: [
      "Paired digital design flow (RTL → HDL → verification → embedded) with a parallel simulation branch for electromagnetic and circuit modeling.",
    ],
    decisions: [
      {
        title: "Why co-design?",
        text: "Software constraints and silicon timing only stay aligned when both sides share one architecture conversation.",
      },
    ],
    challenges: [
      {
        title: "Cross-domain interfaces",
        text: "Clear contracts between firmware, RTL and simulation models reduced late integration surprises.",
      },
    ],
    results: [
      { value: "RTL", label: "Digital path" },
      { value: "EM", label: "Simulation" },
      { value: "MCU", label: "Embedded" },
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return PROJECTS[(index + 1) % PROJECTS.length] ?? null;
}

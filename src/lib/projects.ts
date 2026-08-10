export type Project = {
  slug: string;
  name: string;
  short: string;
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
  overview: string;
  problem: {
    text: string;
    items: string[];
  };
  solution: string[];
  decisions: { title: string; text: string }[];
  challenges: { title: string; text: string }[];
  results: { value: string; label: string }[];
  gallery: { title: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "e-commerce-platform",
    name: "E-Commerce Platform",
    short:
      "Scalable commerce platform with authentication, basket management, orders and payment integration.",
    description:
      "A scalable commerce platform designed for high-performance product discovery, basket management and order processing.",
    technologies: ["NestJS", "Next.js", "PostgreSQL", "Redis"],
    demo: "#",
    github: "#",
    overview:
      "A full commerce platform covering product discovery, basket management, checkout and order processing. The backend is built as a modular NestJS application with clear domain boundaries, backed by PostgreSQL for transactional data and Redis for caching and sessions. Docker-based infrastructure keeps every environment reproducible, from local development to production.",
    problem: {
      text: "The system needed to support:",
      items: [
        "Authentication",
        "Product management",
        "Basket management",
        "Orders",
        "Payment",
        "High-performance API access",
      ],
    },
    solution: [
      "Designed a modular backend using NestJS with PostgreSQL, Redis and Docker-based infrastructure.",
      "Each business capability lives in its own module with an explicit public contract, so teams can build features in parallel while the system stays easy to reason about. Hot reads are served from Redis, and the API is designed to stay stateless and horizontally scalable.",
    ],
    decisions: [
      {
        title: "Why Redis?",
        text: "Frequently accessed data is cached to reduce database load and improve response times.",
      },
      {
        title: "Why RabbitMQ?",
        text: "Asynchronous workloads are decoupled from the main request lifecycle.",
      },
      {
        title: "Why PostgreSQL?",
        text: "Strong relational guarantees and complex querying capabilities.",
      },
      {
        title: "Why Docker?",
        text: "Every service runs in a reproducible container, from local development to production.",
      },
    ],
    challenges: [
      {
        title: "Product discovery performance",
        text: "Filter-heavy listing queries started to degrade under load. Solved with indexed materialized views plus a Redis query cache in front of the slowest endpoints.",
      },
      {
        title: "Order consistency under retries",
        text: "Clients retry failed requests, which can double-charge an order. Idempotency keys and tight transaction boundaries on the payment flow removed the edge case.",
      },
      {
        title: "State that scales",
        text: "Keeping auth and basket state in local memory would pin requests to one instance. Moving both to Redis made every node interchangeable.",
      },
    ],
    results: [
      { value: "99.9%", label: "Uptime" },
      { value: "<150ms", label: "p95 API latency" },
      { value: "2×", label: "Faster checkout" },
      { value: "6", label: "Docker services" },
    ],
    gallery: [
      { title: "Storefront" },
      { title: "Checkout" },
      { title: "Admin dashboard" },
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

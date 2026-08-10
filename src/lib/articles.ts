export type Article = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "designing-microservices-with-nestjs",
    category: "Architecture",
    title: "Designing Microservices with NestJS",
    description: "Modular boundaries, communication patterns and the traps to avoid.",
    date: "2026-03-12",
    readTime: "8 min",
    body: [
      "Microservices fail for organizational reasons more often than technical ones. Before drawing boxes on a diagram, ask what you actually need to decouple: deployability, team ownership, or independent scaling. If the answer is unclear, a modular monolith is usually the honest starting point.",
      "In NestJS, the module system is your boundary tool. Each service should expose a small, explicit public contract through its controller and service layer, and keep everything else private. When a module's dependencies grow beyond its exports, that is a signal the boundary is wrong.",
      "For communication, prefer synchronous HTTP or gRPC for request/response flows and events for anything that is a side effect. RabbitMQ works well for command- and event-driven workloads. Keep event payloads versioned and small — they outlive the code that produced them.",
      "The traps: distributed transactions, sharing a database between services, and treating every utility function as a shared library. Each one quietly reintroduces the coupling you were trying to escape.",
    ],
  },
  {
    slug: "redis-caching-strategies-for-nestjs",
    category: "Performance",
    title: "Redis Caching Strategies for NestJS",
    description: "Caching layers, invalidation and avoiding stale reads at scale.",
    date: "2026-01-22",
    readTime: "7 min",
    body: [
      "A cache is only as good as its invalidation story. Add Redis to your NestJS application for the reads that matter — hot product listings, user sessions, rate-limit state — and define exactly when each entry is invalidated.",
      "Start with cache-aside: read from Redis, fall back to the database, and write back on a hit. It is simple, predictable, and correct under most workloads. Write-through and write-behind exist for more aggressive cases, but they complicate failure handling.",
      "Use short TTLs as a safety net rather than a strategy. TTLs hide bugs; explicit invalidation on writes is what keeps data fresh. Emit an event when the source data changes and let each cache consumer decide what to purge.",
      "Measure before you cache. Profile the endpoints, find the slow queries, then add Redis where it removes real load from PostgreSQL — not everywhere at once.",
    ],
  },
  {
    slug: "rabbitmq-retry-dead-letter-queues",
    category: "Messaging",
    title: "RabbitMQ Retry & Dead Letter Queues",
    description: "Building reliable retry flows that don't silently drop work.",
    date: "2025-12-05",
    readTime: "6 min",
    body: [
      "A message that fails once is normal. A message that fails forever and blocks the queue is a design bug. RabbitMQ's retry and dead-letter mechanisms exist to make failure visible instead of silent.",
      "Configure a primary queue with a bounded retry exchange: on failure, republish to a retry queue with a delay, and after N attempts move the message to a dead-letter queue for inspection.",
      "Track a retry count header on the message. Dead-lettering without context produces a black hole; dead-lettering with headers produces an ops dashboard. Alert on dead-letter depth — it is the fastest signal that something is genuinely wrong.",
      "Keep consumer logic idempotent. Retries mean duplicate delivery, so design handlers so processing the same event twice is harmless.",
    ],
  },
  {
    slug: "postgresql-performance-optimization",
    category: "Database",
    title: "PostgreSQL Performance Optimization",
    description: "Indexes, query planning and the metrics that actually matter.",
    date: "2025-10-18",
    readTime: "9 min",
    body: [
      "Most PostgreSQL performance problems are not about the database — they are about queries. Start with EXPLAIN ANALYZE on the slow statements and read what the planner actually does before touching configuration.",
      "Index with intent. Composite indexes for the filters your application really issues, not a strawman per column. A bloated index set slows writes and fills memory without helping reads.",
      "Understand the cache. PostgreSQL keeps hot data in shared_buffers and the OS page cache. If your working set fits in memory, most 'slow database' complaints become query-shape problems.",
      "Monitor the things that matter: cache hit ratio, index usage, slow query log, connection saturation. Then change one variable at a time and measure again.",
    ],
  },
  {
    slug: "securing-production-apis-with-nestjs",
    category: "Security",
    title: "Securing Production APIs with NestJS",
    description: "AuthN/AuthZ patterns, validation and defense in depth.",
    date: "2025-08-30",
    readTime: "7 min",
    body: [
      "Security is a property of the whole request pipeline, not a single guard. In NestJS, chain validation, authentication, authorization and rate limiting so every layer has one clear job.",
      "Validate everything at the edge with class-validator DTOs. Unexpected input is the root of most injection and mass-assignment issues. Whitelist properties; reject what you did not define.",
      "Use guards for authentication and roles for authorization. Keep policies close to the resources they protect and centralize identity in a service you trust — JWT for short-lived sessions, refresh flows for long-lived ones.",
      "Defense in depth means assuming one layer will fail: rate limit the login endpoint, log security events, and keep secrets out of the bundle. The goal is that one mistake is not enough to compromise the system.",
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

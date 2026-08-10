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
    slug: "building-realtime-systems-websockets-redis",
    category: "Real-Time",
    title: "Building Real-Time Systems with WebSockets and Redis",
    description: "Gateway design, fan-out and keeping state honest under load.",
    date: "2026-02-18",
    readTime: "7 min",
    body: [
      "Realtime systems fail when transport and domain logic share a process with no boundaries. Keep the WebSocket gateway thin: authenticate, route, and publish. Put business rules behind services that can be tested without a socket open.",
      "Redis Pub/Sub is an excellent fan-out bus for ephemeral updates. It is not a durable queue — if a client disconnects, they need a catch-up path from a source of truth, not from the pub/sub backlog that never existed.",
      "Presence, typing indicators and location pings have different freshness requirements. Separate channels by concern so a noisy typing stream cannot starve critical position updates.",
      "Measure reconnect storms. After a network blip, hundreds of clients returning at once will look like a DDoS to an unprepared gateway. Back off reconnects and warm caches before accepting the full flood.",
    ],
  },
  {
    slug: "rabbitmq-patterns-distributed-systems",
    category: "Messaging",
    title: "RabbitMQ Patterns for Distributed Systems",
    description: "Commands, events, retries and dead letters that stay operable.",
    date: "2026-01-08",
    readTime: "8 min",
    body: [
      "Treat RabbitMQ as a contract layer, not a dumping ground. Name exchanges and routing keys after domain events, version payloads, and document who is allowed to publish.",
      "Commands expect a worker; events expect many listeners. Mixing them in one exchange usually produces consumers that half-own a workflow and half-ignore side effects.",
      "Retries without dead letters create silent infinite loops. Bound attempts, delay with purpose, and alert on dead-letter depth — that metric is often the earliest production signal that a dependency changed shape.",
      "Idempotency is mandatory. At-least-once delivery means your handler will see duplicates; design every consumer as if it already has.",
    ],
  },
  {
    slug: "redis-geo-realtime-location-tracking",
    category: "Data",
    title: "Redis GEO for Real-Time Location Tracking",
    description: "Spatial queries that stay fast when drivers move every second.",
    date: "2025-11-22",
    readTime: "6 min",
    body: [
      "Redis GEO is a sorted set with geohash under the hood. That makes nearby-driver queries cheap when the working set fits memory — which it usually does for city-scale fleets.",
      "Write positions frequently, read with radius queries, and keep the member key stable (driver id). Ephemeral keys with TTL clean up offline drivers without a sweeper job.",
      "Do not use GEO as the only source of truth for billing or compliance trails. Persist checkpoints to a durable store and treat Redis as the hot index for the live map.",
      "Watch cardinality. Mega-radius queries over dense downtown cells will still hurt; tune radius and result limits to what the UI can actually render.",
    ],
  },
  {
    slug: "designing-production-ready-apis",
    category: "API Design",
    title: "Designing Production-Ready APIs",
    description: "Contracts, errors, auth and the details that keep clients calm.",
    date: "2025-10-02",
    readTime: "7 min",
    body: [
      "A production API is a product. Version your contracts, publish error shapes, and keep breaking changes deliberate — clients outlive the sprint that shipped the endpoint.",
      "Validate at the edge. Reject unknown fields, constrain types, and return actionable errors. Most security and reliability incidents start as 'interesting' input that nobody planned for.",
      "AuthN and AuthZ are different layers. Authenticate once, authorize close to the resource, and never assume a gateway check is enough for every internal call.",
      "Instrument latency, saturation and error rate per route. Without those three, 'the API is slow' is a feeling, not an engineering problem.",
    ],
  },
  {
    slug: "hexagonal-architecture-in-nestjs",
    category: "Architecture",
    title: "Hexagonal Architecture in NestJS",
    description: "Ports, adapters and keeping NestJS frameworks at the edge.",
    date: "2025-08-14",
    readTime: "8 min",
    body: [
      "Hexagonal architecture is a boundary strategy: domain in the center, frameworks at the edge. NestJS modules map cleanly to this if you resist putting TypeORM entities and controllers in the same folder as use cases.",
      "Define ports as interfaces your application depends on. Adapters implement those ports for HTTP, persistence and messaging. Tests can swap adapters without spinning a database.",
      "Do not over-abstract day one. Extract a port when a second adapter appears or when framework types start leaking into domain tests — not because a blog post said every repository needs an interface.",
      "CQRS and hexagonal compose well: commands and queries become application services, while NestJS controllers remain thin adapters that translate DTOs inward.",
    ],
  },
  {
    slug: "nextjs-architecture-large-applications",
    category: "Frontend",
    title: "Next.js Architecture for Large Applications",
    description: "App Router boundaries that scale with teams and features.",
    date: "2025-07-01",
    readTime: "7 min",
    body: [
      "Large Next.js apps rot when every page imports everything. Treat route segments as ownership boundaries: shared UI stays shared, feature data access stays local, and cross-feature imports go through explicit public modules.",
      "Server Components default until interactivity demands a client boundary. Pushing 'use client' to the leaves keeps bundles smaller and makes data fetching easier to reason about.",
      "Colocate loading, error and not-found UI with the segment that owns the failure mode. Global catch-alls hide which feature actually broke.",
      "Cache deliberately. Understand what is static, what is tagged, and what must stay dynamic — accidental static shells of personalized data are a class of bug unique to modern React frameworks.",
    ],
  },
  {
    slug: "from-rtl-to-hardware-digital-ic-design",
    category: "Deep Tech",
    title: "From RTL to Hardware: Understanding Digital IC Design",
    description: "How RTL, HDL and verification become working silicon.",
    date: "2025-05-20",
    readTime: "9 min",
    body: [
      "RTL is a behavioral contract for digital hardware. VHDL and Verilog express that contract; synthesis turns it into gates; timing and power close the loop before tape-out.",
      "Verification is not optional polish. Simulation, assertions and coverage tell you whether the RTL you wrote matches the specification you think you wrote.",
      "CMOS realities — delay, power, process variation — leak into architecture decisions. A 'clean' microarchitecture that cannot close timing is not clean.",
      "Software engineers joining IC programs should learn the verification mindset first: invariants, constrained random stimulus and failing fast on X-propagation beat clever RTL every time.",
    ],
  },
  {
    slug: "hardware-software-codesign-principles",
    category: "Deep Tech",
    title: "Hardware–Software Co-Design Principles",
    description: "Interfaces that keep firmware, RTL and products aligned.",
    date: "2025-04-08",
    readTime: "6 min",
    body: [
      "Co-design starts with interfaces. Register maps, interrupt semantics and timing budgets are product contracts — treat them with the same care as a public API.",
      "Push decisions early: what belongs in silicon, what belongs in firmware, what belongs in the cloud. Moving a feature across that boundary late is where schedules die.",
      "Simulation and software bring-up should share models. An Ansys or SPICE result that never informs firmware assumptions is theatre, not engineering.",
      "Own the whole path from sensor physics to API response when the product depends on it. WhisperVolt exists for teams that need that path to be one conversation.",
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

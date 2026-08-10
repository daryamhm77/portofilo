import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const CATEGORIES = [
  {
    name: "Backend",
    items: [
      { name: "Node.js", desc: "Runtime" },
      { name: "NestJS", desc: "Backend Framework" },
      { name: "TypeScript", desc: "Language" },
      { name: "Express", desc: "Web Framework" },
      { name: "GraphQL", desc: "Query Language" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", desc: "Relational Database" },
      { name: "MySQL", desc: "Relational Database" },
      { name: "MongoDB", desc: "Document Database" },
      { name: "Redis", desc: "Cache & Store" },
    ],
  },
  {
    name: "Architecture",
    items: [
      { name: "REST", desc: "API Style" },
      { name: "Microservices", desc: "Architecture Pattern" },
      { name: "DDD", desc: "Domain-Driven Design" },
      { name: "Event-driven", desc: "Architecture Pattern" },
      { name: "gRPC", desc: "RPC Framework" },
    ],
  },
  {
    name: "Infrastructure",
    items: [
      { name: "Docker", desc: "Containerization" },
      { name: "Nginx", desc: "Reverse Proxy" },
      { name: "AWS S3", desc: "Object Storage" },
      { name: "MinIO", desc: "S3-compatible Storage" },
      { name: "CI/CD", desc: "Automation" },
    ],
  },
  {
    name: "Messaging",
    items: [
      { name: "RabbitMQ", desc: "Message Broker" },
      { name: "Kafka", desc: "Event Streaming" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Stack"
        title="My Toolbox"
        description="The technologies I reach for when building production systems."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {CATEGORIES.map((cat, i) => (
          <FadeIn key={cat.name} y={30} delay={i * 0.06} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-edge bg-surface p-6">
              <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
                {cat.name}
              </p>
              <div className="flex flex-wrap content-start gap-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="group relative">
                    <span className="inline-flex cursor-default items-center rounded-full border border-edge bg-surface-2 px-3.5 py-1.5 font-mono text-[13px] text-muted transition-all duration-200 hover:scale-[1.08] hover:border-accent/50 hover:text-accent">
                      {item.name}
                    </span>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-edge bg-surface-2 px-3 py-1.5 text-center opacity-0 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.9)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <span className="block text-xs font-medium text-foreground">{item.name}</span>
                      <span className="block font-mono text-[10px] text-accent">{item.desc}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="About Me"
            description="I'm a backend-focused full-stack developer who enjoys turning complex requirements into reliable, scalable software."
          />
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              I work primarily with NestJS and Next.js, with a strong focus on backend
              architecture, databases, distributed systems and production-ready development.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-edge px-3.5 py-1.5 font-mono text-xs text-subtle"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} x={24} y={0}>
          <div className="overflow-hidden rounded-2xl border border-edge bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-subtle">darya.config.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-muted">
              <code>
                <span className="text-accent-strong">const</span>{" "}
                <span className="text-foreground">engineer</span>{" "}
                <span className="text-accent-strong">=</span> {"{"}
                {"\n"}
                {"  "}focus:{" "}
                <span className="text-[#fbbf24]">&quot;backend &amp; distributed systems&quot;</span>,
                {"\n"}
                {"  "}primary: [<span className="text-[#fbbf24]">&quot;NestJS&quot;</span>,{" "}
                <span className="text-[#fbbf24]">&quot;Next.js&quot;</span>,{" "}
                <span className="text-[#fbbf24]">&quot;TypeScript&quot;</span>],
                {"\n"}
                {"  "}strengths: [<span className="text-[#fbbf24]">&quot;architecture&quot;</span>,{" "}
                <span className="text-[#fbbf24]">&quot;databases&quot;</span>,{" "}
                <span className="text-[#fbbf24]">&quot;production&quot;</span>],
                {"\n"}
                {"  "}availability: <span className="text-[#fbbf24]">&quot;open to projects&quot;</span>,
                {"\n"}
                {"};"}
                {"\n"}
                <span className="inline-block h-[1.05em] w-[0.55em] translate-y-[0.2em] animate-blink bg-accent" />
              </code>
            </pre>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

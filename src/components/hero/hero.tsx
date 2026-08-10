import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { StackOrbit } from "@/components/hero/stack-orbit";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid animate-grid-drift absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black_30%,transparent_75%)]" />
      <div
        className="absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 70% -10%, rgba(59,158,255,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-32 md:pt-44">
        <div>
          <FadeIn inView={false}>
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
              {SITE.pill}
            </p>
          </FadeIn>

          <FadeIn inView={false} delay={0.06}>
            <p className="mt-4 font-mono text-sm tracking-tight text-muted">
              WHISPER<span className="text-accent">⚡</span>VOLT
            </p>
          </FadeIn>

          <FadeIn inView={false} delay={0.1}>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
              {SITE.headline}
            </h1>
          </FadeIn>

          <FadeIn inView={false} delay={0.18}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {SITE.description}
            </p>
          </FadeIn>

          <FadeIn inView={false} delay={0.26}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-[#041018] transition-colors hover:bg-accent-strong"
              >
                Explore Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full border border-edge-strong px-6 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Start a Project
              </Link>
            </div>
          </FadeIn>

          <FadeIn inView={false} delay={0.34}>
            <p className="mt-10 font-mono text-xs tracking-[0.18em] text-subtle uppercase">
              {SITE.tagline}
            </p>
          </FadeIn>
        </div>

        <FadeIn inView={false} delay={0.2} x={24} y={0}>
          <StackOrbit />
        </FadeIn>
      </div>
    </section>
  );
}

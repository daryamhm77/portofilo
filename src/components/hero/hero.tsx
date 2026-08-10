import { Terminal } from "@/components/hero/terminal";
import { FadeIn } from "@/components/ui/fade-in";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/darya",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/darya",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@darya.dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid animate-grid-drift absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black_30%,transparent_75%)]" />
      <div
        className="absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 70% -10%, rgba(52,211,153,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:pb-32 md:pt-44">
        <div>
          <FadeIn inView={false}>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
                Backend / Full-Stack Developer
              </p>
            </div>
          </FadeIn>

          <FadeIn inView={false} delay={0.08}>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-[3.4rem] md:leading-[1.08]">
              I build scalable web applications and{" "}
              <span className="text-accent">backend systems.</span>
            </h1>
          </FadeIn>

          <FadeIn inView={false} delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Backend-focused full-stack developer specializing in NestJS, Next.js,
              TypeScript, PostgreSQL, Redis and scalable system architecture.
            </p>
          </FadeIn>

          <FadeIn inView={false} delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-[#03251a] transition-colors hover:bg-accent-strong"
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="mailto:hello@darya.dev"
                className="inline-flex h-12 items-center rounded-full border border-edge-strong px-6 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Start a Project
              </a>
            </div>
          </FadeIn>

          <FadeIn inView={false} delay={0.32}>
            <div className="mt-10 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <Terminal />
      </div>
    </section>
  );
}

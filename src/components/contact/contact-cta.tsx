import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SITE, TEAM } from "@/lib/site";

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pt-8 pb-8">
      <FadeIn y={30}>
        <div
          className="animate-gradient relative overflow-hidden rounded-3xl border border-edge px-8 py-20 text-center md:py-28"
          style={{
            background:
              "linear-gradient(115deg, rgba(59,158,255,0.16), rgba(30,138,255,0.06), rgba(139,92,246,0.1), rgba(59,158,255,0.16))",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-background/50" />
          <div className="relative">
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
              Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Have a system worth building?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Tell us what you&apos;re building, what problem you&apos;re solving, and where you
              want to take it.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#041018] transition-colors hover:bg-accent-strong"
              >
                Start a Conversation
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center rounded-full border border-edge-strong px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Email
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-subtle">
              <a
                href={TEAM.darya.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Darya · GitHub
              </a>
              <a
                href={TEAM.darya.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Darya · LinkedIn
              </a>
              <a
                href={TEAM.nima.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Nima · GitHub
              </a>
              <a
                href={TEAM.nima.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Nima · LinkedIn
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

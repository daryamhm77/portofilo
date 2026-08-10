import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SITE } from "@/lib/site";

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pt-8">
      <FadeIn y={30}>
        <div
          className="animate-gradient relative overflow-hidden rounded-3xl border border-edge px-8 py-20 text-center md:py-28"
          style={{
            background:
              "linear-gradient(115deg, rgba(52,211,153,0.16), rgba(16,185,129,0.07), rgba(59,130,246,0.1), rgba(52,211,153,0.16))",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-background/50" />
          <div className="relative">
            <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
              Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Tell me what you&apos;re building. I&apos;ll help you turn the idea into a
              production-ready application.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#03251a] transition-colors hover:bg-accent-strong"
              >
                Start a Project
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center rounded-full border border-edge-strong px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

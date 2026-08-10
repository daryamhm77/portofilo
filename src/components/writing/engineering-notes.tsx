import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Writing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Writing"
        title="Engineering Notes"
        description="Notes from building and debugging production systems."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a, i) => (
          <FadeIn key={a.slug} y={30} delay={(i % 3) * 0.08} className="h-full">
            <Link
              href={`/blog/${a.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
                {a.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{a.description}</p>
              <span className="relative mt-6 inline-flex items-center text-sm font-semibold text-accent">
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  Read article →
                </span>
                <span className="absolute left-0 -translate-x-3 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          All Notes
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </section>
  );
}

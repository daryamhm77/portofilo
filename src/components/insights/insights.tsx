import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Insights() {
  return (
    <section id="insights" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Insights"
        title="Engineering Notes"
        description="Technical writing that demonstrates how we think about systems — not generic blog posts."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.slice(0, 6).map((a, i) => (
          <FadeIn key={a.slug} y={30} delay={(i % 3) * 0.08} className="h-full">
            <Link
              href={`/insights/${a.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
                {a.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{a.description}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-200 group-hover:translate-x-0.5">
                Read note
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/insights"
          className="group inline-flex items-center gap-2 rounded-full border border-edge-strong px-8 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          All Notes
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

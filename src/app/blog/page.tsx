import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Engineering Notes — Darya",
  description:
    "Notes from building and debugging production systems — architecture, performance, messaging and security.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <SectionHeading
        eyebrow="Writing"
        title="Engineering Notes"
        description="Notes from building and debugging production systems — architecture, performance, messaging and security."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
          >
            <span className="self-start rounded-full border border-edge px-3 py-1 font-mono text-[11px] text-subtle">
              {article.category}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{article.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {article.description}
            </p>
            <div className="mt-6 flex items-center justify-between font-mono text-xs text-subtle">
              <span>{article.date}</span>
              <span>{article.readTime} read</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

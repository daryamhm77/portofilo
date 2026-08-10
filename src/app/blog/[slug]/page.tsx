import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";
import { FadeIn } from "@/components/ui/fade-in";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Darya`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:pt-40">
      <FadeIn inView={false}>
        <Link href="/blog" className="font-mono text-sm text-subtle hover:text-accent">
          ← All Notes
        </Link>
      </FadeIn>

      <FadeIn inView={false} delay={0.08}>
        <p className="mt-10 font-mono text-xs tracking-[0.22em] text-accent uppercase">
          {article.category}
        </p>
      </FadeIn>

      <FadeIn inView={false} delay={0.14}>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
      </FadeIn>

      <FadeIn inView={false} delay={0.2}>
        <div className="mt-5 flex gap-2 font-mono text-sm text-subtle">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime} read</span>
        </div>
      </FadeIn>

      <div className="mt-12 space-y-6">
        {article.body.map((paragraph, i) => (
          <FadeIn key={i} delay={Math.min(i * 0.05, 0.2)}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}

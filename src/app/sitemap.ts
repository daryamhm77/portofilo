import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";
import { ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/capabilities`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/technology`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/team`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];

  const workRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.url}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const insightRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE.url}/insights/${article.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}

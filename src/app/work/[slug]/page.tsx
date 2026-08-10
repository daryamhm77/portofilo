import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, getNextProject } from "@/lib/projects";
import { ProjectHero } from "@/components/projects/case-study/project-hero";
import { Overview } from "@/components/projects/case-study/overview";
import { ProblemSolution } from "@/components/projects/case-study/problem-solution";
import { Decisions } from "@/components/projects/case-study/decisions";
import { Challenges } from "@/components/projects/case-study/challenges";
import { Results } from "@/components/projects/case-study/results";
import { Technology as ProjectTech } from "@/components/projects/case-study/technology";
import { NextProject } from "@/components/projects/case-study/next-project";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.short,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${SITE.name}`,
      description: project.short,
      url: `/work/${project.slug}`,
      type: "website",
    },
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.short,
    programmingLanguage: "TypeScript",
    author: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <Navbar />
      <main>
        <ProjectHero project={project} />
        <Overview overview={project.overview} />
        <ProblemSolution problem={project.problem} solution={project.solution} />
        <Decisions decisions={project.decisions} />
        <Challenges challenges={project.challenges} />
        <Results results={project.results} />
        <ProjectTech project={project} />
        <NextProject project={next} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </main>
      <Footer />
    </>
  );
}

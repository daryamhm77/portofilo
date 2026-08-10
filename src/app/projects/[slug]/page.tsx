import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, getNextProject } from "@/lib/projects";
import { CASE_STUDY_ARCHITECTURE } from "@/lib/architecture";
import { ProjectHero } from "@/components/projects/case-study/project-hero";
import { Overview } from "@/components/projects/case-study/overview";
import { ProblemSolution } from "@/components/projects/case-study/problem-solution";
import { CaseStudySection } from "@/components/ui/section";
import { ArchitectureDiagram } from "@/components/architecture/architecture-diagram";
import { Decisions } from "@/components/projects/case-study/decisions";
import { Challenges } from "@/components/projects/case-study/challenges";
import { Results } from "@/components/projects/case-study/results";
import { Technology } from "@/components/projects/case-study/technology";
import { Gallery } from "@/components/projects/case-study/gallery";
import { NextProject } from "@/components/projects/case-study/next-project";

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
    title: `${project.name} — Darya`,
    description: project.short,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} — Darya`,
      description: project.short,
      url: `/projects/${project.slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({
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
    author: { "@type": "Person", name: "Darya" },
  };

  return (
    <main>
      <ProjectHero project={project} />
      <Overview overview={project.overview} />
      <ProblemSolution problem={project.problem} solution={project.solution} />
      <CaseStudySection
        eyebrow="Architecture"
        title="Under the Hood"
        description="A simplified view of the request flow through the system."
      >
        <ArchitectureDiagram
          nodes={CASE_STUDY_ARCHITECTURE.nodes}
          edges={CASE_STUDY_ARCHITECTURE.edges}
          particles={CASE_STUDY_ARCHITECTURE.particles}
        />
      </CaseStudySection>
      <Decisions decisions={project.decisions} />
      <Challenges challenges={project.challenges} />
      <Results results={project.results} />
      <Technology technologies={project.technologies} />
      <Gallery gallery={project.gallery} />
      <NextProject project={next} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}

import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section";
import { GitHub } from "@/components/github/github-section";

export const metadata: Metadata = {
  title: "Projects — Darya",
  description:
    "A selection of systems and applications I've designed and built as a backend and full-stack developer.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <SectionHeading
          eyebrow="Portfolio"
          title="All Projects"
          description="A selection of systems and applications I've designed and built."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
      <GitHub />
    </main>
  );
}

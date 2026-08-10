import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Systems WhisperVolt has built — distributed backends, realtime platforms, IoT infrastructure and deep-tech engineering.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
          <SectionHeading
            eyebrow="Work"
            title="Systems we've built."
            description="Production platforms spanning distributed backends, realtime systems, IoT and deep-tech engineering."
          />
          <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

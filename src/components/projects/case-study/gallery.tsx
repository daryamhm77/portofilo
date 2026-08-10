import { CaseStudySection } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectMockup } from "@/components/projects/project-mockup";

type GalleryItem = { title: string };

export function Gallery({ gallery }: { gallery: GalleryItem[] }) {
  return (
    <CaseStudySection eyebrow="Screens" title="Gallery">
      <div className="grid gap-5 md:grid-cols-3">
        {gallery.map((g, i) => (
          <FadeIn key={g.title} delay={i * 0.08} className="h-full">
            <figure className="overflow-hidden rounded-2xl border border-edge bg-surface">
              <ProjectMockup title={g.title} />
              <figcaption className="border-t border-edge px-5 py-4 font-mono text-xs text-subtle">
                {g.title}
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </CaseStudySection>
  );
}

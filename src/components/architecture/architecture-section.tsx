import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { ArchitectureDiagram } from "@/components/architecture/architecture-diagram";
import { HOME_ARCHITECTURE } from "@/lib/architecture";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Architecture"
        title="Under the Hood"
        description="A typical system I build — the request flow from the browser to the data layer."
      />
      <FadeIn y={30}>
        <div className="mt-12">
          <ArchitectureDiagram
            nodes={HOME_ARCHITECTURE.nodes}
            edges={HOME_ARCHITECTURE.edges}
            particles={HOME_ARCHITECTURE.particles}
          />
        </div>
      </FadeIn>
    </section>
  );
}

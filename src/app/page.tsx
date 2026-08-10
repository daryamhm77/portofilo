import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/hero/hero";
import { Metrics } from "@/components/metrics/metrics";
import { Services } from "@/components/services/service-cards";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { ArchitectureSection } from "@/components/architecture/architecture-section";
import { TechStack } from "@/components/tech-stack/tech-grid";
import { Experience } from "@/components/experience/experience-timeline";
import { EngineeringPrinciples } from "@/components/principles/engineering-principles";
import { About } from "@/components/about/about";
import { Testimonials } from "@/components/testimonials/testimonial-carousel";
import { Writing } from "@/components/writing/engineering-notes";
import { ContactCta } from "@/components/contact/contact-cta";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <FeaturedProjects />
        <ArchitectureSection />
        <TechStack />
        <Experience />
        <EngineeringPrinciples />
        <About />
        <Testimonials />
        <Writing />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}

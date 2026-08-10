import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Capabilities } from "@/components/capabilities/capabilities";
import { WhatWeBuild } from "@/components/capabilities/what-we-build";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { Technology } from "@/components/technology/technology";
import { Team } from "@/components/team/team";
import { EngineeringPrinciples } from "@/components/principles/engineering-principles";
import { Process } from "@/components/process/process";
import { Insights } from "@/components/insights/insights";
import { ContactCta } from "@/components/contact/contact-cta";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <WhatWeBuild />
        <FeaturedProjects />
        <Technology />
        <Team />
        <EngineeringPrinciples />
        <Process />
        <Insights />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Team } from "@/components/team/team";
import { Advantage } from "@/components/advantage/advantage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the engineers behind ${SITE.name} — backend & full-stack with NestJS/Next.js, and frontend & deep-tech with Next.js/React.`,
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Team />
        <Advantage />
      </main>
      <Footer />
    </>
  );
}

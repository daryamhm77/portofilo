import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Capabilities } from "@/components/capabilities/capabilities";
import { WhatWeBuild } from "@/components/capabilities/what-we-build";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description: SITE.description,
};

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Capabilities />
        <WhatWeBuild />
        <div className="mx-auto max-w-6xl px-6 pb-24 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#041018] transition-colors hover:bg-accent-strong"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

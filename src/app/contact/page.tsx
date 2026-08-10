import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Have a system worth building? Tell ${SITE.name} what you're solving and where you want to take it.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-24 md:pt-32">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

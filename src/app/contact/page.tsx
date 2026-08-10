import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact — Darya",
  description:
    "Tell me what you're building and I'll help you turn the idea into a production-ready application.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-24 md:pt-32">
      <ContactForm />
    </main>
  );
}

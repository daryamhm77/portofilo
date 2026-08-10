import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Technology } from "@/components/technology/technology";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The WhisperVolt technology universe — application, backend, data, distributed systems, infrastructure, hardware and simulation.",
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Technology />
      </main>
      <Footer />
    </>
  );
}

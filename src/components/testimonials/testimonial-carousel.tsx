"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

const TESTIMONIALS = [
  {
    quote:
      "Darya was responsible for building and improving several backend features and consistently delivered reliable work.",
    name: "Product Lead",
    role: "PANTOhealth",
  },
  {
    quote:
      "Darya translated a vague product idea into a well-architected backend that handled real traffic without drama.",
    name: "Founder",
    role: "Selltory",
  },
  {
    quote: "Reliable, communicative and technically deep. Exactly what you want on a remote team.",
    name: "Engineering Manager",
    role: "KalaLotous",
  },
];

export function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) =>
    setIndex(([i]) => [(i + dir + TESTIMONIALS.length) % TESTIMONIALS.length, dir]);

  const item = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Feedback"
        title="What People Say"
        description="A few words from people I've built with."
      />

      <FadeIn y={30}>
        <div className="mt-12 rounded-3xl border border-edge bg-surface p-8 md:p-12">
          <div className="relative min-h-[180px] overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-0.5 font-mono text-sm text-subtle">{item.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-edge pt-6">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-accent" : "w-1.5 bg-edge-strong hover:bg-muted"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-edge px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-edge px-4 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

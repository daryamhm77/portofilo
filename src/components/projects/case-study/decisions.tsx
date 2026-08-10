"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/lib/projects";
import { CaseStudySection } from "@/components/ui/section";

export function Decisions({ decisions }: { decisions: Project["decisions"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <CaseStudySection eyebrow="Engineering" title="Technical Decisions">
      <div className="flex flex-col gap-3">
        {decisions.map((d, i) => {
          const isOpen = open === i;
          return (
            <div
              key={d.title}
              className="overflow-hidden rounded-2xl border border-edge bg-surface transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-mono text-sm font-medium tracking-[0.08em] uppercase transition-colors group-hover:text-accent">
                  {d.title}
                </span>
                <span className="font-mono text-lg text-accent transition-transform duration-300">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{d.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </CaseStudySection>
  );
}

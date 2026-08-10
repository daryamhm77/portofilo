"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { CAPABILITIES, type Capability } from "@/lib/capabilities";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";

export function Capabilities() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = CAPABILITIES.find((c) => c.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeId]);

  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Capabilities"
        title="From software architecture to silicon-level engineering."
        description="Three disciplines. One engineering studio."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {CAPABILITIES.map((capability, i) => (
          <FadeIn key={capability.id} y={30} delay={i * 0.1} className="h-full">
            <CapabilityCard
              capability={capability}
              onExplore={() => setActiveId(capability.id)}
            />
          </FadeIn>
        ))}
      </div>

      <CapabilityPanel
        capability={active}
        open={Boolean(active)}
        onClose={() => setActiveId(null)}
      />
    </section>
  );
}

function CapabilityCard({
  capability,
  onExplore,
}: {
  capability: Capability;
  onExplore: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={onExplore}
      className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 md:min-h-[420px] md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(59,158,255,0.1), transparent 70%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="font-mono text-sm text-subtle transition-colors group-hover:text-accent">
          {capability.number}
        </span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-edge text-subtle transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent ${
            reduceMotion ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      <h3 className="relative mt-6 font-mono text-sm font-semibold tracking-[0.14em] text-foreground uppercase">
        {capability.title}
      </h3>
      <p className="relative mt-4 max-w-[18rem] text-sm leading-relaxed text-muted">
        {capability.summary}
      </p>

      {/* Collapsed state */}
      <div className="relative mt-auto pt-10 transition-opacity duration-300 lg:group-hover:pointer-events-none lg:group-hover:opacity-0">
        <p className="font-mono text-[11px] tracking-[0.08em] text-subtle">
          {capability.tags.join(" · ")}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-accent">
          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
          Explore {capability.title}
          <span aria-hidden="true">→</span>
        </span>
      </div>

      {/* Hover progressive disclosure (desktop) */}
      <div className="pointer-events-none absolute inset-x-7 bottom-7 top-[10.5rem] hidden flex-col opacity-0 transition-all duration-300 lg:flex lg:group-hover:opacity-100 md:inset-x-8 md:bottom-8">
        <div className="mb-4 h-px w-full shrink-0 bg-edge" />
        <div className="min-h-0 flex-1 space-y-3.5 overflow-hidden">
          {capability.hoverGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                {group.label}
              </p>
              <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-muted">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}

function CapabilityPanel({
  capability,
  open,
  onClose,
}: {
  capability: Capability | null;
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && capability && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <motion.button
            type="button"
            aria-label="Close capability details"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col border-l border-edge bg-[#070707] shadow-[-24px_0_80px_-32px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center justify-between border-b border-edge px-6 py-5">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                  Capability {capability.number}
                </p>
                <h2
                  id={titleId}
                  className="mt-1 font-mono text-sm tracking-[0.16em] text-foreground uppercase"
                >
                  {capability.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="h-px w-full bg-edge" />
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                {capability.detailIntro}
              </p>

              <div className="mt-10 space-y-10">
                {capability.detailSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                      {section.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-edge px-6 py-5">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#041018] transition-colors hover:bg-accent-strong"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

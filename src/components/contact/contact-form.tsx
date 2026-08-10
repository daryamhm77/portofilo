"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/fade-in";
import { SITE } from "@/lib/site";

const PROJECT_TYPES = [
  "Web Application",
  "Backend System",
  "Microservices",
  "Real-Time Platform",
  "Cloud Infrastructure",
  "Embedded System",
  "Hardware / IC",
  "Technical Consulting",
  "Other",
];

const BUDGETS = ["<$5k", "$5k–$15k", "$15k–$50k", "$50k+", "Let's discuss"];

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Flexible"];

const inputCls =
  "w-full rounded-xl border border-edge bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle focus:border-accent/60";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:pb-32">
      <SectionHeading
        eyebrow="Project Inquiry"
        title="Start a conversation"
        description="Tell us what you're building. We'll come back with questions, architecture notes and next steps."
      />

      <FadeIn y={30}>
        <div className="mt-10 rounded-3xl border border-edge bg-surface p-8 md:p-12">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-surface-2 text-2xl text-accent">
                ✓
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">Thanks for reaching out</h3>
              <p className="mx-auto mt-3 max-w-md text-muted">
                We&apos;ve received your message and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 font-mono text-sm text-subtle transition-colors hover:text-accent"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
              <Field label="Name">
                <input required name="name" placeholder="Your name" className={inputCls} />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className={inputCls}
                />
              </Field>
              <Field label="Company">
                <input name="company" placeholder="Company" className={inputCls} />
              </Field>
              <Field label="Project Type">
                <select required name="projectType" defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Select a type
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Budget">
                <select required name="budget" defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Select a range
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Timeline">
                <select required name="timeline" defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Select a timeline
                  </option>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="Message">
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="What are you building?"
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-[#041018] transition-colors hover:bg-accent-strong"
                >
                  Start a Conversation
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
                <p className="font-mono text-xs text-subtle">
                  Prefer email?{" "}
                  <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                    {SITE.email}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs tracking-[0.08em] text-subtle uppercase">{label}</span>
      {children}
    </label>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { NAV } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-9 items-center gap-1.5 rounded-full border border-edge-strong px-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Start a Project
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-edge bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full border border-edge-strong px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { SITE, TEAM, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-10 text-center">
          <div>
            <Logo linked={false} variant="full" />
            <p className="mt-4 font-mono text-xs tracking-[0.2em] text-subtle uppercase">
              Software × Systems × Deep Tech
            </p>
          </div>

          <div className="grid w-full max-w-lg gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-foreground">{TEAM.darya.name}</p>
              <p className="mt-1 font-mono text-xs text-subtle">{TEAM.darya.short}</p>
              <div className="mt-3 flex items-center justify-center gap-4 font-mono text-[11px] text-subtle">
                <a
                  href={TEAM.darya.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={TEAM.darya.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{TEAM.nima.name}</p>
              <p className="mt-1 font-mono text-xs text-subtle">{TEAM.nima.short}</p>
              <div className="mt-3 flex items-center justify-center gap-4 font-mono text-[11px] text-subtle">
                <a
                  href={TEAM.nima.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={TEAM.nima.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[...NAV, { label: "Contact", href: "/contact" }].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-xs text-subtle transition-colors hover:text-accent"
          >
            {SITE.email}
          </a>

          <p className="text-sm text-subtle">© {new Date().getFullYear()} WhisperVolt</p>
        </div>
      </div>
    </footer>
  );
}

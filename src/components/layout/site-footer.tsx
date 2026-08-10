const LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: "https://github.com/darya", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/darya", external: true },
  { label: "Email", href: "mailto:hello@darya.dev", external: true },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14 text-center">
        <p className="text-2xl font-semibold tracking-tight">
          DAR<span className="text-accent">Y</span>A
        </p>
        <p className="font-mono text-sm text-subtle">Backend / Full-Stack Developer</p>
        <nav className="flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-subtle">© {new Date().getFullYear()} Darya</p>
      </div>
    </footer>
  );
}

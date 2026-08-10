import type { ReactNode } from "react";

type AnimatedBorderProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedBorder({ children, className = "" }: AnimatedBorderProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl p-px ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from var(--border-angle, 0deg), transparent 40%, rgba(59,158,255,0.55), rgba(139,92,246,0.35), transparent 70%)",
          animation: "border-spin 4s linear infinite",
        }}
      />
      <div className="relative h-full rounded-[15px] bg-surface">{children}</div>
    </div>
  );
}

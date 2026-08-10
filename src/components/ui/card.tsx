import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className = "", interactive = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-edge bg-surface ${
        interactive ? "transition-colors hover:border-accent/40" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

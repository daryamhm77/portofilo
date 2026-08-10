import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
} & Partial<AnchorHTMLAttributes<HTMLAnchorElement>> &
  Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-[#041018] hover:bg-accent-strong",
  secondary: "border border-edge-strong text-foreground hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "px-8 py-3.5 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

type LogoProps = {
  className?: string;
  linked?: boolean;
  /** Compact mark for navbar; full lockup for footer */
  variant?: "nav" | "full";
};

export function Logo({ className = "", linked = true, variant = "nav" }: LogoProps) {
  const mark =
    variant === "full" ? (
      <span className={`relative inline-block ${className}`}>
        <Image
          src={SITE.logo}
          alt="WhisperVolt — Code in silence. Power the future."
          width={220}
          height={172}
          className="h-auto w-[160px] object-contain sm:w-[200px]"
          priority
        />
      </span>
    ) : (
      <span className={`relative inline-flex h-9 items-center ${className}`}>
        <Image
          src={SITE.logo}
          alt="WhisperVolt"
          width={140}
          height={110}
          className="h-9 w-auto object-contain object-left"
          priority
        />
      </span>
    );

  if (!linked) return mark;

  return (
    <Link href="/" className="transition-opacity hover:opacity-80" aria-label="WhisperVolt home">
      {mark}
    </Link>
  );
}

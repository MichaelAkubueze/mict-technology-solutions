import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "light";
  className?: string;
}

const variants = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg",
  secondary:
    "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg",
  outline:
    "border border-slate-300 bg-transparent text-slate-800 hover:border-blue-600 hover:text-blue-700",
  light:
    "bg-white text-slate-900 hover:bg-slate-100",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2",
    "rounded-full px-6 py-3",
    "text-sm font-semibold",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-blue-600 focus-visible:ring-offset-2",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent-500 text-white shadow-soft hover:bg-accent-600 focus-visible:outline-accent-600",
  secondary: "border border-navy-200 bg-white text-navy-900 hover:border-accent-500 hover:text-accent-600 focus-visible:outline-accent-500",
  ghost: "text-navy-700 hover:text-accent-600 focus-visible:outline-accent-500"
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

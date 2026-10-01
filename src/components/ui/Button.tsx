import type { ComponentProps } from "react";
import { Link } from "react-router";
import { buttonStyles } from "@/components/ui/buttonStyles";

type Variant = keyof typeof buttonStyles;

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${buttonStyles[variant]} ${className}`} {...props} />;
}

/** External link that opens in a new tab safely. */
export function ExternalLink({ className = "", ...props }: ComponentProps<"a">) {
  return <a target="_blank" rel="noopener noreferrer" className={className} {...props} />;
}

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/logo/shawn-t-art-logo.png";
const LOGO_WIDTH = 335;
const LOGO_HEIGHT = 110;

type SiteLogoProps = {
  size?: "header" | "footer";
  className?: string;
};

export function SiteLogo({ size = "header", className }: SiteLogoProps) {
  const heightClass =
    size === "footer" ? "h-14 w-auto md:h-16" : "h-10 w-auto";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Shawn T. Art — Home"
    >
      <Image
        src={LOGO_SRC}
        alt="Shawn T. Art"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={heightClass}
        priority={size === "header"}
      />
    </Link>
  );
}

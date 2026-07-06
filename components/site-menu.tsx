"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MenuLink = {
  href: string;
  label: string;
  external?: boolean;
};

type MenuSection = {
  label: string;
  items: MenuLink[];
};

const menuSections: MenuSection[] = [
  {
    label: "WORLDS",
    items: [
      { href: "/marksoffreedom", label: "Marks of Freedom" },
      { href: "/thedoubleslash", label: "The Double Slash" },
      { href: "/slashanimal", label: "Slash Animal" },
    ],
  },
  {
    label: "ARTIST",
    items: [
      { href: "/philosophy", label: "Philosophy" },
      { href: "/about", label: "About" },
    ],
  },
  {
    label: "RECORD",
    items: [
      { href: "/collaborations", label: "Zines / Collaborations" },
      { href: "/event", label: "Exhibitions" },
      { href: "/apparel", label: "Apparel / Prints" },
    ],
  },
  {
    label: "MORE",
    items: [
      { href: "/motion", label: "Motion" },
      { href: "/music", label: "Music" },
      { href: "/nft-manifest", label: "NFT Manifest" },
      { href: "/links", label: "Links" },
      {
        href: "https://find-the-meebits.vercel.app/",
        label: "Find the Meebits",
        external: true,
      },
      {
        href: "https://meebits-runway.vercel.app/",
        label: "Meebits Runway & GIF",
        external: true,
      },
    ],
  },
];

function MenuLinkItem({ href, label, external }: MenuLink) {
  if (external) {
    return (
      <DropdownMenuItem asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70"
        >
          {label}
          <span className="ml-1 text-xs opacity-60" aria-hidden>
            ↗
          </span>
        </a>
      </DropdownMenuItem>
    );
  }

  return (
    <DropdownMenuItem asChild>
      <Link href={href}>{label}</Link>
    </DropdownMenuItem>
  );
}

export function SiteMenu() {
  return (
    <DropdownMenu>
      <div className="flex items-center rounded-md border border-border">
        <DropdownMenuTrigger className="flex items-center px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] outline-none transition-opacity hover:opacity-80">
          Menu
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent
        align="end"
        className="min-w-[14rem] border-white/15 bg-black p-2 text-white"
      >
        {menuSections.map((section, index) => (
          <div key={section.label}>
            {index > 0 ? (
              <DropdownMenuSeparator className="my-2 bg-white/10" />
            ) : null}
            <DropdownMenuLabel className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              {section.label}
            </DropdownMenuLabel>
            {section.items.map((item) => (
              <MenuLinkItem key={item.href} {...item} />
            ))}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

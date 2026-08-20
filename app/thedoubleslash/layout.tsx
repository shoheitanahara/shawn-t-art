import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Double Slash",
  description:
    "The Double Slash — current works in photography, collage, and hand-drawn // marks.",
};

export default function TheDoubleSlashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

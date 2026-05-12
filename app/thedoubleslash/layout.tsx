import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Double Slash",
  description:
    "The Double Slash — a series on the tension between freedom and control. Gallery, editions, and curator’s note.",
};

export default function TheDoubleSlashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

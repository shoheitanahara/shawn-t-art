import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Double Slash (V1)",
  description:
    "The Double Slash (V1) — early visual exploration of the // concept through AI-generated imagery.",
};

export default function TheDoubleSlashV1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

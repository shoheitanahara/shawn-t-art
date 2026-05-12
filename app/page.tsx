import type { Metadata } from "next";
import { LandingPage } from "@/components/home/landing-page";

export const metadata: Metadata = {
  title: "Shawn T. Art",
  description:
    "Art between freedom and control — photography, symbols, and quiet digital worlds by Shawn T.",
};

export default function Home() {
  return <LandingPage />;
}

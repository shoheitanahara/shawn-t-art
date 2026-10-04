import type { Metadata } from "next";
import UnusefulCodes from "@/components/unusefulcodes";

export const metadata: Metadata = {
  title: "Unuseful Codes",
  description:
    "Code with no practical use — expressions only humans can feel. Works by Shawn T. Art.",
};

export default function UnusefulCodesPage() {
  return (
    <main>
      <UnusefulCodes />
    </main>
  );
}

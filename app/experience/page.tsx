import type { Metadata } from "next";
import { PORTFOLIO } from "@/lib/data";
import { ExperienceView } from "./ExperienceView";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience and education for ${PORTFOLIO.name}, ${PORTFOLIO.role}.`,
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return <ExperienceView />;
}

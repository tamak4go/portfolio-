import type { Metadata } from "next";
import { PORTFOLIO } from "@/lib/data";
import { ProjectsView } from "./ProjectsView";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected web applications and systems built by ${PORTFOLIO.name}, spanning frontend, backend, and full-stack development.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsView />;
}

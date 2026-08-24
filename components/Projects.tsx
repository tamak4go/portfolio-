import { PORTFOLIO } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {PORTFOLIO.projects.slice(0, 2).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold transition-colors hover:border-black/20 dark:border-white/10 dark:bg-surface dark:hover:border-white/20"
          >
            View all Projects <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

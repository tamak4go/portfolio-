import { PORTFOLIO } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {PORTFOLIO.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/data";
import { BRAND_COLORS } from "@/lib/data";
import { getTechIcon, getTechIconColor } from "@/lib/tech-icons";

const STATUS_LABEL: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In Progress",
  "coming-soon": "Coming Soon",
};

const STATUS_CLASS: Record<Project["status"], string> = {
  live: "bg-emerald-500/10 text-emerald-500",
  "in-progress": "bg-amber-500/10 text-amber-500",
  "coming-soon": "bg-black/5 text-neutral-400 dark:bg-white/5",
};

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="spotlight-card group relative flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-surface"
    >
      <div
        className="thumb-glitch flex h-36 items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 bg-cover bg-center text-xs font-bold uppercase tracking-wider text-neutral-400 dark:from-neutral-900 dark:to-black"
        style={project.thumbnail ? { backgroundImage: `url(${project.thumbnail})` } : undefined}
      >
        {!project.thumbnail && project.title}
      </div>
      <div className="relative flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{project.title}</h3>
            <span className="text-xs text-neutral-400">{project.year}</span>
          </div>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${STATUS_CLASS[project.status]}`}>
            {STATUS_LABEL[project.status]}
          </span>
        </div>
        <p className="-mt-1.5 text-xs font-medium text-neutral-400 dark:text-neutral-500">{project.role}</p>
        <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1 pt-1">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {project.tech.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => {
              const color = BRAND_COLORS[t.toLowerCase()];
              const Icon = getTechIcon(t);
              return (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-2 py-0.5 text-[11px] text-neutral-500 dark:bg-white/5 dark:text-neutral-400"
                >
                  {Icon ? (
                    <Icon size={11} className="shrink-0" style={{ color: getTechIconColor(color) }} />
                  ) : (
                    color && <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
                  )}
                  {t}
                </span>
              );
            })}
          </div>
        )}
        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-3 flex items-center gap-4 border-t border-black/5 pt-3 text-xs font-semibold dark:border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener"
                className="group/link inline-flex items-center gap-1 uppercase tracking-wide text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                Visit site
                <ExternalLink size={12} className="transition-transform group-hover/link:scale-110 group-hover/link:-translate-y-0.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener"
                className="group/link inline-flex items-center gap-1 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <Github size={12} /> Repo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

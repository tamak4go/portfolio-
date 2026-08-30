"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, BRAND_COLORS } from "@/lib/data";
import { getTechIcon, getTechIconColor } from "@/lib/tech-icons";
import { Reveal } from "./Reveal";

export function FeaturedProject() {
  const { featured } = PORTFOLIO;
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <section className="pb-4 pt-2">
      <Reveal>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="spotlight-card group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-colors dark:border-neutral-800 dark:bg-surface sm:flex-row"
        >
          <div className="h-44 shrink-0 overflow-hidden sm:h-auto sm:w-[42%]">
            <div
              className="h-full w-full bg-gradient-to-br from-neutral-100 to-neutral-200 bg-cover bg-center dark:from-neutral-900 dark:to-black"
              style={featured.thumbnail ? { backgroundImage: `url(${featured.thumbnail})` } : undefined}
            />
          </div>
          <div className="relative flex flex-1 flex-col gap-2.5 p-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              {featured.label}
            </span>
            <h2 className="text-lg font-semibold tracking-tight">{featured.title}</h2>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{featured.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {featured.tech.map((t) => {
                const color = BRAND_COLORS[t.toLowerCase()];
                const Icon = getTechIcon(t);
                return (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-2.5 py-0.5 font-mono text-[11px] text-neutral-600 dark:bg-white/5 dark:text-neutral-300"
                  >
                    {Icon ? (
                      <Icon size={12} className="shrink-0" style={{ color: getTechIconColor(color) }} />
                    ) : (
                      color && <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
                    )}
                    {t}
                  </span>
                );
              })}
            </div>
            <Link
              href={featured.caseStudyUrl}
              className="group/link mt-2 inline-flex w-fit items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
            >
              Read case study
              <ArrowUpRight size={15} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

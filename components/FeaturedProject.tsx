import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, BRAND_COLORS } from "@/lib/data";
import { Reveal } from "./Reveal";

export function FeaturedProject() {
  const { featured } = PORTFOLIO;

  return (
    <section className="pb-4 pt-2">
      <Reveal>
        <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-colors dark:border-neutral-800 dark:bg-surface sm:flex-row">
          <div
            className="h-44 shrink-0 bg-gradient-to-br from-neutral-100 to-neutral-200 bg-cover bg-center dark:from-neutral-900 dark:to-black sm:h-auto sm:w-[42%]"
            style={featured.thumbnail ? { backgroundImage: `url(${featured.thumbnail})` } : undefined}
          />
          <div className="flex flex-1 flex-col gap-2.5 p-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              {featured.label}
            </span>
            <h3 className="text-lg font-semibold tracking-tight">{featured.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{featured.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-2.5 py-0.5 text-[11px] text-neutral-600 dark:bg-white/5 dark:text-neutral-300"
                >
                  {BRAND_COLORS[t.toLowerCase()] && (
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND_COLORS[t.toLowerCase()] }} />
                  )}
                  {t}
                </span>
              ))}
            </div>
            <a
              href={featured.caseStudyUrl}
              target="_blank"
              rel="noopener"
              className="group mt-2 inline-flex w-fit items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
            >
              Read case study
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

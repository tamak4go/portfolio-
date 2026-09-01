import { PORTFOLIO, BRAND_COLORS } from "@/lib/data";
import { getTechIcon, getTechIconColor } from "@/lib/tech-icons";
import { Reveal } from "./Reveal";

function Pill({ tech }: { tech: string }) {
  const color = BRAND_COLORS[tech.toLowerCase()];
  const Icon = getTechIcon(tech);
  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-dashed border-black/15 bg-white px-3.5 py-1.5 font-mono text-sm text-neutral-700 shadow-sm dark:border-white/15 dark:bg-surface dark:text-neutral-200">
      {Icon ? (
        <Icon size={15} className="shrink-0" style={{ color: getTechIconColor(color) }} />
      ) : (
        color && <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />
      )}
      {tech}
    </span>
  );
}

export function TechMarquee() {
  return (
    <section id="technologies" className="py-14">
      <Reveal>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Technologies</h2>
        </div>
        <div className="mask-fade-x flex flex-col gap-3">
          {PORTFOLIO.technologies.map((row, i) => (
            <div key={i} className="overflow-hidden">
              <div
                className={`flex w-max gap-2.5 ${i % 2 === 1 ? "animate-scroll-right" : "animate-scroll-left"} hover:[animation-play-state:paused]`}
              >
                {[...row, ...row].map((tech, j) => (
                  <Pill key={`${tech}-${j}`} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

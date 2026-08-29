import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function Writing() {
  if (PORTFOLIO.writing.length === 0) return null;

  return (
    <section id="writing" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Writing</h2>
        <div className="flex flex-col">
          {PORTFOLIO.writing.map((w) => (
            <a
              key={w.url}
              href={w.url}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between gap-4 border-t border-black/5 py-4 first:border-t-0 dark:border-white/5"
            >
              <div>
                <h3 className="font-medium group-hover:underline">{w.title}</h3>
                <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                  {w.date} · {w.readTime}
                </p>
              </div>
              <ArrowUpRight size={16} className="shrink-0 text-neutral-500 dark:text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

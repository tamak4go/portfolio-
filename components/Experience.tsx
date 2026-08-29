import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";
import Link from "next/link";

export function Experience() {
  return (
    <section id="experience" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
          <Link href="/experience" className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            View Details &rsaquo;
          </Link>
        </div>
        <div className="flex flex-col">
          {PORTFOLIO.experience.map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-1 border-t border-black/5 py-5 first:border-t-0 first:pt-0 dark:border-white/5 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{e.dates}</p>
              <div>
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {e.company} · {e.location}
                </p>
                {e.bullets.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-500 dark:text-neutral-400">
                    {e.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-12 text-xl font-semibold tracking-tight">Education</h2>
        <div className="flex flex-col">
          {PORTFOLIO.education.map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-1 border-t border-black/5 py-5 first:border-t-0 first:pt-0 dark:border-white/5 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{e.dates}</p>
              <div>
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {e.school} · {e.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

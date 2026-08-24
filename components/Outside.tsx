"use client";

import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Outside() {
  const { outside } = PORTFOLIO;

  if (!outside || !outside.tags || outside.tags.length === 0) return null;

  // Replace {{tags}} inline with a styled text representation or just render it
  const blurbWithTags = outside.blurb.replace("{{tags}}", outside.tags.join(", "));

  return (
    <section id="outside" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Outside the IDE</h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 space-y-4">
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {blurbWithTags}
            </p>
            <div className="flex flex-wrap gap-2">
              {outside.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-black/5 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-white/5 dark:text-neutral-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          {outside.photo && (
            <div className="h-44 w-full shrink-0 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 sm:h-32 sm:w-44">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${outside.photo})` }}
              />
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

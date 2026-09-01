"use client";

import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";
import Link from "next/link";

export function Certifications() {
  const events = PORTFOLIO.events || [];
  if (events.length === 0) return null;

  return (
    <section id="certifications" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Events</h2>
          <Link href="/events" className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            View All &rsaquo;
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {events.slice(0, 3).map((ev, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/10 bg-white p-4 transition-colors hover:border-black/20 dark:border-white/10 dark:bg-surface dark:hover:border-white/20"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{ev.date}</p>
              <h3 className="mt-1.5 font-semibold leading-snug">{ev.title}</h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{ev.issuer}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

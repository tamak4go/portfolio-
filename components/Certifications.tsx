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
          <h2 className="text-xl font-semibold tracking-tight">Events</h2>
          <Link href="/events" className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            View All &rsaquo;
          </Link>
        </div>
        <div className="flex flex-col">
          {events.slice(0, 3).map((ev, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-1 border-t border-black/5 py-5 first:border-t-0 first:pt-0 dark:border-white/5 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{ev.date}</p>
              <div>
                <h3 className="font-semibold">{ev.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {ev.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

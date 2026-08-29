"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-14">
        <Reveal>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight">Experience</h1>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Where I&apos;ve worked and what I did there.
            </p>
          </div>

          <div className="flex flex-col mt-6">
            {PORTFOLIO.experience.map((e, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-1 border-t border-black/5 py-6 first:border-t-0 first:pt-0 dark:border-white/5 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{e.dates}</p>
                <div>
                  <h3 className="font-semibold text-lg">{e.role}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {e.company} · {e.location}
                  </p>
                  {e.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-neutral-500 dark:text-neutral-400">
                      {e.bullets.map((b, bi) => (
                        <li key={bi} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-black/10 pt-10 dark:border-white/10">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Education</h2>
            <div className="flex flex-col">
              {PORTFOLIO.education.map((e, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 gap-1 border-t border-black/5 py-6 first:border-t-0 first:pt-0 dark:border-white/5 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{e.dates}</p>
                  <div>
                    <h3 className="font-semibold text-lg">{e.degree}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {e.school} · {e.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}

"use client";

import { Mail, ChevronUp } from "lucide-react";
import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Footer() {
  const { socials, contact } = PORTFOLIO;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Let&apos;s work together</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{contact.blurb}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-5 py-4 transition-colors hover:border-black/20 dark:border-white/10 dark:bg-surface dark:hover:border-white/20"
          >
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Email</div>
              <div className="mt-0.5 text-sm font-semibold">{socials.email}</div>
            </div>
            <Mail size={16} className="text-neutral-500 dark:text-neutral-400" />
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-5 py-4 transition-colors hover:border-black/20 dark:border-white/10 dark:bg-surface dark:hover:border-white/20"
          >
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Phone</div>
              <div className="mt-0.5 text-sm font-semibold">{contact.phone}</div>
            </div>
          </a>
        </div>

        <div className="mt-16 border-t border-black/5 pt-8 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="space-y-1">
            <p className="italic font-medium text-neutral-500 dark:text-neutral-400">&ldquo;No sleep, no dreams.&rdquo;</p>
            <p className="text-[11px]">
              © {new Date().getFullYear()} {PORTFOLIO.name} &bull; {PORTFOLIO.role} &bull; Đà Nẵng, Vietnam
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex -space-x-1.5 overflow-hidden">
              <span className="inline-block h-5 w-5 rounded-full ring-2 ring-white dark:ring-surface bg-neutral-200 dark:bg-neutral-800 text-[11px] flex items-center justify-center font-bold">⛩️</span>
              <span className="inline-block h-5 w-5 rounded-full ring-2 ring-white dark:ring-surface bg-neutral-300 dark:bg-neutral-700 text-[11px] flex items-center justify-center font-bold">💻</span>
              <span className="inline-block h-5 w-5 rounded-full ring-2 ring-white dark:ring-surface bg-neutral-400 dark:bg-neutral-600 text-[11px] flex items-center justify-center font-bold">⚡</span>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
            >
              <ChevronUp size={14} />
            </button>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

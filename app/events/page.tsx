"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const events = PORTFOLIO.events || [];

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
            <h1 className="mt-4 text-3xl font-bold tracking-tight">Events &amp; Certifications</h1>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Certificates, achievements, and key moments in my developer journey.
            </p>
          </div>

          {events.length === 0 ? (
            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
              Nothing here yet — check back soon.
            </p>
          ) : (
            <div className="flex flex-col mt-6">
              {events.map((ev, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 gap-1 border-t border-black/5 py-6 first:border-t-0 first:pt-0 dark:border-white/5 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{ev.date}</p>
                  <div>
                    <h3 className="font-semibold text-lg">{ev.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {ev.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Reveal>
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}

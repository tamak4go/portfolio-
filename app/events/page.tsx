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
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight">Events &amp; Certifications</h1>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Certificates, achievements, and key moments in my developer journey.
            </p>
          </div>

          <div className="flex flex-col mt-6">
            {events.map((ev, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-1 border-t border-black/5 py-6 first:border-t-0 first:pt-0 dark:border-white/5 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <p className="text-xs text-neutral-400 mt-1">{ev.date}</p>
                <div>
                  <h3 className="font-semibold text-lg">{ev.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {ev.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Styled placeholder gallery for events, matching Renielyn's site layout */}
          <div className="mt-12 border-t border-black/10 pt-10 dark:border-white/10">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Moments Outside the IDE</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
              Photos from tech meetups, university activities, and team collaborations.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {/* Box 1 */}
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                <div
                  className="h-full w-full bg-cover bg-center grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  style={{ backgroundImage: "url('/avatars/avatar-fade.jpg')" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-semibold">Graduation Project Focus</p>
                </div>
              </div>
              {/* Box 2 */}
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                <div
                  className="h-full w-full bg-cover bg-center grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  style={{ backgroundImage: "url('/projects/tmpms.gif')" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-semibold">TMPMS Demo & Planning</p>
                </div>
              </div>
              {/* Box 3 */}
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 col-span-2 sm:col-span-1">
                <div
                  className="h-full w-full bg-cover bg-center grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  style={{ backgroundImage: "url('/projects/trackingtours.gif')" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-semibold">Tracking Phượt Mapping API</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}

"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Reveal } from "@/components/Reveal";
import { BRAND_COLORS } from "@/lib/data";
import { getTechIcon, getTechIconColor } from "@/lib/tech-icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function TrackingPhuotView() {
  const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MapLibre GL", "Vitest"];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-14">
        <Reveal>
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              <ChevronLeft size={14} /> Back to Home
            </Link>
          </div>

          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              SELECTED PROJECT
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Tracking Phượt: routes rebuilt from your photos.</h1>
            <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              Upload trip photos and it reconstructs the full route from the GPS data embedded in their EXIF metadata, no manual tracking or separate GPS app needed. Solo-built and live at{" "}
              <a href="https://trackingtours.vercel.app" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white">
                trackingtours.vercel.app
              </a>.
            </p>
          </div>

          {/* Highlight note box */}
          <div className="my-6 rounded-xl border border-black/5 bg-black/5 p-4 dark:border-white/5 dark:bg-white/5">
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <strong className="text-neutral-900 dark:text-white">Note:</strong> Started as a single-purpose EXIF-to-route tool, then redesigned into a full app with accounts, a dashboard, and social features.
            </p>
          </div>

          {/* Large project demo clip */}
          <div className="my-8 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
            <video
              src="/projects/trackingtours.mp4"
              aria-label="Tracking Phượt route map walkthrough"
              className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Core Modules & Key Features */}
          <div className="space-y-6 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Core Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">GPS Route Reconstruction</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Reads GPS coordinates and timestamps from photo EXIF data and stitches them into a chronological route, rendered on an interactive map with no manual pin-dropping.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Dashboard &amp; Gallery</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Google sign-in gives each rider a personal dashboard: a map view of past trips, a photo gallery, and ride stats, all tied to their account.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Explore &amp; Community</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  An Explore feed surfaces public rides from other users, and a Community page rounds up shared stats, turning a solo tool into a social one.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Pro Tier</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  A paid Pro tier sits on top of the free feature set, laying the groundwork for the app&apos;s monetization path.
                </p>
              </div>
            </div>
          </div>

          {/* Technology stack used */}
          <div className="space-y-4 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Technology Choices</h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((t) => {
                const color = BRAND_COLORS[t.toLowerCase()];
                const Icon = getTechIcon(t);
                return (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3.5 py-1 font-mono text-xs font-semibold text-neutral-600 dark:bg-white/5 dark:text-neutral-300"
                  >
                    {Icon ? (
                      <Icon size={12} className="shrink-0" style={{ color: getTechIconColor(color) }} />
                    ) : (
                      color && <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
                    )}
                    {t}
                  </span>
                );
              })}
            </div>
            <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 mt-4">
              Next.js (App Router) and TypeScript on the frontend, styled with Tailwind CSS; Supabase for auth and data; MapLibre GL for the interactive route maps; Vitest for testing. Deployed on Vercel.
            </p>
          </div>
        </Reveal>
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}

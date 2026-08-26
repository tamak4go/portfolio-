"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO, BRAND_COLORS } from "@/lib/data";
import { getTechIcon, getTechIconColor } from "@/lib/tech-icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TmpmsCaseStudy() {
  const techStack = ["ASP.NET Core", "EF Core", "SQL Server", "React", "Vite", "SignalR", "Gemini AI", "PayOS", "Docker"];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-14">
        <Reveal>
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            >
              <ChevronLeft size={14} /> Back to Home
            </Link>
          </div>

          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              FEATURED BUILD
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">TMPMS: a production pharmacy platform.</h1>
            <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              TMPMS is a traditional-and-Western-medicine pharmacy management system — e-commerce, Đông Y diagnosis, appointment booking with deposits, and full nhà thuốc operations. Built as my graduation project at FPT University and live in production at{" "}
              <a href="https://tmpms.io.vn/" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white">
                tmpms.io.vn
              </a>.
            </p>
          </div>

          {/* Highlight note box */}
          <div className="my-6 rounded-xl border border-black/5 bg-black/5 p-4 dark:border-white/5 dark:bg-white/5">
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <strong className="text-neutral-900 dark:text-white">Note:</strong> Solo-developed graduation project — requirements analysis, database design, backend/API, real-time features, and production deployment, end to end.
            </p>
          </div>

          {/* Large project gif */}
          <div className="my-8 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
            <img
              src="/projects/tmpms.gif"
              alt="TMPMS storefront"
              className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Core Modules & Key Features */}
          <div className="space-y-6 mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Core Modules</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Đông Y Diagnosis &amp; Booking</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Traditional-medicine (Đông Y) diagnosis flow with appointment booking and deposit holds, alongside standard e-commerce for pharmacy products.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Real-Time Chat &amp; AI</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Live pharmacist chat over SignalR, plus a Gemini-AI-backed chatbot with a 4-model fallback chain for OCR, TCM meridian analysis, and product search.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Inventory &amp; Payments</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  FEFO (first-expiry-first-out) inventory management, automated flash sales, and PayOS payments with idempotent, signature-verified webhooks.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Roles &amp; Operations</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Three user roles — customer, pharmacy staff, and admin — covering the full nhà thuốc workflow, with Serializable transaction isolation to prevent booking conflicts.
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
                    className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3.5 py-1 text-xs font-semibold text-neutral-600 dark:bg-white/5 dark:text-neutral-300"
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
              Layered ASP.NET Core 8 / EF Core backend on SQL Server with JWT + Identity auth; React 19 + Vite frontend; SignalR for real-time chat backed by Gemini AI; PayOS for payments; deployed via Docker to a VPS behind a reverse proxy — covering everything from requirements analysis and database design to API development, UI implementation, and production deployment, solo.
            </p>
          </div>
        </Reveal>
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}

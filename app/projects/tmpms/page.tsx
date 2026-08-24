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
  const techStack = ["React", "Next.js", "Node.js", "MySQL", "MongoDB"];

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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">TMPMS: an online pharmacy platform.</h1>
            <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              TMPMS (&ldquo;Thảo Dược Cổ Truyền Việt Nam&rdquo;) is an e-commerce platform for traditional Vietnamese herbal medicine and pharmacy products, built as my graduation project at FPT University and live in production at{" "}
              <a href="https://tmpms.io.vn/" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white">
                tmpms.io.vn
              </a>.
            </p>
          </div>

          {/* Highlight note box */}
          <div className="my-6 rounded-xl border border-black/5 bg-black/5 p-4 dark:border-white/5 dark:bg-white/5">
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <strong className="text-neutral-900 dark:text-white">Note:</strong> Solo-developed graduation project covering requirements analysis, database design, API development, UI implementation, and production deployment.
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
                <h3 className="font-semibold text-base mb-1.5">Product Catalog &amp; Search</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Browse and search herbal medicine, functional foods, cosmeceuticals, medicine, personal care, and medical equipment across category-based storefronts.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Prescription &amp; Pharmacist Support</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Customers can submit a prescription for pharmacist dispensing, or use the self-diagnosis tool to get traditional-medicine product suggestions.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Accounts, Cart &amp; Orders</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  User accounts, shopping cart, and order history, backed by MySQL for relational data and MongoDB for flexible content like product listings.
                </p>
              </div>
              <div className="rounded-xl border border-black/5 p-5 dark:border-white/5 dark:bg-surface">
                <h3 className="font-semibold text-base mb-1.5">Health Tools &amp; Live Support</h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Pharmacy finder, vaccination booking, and a live chat widget for customer support, alongside seasonal promotions and flash sales.
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
              Frontend built with React, Next.js, and Vue.js; backend services and RESTful APIs with Node.js; MySQL and MongoDB for structured and flexible data respectively — covering everything from requirements analysis and database design to API development, UI implementation, and production deployment, solo.
            </p>
          </div>
        </Reveal>
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}

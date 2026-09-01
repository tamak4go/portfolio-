"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function ProjectsView() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pt-12 pb-14">
        <Reveal>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              <ChevronLeft size={14} /> Back to Home
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight">Selected Projects</h1>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              A collection of web applications and systems I&apos;ve designed, built, and deployed — spanning frontend, backend, and full-stack development.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PORTFOLIO.projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}

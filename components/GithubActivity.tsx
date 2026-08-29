"use client";

import { useState } from "react";
import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";

export function GithubActivity() {
  const [failed, setFailed] = useState(false);
  if (!PORTFOLIO.githubUsername) return null;

  return (
    <section className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">GitHub Activity</h2>
        <div className="mask-fade-x overflow-x-auto rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-surface">
          {failed ? (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Contribution graph is temporarily unavailable — see the live activity on{" "}
              <a
                href={`https://github.com/${PORTFOLIO.githubUsername}`}
                target="_blank"
                rel="noopener"
                className="font-semibold text-neutral-900 underline underline-offset-2 dark:text-white"
              >
                GitHub
              </a>
              .
            </p>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://ghchart.rshah.org/${PORTFOLIO.githubUsername}`}
              alt="GitHub contribution graph"
              className="w-full min-w-[600px]"
              loading="lazy"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </Reveal>
    </section>
  );
}

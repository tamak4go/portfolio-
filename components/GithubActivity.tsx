import { PORTFOLIO } from "@/lib/data";
import { Reveal } from "./Reveal";

export function GithubActivity() {
  if (!PORTFOLIO.githubUsername) return null;

  return (
    <section className="border-t border-black/10 py-14 dark:border-white/10">
      <Reveal>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">GitHub Activity</h2>
        <div className="overflow-x-auto rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/${PORTFOLIO.githubUsername}`}
            alt="GitHub contribution graph"
            className="w-full min-w-[600px]"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";
import { PORTFOLIO } from "@/lib/data";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] as const },
});

export function Hero() {
  const { socials } = PORTFOLIO;
  const links = [
    socials.github && { href: socials.github, icon: Github, label: "GitHub" },
    socials.linkedin && { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    socials.twitter && { href: socials.twitter, icon: Twitter, label: "Twitter" },
    socials.email && { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
  ].filter(Boolean) as { href: string; icon: typeof Github; label: string }[];

  return (
    <section id="about" className="pt-20 pb-4 sm:pt-28">
      <motion.div {...fadeUp(0)} className="flex items-center gap-2 text-xs font-medium text-emerald-500">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {PORTFOLIO.status}
      </motion.div>

      <motion.h1 {...fadeUp(0.08)} className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
        {PORTFOLIO.name}
      </motion.h1>

      <motion.p {...fadeUp(0.14)} className="mt-2 text-lg text-neutral-500 dark:text-neutral-400">
        {PORTFOLIO.role} <span className="text-neutral-400 dark:text-neutral-600">— {PORTFOLIO.roleTagline}</span>
      </motion.p>

      <motion.p {...fadeUp(0.2)} className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
        {PORTFOLIO.bio}
      </motion.p>

      <motion.div {...fadeUp(0.26)} className="mt-6 flex items-center gap-3">
        <a
          href={PORTFOLIO.resumeUrl}
          className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-neutral-900"
        >
          View Resume <ArrowRight size={14} />
        </a>
        <div className="flex items-center gap-1.5">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-neutral-500 transition-colors hover:border-black/20 hover:text-neutral-900 dark:border-white/10 dark:hover:border-white/20 dark:hover:text-white"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

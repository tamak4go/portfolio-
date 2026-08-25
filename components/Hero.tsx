"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowRight, BadgeCheck } from "lucide-react";
import { PORTFOLIO } from "@/lib/data";
import { Avatar } from "./Avatar";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] as const },
});

const nameContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const nameWord = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const } },
};

export function Hero() {
  const { socials } = PORTFOLIO;
  const nameWords = PORTFOLIO.name.split(" ");
  const links = [
    socials.github && { href: socials.github, icon: Github, label: "GitHub" },
    socials.linkedin && { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    socials.twitter && { href: socials.twitter, icon: Twitter, label: "Twitter" },
    socials.email && { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
  ].filter(Boolean) as { href: string; icon: typeof Github; label: string }[];

  return (
    <section id="about" className="relative pt-20 pb-4 sm:pt-28">
      <div className="hero-blob hero-blob-a -left-16 top-0 h-64 w-64 bg-cyan-400/50 dark:bg-cyan-400/40" />
      <div className="hero-blob hero-blob-b -right-10 top-16 h-64 w-64 bg-fuchsia-500/40 dark:bg-fuchsia-500/35" />

      <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
        <Avatar size={96} fancy />

        <div>
          <motion.h1
            variants={nameContainer}
            initial="hidden"
            animate="visible"
            className="glitch-text cursor-default text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {nameWords.map((word, i) => (
              <motion.span key={i} variants={nameWord} className="mr-[0.25em] inline-block last:mr-0">
                {word}
              </motion.span>
            ))}
            <BadgeCheck size={20} className="ml-1.5 inline-block align-middle fill-sky-500 text-white dark:text-neutral-950" />
          </motion.h1>
          <div className="mt-3 flex items-center justify-center gap-1.5 sm:justify-start">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-all duration-200 hover:scale-110 hover:text-neutral-900 dark:hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        {...fadeUp(0.1)}
        className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-emerald-500 sm:justify-start"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        {PORTFOLIO.status}
      </motion.div>

      <motion.p {...fadeUp(0.16)} className="mt-3 text-center text-lg text-neutral-500 dark:text-neutral-400 sm:text-left">
        {PORTFOLIO.role} <span className="text-neutral-400 dark:text-neutral-600">— {PORTFOLIO.roleTagline}</span>
      </motion.p>

      <motion.p {...fadeUp(0.22)} className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400 sm:mx-0 sm:text-left">
        {PORTFOLIO.bio}
      </motion.p>

      <motion.div {...fadeUp(0.28)} className="mt-6 flex items-center justify-center sm:justify-start">
        <a
          href={PORTFOLIO.resumeUrl}
          className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-neutral-900"
        >
          View Resume <ArrowRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}

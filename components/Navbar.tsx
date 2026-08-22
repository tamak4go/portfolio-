"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar } from "./Avatar";
import { PORTFOLIO } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = PORTFOLIO.nav.filter((item) => item.href !== "#writing" || PORTFOLIO.writing.length > 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-ink/80"
          : "border-transparent bg-white/0 dark:bg-ink/0"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-sm font-bold tracking-tight">
          <Avatar size={24} />
          {PORTFOLIO.initials}
        </a>
        <div className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white sm:inline"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l border-black/10 pl-4 dark:border-white/10">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white sm:hidden"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-black/10 dark:border-white/10 sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm text-neutral-500 hover:bg-black/5 hover:text-neutral-900 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

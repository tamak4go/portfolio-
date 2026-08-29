"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export function ThemeToggle() {
  // Compare against resolvedTheme, not theme — theme is "system" whenever
  // the user hasn't explicitly toggled yet, which would otherwise make the
  // icon wrong and the click handler always set "dark" (a no-op) instead of
  // correctly flipping away from whatever the system preference resolved to.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-8 w-8" />;

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const doc = document as DocumentWithViewTransition;

    // Circular reveal expanding from the exact click point — needs the
    // View Transitions API (Chromium/Edge today); browsers without it just
    // get the instant swap, no broken/half-applied animation either way.
    // Deliberately not gated behind prefers-reduced-motion: this machine
    // reports reduced-motion via a Windows "Animation effects" toggle that
    // has nothing to do with vestibular sensitivity, and the site owner
    // explicitly wants to see this transition regardless — same call made
    // for the tech marquee and hero motion elsewhere on this site.
    if (doc.startViewTransition) {
      document.documentElement.style.setProperty("--theme-toggle-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--theme-toggle-y", `${e.clientY}px`);
      // next-themes' setTheme queues a React state update, which is async
      // relative to this callback — startViewTransition needs the DOM
      // mutation to be finished synchronously before it returns, or the
      // browser snapshots two identical frames and nothing visibly moves.
      doc.startViewTransition(() => flushSync(() => setTheme(next)));
    } else {
      setTheme(next);
    }
  }

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
    >
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

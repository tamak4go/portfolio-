"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  // Compare against resolvedTheme, not theme — theme is "system" whenever
  // the user hasn't explicitly toggled yet, which would otherwise make the
  // icon wrong and the click handler always set "dark" (a no-op) instead of
  // correctly flipping away from whatever the system preference resolved to.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-8 w-8" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
    >
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

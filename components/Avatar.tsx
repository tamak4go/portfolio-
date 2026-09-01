"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { PORTFOLIO } from "@/lib/data";
import { useMounted } from "@/lib/useMounted";

export function Avatar({ size = 72, fancy = false }: { size?: number; fancy?: boolean }) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  // Before mount we don't know the resolved theme yet (avoids a
  // server/client hydration mismatch) — default to the dark variant since
  // that matches this site's defaultTheme. Both images are absolutely
  // positioned and cross-fade via opacity, so swapping never shifts layout.
  const isDark = !mounted || resolvedTheme !== "light";

  const inner = (
    <motion.div
      whileHover={fancy ? undefined : { scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className={`avatar-glitch relative shrink-0 overflow-hidden rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 ${fancy ? "avatar-fancy" : ""}`}
      style={{ width: size, height: size }}
    >
      {PORTFOLIO.avatarDarkUrl || PORTFOLIO.avatarLightUrl ? (
        <>
          <Image
            src={PORTFOLIO.avatarDarkUrl}
            alt={PORTFOLIO.name}
            fill
            sizes={`${size}px`}
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ opacity: isDark ? 1 : 0 }}
            priority
          />
          <Image
            src={PORTFOLIO.avatarLightUrl}
            alt={PORTFOLIO.name}
            fill
            sizes={`${size}px`}
            className="object-cover transition-opacity duration-300 ease-in-out"
            style={{ opacity: isDark ? 0 : 1 }}
            priority
          />
        </>
      ) : (
        <div
          className="avatar-fallback flex h-full w-full items-center justify-center font-bold text-neutral-700 dark:text-neutral-200"
          style={{ fontSize: size * 0.32 }}
        >
          {PORTFOLIO.avatarText}
        </div>
      )}
    </motion.div>
  );

  if (!fancy) return inner;

  return <div className="avatar-ring relative inline-flex shrink-0 rounded-full">{inner}</div>;
}

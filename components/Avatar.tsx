"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/data";

export function Avatar({ size = 72, fancy = false }: { size?: number; fancy?: boolean }) {
  const inner = (
    <motion.div
      whileHover={fancy ? undefined : { scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className={`avatar-glitch relative shrink-0 overflow-hidden rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 ${fancy ? "avatar-fancy" : ""}`}
      style={{ width: size, height: size }}
    >
      {PORTFOLIO.avatarUrl ? (
        <Image
          src={PORTFOLIO.avatarUrl}
          alt={PORTFOLIO.name}
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/data";

export function Avatar({ size = 72 }: { size?: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="relative shrink-0 overflow-hidden rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5"
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
          className="flex h-full w-full items-center justify-center font-bold text-neutral-700 dark:text-neutral-200"
          style={{ fontSize: size * 0.32 }}
        >
          {PORTFOLIO.avatarText}
        </div>
      )}
    </motion.div>
  );
}

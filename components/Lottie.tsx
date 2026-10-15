"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function Lottie({
  src,
  size = 64,
  loop = true,
  autoplay = true,
}: {
  src: string;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
}) {
  return (
    <div style={{ width: size, height: size }}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} />
    </div>
  );
}

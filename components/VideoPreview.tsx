"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface VideoPreviewProps {
  src?: string;
  poster?: string;
  title: string;
  className?: string;
  badgeLabel?: string;
}

export function VideoPreview({
  src,
  poster,
  title,
  className = "",
  badgeLabel = "Demo",
}: VideoPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // IntersectionObserver: auto-play when scrolled into view, pause when scrolled out
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !src || hasError) return;

    let isManuallyPaused = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isManuallyPaused) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Browser autoplay policy fallback
                setIsPlaying(false);
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the video is visible
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [src, hasError]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  // If no video source or video errored, render clean poster
  if (!src || hasError) {
    return (
      <div
        ref={containerRef}
        className={`relative flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 bg-cover bg-center dark:from-neutral-900 dark:to-black ${className}`}
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        role="img"
        aria-label={title}
      >
        {!poster && <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">{title}</span>}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group/video relative overflow-hidden bg-neutral-950 ${className}`}
      onClick={togglePlay}
    >
      {/* Background Poster while loading */}
      {poster && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onError={() => setHasError(true)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/video:scale-[1.02]"
      />

      {/* Subtle Dark Vignette & Scanline Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Top Status Badge */}
      <div className="absolute right-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white shadow-sm backdrop-blur-md">
        <span className="relative flex h-1.5 w-1.5">
          {isPlaying && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
              isPlaying ? "bg-emerald-400" : "bg-neutral-400"
            }`}
          />
        </span>
        <span className="tracking-tight">{isPlaying ? "Playing" : badgeLabel}</span>
      </div>

      {/* Hover Play/Pause Control Button */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-black/80"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
        </button>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[2px] bg-white/15">
        <div
          className="h-full bg-emerald-400 transition-all duration-100 ease-linear dark:bg-emerald-400"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

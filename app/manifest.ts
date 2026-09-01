import type { MetadataRoute } from "next";
import { PORTFOLIO } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PORTFOLIO.name} — ${PORTFOLIO.role}`,
    short_name: PORTFOLIO.initials,
    description: PORTFOLIO.bio,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}

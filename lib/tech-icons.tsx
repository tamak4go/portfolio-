import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiNodedotjs,
  SiOpenjdk,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiTailwindcss,
  SiSupabase,
  SiMaplibre,
} from "react-icons/si";
import { Webhook, RefreshCw } from "lucide-react";

// Real brand icons where one exists (from react-icons/si, MIT-licensed
// simple-icons set) — falls back to a neutral lucide icon for
// non-branded/generic entries like "REST API" or "Agile/Scrum".
export const TECH_ICONS: Record<string, IconType> = {
  react: SiReact,
  "next.js": SiNextdotjs,
  "vue.js": SiVuedotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  "html/css": SiHtml5,
  "node.js": SiNodedotjs,
  java: SiOpenjdk,
  mysql: SiMysql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  "tailwind css": SiTailwindcss,
  supabase: SiSupabase,
  "maplibre gl": SiMaplibre,
  "rest api": Webhook,
  "agile/scrum": RefreshCw,
};

export function getTechIcon(tech: string): IconType | undefined {
  return TECH_ICONS[tech.toLowerCase()];
}

// Some brand marks (Next.js, GitHub) are plain black/white logos with no
// real brand color — BRAND_COLORS marks those "#ffffff" as a placeholder.
// Rendered literally that's invisible on a light background, so treat it as
// "no explicit color" and let the icon inherit the pill's text color instead.
export function getTechIconColor(color: string | undefined): string | undefined {
  return color && color.toLowerCase() !== "#ffffff" ? color : undefined;
}

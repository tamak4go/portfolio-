import type { MetadataRoute } from "next";

const BASE_URL = "https://tamagok4.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/projects/tmpms", "/projects/tracking-phuot", "/experience", "/events"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

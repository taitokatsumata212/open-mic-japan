import type { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news";
import { getAllChapterSlugs } from "@/lib/library";

const SITE = "https://openmicjapan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "/",
    "/about",
    "/about/disclosure",
    "/activities",
    "/activities/community",
    "/activities/events",
    "/activities/education",
    "/activities/regional",
    "/history",
    "/history/soypoy-numbers",
    "/support",
    "/news",
    "/voices",
    "/gallery",
    "/contact",
    "/library",
    "/legal/commerce",
    "/legal/privacy",
    "/legal/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
  }));

  const newsEntries: MetadataRoute.Sitemap = getAllNews().map((n) => ({
    url: `${SITE}/news/${n.slug}`,
    lastModified: new Date(n.date),
  }));

  const libraryEntries: MetadataRoute.Sitemap = getAllChapterSlugs().map(
    (slug) => ({
      url: `${SITE}/library/${slug}`,
      lastModified: now,
    }),
  );

  return [...staticEntries, ...newsEntries, ...libraryEntries];
}

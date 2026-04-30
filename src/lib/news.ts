import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type NewsCategory =
  | "announcement"
  | "event"
  | "report"
  | "media"
  | "partner";

export const newsCategoryLabels: Record<NewsCategory, string> = {
  announcement: "お知らせ",
  event: "イベント",
  report: "活動報告",
  media: "メディア",
  partner: "パートナー",
};

export type NewsMeta = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  cover?: string;
};

export type NewsPost = NewsMeta & {
  contentHtml: string;
};

const NEWS_DIR = path.join(process.cwd(), "content", "news");

function readMarkdown(slug: string) {
  const fullPath = path.join(NEWS_DIR, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  return matter(file);
}

function toDateString(value: unknown): string {
  if (value instanceof Date) {
    const y = value.getUTCFullYear();
    const m = String(value.getUTCMonth() + 1).padStart(2, "0");
    const d = String(value.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  return String(value ?? "");
}

export function getAllNewsSlugs(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllNews(): NewsMeta[] {
  return getAllNewsSlugs()
    .map((slug) => {
      const { data } = readMarkdown(slug);
      return {
        slug,
        title: data.title as string,
        date: toDateString(data.date),
        category: data.category as NewsCategory,
        excerpt: (data.excerpt as string) ?? "",
        cover: data.cover as string | undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNewsPost(slug: string): Promise<NewsPost> {
  const { data, content } = readMarkdown(slug);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title as string,
    date: toDateString(data.date),
    category: data.category as NewsCategory,
    excerpt: (data.excerpt as string) ?? "",
    cover: data.cover as string | undefined,
    contentHtml: processed.toString(),
  };
}

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export type ChapterMeta = {
  slug: string;
  number: string;
  era: string;
  title: string;
  summary: string;
};

export type Chapter = ChapterMeta & {
  contentHtml: string;
};

const LIBRARY_DIR = path.join(process.cwd(), "content", "library");

function readMarkdown(slug: string) {
  const fullPath = path.join(LIBRARY_DIR, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  return matter(file);
}

export function getAllChapterSlugs(): string[] {
  if (!fs.existsSync(LIBRARY_DIR)) return [];
  return fs
    .readdirSync(LIBRARY_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

export function getAllChapters(): ChapterMeta[] {
  return getAllChapterSlugs()
    .map((slug) => {
      const { data } = readMarkdown(slug);
      return {
        slug,
        number: data.number as string,
        era: data.era as string,
        title: data.title as string,
        summary: data.summary as string,
      };
    })
    .sort((a, b) => (a.number < b.number ? -1 : 1));
}

export async function getChapter(slug: string): Promise<Chapter> {
  const { data, content } = readMarkdown(slug);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    number: data.number as string,
    era: data.era as string,
    title: data.title as string,
    summary: data.summary as string,
    contentHtml: processed.toString(),
  };
}

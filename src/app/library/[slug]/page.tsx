import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getAllChapterSlugs, getAllChapters, getChapter } from "@/lib/library";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllChapterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  try {
    const ch = await getChapter(slug);
    return { title: ch.title, description: ch.summary };
  } catch {
    return { title: "読みもの" };
  }
}

export default async function LibraryChapterPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let chapter;
  try {
    chapter = await getChapter(slug);
  } catch {
    notFound();
  }

  const all = getAllChapters();
  const idx = all.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <article className="py-12 md:py-16">
      <Container className="max-w-[720px]">
        <Breadcrumb
          items={[
            { href: "/", label: "ホーム" },
            { href: "/library", label: "読みもの" },
            { label: `第${chapter.number}章` },
          ]}
        />

        <p className="mt-8 text-xs tracking-[0.24em] uppercase text-omj-primary font-semibold mb-2">
          Chapter {chapter.number}
        </p>
        <p className="text-sm text-omj-sub tracking-wider mb-3">
          {chapter.era}
        </p>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-omj-text">
          {chapter.title}
        </h1>
        <p className="mt-5 text-omj-sub leading-relaxed border-l-2 border-omj-primary pl-4">
          {chapter.summary}
        </p>

        <div
          className="library-body mt-12"
          dangerouslySetInnerHTML={{ __html: chapter.contentHtml }}
        />

        <nav
          aria-label="章の前後ナビ"
          className="mt-16 pt-8 border-t border-omj-border grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            {prev && (
              <Link
                href={`/library/${prev.slug}`}
                className="block rounded-lg border border-omj-border p-4 hover:border-omj-primary transition-colors group"
              >
                <p className="text-xs text-omj-sub mb-1">← 前の章</p>
                <p className="text-sm font-medium text-omj-text group-hover:text-omj-primary">
                  {prev.number}｜{prev.title}
                </p>
              </Link>
            )}
          </div>
          <div className="sm:text-right">
            {next && (
              <Link
                href={`/library/${next.slug}`}
                className="block rounded-lg border border-omj-border p-4 hover:border-omj-primary transition-colors group"
              >
                <p className="text-xs text-omj-sub mb-1">次の章 →</p>
                <p className="text-sm font-medium text-omj-text group-hover:text-omj-primary">
                  {next.number}｜{next.title}
                </p>
              </Link>
            )}
          </div>
        </nav>

        <p className="mt-10 text-sm text-omj-sub">
          <Link
            href="/library"
            className="text-omj-primary hover:underline underline-offset-[3px]"
          >
            ← 全6章のインデックスに戻る
          </Link>
        </p>
      </Container>
    </article>
  );
}

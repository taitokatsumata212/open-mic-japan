import Link from "next/link";
import { Container } from "@/components/Container";
import { SupportCTA } from "@/components/SupportCTA";
import { getAllNews, newsCategoryLabels, type NewsCategory } from "@/lib/news";

export const metadata = {
  title: "お知らせ",
};

const categoryOrder: NewsCategory[] = [
  "announcement",
  "event",
  "report",
  "media",
  "partner",
];

export default function NewsIndexPage() {
  const posts = getAllNews();
  const usedCategories = categoryOrder.filter((c) =>
    posts.some((p) => p.category === c)
  );

  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            News
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            お知らせ
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            設立報告、イベント、活動報告、メディア掲載、パートナーニュース。
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {usedCategories.length > 1 && (
            <div className="mb-8 flex flex-wrap gap-2">
              <a
                href="#all"
                className="text-xs px-3 py-1.5 rounded-full border border-omj-border bg-white hover:border-omj-primary"
              >
                すべて
              </a>
              {usedCategories.map((cat) => (
                <a
                  key={cat}
                  href={`#cat-${cat}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-omj-border bg-white hover:border-omj-primary"
                >
                  {newsCategoryLabels[cat]}
                </a>
              ))}
            </div>
          )}

          <ul id="all" className="divide-y divide-omj-border bg-white rounded-lg border border-omj-border">
            {posts.map((post) => (
              <li key={post.slug} id={`cat-${post.category}`}>
                <Link
                  href={`/news/${post.slug}`}
                  className="block px-5 sm:px-7 py-6 group hover:bg-omj-base transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-omj-sub mb-2">
                    <time>{post.date}</time>
                    <span className="px-2 py-0.5 rounded bg-omj-base text-omj-text border border-omj-border">
                      {newsCategoryLabels[post.category]}
                    </span>
                  </div>
                  <p className="text-base md:text-lg font-medium text-omj-text group-hover:text-omj-primary transition-colors">
                    {post.title}
                  </p>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-omj-sub leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

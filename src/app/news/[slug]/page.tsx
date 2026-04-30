import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SupportCTA } from "@/components/SupportCTA";
import {
  getAllNewsSlugs,
  getNewsPost,
  newsCategoryLabels,
} from "@/lib/news";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  try {
    const post = await getNewsPost(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: "お知らせ" };
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getNewsPost(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <article className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Link
              href="/news"
              className="text-sm text-omj-primary hover:underline"
            >
              ← お知らせ一覧へ
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-omj-sub">
              <time>{post.date}</time>
              <span className="px-2 py-0.5 rounded bg-white text-omj-text border border-omj-border">
                {newsCategoryLabels[post.category]}
              </span>
            </div>

            <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-omj-text">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-5 text-omj-sub leading-loose">
                {post.excerpt}
              </p>
            )}

            <div
              className="prose-omj mt-10"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </Container>
      </article>

      <SupportCTA />
    </>
  );
}

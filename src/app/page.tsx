import Link from "next/link";
import { Container } from "@/components/Container";
import { LineButton } from "@/components/LineButton";
import { NumberStat } from "@/components/NumberStat";
import { SupportCTA } from "@/components/SupportCTA";
import { ActivityCard } from "@/components/activities/ActivityCard";
import { HeroDecorations } from "@/components/HeroDecorations";
import { activities } from "@/data/activities";
import { getAllNews } from "@/lib/news";
import { newsCategoryLabels } from "@/lib/news";
import { SITE_TAGLINE } from "@/lib/constants";

export default function HomePage() {
  const latestNews = getAllNews().slice(0, 3);

  return (
    <>
      <section
        className="relative bg-omj-base overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 22% 28%, rgba(255, 198, 158, 0.45) 0%, rgba(255, 198, 158, 0) 55%),
            radial-gradient(ellipse at 78% 62%, rgba(255, 218, 188, 0.35) 0%, rgba(255, 218, 188, 0) 60%),
            radial-gradient(ellipse at 48% 92%, rgba(255, 210, 180, 0.28) 0%, rgba(255, 210, 180, 0) 65%)
          `,
        }}
      >
        <HeroDecorations />
        <Container className="relative py-12 sm:py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm tracking-widest text-omj-primary mb-3 sm:mb-4">
              NPO法人オープンマイクジャパン
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-omj-text">
              {SITE_TAGLINE}
            </h1>
            <p className="mt-5 sm:mt-7 text-base text-omj-text leading-loose md:text-lg">
              オープンマイクジャパンは、オープンマイクという実践を通じて、人と人、表現と創作、都市と地方をつないでいく
              NPO 法人です。
            </p>
            <p className="mt-3 sm:mt-4 text-base text-omj-sub leading-loose">
              音楽、詩、朗読、トーク、漫才、落語、ダンス、実験的な表現が同じ場に混在し、ZINE・本・アパレル・コーヒー・食べ物が並ぶ——表現と創作にまつわるすべてを受け入れる器としてのオープンマイクを、社会にひらかれた仕組みへと育てていきます。
            </p>

            <div className="mt-8 sm:mt-10 flex flex-row flex-wrap items-start gap-2 sm:gap-3">
              <LineButton size="md" className="text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-3.5 min-h-[44px]" />
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-3 py-2 sm:px-6 sm:py-3.5 min-h-[44px] text-sm sm:text-base rounded-md border border-omj-border hover:border-omj-primary text-omj-text font-medium transition-colors bg-omj-base/80 backdrop-blur-sm"
              >
                わたしたちについて
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border">
        <Container className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <NumberStat number="53回" label="オープンマイク開催" />
            <NumberStat number="4年" label="協力団体 SOY-POY" />
            <NumberStat number="4" label="開催地域（東京・神奈川・山梨・京都）" />
            <NumberStat number="毎年5月" label="野外イベント「宴」" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
                4本柱
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">活動紹介</h2>
              <p className="mt-3 text-omj-sub">
                オープンマイクの実践を社会にひらく、4つの取り組み。
              </p>
            </div>
            <Link
              href="/activities"
              className="text-sm text-omj-primary hover:underline"
            >
              活動を見る →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {activities.map((a) => (
              <ActivityCard key={a.slug} activity={a} />
            ))}
          </div>
        </Container>
      </section>

      {latestNews.length > 0 && (
        <section className="py-20 bg-white border-y border-omj-border">
          <Container>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
                  News
                </p>
                <h2 className="text-2xl md:text-3xl font-bold">
                  最新のお知らせ
                </h2>
              </div>
              <Link
                href="/news"
                className="text-sm text-omj-primary hover:underline"
              >
                すべて見る →
              </Link>
            </div>

            <ul className="divide-y divide-omj-border">
              {latestNews.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/news/${post.slug}`}
                    className="block py-5 group"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs text-omj-sub mb-1">
                      <time>{post.date}</time>
                      <span className="px-2 py-0.5 rounded bg-omj-base text-omj-text">
                        {newsCategoryLabels[post.category]}
                      </span>
                    </div>
                    <p className="font-medium group-hover:text-omj-primary transition-colors">
                      {post.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <SupportCTA />
    </>
  );
}

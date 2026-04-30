import Link from "next/link";
import { Container } from "@/components/Container";
import { LineButton } from "@/components/LineButton";
import { NumberStat } from "@/components/NumberStat";
import { SupportCTA } from "@/components/SupportCTA";
import { getAllNews } from "@/lib/news";
import { newsCategoryLabels } from "@/lib/news";
import { SITE_TAGLINE } from "@/lib/constants";

export default function HomePage() {
  const latestNews = getAllNews().slice(0, 3);

  return (
    <>
      <section className="relative bg-omj-base">
        <Container className="py-20 md:py-28">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-3">
              <p className="text-sm tracking-widest text-omj-primary mb-4">
                NPO法人オープンマイクジャパン
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-omj-text">
                {SITE_TAGLINE}
              </h1>
              <p className="mt-7 text-omj-text leading-loose md:text-lg">
                Open Mic Japan
                は、オープンマイクという実践を通じて、人と人、表現と創作、都市と地方をつないでいく
                NPO 法人です。
              </p>
              <p className="mt-4 text-omj-sub leading-loose">
                音楽、詩、朗読、トーク、漫才、落語、ダンス、実験的な表現が同じ場に混在し、ZINE・本・アパレル・コーヒー・食べ物が並ぶ——表現と創作にまつわるすべてを受け入れる器としてのオープンマイクを、社会にひらかれた仕組みへと育てていきます。
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <LineButton size="lg" />
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-omj-border hover:border-omj-primary text-omj-text font-medium transition-colors"
                >
                  OMJについて知る
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-omj-border shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-main-01.jpg"
                  alt="Open Mic Japan の現場"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border">
        <Container className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <NumberStat number="53回" label="オープンマイク開催" />
            <NumberStat number="4年" label="協力団体 SOY-POY" />
            <NumberStat number="3エリア+" label="開催地域" />
            <NumberStat number="毎年5月" label="野外イベント「宴」" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
              4本柱
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">事業紹介</h2>
            <p className="mt-3 text-omj-sub">
              オープンマイクの実践を社会にひらく、4つの取り組み。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "コミュニティ形成",
                body: "協力団体 SOY-POY と連携し、下北沢を主な活動拠点として、継続的なオープンマイクの場を運営しています。",
              },
              {
                title: "イベント・創作支援",
                body: "毎年5月の野外イベント「宴」など、表現と小商いが同時に立ち上がる場をつくっています。",
              },
              {
                title: "教育・ワークショップ",
                body: "大学・専門学校での講義や、表現・場づくりをテーマにしたワークショップを実施しています。",
              },
              {
                title: "地域連携・都市地方接続",
                body: "茅ヶ崎・青野原など地域での開催経験を重ね、都市と地方をつなぐ回路をつくっています。",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href="/activities"
                className="group block p-6 md:p-7 rounded-lg bg-white border border-omj-border hover:border-omj-primary transition-colors"
              >
                <h3 className="text-lg font-bold text-omj-text group-hover:text-omj-primary transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-omj-sub leading-relaxed">
                  {card.body}
                </p>
                <span className="mt-4 inline-block text-sm text-omj-primary">
                  詳しく見る →
                </span>
              </Link>
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

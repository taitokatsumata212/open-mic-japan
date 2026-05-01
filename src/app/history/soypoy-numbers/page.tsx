import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { NumberStat } from "@/components/NumberStat";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedDigits } from "@/components/AnimatedDigits";
import { SOYPOY_URL } from "@/lib/constants";

// 月次で再生成（活動期間の自動更新のため。Vercel が ISR として尊重する）。
export const revalidate = 86400;

export const metadata = {
  title: "協力団体 SOY-POY が育ててきた場",
  description:
    "オープンマイクジャパンの活動の中心は協力団体 SOY-POY の場で行われています。約190回の場の規模を、ジャンル別・年別の数字で示します。",
};

// SOY-POY オープン日：2022年5月3日（/about ページの記述と整合）
const SOYPOY_OPEN = new Date("2022-05-03T00:00:00+09:00");

function activityPeriodText(): string {
  const now = new Date();
  let years = now.getUTCFullYear() - SOYPOY_OPEN.getUTCFullYear();
  let months = now.getUTCMonth() - SOYPOY_OPEN.getUTCMonth();
  if (now.getUTCDate() < SOYPOY_OPEN.getUTCDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years <= 0 && months <= 0) return "1ヶ月未満";
  if (years === 0) return `${months}ヶ月`;
  if (months === 0) return `${years}年`;
  return `${years}年${months}ヶ月`;
}

type GenreItem = {
  label: string;
  count: number;
  sub?: { label: string; count: number }[];
};

const genres: GenreItem[] = [
  {
    label: "オープンマイク（OMJ含む）",
    count: 53,
  },
  {
    label: "音楽系",
    count: 60,
    sub: [
      { label: "ジャムセッション", count: 20 },
      { label: "ライブ／リリパ／その他", count: 16 },
      { label: "ジャズ系", count: 12 },
      { label: "クラシック・ソロコンサート", count: 8 },
      { label: "アイリッシュセッション", count: 6 },
    ],
  },
  {
    label: "ワークショップ・講座",
    count: 24,
    sub: [
      { label: "インプロ講習", count: 15 },
      { label: "その他講座・WS", count: 9 },
    ],
  },
  {
    label: "トーク・座談・朗読",
    count: 22,
    sub: [
      { label: "月一雑談会", count: 18 },
      { label: "朗読・トーク", count: 4 },
    ],
  },
  {
    label: "お笑い・コメディ",
    count: 20,
    sub: [
      { label: "お笑いライブ", count: 10 },
      { label: "寄席・落語", count: 9 },
    ],
  },
  {
    label: "その他企画",
    count: 11,
    sub: [{ label: "演劇・上映・展示・DJ・マーケット・ゲーム会など", count: 11 }],
  },
  {
    label: "野外・大型企画",
    count: 4,
    sub: [
      { label: "宴", count: 2 },
      { label: "周年", count: 2 },
    ],
  },
];

type YearRow = { year: string; count: number; note?: string };
const yearly: YearRow[] = [
  { year: "2021", count: 3 },
  { year: "2022", count: 60 },
  { year: "2023", count: 110 },
  { year: "2024", count: 125 },
  { year: "2025", count: 55 },
  { year: "2026", count: 8, note: "（4月時点）" },
];

const yearlyMax = Math.max(...yearly.map((y) => y.count));

export default function SoypoyNumbersPage() {
  return (
    <>
      <section className="py-12 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { href: "/", label: "ホーム" },
              { href: "/history", label: "あゆみ" },
              { label: "協力団体 SOY-POY が育ててきた場" },
            ]}
          />
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            SOY-POY Numbers
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-omj-text">
            私たちが立つ場の規模
            <br className="hidden md:block" />
            ——協力団体 SOY-POY
          </h1>
          <div className="mt-7 max-w-3xl prose-omj text-omj-text">
            <p>
              オープンマイクジャパンの活動の中心は、協力団体である SOY-POY の場で行われています。
            </p>
            <p>
              SOY-POY は 2022年5月にオープンして以来、月3〜4回のペースで様々なイベントを開催してきました。私たちのオープンマイクは、その場の一部として営まれてきたものです。
            </p>
            <p>
              ここに記す数字は、SOY-POY 自身が育ててきた場の規模を示すものです。協力団体としての関係のもと、私たちの実践がどんな土壌の上に立っているかを共有します。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-14 md:py-20">
        <Container>
          <SectionHeading eyebrow="Key Metrics" title="場の規模（要約）" />
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-omj-border">
            <div className="px-2 sm:px-6 py-8 sm:py-4">
              <NumberStat
                number={activityPeriodText()}
                label="活動期間"
                size="lg"
              />
            </div>
            <div className="px-2 sm:px-6 py-8 sm:py-4">
              <NumberStat number="約190回" label="総開催イベント数" size="lg" />
            </div>
            <div className="px-2 sm:px-6 py-8 sm:py-4">
              <NumberStat number="月3〜4回" label="平均開催ペース" size="lg" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="By Genre"
            title="ジャンル別内訳"
            description="ジャンルごとの開催実績。内訳は SOY-POY が把握している範囲での集計です。"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-omj-border border border-omj-border rounded-lg overflow-hidden">
            {genres.map((g) => (
              <div
                key={g.label}
                className="bg-white p-6 md:p-7 flex flex-col"
              >
                <p className="text-xs tracking-widest uppercase text-omj-sub mb-3">
                  {g.label}
                </p>
                <p className="font-bold text-omj-primary leading-none">
                  <AnimatedDigits
                    target={g.count.toString()}
                    duration={900 + g.count * 4}
                    className="text-4xl md:text-5xl"
                  />
                  <span className="text-sm font-medium text-omj-sub ml-1.5">
                    回
                  </span>
                </p>
                {g.sub && g.sub.length > 0 && (
                  <ul className="mt-5 pt-4 border-t border-omj-border space-y-1.5 text-xs text-omj-sub">
                    {g.sub.map((s) => (
                      <li
                        key={s.label}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="leading-relaxed">{s.label}</span>
                        <span className="shrink-0 tabular-nums text-omj-text font-medium">
                          {s.count}
                          <span className="text-omj-sub ml-0.5">回</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="By Year"
            title="年別推移"
            description="開催イベント数の年別の推移。バーの高さは最大値（2024年）を基準とした相対値。"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-omj-border border border-omj-border rounded-lg overflow-hidden">
            {yearly.map((y) => {
              const pct = (y.count / yearlyMax) * 100;
              return (
                <div
                  key={y.year}
                  className="bg-white p-5 md:p-6 flex flex-col"
                >
                  <p className="text-xs tracking-widest text-omj-sub mb-3 tabular-nums">
                    {y.year}
                  </p>
                  <p className="font-bold text-omj-primary leading-none">
                    <AnimatedDigits
                      target={y.count.toString()}
                      duration={900 + y.count * 5}
                      className="text-3xl md:text-4xl"
                    />
                    <span className="text-sm font-medium text-omj-sub ml-1">
                      回
                    </span>
                  </p>
                  <div
                    className="mt-4 h-1 bg-omj-primary/80 rounded-sm"
                    style={{ width: `${pct}%`, minWidth: "8px" }}
                    aria-hidden="true"
                  />
                  {y.note && (
                    <p className="mt-2 text-[11px] text-omj-sub leading-tight">
                      {y.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl rounded-lg border border-omj-border bg-omj-base p-5 md:p-6 text-sm text-omj-sub leading-relaxed space-y-2">
            <p>
              ※
              上記は協力団体 SOY-POY における開催実績です。オープンマイクジャパンは、この場でオープンマイクを継続的に開催してきました。
            </p>
            <p>
              ※ SOY-POY は 2022年2月21日〜4月20日に実施した{" "}
              <a
                href="https://motion-gallery.net/projects/soy-poy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-omj-primary underline"
              >
                クラウドファンディング（MOTION GALLERY）
              </a>
              で 202 人から計 1,661,565 円（目標 150 万円・達成率 111%）のご支援を受け、同年5月にオープンしました。
            </p>
            <p>
              ※ SOY-POY 自身の歴史については{" "}
              <a
                href={SOYPOY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-omj-primary underline"
              >
                SOY-POY 公式サイト
              </a>{" "}
              をご覧ください。
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-omj-border">
            <p className="text-xs uppercase tracking-widest text-omj-sub mb-3">
              関連ページ
            </p>
            <ul className="grid sm:grid-cols-3 gap-2">
              <li>
                <Link
                  href="/history"
                  className="text-sm text-omj-primary hover:underline"
                >
                  ←&nbsp;あゆみへ戻る
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-omj-primary hover:underline"
                >
                  →&nbsp;わたしたちについて
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-sm text-omj-primary hover:underline"
                >
                  →&nbsp;活動を見る
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

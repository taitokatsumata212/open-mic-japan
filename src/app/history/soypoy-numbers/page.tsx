import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { NumberStat } from "@/components/NumberStat";
import { SectionHeading } from "@/components/SectionHeading";
import { SOYPOY_URL } from "@/lib/constants";

export const metadata = {
  title: "協力団体 SOY-POY が育ててきた場",
  description:
    "オープンマイクジャパンの活動の中心は協力団体 SOY-POY の場で行われています。約190回・4年5ヶ月の場の規模を、ジャンル別・年別の数字で示します。",
};

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

      <section className="bg-white border-y border-omj-border py-12 md:py-16">
        <Container>
          <SectionHeading eyebrow="Key Metrics" title="場の規模（要約）" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <NumberStat number="4年5ヶ月" label="活動期間" size="lg" />
            <NumberStat number="約190回" label="総開催イベント数" size="lg" />
            <NumberStat number="月3〜4回" label="平均開催ペース" size="lg" />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="By Genre"
            title="ジャンル別内訳"
            description="ジャンルごとの開催実績。内訳は SOY-POY が把握している範囲での集計です。"
          />
          <ul className="space-y-3">
            {genres.map((g) => (
              <li
                key={g.label}
                className="rounded-lg border border-omj-border bg-white overflow-hidden"
              >
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <p className="text-base font-bold text-omj-text">{g.label}</p>
                  <p className="shrink-0 text-omj-primary font-bold tabular-nums">
                    {g.count.toLocaleString()}
                    <span className="text-omj-sub text-xs font-medium ml-1">
                      回
                    </span>
                  </p>
                </div>
                {g.sub && g.sub.length > 0 && (
                  <ul className="border-t border-omj-border bg-omj-base divide-y divide-omj-border">
                    {g.sub.map((s) => (
                      <li
                        key={s.label}
                        className="flex items-center justify-between gap-4 px-5 py-2.5"
                      >
                        <p className="text-sm text-omj-sub leading-relaxed">
                          {s.label}
                        </p>
                        <p className="shrink-0 text-sm text-omj-text tabular-nums">
                          {s.count.toLocaleString()}
                          <span className="text-omj-sub text-xs ml-1">回</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-12 md:py-16">
        <Container>
          <SectionHeading
            eyebrow="By Year"
            title="年別推移"
            description="開催イベント数の年別の推移。バーの長さは最大値（2024年）を基準とした相対値。"
          />
          <ul className="space-y-3 max-w-2xl">
            {yearly.map((y) => {
              const pct = (y.count / yearlyMax) * 100;
              return (
                <li
                  key={y.year}
                  className="grid grid-cols-[64px_1fr_72px] items-center gap-3 md:gap-4"
                >
                  <span className="text-sm text-omj-sub font-medium tabular-nums">
                    {y.year}
                  </span>
                  <span
                    className="h-3 md:h-3.5 rounded-sm bg-omj-primary/80"
                    style={{ width: `${pct}%`, minWidth: "4px" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-omj-text tabular-nums">
                    {y.count.toLocaleString()}
                    <span className="text-omj-sub text-xs ml-1">回</span>
                    {y.note && (
                      <span className="block text-[11px] text-omj-sub tracking-tight leading-tight mt-0.5">
                        {y.note}
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
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

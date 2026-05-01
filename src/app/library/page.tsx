import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllChapters } from "@/lib/library";

export const metadata = {
  title: "読みもの",
  description:
    "オープンマイクという文化の歴史を6章にまとめた連載「オープンマイクの歴史的変遷」のインデックス。",
};

type TimelineRow = {
  yr: string;
  side: "left" | "right";
  text: string;
  color: "p" | "m" | "c" | "o";
  srLabel: string;
};

const timeline: TimelineRow[] = [
  { yr: "1955", side: "left", text: "Six Gallery Reading", color: "p", srLabel: "詩・朗読" },
  { yr: "1957", side: "left", text: "Howl 猥褻裁判", color: "p", srLabel: "詩・朗読" },
  { yr: "1961", side: "left", text: "Bob Dylan @ Gerde’s Folk City", color: "m", srLabel: "音楽" },
  { yr: "1960s〜", side: "right", text: "自由朗読（白石かずこ・谷川俊太郎ら）", color: "p", srLabel: "詩・朗読" },
  { yr: "1972", side: "left", text: "Comedy Store / Catch a Rising Star", color: "c", srLabel: "コメディ" },
  { yr: "1973", side: "left", text: "Nuyorican Poets Cafe", color: "p", srLabel: "詩・朗読" },
  { yr: "1986", side: "left", text: "Uptown Poetry Slam（Green Mill）", color: "p", srLabel: "詩・朗読" },
  { yr: "1990", side: "left", text: "第1回 National Poetry Slam", color: "p", srLabel: "詩・朗読" },
  { yr: "1994", side: "right", text: "Tokyo Comedy Club（在日外国人英語）", color: "c", srLabel: "コメディ" },
  { yr: "1997", side: "right", text: "詩のボクシング 第1回", color: "p", srLabel: "詩・朗読" },
  { yr: "2001", side: "right", text: "朝日町パラダイス（湘南）", color: "m", srLabel: "音楽" },
  { yr: "2002", side: "left", text: "Def Poetry Jam（HBO）", color: "p", srLabel: "詩・朗読" },
  { yr: "2005", side: "left", text: "YouTube 設立", color: "o", srLabel: "その他" },
  { yr: "2011", side: "left", text: "Button Poetry 設立", color: "p", srLabel: "詩・朗読" },
  { yr: "2012", side: "right", text: "築地 MADEIRA オープンマイク", color: "m", srLabel: "音楽" },
  { yr: "2015", side: "right", text: "ポエトリースラムジャパン", color: "p", srLabel: "詩・朗読" },
  { yr: "2016", side: "right", text: "日本スタンダップコメディ協会", color: "c", srLabel: "コメディ" },
  { yr: "2019", side: "left", text: "yosemic（NY）発足", color: "p", srLabel: "詩・朗読" },
  { yr: "2020", side: "left", text: "COVID-19 / オンライン化", color: "o", srLabel: "その他" },
  { yr: "2022.2", side: "right", text: "SOY-POY オープン（下北沢）", color: "m", srLabel: "音楽" },
  { yr: "2022.5", side: "right", text: "Tokyo Comedy Bar（渋谷）", color: "c", srLabel: "コメディ" },
  { yr: "2025", side: "right", text: "NPO法人オープンマイクジャパン設立", color: "o", srLabel: "その他" },
];

const dotColor: Record<TimelineRow["color"], string> = {
  p: "#7F77DD",
  m: "#1D9E75",
  c: "#D85A30",
  o: "#888780",
};

export default function LibraryPage() {
  const chapters = getAllChapters();

  return (
    <article className="library-page">
      <Container className="max-w-[720px] py-16 md:py-20">
        <p className="text-xs tracking-[0.24em] uppercase text-omj-primary font-semibold mb-2">
          Library
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-omj-text">
          読みもの
        </h1>

        <p className="mt-6 text-omj-text leading-loose max-w-[42em]">
          オープンマイクという文化は、どこから来てどう育ってきたのか。NPO法人オープンマイクジャパンの編集メンバーが、海外と日本の歴史を半年かけて調べ、6章にまとめました。下の年表で全体を見てから、気になる時代の章へどうぞ。
        </p>

        <section className="mt-14 md:mt-16" aria-labelledby="tl-heading">
          <h2 className="sr-only" id="tl-heading">
            オープンマイクの歴史年表
          </h2>
          <div className="library-tl">
            <div className="library-tl-header">
              <div>海外</div>
              <div></div>
              <div>日本</div>
            </div>
            {timeline.map((row, i) => (
              <div className="library-tl-row" key={i}>
                {row.side === "left" ? (
                  <div className="cl ev">
                    <span>{row.text}</span>
                    <span
                      className="library-tl-dot"
                      aria-hidden="true"
                      style={{ background: dotColor[row.color] }}
                    />
                    <span className="sr-only">（{row.srLabel}）</span>
                  </div>
                ) : (
                  <div className="cl"></div>
                )}
                <div className="yr">{row.yr}</div>
                {row.side === "right" ? (
                  <div className="cr ev">
                    <span
                      className="library-tl-dot"
                      aria-hidden="true"
                      style={{ background: dotColor[row.color] }}
                    />
                    <span className="sr-only">（{row.srLabel}）</span>
                    <span>{row.text}</span>
                  </div>
                ) : (
                  <div className="cr"></div>
                )}
              </div>
            ))}
            <div className="library-tl-legend" aria-label="凡例">
              <div className="lg-item">
                <span
                  className="library-tl-dot"
                  aria-hidden="true"
                  style={{ background: dotColor.p }}
                />
                詩・朗読
              </div>
              <div className="lg-item">
                <span
                  className="library-tl-dot"
                  aria-hidden="true"
                  style={{ background: dotColor.m }}
                />
                音楽
              </div>
              <div className="lg-item">
                <span
                  className="library-tl-dot"
                  aria-hidden="true"
                  style={{ background: dotColor.c }}
                />
                コメディ
              </div>
              <div className="lg-item">
                <span
                  className="library-tl-dot"
                  aria-hidden="true"
                  style={{ background: dotColor.o }}
                />
                その他
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 md:mt-16" aria-labelledby="ch-heading">
          <p
            className="text-xs tracking-[0.24em] uppercase text-omj-primary font-semibold mb-4"
            id="ch-heading"
          >
            Chapters　全{chapters.length}章
          </p>
          <ol className="library-chapter-list">
            {chapters.map((ch) => (
              <li key={ch.slug}>
                <Link href={`/library/${ch.slug}`} className="library-chapter">
                  <span className="library-chapter-head">
                    <span className="library-chapter-num">{ch.number}</span>
                    <span className="library-chapter-sep" aria-hidden="true">
                      ｜
                    </span>
                    <span className="library-chapter-era">{ch.era}</span>
                    <span className="library-chapter-sep" aria-hidden="true">
                      ｜
                    </span>
                    <span className="library-chapter-title">{ch.title}</span>
                  </span>
                  <p className="library-chapter-summary">{ch.summary}</p>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-14 pt-7 border-t border-omj-border text-sm text-omj-sub leading-relaxed">
          いま、東京・下北沢で開かれているオープンマイクの場については{" "}
          <Link
            href="/activities"
            className="text-omj-primary hover:text-omj-primary-dark hover:underline underline-offset-[3px]"
          >
            活動 →
          </Link>
        </p>
      </Container>
    </article>
  );
}

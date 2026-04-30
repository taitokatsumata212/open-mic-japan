import { Container } from "@/components/Container";
import { SupportCTA } from "@/components/SupportCTA";

export const metadata = {
  title: "事業紹介",
};

type Pillar = {
  n: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

const pillars: Pillar[] = [
  {
    n: "1",
    title: "コミュニティ形成",
    image: "/images/openmic-mikey-01.jpg",
    imageAlt: "オープンマイクの様子",
    body: "協力団体である SOY-POY と連携し、下北沢を主な活動拠点として、継続的なオープンマイクの場を運営しています。音楽、詩、朗読、トーク、漫才、落語、ダンス、実験的な表現——ジャンルを問わず、さまざまな表現が同じ場で交わります。出演者だけでなく、見る人、聴く人、物販を持ち込む人、支える人、初めて来る人——それぞれが関係を育てていく場として機能しています。",
  },
  {
    n: "2",
    title: "イベント・創作支援",
    image: "/images/utage-2025-01.jpg",
    imageAlt: "野外イベント「宴」の様子",
    body: "通常のオープンマイクに加え、毎年 5 月には野外イベント「宴」を開催しています。小さなフェスのような場で、発表と販売が同時に起こります。ZINE、本、アパレル、アクセサリー、コーヒー、食べ物、小さな商い——表現だけでなく、さまざまな形の「つくること」が集まります。",
  },
  {
    n: "3",
    title: "教育・ワークショップ",
    image: "/images/workshop-tsuya-01.jpg",
    imageAlt: "ワークショップの様子",
    body: "大学での講義・授業や、ワークショップを複数回実施してきました。表現・コミュニケーション・場づくりをテーマに、オープンマイクという実践を教育の文脈へ届ける試みです。実際の場づくりの経験をもとに、「声を出すとはどういうことか」「場が人をどう変えるか」を、知識としてではなく体験を通じて学べる形を模索してきました。",
  },
  {
    n: "4",
    title: "地域連携・都市地方接続",
    body: "下北沢を拠点にしながら、茅ヶ崎・青野原・神奈川県など、地域での開催経験も積み重ねてきました。地方イベント案件への関与も続いており、都市の文化実践と地方の暮らしをつなぐ回路をつくる試みが続いています。将来的には、地域拠点・自治体・団体との連携をひろげ、都市だけでなく地方でも「声を出せる場」が自然に存在する社会を目指しています。",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            Activities
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            事業紹介
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            オープンマイクという実践を社会にひらいていく、4つの取り組み。
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="space-y-6">
            {pillars.map((p) => (
              <article
                key={p.n}
                className="rounded-lg bg-white border border-omj-border overflow-hidden"
              >
                <div className="grid md:grid-cols-5">
                  {p.image && (
                    <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-omj-border">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.imageAlt ?? p.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-7 md:p-9 ${p.image ? "md:col-span-3" : "md:col-span-5"}`}>
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-md bg-omj-primary text-white flex items-center justify-center text-lg font-bold">
                        {p.n}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-omj-text">
                          {p.title}
                        </h2>
                        <p className="mt-3 text-omj-text leading-loose">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

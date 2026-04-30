import { Container } from "@/components/Container";
import { NumberStat } from "@/components/NumberStat";
import { SupportCTA } from "@/components/SupportCTA";
import { SOYPOY_URL } from "@/lib/constants";

export const metadata = {
  title: "これまでのあゆみ",
};

const eras = [
  {
    year: "2019",
    title: "ニューヨークでの始まり",
    body: (
      <>
        <p>
          Open Mic Japan
          の源流は、2019年にニューヨークで始まったオープンマイクの実践にあります。
        </p>
        <p>
          2019年6月、ニューヨークのカフェ・イベントスペース「Silk Road
          Cafe」で、前身団体 yosemic がオープンマイク活動を開始しました。
        </p>
        <p>
          「yosemic」は、日本の「寄席」とアメリカの「オープンマイク（open
          mic）」をかけ合わせた言葉。誰もが声を出せる場をつくろうという思いから生まれた名前です。
        </p>
        <p>
          言語や国籍を越えて、誰もが声を出せる場——その原型がここで形づくられました。
        </p>
      </>
    ),
  },
  {
    year: "2020",
    title: "下北沢への移転",
    body: (
      <>
        <p>
          2020年8月、メンバーが東京・下北沢に拠点を移し、下北沢アリーナにて東京初のオープンマイクを開催しました。
        </p>
        <p>ここから現在へと続く実践の土台が形づくられていきます。</p>
      </>
    ),
  },
  {
    year: "2022",
    title: "協力団体「SOY-POY」のオープン",
    body: (
      <>
        <p>
          2022年2月のクラウドファンディングでは、202人から合計160万円のご支援をいただきました。
        </p>
        <p>
          同年4月末、下北沢にバー兼イベントスペース「SOY-POY」がオープン。コワーキングスペース「ロバート下北沢」を間借りする形で、活動の場が誕生しました。
        </p>
        <p>
          SOY-POY は、Open Mic Japan
          の主要な活動拠点として、現在も協力関係のもとでさまざまなオープンマイクを開催しています。SOY-POY
          自身の歩みについては、
          <a
            href={SOYPOY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-omj-primary underline"
          >
            SOY-POY 公式サイト
          </a>
          をご覧ください。
        </p>
      </>
    ),
  },
  {
    year: "2022〜",
    title: "野外イベント「宴」と地域への広がり",
    body: (
      <>
        <p>毎年5月には野外イベント「宴」を開催。</p>
        <p>
          茅ヶ崎、青野原、神奈川県内など、下北沢の外にも実践は広がっていきました。
        </p>
      </>
    ),
  },
  {
    year: "2022〜",
    title: "教育・ワークショップ",
    body: (
      <>
        <p>大学や専門学校での講義・ワークショップを継続的に実施。</p>
        <p>
          表現・コミュニケーション・場づくりをテーマに、オープンマイクの実践を教育の文脈へ届ける試みを重ねてきました。
        </p>
      </>
    ),
  },
  {
    year: "2025",
    title: "NPO法人オープンマイクジャパン設立",
    body: (
      <>
        <p>
          SOY-POY
          を中心に積み重ねてきた実践を、社会にひらかれた仕組みとして位置づけるため、2025年8月22日、特定非営利活動法人オープンマイクジャパンを設立しました。
        </p>
        <p>
          SOY-POY と Open Mic Japan
          は法人としては別組織ですが、共通の源流と関係性をもとに、協力関係のもとで活動を継続しています。
        </p>
      </>
    ),
  },
  {
    year: "2026",
    title: "SOY-POY 4周年、オープンマイク53回",
    body: (
      <>
        <p>
          2026年5月3日、SOY-POY は
          4周年を迎え、ニューヨークから数えてオープンマイクの開催回数は{" "}
          <strong>53回</strong> となりました。
        </p>
        <p>
          実践の蓄積を、これからも社会にひらかれた仕組みへと育てていきます。
        </p>
      </>
    ),
  },
];

const voicesByCategory: { label: string; quotes: string[] }[] = [
  {
    label: "場の温かさ・歓迎性",
    quotes: [
      "温かく歓迎するカルチャーが素敵だった",
      "あの場所でしか味わえない温かさがあった",
      "間違えても周りが盛り上げてくれて、本当にいい場所だと感じた",
    ],
  },
  {
    label: "再開・挑戦のきっかけ",
    quotes: [
      "久々に舞台前で緊張した。それだけ心が震えていた",
      "人前で表現できる『場』自体にありがたさを感じた",
      "『もっと自由に表現したい』と思えた",
    ],
  },
  {
    label: "ジャンル横断性・表現の広がり",
    quotes: [
      "音楽やダンス、コメディ、写真、アートが持ち寄られていた",
      "ジャンルレスなパフォーマンスに刺激を受けた",
      "いろんな知らないことに出会える場所だった",
    ],
  },
  {
    label: "共同体性・仲間との出会い",
    quotes: [
      "今日の雰囲気を作るのは、俺たちなんだと再認識した",
      "人が人を呼ぶってこういうことだと実感した",
      "共同体があるからこそ、表現が花開くと感じた",
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            History
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            これまでのあゆみ
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            ニューヨーク → 下北沢 → SOY-POY → NPO法人へ。
            7年間で積み重ねた実践の記録。
          </p>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <NumberStat number="53回" label="オープンマイク" size="lg" />
            <NumberStat number="4年" label="SOY-POY 協力" size="lg" />
            <NumberStat number="3エリア+" label="開催エリア" size="lg" />
            <NumberStat number="複数回" label="大学・WS" size="lg" />
            <NumberStat number="毎年5月" label="野外「宴」" size="lg" />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l-2 border-omj-border pl-6 md:pl-10 space-y-12">
              {eras.map((era) => (
                <li key={era.year + era.title} className="relative">
                  <span className="absolute -left-[33px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-omj-primary border-4 border-omj-base" />
                  <div className="text-xs tracking-widest text-omj-primary font-medium mb-2">
                    {era.year}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-omj-text">
                    {era.title}
                  </h2>
                  <div className="prose-omj text-omj-text">{era.body}</div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
              Voices
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              参加者の声
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {voicesByCategory.map((v) => (
                <div
                  key={v.label}
                  className="rounded-lg border border-omj-border p-6 bg-omj-base"
                >
                  <p className="text-sm font-medium text-omj-primary mb-3">
                    {v.label}
                  </p>
                  <ul className="space-y-3">
                    {v.quotes.map((q) => (
                      <li
                        key={q}
                        className="border-l-2 border-omj-primary pl-4 text-sm text-omj-text leading-relaxed"
                      >
                        「{q}」
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

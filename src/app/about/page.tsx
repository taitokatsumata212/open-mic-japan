import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SupportCTA } from "@/components/SupportCTA";
import { SOYPOY_URL } from "@/lib/constants";

export const metadata = {
  title: "About｜1ページでわかるOMJ",
};

const waysToJoin = [
  {
    label: "声をひらく",
    items: [
      "音楽を演奏する",
      "詩や文章を朗読する",
      "トーク、漫才、落語、一人喋り",
      "ダンス・実験的な表現",
      "つくりかけの表現を試す",
    ],
  },
  {
    label: "持ち寄る",
    items: [
      "ZINE・本",
      "アパレル・アクセサリー",
      "コーヒー・食べ物",
      "小さな商い",
    ],
  },
  {
    label: "立ち会う",
    items: [
      "見る・聴く",
      "誰かの表現に出会う",
      "初めての発表をそっと支える",
      "場をつくる側にまわる",
    ],
  },
];

type RoadmapPhase = {
  phase: string;
  title: string;
  subtitle: string;
  status: "current" | "next" | "future";
  items: string[];
};

const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "基盤整備",
    subtitle: "団体としての土台をつくる",
    status: "current",
    items: [
      "ウェブサイトの構築と公開",
      "説明資料・実績整理の完成",
      "会員制度の設計と導入",
      "寄付導線の整備",
      "団体としての言葉の整備",
    ],
  },
  {
    phase: "Phase 2",
    title: "教育・ワークショップの体系化",
    subtitle: "実践を学びの文脈に届ける",
    status: "next",
    items: [
      "大学・専門学校での定期講義",
      "表現・コミュニケーション・場づくりをテーマにしたワークショップ",
      "オープンマイク体験型プログラム",
      "イベント企画・運営を学ぶ実践プログラム",
    ],
  },
  {
    phase: "Phase 3",
    title: "地域連携と都市地方ネットワークの拡張",
    subtitle: "都市と地方をつなぐ回路をひろげる",
    status: "future",
    items: [
      "地域拠点・自治体・団体との連携強化",
      "地方でのオープンマイク定期開催の仕組みづくり",
      "都市と地方の間で人・表現・学びが往復する回路の設計",
      "地域の空き家・遊休施設の活用との接続可能性",
    ],
  },
  {
    phase: "Phase 4",
    title: "文化的インフラ化",
    subtitle: "声を出せる場が、社会の当たり前になる",
    status: "future",
    items: [
      "誰もが声を持ち、表現を試せる場が社会に当たり前にある状態",
      "表現と創作を通じてコミュニティが再生されていく仕組み",
      "世代や国境を越えて人が集まり、関係をつくれる場の広がり",
    ],
  },
];

const statusBadge: Record<RoadmapPhase["status"], { label: string; className: string }> = {
  current: { label: "現在", className: "bg-omj-primary text-white" },
  next: { label: "次のステップ", className: "bg-omj-accent text-white" },
  future: { label: "将来", className: "bg-omj-border text-omj-sub" },
};

const officers = [
  { role: "理事長", name: "荒木美月" },
  { role: "副理事長", name: "大熊響" },
  { role: "副理事", name: "増田久晃" },
  { role: "理事", name: "宮地元気" },
  { role: "理事", name: "勝俣泰斗" },
  { role: "理事", name: "大内悟道" },
  { role: "監事", name: "原大輔" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            About
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            1ページでわかる Open Mic Japan
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            このページを読めば、私たちが何を、なぜ、どこへ向かってやっているかが掴めます。
          </p>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <SectionHeading
            eyebrow="What"
            title="私たちが考えるオープンマイク"
          />
          <div className="prose-omj max-w-3xl text-omj-text">
            <p>
              Open Mic Japan
              にとってオープンマイクは、単なる発表の場ではありません。
            </p>
            <p>
              それは、声を出す場であり、出会う場であり、関係が育つ場です。
            </p>
            <p>
              音楽や朗読だけでなく、漫才、落語、ダンス、実験的な表現、本や
              ZINE、小さな商いまでが持ち寄られ、表現と創作にまつわる多様な営みを受け入れる器として機能しています。
            </p>
            <p>
              完成していなくてもいい。まだ名前のない活動でもいい。誰かの前で試してみること、自分の持つ声をひらいてみること自体に意味がある——それが、私たちが考えるオープンマイクです。
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Why"
            title="なぜ今、Open Mic Japan が必要なのか"
          />
          <div className="prose-omj max-w-3xl text-omj-text">
            <p>
              少子高齢化、地方の人手不足、空き家の問題、地域コミュニティの希薄化。
            </p>
            <p>
              私たちの社会には、制度や政策だけでは解けない課題があります。
            </p>
            <p>
              それは、人が集まり、声を出し、関係をつくり直す場の不足です。
            </p>
            <ul>
              <li>表現を再開するきっかけが少ない</li>
              <li>プロとアマチュアが混ざれる場が少ない</li>
              <li>世代や国籍を越えて交わる場が少ない</li>
              <li>都市と地方の間に、往復できる文化的回路がない</li>
            </ul>
            <p>
              Open Mic Japan
              は、これらの課題に対して、政策ではなく実践で応えようとしています。
            </p>
            <p>
              場をつくり、人を迎え、声を聴く。その繰り返しの中に、社会が必要としている何かがあると、私たちは考えています。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <SectionHeading
            eyebrow="Ways to join"
            title="さまざまな参加の方法"
            description="演奏する、持ち寄る、立ち会う——どの関わり方も、場をつくる一部です。"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {waysToJoin.map((group) => (
              <div
                key={group.label}
                className="rounded-lg border border-omj-border p-6 bg-omj-base"
              >
                <p className="text-sm text-omj-primary font-medium mb-3">
                  {group.label}
                </p>
                <ul className="text-sm text-omj-text space-y-1">
                  {group.items.map((it) => (
                    <li key={it}>・{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Welcome"
            title="こんな方とお会いしたい"
            description="参加のかたちは自由です。少しでも気になる気持ちがあれば、それで十分です。"
          />
          <div className="prose-omj max-w-3xl">
            <ul>
              <li>表現の入口を社会に増やしたい方</li>
              <li>地域に文化的なつながりを育てたい方</li>
              <li>若い世代や初心者が安心して参加できる場を応援したい方</li>
              <li>都市と地方をつなぐ実践に関心がある方</li>
              <li>教育・福祉・地域づくりと文化活動の接点に可能性を感じる方</li>
              <li>誰かが声を出せる場を、そっと支えたい方</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <SectionHeading
            eyebrow="History"
            title="これまでのあゆみ（要約）"
          />
          <div className="prose-omj max-w-3xl">
            <p>
              2019年、ニューヨークで「yosemic」がオープンマイクの実践を始めました。日本の「寄席」とアメリカの「オープンマイク（open
              mic）」をかけ合わせた言葉で、誰もが声を出せる場をつくろうという思いから生まれた名前です。
            </p>
            <p>
              2020年、メンバーが東京・下北沢に拠点を移し、オープンマイクを継続。2022年5月には、「SOY-POY」が下北沢にオープンし、以来
              SOY-POY として毎月のオープンマイクを重ねてきました。
            </p>
            <p>
              実践の蓄積をもとに、活動を社会にひらかれた仕組みへと位置づけるため、2025年8月22日、特定非営利活動法人オープンマイクジャパンを設立。SOY-POY
              とは法人としては別組織ですが、協力団体として並行して活動を続けています。
            </p>
            <p>
              2026年5月3日、SOY-POY は
              4周年を迎え、ニューヨークから数えてオープンマイクの開催回数は
              53回 となりました。
            </p>
            <p>
              SOY-POY 自身の歩みについては、
              <a href={SOYPOY_URL} target="_blank" rel="noopener noreferrer">
                SOY-POY 公式サイト
              </a>
              をご覧ください。
            </p>
            <p>
              <a href="/history">→ 詳しいあゆみを読む</a>
            </p>
          </div>
        </Container>
      </section>

      <section id="roadmap" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Roadmap"
            title="これから"
            description="基盤整備から、文化的インフラ化へ。4つの段階で進めていきます。"
          />

          {/* Step indicator (今は Phase 1 と 2 の間：その区間だけ色をつける) */}
          <div className="hidden md:block mb-14 px-4">
            <div className="relative flex items-center">
              {roadmap.map((p, i) => {
                const isCurrent = p.status === "current";
                const isFuture = p.status === "future";
                // この区間 (i → i+1) は「現在地」か？ Phase 1 と 2 の間だけ色付け
                const segmentActive = isCurrent;
                return (
                  <div
                    key={p.phase}
                    className={`flex items-center ${i < roadmap.length - 1 ? "flex-1" : ""}`}
                  >
                    <div className="flex flex-col items-center text-center shrink-0 w-20">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-4 ${
                          isCurrent
                            ? "bg-omj-primary text-white border-omj-primary"
                            : isFuture
                              ? "bg-white text-omj-sub border-omj-border"
                              : "bg-white text-omj-accent border-omj-accent"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <p
                        className={`mt-3 text-xs font-bold tracking-wider ${
                          isCurrent
                            ? "text-omj-primary"
                            : isFuture
                              ? "text-omj-sub"
                              : "text-omj-accent"
                        }`}
                      >
                        {p.phase}
                      </p>
                    </div>
                    {i < roadmap.length - 1 && (
                      <div className="relative flex-1 mx-2">
                        <div
                          className={`h-2 rounded-full ${
                            segmentActive ? "bg-omj-primary" : "bg-omj-border"
                          }`}
                        />
                        {segmentActive && (
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-omj-primary whitespace-nowrap">
                            ▼ 現在地
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phase cards */}
          <div className="space-y-4">
            {roadmap.map((p, i) => {
              const isCurrent = p.status === "current";
              const isFuture = p.status === "future";
              const badge = statusBadge[p.status];
              return (
                <div
                  key={p.phase}
                  className={`rounded-lg border bg-white overflow-hidden transition-shadow ${
                    isCurrent
                      ? "border-omj-primary shadow-md ring-2 ring-omj-primary/20"
                      : "border-omj-border"
                  }`}
                >
                  <div className="grid md:grid-cols-12">
                    <div
                      className={`md:col-span-4 p-6 md:p-7 ${
                        isCurrent ? "bg-omj-primary/5" : "bg-omj-base"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            isCurrent
                              ? "bg-omj-primary text-white"
                              : isFuture
                                ? "bg-omj-border text-omj-sub"
                                : "bg-omj-accent text-white"
                          }`}
                        >
                          {i + 1}
                        </div>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      </div>
                      <p
                        className={`text-xs tracking-widest font-medium mt-2 ${
                          isCurrent ? "text-omj-primary" : "text-omj-sub"
                        }`}
                      >
                        {p.phase}
                      </p>
                      <h3
                        className={`text-lg md:text-xl font-bold mt-1 ${
                          isFuture ? "text-omj-sub" : "text-omj-text"
                        }`}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm text-omj-sub mt-2 leading-relaxed">
                        {p.subtitle}
                      </p>
                    </div>
                    <div className="md:col-span-8 p-6 md:p-7">
                      <ul
                        className={`text-sm space-y-2 ${
                          isFuture ? "text-omj-sub" : "text-omj-text"
                        }`}
                      >
                        {p.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <span
                              className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${
                                isCurrent
                                  ? "bg-omj-primary"
                                  : isFuture
                                    ? "bg-omj-border"
                                    : "bg-omj-accent/60"
                              }`}
                            />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <SectionHeading eyebrow="Organization" title="団体概要" />
          <div className="overflow-hidden rounded-lg border border-omj-border">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["名称", "特定非営利活動法人オープンマイクジャパン"],
                  [
                    "本部事務局",
                    "〒155-0031 東京都世田谷区北沢2-30-14 重宗ビル3F",
                  ],
                  ["設立", "2025年8月22日"],
                  ["主な活動地域", "東京・神奈川・山梨ほか"],
                  [
                    "主な事業",
                    "コミュニティ形成、イベント・創作支援、教育・ワークショップ、地域連携",
                  ],
                  ["主な協力団体", "SOY-POY（下北沢）"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-omj-border last:border-0">
                    <th className="text-left bg-omj-base font-medium px-4 py-3 w-40 text-omj-text align-top">
                      {k}
                    </th>
                    <td className="px-4 py-3 text-omj-text">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-12 mb-4">役員</h3>
          <div className="overflow-hidden rounded-lg border border-omj-border">
            <table className="w-full text-sm">
              <tbody>
                {officers.map((o) => (
                  <tr
                    key={o.name + o.role}
                    className="border-b border-omj-border last:border-0"
                  >
                    <th className="text-left bg-omj-base font-medium px-4 py-3 w-40 text-omj-text">
                      {o.role}
                    </th>
                    <td className="px-4 py-3 text-omj-text">{o.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

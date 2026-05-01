import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SupportCTA } from "@/components/SupportCTA";
import { SpaciousnessIcon } from "@/components/illustrations/SpaciousnessIcons";
import { SOYPOY_URL } from "@/lib/constants";

export const metadata = {
  title: "わたしたちについて",
};

type SpaciousnessCard = {
  icon: "genre" | "people" | "spark" | "growth";
  title: string;
  body: string;
};

const spaciousnessCards: SpaciousnessCard[] = [
  {
    icon: "genre",
    title: "ジャンルは無制限",
    body: "クラシックピアノ、バンド、弾き語り、ジャズ、前衛音楽、ラップ、HIP-HOP——音楽だけでも幅は広く、ダンス、演劇、ミュージカル、詩の朗読、漫才、コント、スタンダップコメディ、落語、そして ZINE、アクセサリー、展覧会、映画の上映、茶会、コーヒー、フード、ハンドメイド雑貨の出店まで。「これは表現じゃないかもしれない」という線引きを、私たちはしません。",
  },
  {
    icon: "people",
    title: "プロも、アマチュアも、再開者も、初めての人も",
    body: "プロとして活動している人。アマチュアの人。何年かぶりに表現を再開した人。今日はじめて声を出してみる人。同じ場に、垣根なく立てます。",
  },
  {
    icon: "spark",
    title: "その場でしか起こらないコラボレーション",
    body: "異なるジャンルが偶然出会い、即興でセッションが始まる。一度きりのコラボが生まれる。そんな「その場でしか起こらないこと」が、毎回のオープンマイクで起きています。",
  },
  {
    icon: "growth",
    title: "続けているから見える、人の成長",
    body: "月に一度、同じ場が続いていく。だから、はじめて声を出した人が次は誰かと一緒に演奏していたり、何年かぶりに再開した人が新しい表現に踏み出していたり——時間をかけて育っていく姿を、場の側から見届けることができます。それは、一度きりのイベントでは決して起こらないことです。",
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
  { role: "副理事長", name: "増田久晃" },
  { role: "理事", name: "大内悟道" },
  { role: "理事", name: "宮地元気" },
  { role: "理事", name: "勝俣泰斗" },
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
            わたしたちについて
          </h1>
          <p className="mt-3 text-omj-sub text-sm tracking-wider">
            1ページでわかるオープンマイクジャパン
          </p>
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
              オープンマイクジャパンにとってオープンマイクは、単なる発表の場ではありません。
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
            eyebrow="Spaciousness"
            title="私たちが大事にする器の広さ"
            description="ジャンル／人／その場で起きること／時間。OMJ の場の特徴を、4つの軸で整理しました。"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {spaciousnessCards.map((card, i) => (
              <article
                key={card.icon}
                className="rounded-lg border border-omj-border bg-white p-6 md:p-8 flex gap-5"
              >
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14">
                  <SpaciousnessIcon type={card.icon} />
                </div>
                <div className="flex-1">
                  <p className="text-xs tracking-widest text-omj-primary font-bold mb-1">
                    0{i + 1}
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-omj-text leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-omj-text leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 md:mt-12 text-center text-omj-text leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            ——ジャンルの広さ、人の幅、その場で生まれること、続けてきた時間。
            <br className="hidden md:block" />
            これが、オープンマイクジャパンが大事にしている「器の広さ」です。
          </p>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <SectionHeading
            eyebrow="Why"
            title="なぜ今、オープンマイクジャパンが必要なのか"
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
              オープンマイクジャパンは、これらの課題に対して、政策ではなく実践で応えようとしています。
            </p>
            <p>
              場をつくり、人を迎え、声を聴く。その繰り返しの中に、社会が必要としている何かがあると、私たちは考えています。
            </p>
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

      <section id="organization" className="bg-white border-y border-omj-border py-16">
        <Container>
          <SectionHeading eyebrow="Organization" title="団体概要" />
          <div className="overflow-hidden rounded-lg border border-omj-border">
            <table className="stack-table-mobile w-full text-sm">
              <tbody>
                {[
                  ["名称", "特定非営利活動法人オープンマイクジャパン"],
                  [
                    "本部事務局",
                    "〒155-0031 東京都世田谷区北沢二丁目30番14号 重宗ビル3F",
                  ],
                  ["所轄庁", "東京都"],
                  ["設立年月日", "2025年8月22日（令和7年8月22日）"],
                  ["会社法人等番号", "0109-05-004823"],
                  ["事業年度", "毎年4月1日〜翌年3月31日"],
                  ["主な活動地域", "東京（下北沢）・神奈川・山梨・京都ほか"],
                  [
                    "事業の種類",
                    "(1) コミュニティスペースの運営および演奏会・コンサート・個展・展示会等の開催、アーティストへの支援 / (2) 公共の場を活用したアーティストコミュニティの形成・活動支援、講習会等の実施 / (3) ウェブサイト・ウェブメディアの制作・運営によるアーティスト・地域活動の発信 / (4) その他目的を達成するために必要な事業",
                  ],
                  ["主な協力団体", "SOY-POY（下北沢）"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-omj-border last:border-0">
                    <th className="text-left bg-omj-base font-medium px-4 py-3 w-40 text-omj-text align-top">
                      {k}
                    </th>
                    <td className="px-4 py-3 text-omj-text leading-relaxed">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-12 mb-4">役員</h3>
          <div className="overflow-hidden rounded-lg border border-omj-border">
            <table className="stack-table-mobile w-full text-sm">
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

          <div className="mt-10 rounded-lg border border-omj-border bg-omj-base p-5 md:p-6">
            <p className="text-sm font-medium text-omj-text mb-1">
              定款・事業計画・決算など、団体の各種文書
            </p>
            <p className="text-sm text-omj-sub leading-relaxed mb-3">
              情報公開ページで、公開済み・準備中・公開予定をまとめてご覧いただけます。
            </p>
            <a
              href="/about/disclosure"
              className="inline-flex items-center text-sm text-omj-primary font-medium hover:underline"
            >
              →&nbsp;情報公開ページを見る
            </a>
          </div>
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

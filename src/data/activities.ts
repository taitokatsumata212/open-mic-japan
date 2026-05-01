export type ActivityStat = {
  number: string;
  label: string;
};

export type ActivityExample = {
  title: string;
  body: string;
};

export type Activity = {
  slug: "community" | "events" | "education" | "regional";
  number: string; // 表示用のナンバー (1〜4)
  title: string;
  shortTitle: string; // ホーム/カードでの省略表記
  /**
   * /activities 一覧、ホーム、関連リンクで使う1〜2文の要約
   */
  summary: string;
  /**
   * 個別ページ冒頭のリード文（複数段落）
   */
  lead: string[];
  /**
   * この事業で大切にしていること
   */
  values: string[];
  /**
   * 具体的な取り組み
   */
  examples: ActivityExample[];
  /**
   * 関連する数字（任意）
   */
  stats?: ActivityStat[];
  /**
   * unDraw 風の SVG キー。`@/components/activities/Illustrations` に対応
   */
  illustration: "community" | "events" | "education" | "regional";
  /**
   * 関連内部リンク（CTA セクションに表示）
   */
  relatedLinks?: { href: string; label: string }[];
};

export const activities: Activity[] = [
  {
    slug: "community",
    number: "01",
    title: "コミュニティ形成",
    shortTitle: "コミュニティ形成",
    summary:
      "協力団体 SOY-POY と連携し、下北沢を主な活動拠点として、ジャンル横断のオープンマイクを継続的に開いています。",
    lead: [
      "オープンマイクジャパンの中心にあるのは、ジャンルや経験で線を引かないオープンマイクの場づくりです。",
      "協力団体 SOY-POY と連携しながら、下北沢を拠点に毎月のオープンマイクを開催してきました。音楽、詩、朗読、トーク、漫才、落語、ダンス、実験的な表現——さまざまな形が同じ場で交わります。",
      "出演する人だけでなく、見にくる人、聴く人、物販を持ち込む人、初めて来る人——それぞれが関係を育てていく場として機能しています。",
    ],
    values: [
      "ジャンルや経験で線を引かない",
      "出演する人も、観にくる人も、それぞれの参加のかたちを尊重する",
      "初めての人にとっての一歩を、できるだけ低く保つ",
      "場の空気を、誰か一人ではなく、その日集まった人たちでつくる",
    ],
    examples: [
      {
        title: "毎月のオープンマイク",
        body: "協力団体 SOY-POY（下北沢）にて、毎月オープンマイクを開催。出演者・聴衆ともジャンル・年代・経験を問わず参加可能。",
      },
      {
        title: "表現ジャンルの混在",
        body: "音楽 / 詩 / 朗読 / トーク / 漫才 / 落語 / ダンス / 実験的な音楽・表現が、同じ場で同じ時間帯に出現します。",
      },
      {
        title: "持ち寄りの輪",
        body: "ZINE、本、アパレル、コーヒー、食べ物——表現以外の「持ち寄り」も同居し、商いと表現の境目をゆるやかにしています。",
      },
    ],
    stats: [
      { number: "53回", label: "オープンマイク開催" },
      { number: "4年", label: "協力団体 SOY-POY との関係" },
    ],
    illustration: "community",
    relatedLinks: [
      { href: "/history", label: "これまでのあゆみを見る" },
      { href: "/gallery#open-mic", label: "オープンマイクの写真を見る" },
    ],
  },
  {
    slug: "events",
    number: "02",
    title: "イベント・創作支援",
    shortTitle: "イベント・創作支援",
    summary:
      "毎年5月の野外イベント「宴」をはじめ、表現と小商いが同じ場に立ち上がる企画を支えています。",
    lead: [
      "通常のオープンマイクに加え、毎年 5 月には野外イベント「宴」を開催しています。",
      "小さなフェスのような場で、発表と販売が同時に起こります。ZINE、本、アパレル、アクセサリー、コーヒー、食べ物、小さな商い——表現だけでなく、さまざまな形の「つくること」が集まります。",
      "また、協力拠点である SOY-POY で開かれる企画イベント（クラシック×生花、ひとり芝居、ライブ等）にも、場の運営や発信の面で関わっています。",
    ],
    values: [
      "表現と「商い」の境目を引かない",
      "完成・未完成を区別しない",
      "発表の場と、生活の場を切り離さない",
      "誰かの「やってみたい」が立ち上がる余白を残す",
    ],
    examples: [
      {
        title: "野外イベント「宴」",
        body: "毎年5月、山梨県・平林で開催する野外イベント。出演と出店が同時に立ち上がる、小さなフェスのような場。次回は 2026年5月23日〜24日。茅ヶ崎・青野原などでの開催も継続。",
      },
      {
        title: "協力拠点での企画イベント",
        body: "『晩夏』（クラシックピアノ×生花）、ひとり芝居『キャンバスと一角』、『ああ獣道』など。OMJ ではなく協力拠点 SOY-POY 主催の企画も、場の広がりとして関わってきました。",
      },
      {
        title: "表現と物販の同居",
        body: "ZINE、本、アパレル、コーヒー、食事——表現以外の「つくる」が同じ空間に並ぶことを大切にしています。",
      },
    ],
    stats: [{ number: "毎年5月", label: "野外イベント「宴」開催" }],
    illustration: "events",
    relatedLinks: [
      { href: "/gallery#utage", label: "「宴」の写真を見る" },
      { href: "/gallery#event", label: "協力拠点での企画イベント" },
      { href: "/news", label: "今後のイベント情報" },
    ],
  },
  {
    slug: "education",
    number: "03",
    title: "教育・ワークショップ",
    shortTitle: "教育・ワークショップ",
    summary:
      "大学・専門学校での講義や、表現・場づくりをテーマにしたワークショップを継続的に実施しています。",
    lead: [
      "大学での講義・授業や、ワークショップを複数回実施してきました。",
      "表現・創作・コミュニケーション・場づくりをテーマに、オープンマイクという実践を教育の文脈へ届ける試みです。",
      "実際の場づくりの経験をもとに、「声を出すとはどういうことか」「場が人をどう変えるか」を、知識としてではなく体験を通じて学べる形を模索してきました。",
    ],
    values: [
      "知識ではなく、体験として届ける",
      "教える側と学ぶ側を固定しない",
      "表現の入口を、学校・地域・職場へ持ち込む",
      "声を出す経験そのものを、誰にとってもアクセシブルなものに",
    ],
    examples: [
      {
        title: "大学・専門学校での講義",
        body: "表現・コミュニケーション・場づくりをテーマにした講義。実践事例をもとに、参加型の構成で展開。",
      },
      {
        title: "インプロ講習会",
        body: "即興表現を入口に、声を出すこと・他者と即興で関わることを体験するワークショップ。",
      },
      {
        title: "コラージュワークショップ",
        body: "雑誌や紙片を切り貼りして「自分の今」を一枚にあらわす、創作のワークショップ。手を動かすうちに言葉にならない感覚が形になり、参加者同士が作品を見せ合うことで対話が生まれます。",
      },
    ],
    illustration: "education",
    relatedLinks: [
      { href: "/about#roadmap", label: "Phase 2：教育・ワークショップの体系化" },
      { href: "/contact", label: "出張ワークショップのご相談" },
    ],
  },
  {
    slug: "regional",
    number: "04",
    title: "地域連携・都市地方接続",
    shortTitle: "地域連携・都市地方接続",
    summary:
      "東京・下北沢を拠点に、神奈川（茅ヶ崎・青野原）、山梨・平林（毎年5月の「宴」）、京都の4地域で開催を重ねています。",
    lead: [
      "東京・下北沢を拠点に、神奈川（茅ヶ崎・青野原など）、山梨・平林（毎年5月の野外イベント「宴」）、京都と、4つの地域で開催を積み重ねてきました。",
      "地方イベント案件への関与も続いており、都市の文化実践と地方の暮らしをつなぐ回路をつくる試みが続いています。",
      "将来的には、地域拠点・自治体・団体との連携をひろげ、都市だけでなく地方でも「声を出せる場」が自然に存在する社会を目指しています。",
    ],
    values: [
      "都市の流儀をそのまま地方に持ち込まない",
      "地域の人と一緒に企画する",
      "移動と往復が、文化を運ぶ",
      "地方の小さな場が、大きな価値を持つことを忘れない",
    ],
    examples: [
      {
        title: "東京・下北沢（活動拠点）",
        body: "協力団体 SOY-POY を主な拠点に、毎月のオープンマイクをはじめ、企画イベント・ワークショップを継続的に開いています。",
      },
      {
        title: "神奈川（茅ヶ崎・青野原）",
        body: "2025年3月に茅ヶ崎、5月に青野原（相模原市）で開催。神奈川での連携実績を重ねています。",
      },
      {
        title: "山梨・平林（野外イベント「宴」）",
        body: "毎年5月、山梨・平林で開催する野外イベント。表現と小商いが同時に立ち上がる、地域実践の中心。次回は 2026年5月23日〜24日。",
      },
      {
        title: "京都",
        body: "京都での開催・連携も継続。関西方面の文化実践とつながる入口として、これから関係を広げていきます。",
      },
    ],
    stats: [{ number: "4", label: "開催地域（東京・神奈川・山梨・京都）" }],
    illustration: "regional",
    relatedLinks: [
      { href: "/gallery#regional", label: "地域開催の写真を見る" },
      { href: "/about#roadmap", label: "Phase 3：地域連携の拡張" },
    ],
  },
];

export function getActivity(slug: Activity["slug"]) {
  const a = activities.find((x) => x.slug === slug);
  if (!a) throw new Error(`Activity not found: ${slug}`);
  return a;
}

export function getOtherActivities(currentSlug: Activity["slug"]) {
  return activities.filter((x) => x.slug !== currentSlug);
}

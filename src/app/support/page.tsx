import Link from "next/link";
import { Container } from "@/components/Container";
import { LineButton } from "@/components/LineButton";
import { CheckoutButton } from "@/components/support/CheckoutButton";
import { DonationForm } from "@/components/support/DonationForm";
import { PortalLink } from "@/components/support/PortalLink";
import type { CheckoutPlanKey } from "@/lib/stripe";

export const metadata = {
  title: "支援する",
};

type MemberPlan = {
  plan: CheckoutPlanKey;
  label: string;
  price: string;
  unit: string;
  body: string;
  meta?: string;
};

// 賛助会員制度（年会費・定款 第6条／附則第6項に準拠）
// 正会員は現在新規募集を行っていないため、支援ページには表示しない。
const membershipPlans: MemberPlan[] = [
  {
    plan: "member_assoc_indiv",
    label: "賛助会員（個人）",
    price: "5,000円",
    unit: "/ 口・年（1口以上）",
    body: "法人の目的に賛同し、賛助のかたちで支えてくださる会員です。複数口での加入も可能です。",
    meta: "議決権なし",
  },
  {
    plan: "member_assoc_org",
    label: "賛助会員（団体・法人）",
    price: "5,000円",
    unit: "/ 口・年（1口以上）",
    body: "団体・法人として賛助会員になっていただけます。一定口数以上の場合は、特典付きの法人パートナーシップとしてご相談ください（後述）。",
    meta: "議決権なし",
  },
];

// 月額サポーター（マンスリー寄付・会員制度とは別建て）
type MonthlyTier = {
  plan: CheckoutPlanKey;
  label: string;
  price: string;
  body: string;
  accent?: boolean;
};
const monthlyTiers: MonthlyTier[] = [
  {
    plan: "monthly_1k",
    label: "見守るサポーター",
    price: "1,000円",
    body: "「直接参加はできないけれど、こういう場が社会にあってほしい」——そんな気持ちで、まず応援したい方向けのプランです。",
  },
  {
    plan: "monthly_3k",
    label: "支えるサポーター",
    price: "3,000円",
    body: "定期的なオープンマイクの継続、地域での開催、日常的な場づくり——それらを支える土台になりたい方向けのプランです。",
  },
  {
    plan: "monthly_5k",
    label: "ひらくサポーター",
    price: "5,000円",
    body: "教育・ワークショップの充実、地域への展開、社会への広がり——オープンマイクジャパンの実践が、より多くの場や人に届くことを後押ししたい方向けのプランです。",
    accent: true,
  },
  {
    plan: "monthly_10k",
    label: "つくるサポーター",
    price: "10,000円",
    body: "NPO としての長期的な基盤づくり、活動の継続と発展——深いところで関わり、ともに実践をつくっていきたい方向けのプランです。",
  },
];

// 法人パートナーシップ（賛助会員・団体の特典付き運用）
const corporateTiers = [
  {
    price: "年12万円〜（賛助会員 24口〜）",
    label: "ベーシック・パートナー",
    items: [
      "サイト・SNSへのロゴ掲載",
      "月次レポート",
      "イベント招待（年4回）",
      "ニュースレター謝辞",
    ],
  },
  {
    price: "年36万円〜（賛助会員 72口〜）",
    label: "スタンダード・パートナー",
    items: [
      "ベーシックの内容すべて",
      "共同企画権 年1回（オープンマイク冠回 / ワークショップ等）",
      "法人主催イベントへのオープンマイクジャパン出張優先枠",
    ],
  },
  {
    price: "年100万円〜（賛助会員 200口〜）",
    label: "プレミアム・パートナー",
    items: [
      "スタンダードの内容すべて",
      "共同企画権 複数回",
      "教育プログラム共催権",
      "5月「宴」または周年での冠スポンサー権",
      "個別の連携設計（地域・教育・国際など）",
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            Support
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            支援する
          </h1>
          <p className="mt-3 text-omj-sub text-sm tracking-wider">
            関わる・参加する・支える、いくつもの入口
          </p>
          <div className="mt-7 max-w-3xl prose-omj text-omj-text">
            <p>
              オープンマイクジャパンの活動は、現場に集まる人たちと、それを支える人たちによって成り立っています。
            </p>
            <p>
              声を出す場を増やすこと、表現の入口を社会にひらくこと——その実践を続けていくために、一緒に場をつくってくれる仲間を募集しています。
            </p>
            <p>
              「観に行く」「自分も出てみる」「会員として参加する」「月額で支える」「単発で寄付する」「協賛として関わる」——どれも、同じくらい大切な参加のかたちです。あなたに合う関わり方を選んでください。
            </p>
          </div>
        </Container>
      </section>

      {/* 0. LINE で繋がる */}
      <section className="bg-white border-y border-omj-border py-14">
        <Container>
          <div className="rounded-lg border border-omj-border p-7 md:p-9 bg-omj-base">
            <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
              0. まずは LINE で繋がる
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              関わり方を選ぶ前に、繋がってみてください
            </h2>
            <p className="text-omj-text leading-relaxed mb-5 max-w-2xl">
              いきなり会員や寄付を決めなくて大丈夫です。LINE
              で繋がっていただくと、イベント情報や活動報告が届きます。
            </p>
            <LineButton size="lg" />
          </div>
        </Container>
      </section>

      {/* 1. 会員制度（年会費・定款どおり） */}
      <section className="py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            1. 会員になる（年会費）
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">賛助会員制度</h2>
          <p className="text-omj-sub mb-8 max-w-3xl leading-relaxed">
            賛助のかたちで法人の活動を支えていただく会員制度です。個人・団体それぞれにご用意し、複数口での加入もできます。
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {membershipPlans.map((p) => (
              <div
                key={p.plan}
                className="rounded-lg border border-omj-border p-6 bg-white flex flex-col"
              >
                <p className="text-sm font-medium text-omj-text">{p.label}</p>
                <p className="text-2xl font-bold mt-2 text-omj-text">
                  {p.price}
                  <span className="text-sm font-normal text-omj-sub ml-1">
                    {p.unit}
                  </span>
                </p>
                {p.meta && (
                  <p className="mt-1 text-xs text-omj-sub">{p.meta}</p>
                )}
                <p className="mt-4 text-sm text-omj-text leading-relaxed flex-1">
                  {p.body}
                </p>
                <div className="mt-5">
                  <CheckoutButton
                    plan={p.plan}
                    label="この会員になる"
                    variant="primary"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-omj-sub leading-relaxed">
            ※ クレジットカード決済（Stripe）でお支払いいただきます。Checkout 画面で口数を調整できます。銀行振込をご希望の場合は
            <Link href="/contact" className="text-omj-primary underline">
              お問い合わせ
            </Link>
            よりご連絡ください。
          </p>

          <p className="mt-3 text-xs text-omj-sub leading-relaxed">
            ※
            会員区分・会費は定款（第6条・附則第6項）に基づきます。詳細は
            <Link
              href="/about/disclosure"
              className="text-omj-primary underline"
            >
              情報公開ページ
            </Link>
            の定款をご覧ください。
          </p>
        </Container>
      </section>

      {/* 2. 月額サポーター（寄付） */}
      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            2. 月額で支援する
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            マンスリーサポーター
          </h2>
          <p className="text-omj-sub mb-8 max-w-3xl leading-relaxed">
            月額の継続的な寄付で活動を支えてくださる方々です。会員制度とは別の枠組みで、議決権はありませんが、定期的な応援が場づくりの大きな土台になります。気持ちにあわせて、4 つのプランから選べます。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {monthlyTiers.map((t) => (
              <div
                key={t.plan}
                className={`rounded-lg border p-6 bg-omj-base flex flex-col ${
                  t.accent
                    ? "border-omj-primary ring-2 ring-omj-primary/20"
                    : "border-omj-border"
                }`}
              >
                <p className="text-sm text-omj-sub">{t.label}</p>
                <p className="text-2xl font-bold mt-1 text-omj-text">
                  {t.price}
                  <span className="text-sm font-normal text-omj-sub ml-1">
                    / 月
                  </span>
                </p>
                <p className="mt-4 text-sm text-omj-text leading-relaxed flex-1">
                  {t.body}
                </p>
                <div className="mt-5">
                  <CheckoutButton
                    plan={t.plan}
                    label="このサポーターになる"
                    variant={t.accent ? "primary" : "secondary"}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. 単発寄付 */}
      <section className="py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            3. 単発で寄付する
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">単発寄付</h2>
          <p className="text-omj-sub mb-6 max-w-3xl leading-relaxed">
            月額の継続が難しい方のために、金額自由の単発寄付も受け付けます。500 円から 100,000 円まで、ご無理のない範囲で。
          </p>
          <div className="max-w-2xl">
            <DonationForm />
          </div>
        </Container>
      </section>

      {/* 4. 法人パートナーシップ */}
      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            4. 法人として関わる・支える
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            法人パートナーシップ
          </h2>
          <p className="text-omj-sub mb-2 max-w-3xl leading-relaxed">
            企業・団体さまの規模やご関心にあわせ、3 つのコースをご用意しています。基本枠組みは「賛助会員（団体）」（1 口 5,000 円・年）の口数で構成され、各コースには特典がつきます。
          </p>
          <p className="text-xs text-omj-sub mb-8">
            ※ 例：年 12 万円 = 賛助会員 24 口 / 年 36 万円 = 72 口 / 年 100 万円 = 200 口
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {corporateTiers.map((t) => (
              <div
                key={t.label}
                className="rounded-lg border border-omj-border p-6 bg-omj-base flex flex-col"
              >
                <p className="text-sm text-omj-sub">{t.label}</p>
                <p className="text-base md:text-lg font-bold mt-1 text-omj-text leading-snug">
                  {t.price}
                </p>
                <ul className="mt-4 text-sm text-omj-text space-y-1.5 flex-1">
                  {t.items.map((i) => (
                    <li key={i}>・{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-omj-sub leading-relaxed max-w-3xl">
            上記コース以外にも、単発協賛、現物協賛（場所・機材・飲食・印刷物）、業務委託としての関係など、ご関心に合わせた連携が可能です。
            <Link href="/contact" className="text-omj-primary underline ml-1">
              お問い合わせ
            </Link>
            からご相談ください。
          </p>
        </Container>
      </section>

      {/* 5. 助成・パートナー一覧 */}
      <section className="py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            5. ご支援いただいている方々
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            助成元・パートナー
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "助成元", note: "採択後にロゴを追加します" },
              { label: "法人パートナー", note: "契約後にロゴを追加します" },
              {
                label: "協力団体",
                note: "SOY-POY（下北沢）と連携して活動しています",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-dashed border-omj-border p-8 text-center bg-white"
              >
                <p className="text-sm font-medium text-omj-text mb-1">
                  {s.label}
                </p>
                <p className="text-xs text-omj-sub">{s.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 既存会員/サポーター向け Customer Portal */}
      <section className="bg-white border-t border-omj-border py-12 md:py-14">
        <Container>
          <div className="max-w-2xl">
            <PortalLink />
          </div>
        </Container>
      </section>
    </>
  );
}

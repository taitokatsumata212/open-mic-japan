import Link from "next/link";
import { Container } from "@/components/Container";
import { LineButton } from "@/components/LineButton";

export const metadata = {
  title: "支援する",
};

const monthlyTiers = [
  {
    price: "1,000円",
    label: "見守る会員",
    body: "「直接参加はできないけれど、こういう場が社会にあってほしい」——そんな気持ちで、まず応援したい方向けのプランです。",
  },
  {
    price: "3,000円",
    label: "支える会員",
    body: "定期的なオープンマイクの継続、地域での開催、日常的な場づくり——それらを支える土台になりたい方向けのプランです。",
  },
  {
    price: "5,000円",
    label: "ひらく会員",
    body: "教育・ワークショップの充実、地域への展開、社会への広がり——オープンマイクジャパンの実践が、より多くの場や人に届くことを後押ししたい方向けのプランです。",
    accent: true,
  },
  {
    price: "10,000円",
    label: "つくる会員",
    body: "NPO としての長期的な基盤づくり、活動の継続と発展——深いところで関わり、ともに実践をつくっていきたい方向けのプランです。",
  },
];

const corporateTiers = [
  {
    price: "年12万円〜",
    label: "ベーシック・パートナー",
    items: [
      "サイト・SNSへのロゴ掲載",
      "月次レポート",
      "イベント招待（年4回）",
      "ニュースレター謝辞",
    ],
  },
  {
    price: "年36万円〜",
    label: "スタンダード・パートナー",
    items: [
      "ベーシックの内容すべて",
      "共同企画権 年1回（オープンマイク冠回 / ワークショップ等）",
      "法人主催イベントへの オープンマイクジャパン 出張優先枠",
    ],
  },
  {
    price: "年100万円〜",
    label: "プレミアム・パートナー",
    items: [
      "スタンダードの内容すべて",
      "共同企画権 複数回",
      "教育プログラム共催権",
      "5月「宴」または1周年での冠スポンサー権",
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
              「観に行く」「自分も出てみる」「会員として支える」「協賛として関わる」——どれも、同じくらい大切な参加のかたちです。あなたに合う関わり方を選んでください。
            </p>
          </div>
        </Container>
      </section>

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

      <section className="py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            1. 個人として関わる・支える
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">月額会員</h2>
          <p className="text-omj-sub mb-8">
            気持ちにあわせて、4つのプランから選べます。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {monthlyTiers.map((t) => (
              <div
                key={t.label}
                className={`rounded-lg border p-6 bg-white flex flex-col ${
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
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md bg-omj-base border border-omj-border p-5 text-sm text-omj-text">
            <p className="font-medium mb-1">入会方法（準備中）</p>
            <p className="text-omj-sub leading-relaxed">
              月額会員のオンライン申込は現在準備中です。先行してお申込みを希望される方は、
              <Link href="/contact" className="text-omj-primary underline">
                お問い合わせ
              </Link>
              または LINE 公式アカウントよりご連絡ください。
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mt-14 mb-3">
            単発寄付
          </h3>
          <p className="text-omj-sub leading-relaxed max-w-2xl">
            月額の継続が難しい場合、金額自由の単発寄付も受け付けます。決済導線は現在準備中のため、当面は{" "}
            <Link href="/contact" className="text-omj-primary underline">
              お問い合わせ
            </Link>{" "}
            よりご連絡ください。
          </p>
        </Container>
      </section>

      <section className="bg-white border-y border-omj-border py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            2. 法人として関わる・支える
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">法人協賛</h2>
          <p className="text-omj-sub mb-8 max-w-2xl">
            企業・団体さまの規模やご関心にあわせ、3つのコースをご用意しています。
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {corporateTiers.map((t) => (
              <div
                key={t.label}
                className="rounded-lg border border-omj-border p-6 bg-omj-base flex flex-col"
              >
                <p className="text-sm text-omj-sub">{t.label}</p>
                <p className="text-xl font-bold mt-1 text-omj-text">
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

          <p className="mt-8 text-sm text-omj-sub leading-relaxed max-w-2xl">
            それ以外の関わり方（単発協賛、現物協賛＝場所・機材・飲食・印刷物、業務委託としての関係など）も相談可能です。
            <Link href="/contact" className="text-omj-primary underline ml-1">
              お問い合わせ
            </Link>
            からご連絡ください。
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <p className="text-xs tracking-widest text-omj-primary font-medium mb-2">
            3. ご支援いただいている方々
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
    </>
  );
}

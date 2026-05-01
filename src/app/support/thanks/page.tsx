import Link from "next/link";
import { Container } from "@/components/Container";
import { getStripe, PLAN_LABEL, type CheckoutPlanKey } from "@/lib/stripe";

export const metadata = {
  title: "お申し込みありがとうございます",
};

// thank-you ページは session_id をクエリで受け取って表示するため動的。
export const dynamic = "force-dynamic";

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let planLabel: string | null = null;
  let amount: number | null = null;
  let mode: string | null = null;
  let email: string | null = null;

  const stripe = getStripe();
  if (stripe && session_id) {
    try {
      const s = await stripe.checkout.sessions.retrieve(session_id);
      mode = s.mode;
      amount = s.amount_total ?? null;
      email = s.customer_details?.email ?? null;
      const plan = s.metadata?.plan as CheckoutPlanKey | undefined;
      if (plan && plan in PLAN_LABEL) planLabel = PLAN_LABEL[plan];
    } catch {
      // 取得失敗は黙って汎用メッセージ
    }
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            Thank You
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-omj-text">
            お申し込みありがとうございます
          </h1>
          <p className="mt-6 text-omj-text leading-loose">
            決済が完了しました。Stripe より領収書メールをお送りしています。
          </p>

          {(planLabel || amount || email) && (
            <div className="mt-8 rounded-lg border border-omj-border bg-white p-5 md:p-6 text-sm text-omj-text">
              <p className="font-medium mb-2">お申し込み内容</p>
              <dl className="space-y-1.5">
                {planLabel && (
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-omj-sub">プラン</dt>
                    <dd>{planLabel}</dd>
                  </div>
                )}
                {amount !== null && (
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-omj-sub">金額</dt>
                    <dd className="tabular-nums">
                      {amount.toLocaleString()} 円
                      {mode === "subscription" && "（次回以降も自動課金）"}
                    </dd>
                  </div>
                )}
                {email && (
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-omj-sub">メール</dt>
                    <dd className="break-all">{email}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          <div className="mt-10 prose-omj text-omj-text text-sm">
            <p>
              今後の活動レポート・イベント情報は LINE 公式アカウントでも配信しています。よろしければ友だち追加してください。
            </p>
            <p>
              解約・カード変更・領収書ダウンロードは{" "}
              <Link href="/support" className="text-omj-primary underline">
                支援ページ
              </Link>
              の末尾にある「すでに会員 / サポーターの方」からポータルにアクセスできます。
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-omj-primary hover:bg-omj-primary-dark text-white font-medium text-sm transition-colors"
            >
              ホームへ戻る
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center px-5 py-2.5 rounded-md border border-omj-border hover:border-omj-primary text-omj-text font-medium text-sm transition-colors"
            >
              お知らせを見る
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

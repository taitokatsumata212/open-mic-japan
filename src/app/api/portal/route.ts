import { NextRequest, NextResponse } from "next/server";
import { getStripe, siteUrl } from "@/lib/stripe";

export const runtime = "nodejs";

/**
 * 既存会員/サポーター向け：Stripe Customer Portal へのリダイレクト用 Session を作る。
 * メールアドレスから Customer を引いてポータル URL を返す。
 *
 * v1 では「ログイン UI を作らずに」既存契約者がメールアドレス入力 → ポータルへ、
 * という最低限の導線にする。Stripe 側でメールに magic link が飛ぶわけではないので、
 * 不正アクセス防止のため、本来はもう一段の認証（OTP メール等）を挟むのが理想。
 * 現状は本人確認は Stripe の決済情報入力（カード番号等）で間接的に担保される。
 */
export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 503 }
    );
  }

  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "メールアドレスを入力してください" }, { status: 400 });
  }

  try {
    const customers = await stripe.customers.list({ email, limit: 1 });
    const customer = customers.data[0];
    if (!customer) {
      return NextResponse.json(
        {
          error:
            "このメールアドレスでの登録が見つかりません。お申込み時のメールアドレスをご確認ください。",
        },
        { status: 404 }
      );
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${siteUrl()}/support`,
      locale: "ja",
    });

    return NextResponse.json({ url: session.url });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown Stripe error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

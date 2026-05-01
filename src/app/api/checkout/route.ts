import { NextRequest, NextResponse } from "next/server";
import {
  getStripe,
  PLAN_PRICE_ENV,
  PLAN_LABEL,
  isQuantityAdjustable,
  siteUrl,
  type CheckoutPlanKey,
} from "@/lib/stripe";

export const runtime = "nodejs";

const VALID_PLANS: CheckoutPlanKey[] = [
  "member_full",
  "member_assoc_indiv",
  "member_assoc_org",
  "monthly_1k",
  "monthly_3k",
  "monthly_5k",
  "monthly_10k",
  "donation_onetime",
];

const DONATION_MIN = 500; // 円
const DONATION_MAX = 100_000; // 円

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured. STRIPE_SECRET_KEY が未設定です。準備中のため、お問い合わせフォームよりご連絡ください。",
      },
      { status: 503 }
    );
  }

  let body: { plan?: string; amount?: number; quantity?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const plan = body.plan as CheckoutPlanKey | undefined;
  if (!plan || !VALID_PLANS.includes(plan)) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const successUrl = `${siteUrl()}/support/thanks?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${siteUrl()}/support/cancel`;

  try {
    let session;

    if (plan === "donation_onetime") {
      // 単発寄付：price_data で動的金額
      const amount = Math.floor(Number(body.amount));
      if (
        !Number.isFinite(amount) ||
        amount < DONATION_MIN ||
        amount > DONATION_MAX
      ) {
        return NextResponse.json(
          {
            error: `寄付額は ${DONATION_MIN.toLocaleString()}円 〜 ${DONATION_MAX.toLocaleString()}円 の範囲で指定してください`,
          },
          { status: 400 }
        );
      }
      session = await stripe.checkout.sessions.create({
        mode: "payment",
        currency: "jpy",
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "jpy",
              product_data: {
                name: "オープンマイクジャパンへの単発寄付",
              },
              unit_amount: amount,
            },
          },
        ],
        submit_type: "donate",
        billing_address_collection: "required",
        locale: "ja",
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: { plan },
        payment_intent_data: {
          metadata: { plan },
        },
      });
    } else {
      // 会員・サポーター（subscription）
      const envName = PLAN_PRICE_ENV[plan];
      const priceId = process.env[envName];
      if (!priceId) {
        return NextResponse.json(
          {
            error: `${PLAN_LABEL[plan]} の価格 ID が未設定です（${envName}）。準備中のため、お問い合わせフォームよりご連絡ください。`,
          },
          { status: 503 }
        );
      }

      const adjustable = isQuantityAdjustable(plan);
      const requestedQty = Math.max(
        1,
        Math.min(Math.floor(Number(body.quantity) || 1), 999)
      );

      session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [
          {
            price: priceId,
            quantity: adjustable ? requestedQty : 1,
            ...(adjustable && {
              adjustable_quantity: {
                enabled: true,
                minimum: 1,
                maximum: 999,
              },
            }),
          },
        ],
        billing_address_collection: "required",
        locale: "ja",
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: { plan },
        subscription_data: {
          metadata: { plan },
        },
      });
    }

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe session created but URL missing" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown Stripe error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

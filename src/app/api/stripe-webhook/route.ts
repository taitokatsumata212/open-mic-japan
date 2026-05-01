import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
// 本ルートは Stripe からの Webhook を受ける。Cache されると困るので明示。
export const dynamic = "force-dynamic";

/**
 * Stripe Webhook 受信エンドポイント。
 *
 * v1 では「ログを出して 200 を返す」だけ。
 * 別 DB を持たない方針なので、状態は Stripe Dashboard が真。
 * 将来 DB 連携が必要になったらここを拡張する。
 */
export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET not configured" },
      { status: 503 }
    );
  }

  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  // 署名検証には raw body が必要
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, secret);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Invalid signature";
    return NextResponse.json({ error: `Webhook signature failed: ${msg}` }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const s = event.data.object as Stripe.Checkout.Session;
      console.log("[stripe] checkout.session.completed", {
        id: s.id,
        mode: s.mode,
        plan: s.metadata?.plan,
        amount_total: s.amount_total,
        customer: s.customer,
        customer_email: s.customer_details?.email,
      });
      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      console.log(`[stripe] ${event.type}`, {
        id: sub.id,
        status: sub.status,
        customer: sub.customer,
        plan: sub.metadata?.plan,
      });
      break;
    }
    case "invoice.payment_succeeded":
    case "invoice.payment_failed": {
      const inv = event.data.object as Stripe.Invoice;
      console.log(`[stripe] ${event.type}`, {
        id: inv.id,
        status: inv.status,
        amount_paid: inv.amount_paid,
        customer: inv.customer,
        customer_email: inv.customer_email,
      });
      break;
    }
    default:
      // それ以外は受信記録だけ
      console.log("[stripe] unhandled event", event.type);
  }

  return NextResponse.json({ received: true });
}

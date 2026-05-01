import Stripe from "stripe";

/**
 * Server-side Stripe client.
 *
 * 環境変数 STRIPE_SECRET_KEY がない場合は `null` を返す（ビルド時には
 * 落とさず、API ルート側で 503 を返す）。
 */
let cached: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (cached) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  cached = new Stripe(key, {
    // Stripe v22 はデフォルトで最新 API バージョンを使う。
    // 明示すると「アップグレード時は手動で上げる」運用にできる。
    apiVersion: "2026-04-22.dahlia",
    appInfo: {
      name: "open-mic-japan",
      url: "https://openmicjapan.com",
    },
  });
  return cached;
}

/**
 * 提供する商品体系の論理キー。フロントから API に渡される。
 *
 * 価格の実体（Stripe Price ID）は環境変数で設定する：
 * - STRIPE_PRICE_MEMBER_FULL          : 正会員 10,000円/年
 * - STRIPE_PRICE_MEMBER_ASSOC_INDIV   : 賛助会員（個人）5,000円/口/年
 * - STRIPE_PRICE_MEMBER_ASSOC_ORG     : 賛助会員（団体）5,000円/口/年
 * - STRIPE_PRICE_MONTHLY_1K           : 月額 1,000円
 * - STRIPE_PRICE_MONTHLY_3K           : 月額 3,000円
 * - STRIPE_PRICE_MONTHLY_5K           : 月額 5,000円
 * - STRIPE_PRICE_MONTHLY_10K          : 月額 10,000円
 *
 * 単発寄付は price_data で動的に作るので Price ID 不要。
 */
export type CheckoutPlanKey =
  | "member_full"
  | "member_assoc_indiv"
  | "member_assoc_org"
  | "monthly_1k"
  | "monthly_3k"
  | "monthly_5k"
  | "monthly_10k"
  | "donation_onetime";

export const PLAN_PRICE_ENV: Record<
  Exclude<CheckoutPlanKey, "donation_onetime">,
  string
> = {
  member_full: "STRIPE_PRICE_MEMBER_FULL",
  member_assoc_indiv: "STRIPE_PRICE_MEMBER_ASSOC_INDIV",
  member_assoc_org: "STRIPE_PRICE_MEMBER_ASSOC_ORG",
  monthly_1k: "STRIPE_PRICE_MONTHLY_1K",
  monthly_3k: "STRIPE_PRICE_MONTHLY_3K",
  monthly_5k: "STRIPE_PRICE_MONTHLY_5K",
  monthly_10k: "STRIPE_PRICE_MONTHLY_10K",
};

export const PLAN_LABEL: Record<CheckoutPlanKey, string> = {
  member_full: "正会員（個人・団体）",
  member_assoc_indiv: "賛助会員（個人）",
  member_assoc_org: "賛助会員（団体・法人）",
  monthly_1k: "見守るサポーター",
  monthly_3k: "支えるサポーター",
  monthly_5k: "ひらくサポーター",
  monthly_10k: "つくるサポーター",
  donation_onetime: "単発寄付",
};

/**
 * 賛助会員は「口数」を Checkout で調整可能にする。
 * 正会員は固定 1。月額サポーター・単発寄付も 1。
 */
export function isQuantityAdjustable(plan: CheckoutPlanKey): boolean {
  return plan === "member_assoc_indiv" || plan === "member_assoc_org";
}

export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

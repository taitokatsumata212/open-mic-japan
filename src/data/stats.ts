/**
 * 活動実績の数字の単一管理。
 *
 * 開催回数などはトップ・あゆみ・活動データに同じ数字が手書きで散っていて、
 * 更新が漏れると箇所ごとに違う数字が出る状態だった。ここだけを直せば
 * サイト全体の表記が揃う。
 *
 * 数字を増やしたら、その根拠（いつ時点の集計か）も asOf に書いておく。
 */

/** この数字が何時点のものか（YYYY-MM）。表記の鮮度を判断するために残す。 */
export const STATS_AS_OF = "2026-05";

/** SOY-POY での月例オープンマイクの開催回数（実施済み）。 */
export const OPEN_MIC_HELD = 53;

/** ワークショップの開催回数（実施済み）。 */
export const WORKSHOP_HELD = 24;

/** 開催地域の数と内訳。 */
export const REGIONS = ["東京", "神奈川", "山梨", "京都"] as const;

/** SOY-POY オープン日（2022年5月3日）。経過年数の計算に使う。 */
export const SOYPOY_OPEN_DATE = "2022-05-03";

/** "53回" のような表示用の文字列。 */
export const openMicHeldText = () => `${OPEN_MIC_HELD}回`;
export const workshopHeldText = () => `${WORKSHOP_HELD}回`;

/** "4" と "開催地域（東京・神奈川・山梨・京都）" を内訳から組む。 */
export const regionCountText = () => String(REGIONS.length);
export const regionLabel = () => `開催地域（${REGIONS.join("・")}）`;

/** SOY-POY との関係年数。"4年" のように返す（経過で自動的に増える）。 */
export function soypoyYearsText(): string {
  const [y, m, d] = SOYPOY_OPEN_DATE.split("-").map(Number);
  const now = new Date();
  const jst = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (t: string) => Number(jst.find((p) => p.type === t)?.value ?? 0);
  let years = part("year") - y;
  if (part("month") < m || (part("month") === m && part("day") < d)) years -= 1;
  return `${Math.max(years, 0)}年`;
}

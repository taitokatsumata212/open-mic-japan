/**
 * 開催予定の単一管理。
 *
 * 次回開催の日付は、以前トップのヒーロー・あゆみ・活動データに個別に
 * 書かれていて、更新が漏れると終了済みの日付が「次回」として残り続けた。
 * 日付を書く場所はこのファイルだけに集約し、開催日を過ぎた予定は自動で
 * 「次回」表記から外れるようにしている。
 *
 * 日付判定はレンダリング時に行うため、この表記を使うページには
 * `export const revalidate = 86400`（日次で再生成）を入れている。
 * 静的生成のままだとビルド時点の判定が焼き付いて自動失効が効かない。
 */

export type ScheduledEvent = {
  /** 開催日（JST, YYYY-MM-DD）。複数日開催なら初日 */
  date: string;
  /** 複数日開催の最終日。単日開催なら省略 */
  endDate?: string;
  /** ヒーローのバッジに出す短い日付表記 例: "6/20（土）" */
  shortLabel: string;
  /** 開催内容の一行表記 例: "19:30〜 SOY-POY オープンマイク" */
  summary: string;
  /** 詳細の掲載先（お知らせ記事など） */
  href: string;
};

/** 毎年5月の野外イベント「宴」（山梨県・平林）。 */
export const UTAGE: ScheduledEvent = {
  date: "2026-05-23",
  endDate: "2026-05-24",
  shortLabel: "5/23〜24",
  summary: "山梨県・平林 野外イベント「宴」",
  href: "/news/2026-05-utage",
};

/**
 * 下北沢 SOY-POY の月例オープンマイク。毎月第4土曜に開催。
 * 開催日は日付から計算するので、毎月の差し替えは要らない。
 * 開催曜日・時間が変わったときだけ、ここと fourthSaturday を直す。
 */
const OPEN_MIC_SUMMARY = "19:30〜 SOY-POY オープンマイク";
const OPEN_MIC_HREF = "/activities/community";

/** 指定月の第4土曜（YYYY-MM-DD）。月は 1〜12。 */
export function fourthSaturday(year: number, month: number): string {
  // 1日の曜日（0=日〜6=土）から最初の土曜を出し、3週足す
  const firstDow = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  const day = 1 + ((6 - firstDow + 7) % 7) + 21;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** JST の今日（YYYY-MM-DD）。文字列比較で日付を扱うため時差計算を挟まない。 */
export function todayInJst(): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

/** 開催最終日を過ぎていなければ true。開催当日は「これから」として扱う。 */
export function isUpcoming(event: ScheduledEvent): boolean {
  return (event.endDate ?? event.date) >= todayInJst();
}

/**
 * 「次回」として出していい開催。過ぎていれば null。
 * ヒーローの開催バッジはこれで出し分ける。
 */
export function getNextOpenMic(): ScheduledEvent | null {
  const today = todayInJst();
  const [y, m] = today.split("-").map(Number);
  let date = fourthSaturday(y, m);
  if (date < today) date = m === 12 ? fourthSaturday(y + 1, 1) : fourthSaturday(y, m + 1);
  const [, mm, dd] = date.split("-").map(Number);
  return {
    date,
    shortLabel: `${mm}/${dd}（土）`,
    summary: OPEN_MIC_SUMMARY,
    href: OPEN_MIC_HREF,
  };
}

/** "2026年5月23日〜24日" のような日本語表記を date/endDate から組む。 */
function formatJaRange(event: ScheduledEvent): string {
  const [y, m, d] = event.date.split("-").map(Number);
  if (!event.endDate) return `${y}年${m}月${d}日`;
  const [ey, em, ed] = event.endDate.split("-").map(Number);
  if (y === ey && m === em) return `${y}年${m}月${d}日〜${ed}日`;
  if (y === ey) return `${y}年${m}月${d}日〜${em}月${ed}日`;
  return `${y}年${m}月${d}日〜${ey}年${em}月${ed}日`;
}

/**
 * 「宴」の日程を文中に書くための句。開催前なら「次回は」、
 * 終わっていれば「直近の開催は」になる。末尾の句点は呼び出し側で付ける。
 */
export function utagePhrase(): string {
  const range = formatJaRange(UTAGE);
  return isUpcoming(UTAGE) ? `次回は ${range}` : `直近の開催は ${range}`;
}

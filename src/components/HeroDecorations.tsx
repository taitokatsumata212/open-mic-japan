/**
 * トップページのファーストビューに散らす装飾要素。
 * - 角に半分はみ出すマイク（うっすら）
 * - 音符・小さなドットを画面全体にまばらに配置
 * - すべて pointer-events-none、テキストの邪魔をしない
 */

const PRIMARY = "#C75A4D";
const ACCENT = "#2C3E5C";

type Note = {
  glyph: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  color: "primary" | "accent";
  opacity: number;
  rotate?: number;
  /** モバイルではテキストと被るので非表示にする */
  hideOnMobile?: boolean;
};

// 「声を、ひらく場をつくる。」h1 と本文に被らないよう、上端 0〜7% と
// 下端 82〜98% のみに音符を配置（中盤縦は完全に空ける）
// モバイルはセクション縦が縮むため、内側寄りの音符を非表示にして整理
const notes: Note[] = [
  // 上端（タイトルより十分上の余白部分）
  { glyph: "♪", top: "2%", left: "5%", size: "text-3xl md:text-5xl", color: "primary", opacity: 0.2 },
  { glyph: "♬", top: "1%", left: "22%", size: "text-2xl md:text-4xl", color: "accent", opacity: 0.18, rotate: -8 },
  { glyph: "♪", top: "5%", left: "42%", size: "text-xl md:text-3xl", color: "primary", opacity: 0.16, hideOnMobile: true },
  { glyph: "♫", top: "6%", right: "24%", size: "text-2xl md:text-4xl", color: "primary", opacity: 0.2, rotate: 6, hideOnMobile: true },
  { glyph: "♬", top: "3%", right: "8%", size: "text-3xl md:text-5xl", color: "accent", opacity: 0.22 },
  // 下端（ボタンより下）
  { glyph: "♫", top: "86%", left: "8%", size: "text-2xl md:text-4xl", color: "primary", opacity: 0.2, hideOnMobile: true },
  { glyph: "♪", top: "94%", left: "26%", size: "text-xl md:text-3xl", color: "accent", opacity: 0.18 },
  { glyph: "♬", top: "90%", left: "48%", size: "text-2xl md:text-4xl", color: "accent", opacity: 0.2, rotate: 8, hideOnMobile: true },
  { glyph: "♪", top: "84%", right: "30%", size: "text-2xl md:text-4xl", color: "primary", opacity: 0.18, rotate: -6, hideOnMobile: true },
  { glyph: "♫", top: "96%", right: "10%", size: "text-xl md:text-3xl", color: "primary", opacity: 0.2 },
];

type Dot = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: "primary" | "accent";
  opacity: number;
  hideOnMobile?: boolean;
};

// ドットも同様に上下のみ
const dots: Dot[] = [
  { top: "5%", left: "30%", size: 5, color: "primary", opacity: 0.35 },
  { top: "3%", right: "32%", size: 4, color: "accent", opacity: 0.3, hideOnMobile: true },
  { top: "94%", left: "22%", size: 5, color: "primary", opacity: 0.35, hideOnMobile: true },
  { top: "96%", left: "58%", size: 4, color: "accent", opacity: 0.35 },
  { top: "90%", right: "12%", size: 5, color: "primary", opacity: 0.4, hideOnMobile: true },
];

export function HeroDecorations() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {/* 右下：マイク本体が声の波紋の中心。土台は隠す */}
      <div className="absolute -right-2 -bottom-3 sm:-right-4 sm:-bottom-6 md:-right-6 md:-bottom-8 lg:-right-8 lg:-bottom-10 w-[280px] sm:w-[440px] md:w-[640px] lg:w-[820px] aspect-square pointer-events-none">
        {/* 声の波紋：コンテナ中央（=マイクヘッド）を中心に同心円で広がる */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          {/* 水面の波紋：4本の静的なリング。色は薄く、アニメ無し */}
          {(() => {
            const rings: Array<{
              r: number;
              dash: string;
              w: number;
              op: number;
            }> = [
              { r: 140, dash: "300 80 90 50", w: 1.6, op: 0.16 },
              { r: 260, dash: "440 120 180 70 280 80", w: 1.3, op: 0.12 },
              { r: 400, dash: "560 150 220 90 380 100 120 70", w: 1, op: 0.09 },
              {
                r: 560,
                dash: "700 180 280 110 480 130 180 90 320 70",
                w: 0.8,
                op: 0.06,
              },
            ];
            return rings.map((ring) => (
              <circle
                key={ring.r}
                cx="328"
                cy="262"
                r={ring.r}
                fill="none"
                stroke={PRIMARY}
                strokeWidth={ring.w}
                strokeLinecap="round"
                strokeDasharray={ring.dash}
                opacity={ring.op}
              />
            ));
          })()}
        </svg>

        {/* マイク：ヘッド中心が波紋中心 (コンテナ50%) に来るよう -translate-y で調整。
            さらに clip-path で下部の土台（円形ベース）を非表示に */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mic-icon.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[68%] opacity-95 drop-shadow-md"
          style={{
            transform: "translate(-50%, -28%) rotate(8deg)",
            clipPath: "inset(0 0 14% 0)",
          }}
        />
      </div>

      {/* スポットライトの薄い円 */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-omj-primary opacity-[0.05] blur-2xl" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-omj-accent opacity-[0.06] blur-3xl" />

      {/* 音符（ゆったり浮遊） */}
      {notes.map((n, i) => {
        const animClass = ["note-anim-a", "note-anim-b", "note-anim-c", "note-anim-d"][i % 4];
        const delay = `${(i % 5) * 0.6}s`;
        const visibility = n.hideOnMobile ? "hidden sm:block" : "";
        return (
          <span
            key={`n-${i}`}
            className={`absolute ${animClass} ${visibility}`}
            style={{
              top: n.top,
              left: n.left,
              right: n.right,
              opacity: n.opacity,
              animationDelay: delay,
            }}
          >
            <span
              className={`block font-serif ${n.size}`}
              style={{
                color: n.color === "primary" ? PRIMARY : ACCENT,
                transform: n.rotate ? `rotate(${n.rotate}deg)` : undefined,
              }}
            >
              {n.glyph}
            </span>
          </span>
        );
      })}

      {/* ドット（静的） */}
      {dots.map((d, i) => {
        const visibility = d.hideOnMobile ? "hidden sm:block" : "";
        return (
          <span
            key={`d-${i}`}
            className={`absolute rounded-full ${visibility}`}
            style={{
              top: d.top,
              left: d.left,
              right: d.right,
              width: d.size,
              height: d.size,
              backgroundColor: d.color === "primary" ? PRIMARY : ACCENT,
              opacity: d.opacity,
            }}
          />
        );
      })}
    </div>
  );
}

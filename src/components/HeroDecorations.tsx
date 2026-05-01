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
};

// 「声を、ひらく場をつくる。」h1 と本文に被らないよう、上端 0〜6% と
// 下端 85〜97% のみに音符を配置（中央〜中盤縦は完全に空ける）
const notes: Note[] = [
  // 上端（タイトルより十分上の余白部分）
  { glyph: "♪", top: "2%", left: "5%", size: "text-4xl md:text-5xl", color: "primary", opacity: 0.18 },
  { glyph: "♫", top: "4%", right: "8%", size: "text-3xl md:text-4xl", color: "accent", opacity: 0.22 },
  // 下端（ボタンより下）
  { glyph: "♬", top: "88%", left: "10%", size: "text-3xl md:text-4xl", color: "primary", opacity: 0.2 },
  { glyph: "♪", top: "92%", left: "38%", size: "text-3xl md:text-4xl", color: "accent", opacity: 0.18, rotate: 8 },
  { glyph: "♫", top: "86%", right: "32%", size: "text-3xl md:text-4xl", color: "primary", opacity: 0.18, rotate: -6 },
];

type Dot = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: "primary" | "accent";
  opacity: number;
};

// ドットも同様に上下のみ
const dots: Dot[] = [
  { top: "5%", left: "30%", size: 5, color: "primary", opacity: 0.35 },
  { top: "3%", right: "32%", size: 4, color: "accent", opacity: 0.3 },
  { top: "94%", left: "22%", size: 5, color: "primary", opacity: 0.35 },
  { top: "96%", left: "58%", size: 4, color: "accent", opacity: 0.35 },
  { top: "90%", right: "12%", size: 5, color: "primary", opacity: 0.4 },
];

export function HeroDecorations() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {/* 右下のマイク：マイク本体が声の波紋の中心になるよう配置 */}
      <div className="absolute right-0 bottom-0 md:-right-4 md:-bottom-4 lg:-right-6 lg:-bottom-6 w-[420px] md:w-[600px] lg:w-[760px] aspect-square pointer-events-none">
        {/* 声の波紋：中央（マイクの位置）から同心円に広がる */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          {/* 主要な5本の波紋（中心 = 600/2, 600/2 = 300, 300） */}
          {[110, 175, 245, 320, 400].map((r, i) => (
            <circle
              key={r}
              cx="300"
              cy="300"
              r={r}
              fill="none"
              stroke={PRIMARY}
              strokeWidth={2.4 - i * 0.25}
              opacity={0.58 - i * 0.08}
              strokeDasharray="6 9"
            />
          ))}
          {/* さらに遠くへ広がる薄い波紋 */}
          {[480, 565].map((r, i) => (
            <circle
              key={`outer-${r}`}
              cx="300"
              cy="300"
              r={r}
              fill="none"
              stroke={PRIMARY}
              strokeWidth="1"
              opacity={0.22 - i * 0.06}
              strokeDasharray="3 7"
            />
          ))}
        </svg>

        {/* マイク本体：波紋の中心に配置（コンテナ内中央寄せ・少し小さめ） */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mic-icon.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] opacity-95 rotate-[8deg] drop-shadow-md"
        />
      </div>

      {/* スポットライトの薄い円 */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-omj-primary opacity-[0.05] blur-2xl" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-omj-accent opacity-[0.06] blur-3xl" />

      {/* 音符 */}
      {notes.map((n, i) => (
        <span
          key={`n-${i}`}
          className={`absolute ${n.size} font-serif`}
          style={{
            top: n.top,
            left: n.left,
            right: n.right,
            color: n.color === "primary" ? PRIMARY : ACCENT,
            opacity: n.opacity,
            transform: n.rotate ? `rotate(${n.rotate}deg)` : undefined,
          }}
        >
          {n.glyph}
        </span>
      ))}

      {/* ドット */}
      {dots.map((d, i) => (
        <span
          key={`d-${i}`}
          className="absolute rounded-full"
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
      ))}
    </div>
  );
}

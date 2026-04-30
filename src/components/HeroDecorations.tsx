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

const notes: Note[] = [
  { glyph: "♪", top: "8%", left: "5%", size: "text-6xl md:text-7xl", color: "primary", opacity: 0.18 },
  { glyph: "♫", top: "16%", right: "12%", size: "text-4xl md:text-5xl", color: "accent", opacity: 0.22 },
  { glyph: "♬", top: "38%", left: "3%", size: "text-5xl md:text-6xl", color: "accent", opacity: 0.16, rotate: -8 },
  { glyph: "♪", top: "55%", right: "6%", size: "text-5xl md:text-6xl", color: "primary", opacity: 0.18, rotate: 6 },
  { glyph: "♫", top: "78%", left: "10%", size: "text-3xl md:text-4xl", color: "primary", opacity: 0.2 },
  { glyph: "♬", top: "70%", right: "22%", size: "text-4xl md:text-5xl", color: "accent", opacity: 0.16 },
  { glyph: "♪", top: "30%", left: "42%", size: "text-3xl md:text-4xl", color: "accent", opacity: 0.12, rotate: 10 },
];

type Dot = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: "primary" | "accent";
  opacity: number;
};

const dots: Dot[] = [
  { top: "12%", left: "30%", size: 6, color: "primary", opacity: 0.4 },
  { top: "22%", right: "28%", size: 4, color: "accent", opacity: 0.4 },
  { top: "45%", left: "18%", size: 5, color: "primary", opacity: 0.35 },
  { top: "62%", right: "40%", size: 7, color: "accent", opacity: 0.3 },
  { top: "82%", right: "10%", size: 5, color: "primary", opacity: 0.4 },
  { top: "92%", left: "40%", size: 4, color: "accent", opacity: 0.35 },
  { top: "5%", right: "40%", size: 4, color: "primary", opacity: 0.3 },
  { top: "50%", left: "50%", size: 3, color: "primary", opacity: 0.3 },
];

export function HeroDecorations() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {/* 右下のマイク：濃く・はっきり配置（マイクは1つだけ） */}
      {/* マイクから声が広がっていくイメージの同心円弧 */}
      <svg
        viewBox="0 0 600 600"
        className="absolute -right-32 -bottom-20 w-[440px] md:w-[600px] lg:w-[720px] pointer-events-none"
        aria-hidden="true"
      >
        {/* 声の波紋（マイクヘッド付近 = 右下基準で左上方向に拡散） */}
        {[80, 130, 185, 245, 310].map((r, i) => (
          <g key={r}>
            <circle
              cx="430"
              cy="170"
              r={r}
              fill="none"
              stroke={PRIMARY}
              strokeWidth={2 - i * 0.2}
              opacity={0.55 - i * 0.08}
              strokeDasharray="6 8"
            />
          </g>
        ))}
        {/* 細い薄い波紋（広がる先端） */}
        {[380, 450, 520].map((r, i) => (
          <circle
            key={`outer-${r}`}
            cx="430"
            cy="170"
            r={r}
            fill="none"
            stroke={PRIMARY}
            strokeWidth="1"
            opacity={0.18 - i * 0.04}
            strokeDasharray="3 6"
          />
        ))}
      </svg>

      {/* マイク本体（PNG、濃いめ） */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/mic-icon.png"
        alt=""
        className="absolute -right-8 -bottom-10 w-56 md:w-80 lg:w-96 opacity-90 rotate-[8deg] drop-shadow-md"
      />

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

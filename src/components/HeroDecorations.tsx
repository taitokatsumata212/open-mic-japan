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
      {/* 大きなマイク：右下から半分はみ出して */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/mic-icon.png"
        alt=""
        className="absolute -right-10 -bottom-12 w-48 md:w-72 lg:w-80 opacity-[0.18] rotate-[12deg]"
      />

      {/* 小さなマイク：左上 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/mic-icon.png"
        alt=""
        className="absolute left-4 top-16 w-12 md:w-16 opacity-[0.18] -rotate-[14deg]"
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

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

// 「声を、ひらく場をつくる。」h1 と本文に被らないよう、上端 0〜7% と
// 下端 82〜98% のみに音符を配置（中盤縦は完全に空ける）
const notes: Note[] = [
  // 上端（タイトルより十分上の余白部分）
  { glyph: "♪", top: "2%", left: "5%", size: "text-4xl md:text-5xl", color: "primary", opacity: 0.2 },
  { glyph: "♬", top: "1%", left: "22%", size: "text-3xl md:text-4xl", color: "accent", opacity: 0.18, rotate: -8 },
  { glyph: "♪", top: "5%", left: "42%", size: "text-2xl md:text-3xl", color: "primary", opacity: 0.16 },
  { glyph: "♫", top: "6%", right: "24%", size: "text-3xl md:text-4xl", color: "primary", opacity: 0.2, rotate: 6 },
  { glyph: "♬", top: "3%", right: "8%", size: "text-4xl md:text-5xl", color: "accent", opacity: 0.22 },
  // 下端（ボタンより下）
  { glyph: "♫", top: "86%", left: "8%", size: "text-3xl md:text-4xl", color: "primary", opacity: 0.2 },
  { glyph: "♪", top: "94%", left: "26%", size: "text-2xl md:text-3xl", color: "accent", opacity: 0.18 },
  { glyph: "♬", top: "90%", left: "48%", size: "text-3xl md:text-4xl", color: "accent", opacity: 0.2, rotate: 8 },
  { glyph: "♪", top: "84%", right: "30%", size: "text-3xl md:text-4xl", color: "primary", opacity: 0.18, rotate: -6 },
  { glyph: "♫", top: "96%", right: "10%", size: "text-2xl md:text-3xl", color: "primary", opacity: 0.2 },
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
      {/* 右下：マイク本体が声の波紋の中心。土台は隠す */}
      <div className="absolute -right-4 -bottom-6 md:-right-6 md:-bottom-8 lg:-right-8 lg:-bottom-10 w-[440px] md:w-[640px] lg:w-[820px] aspect-square pointer-events-none">
        {/* 声の波紋：コンテナ中央（=マイクヘッド）を中心に同心円で広がる */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          {/* 水面の波紋らしく：長めで不揃いの点線リング。内側ほど濃く */}
          {(() => {
            const innerDashes = [
              "60 22 35 18",
              "48 30 22 26",
              "70 24 38 32",
              "44 36 60 22",
              "55 26 28 40",
            ];
            return [110, 175, 245, 320, 400].map((r, i) => {
              const opMax = 0.3 - i * 0.04; // ピークでも控えめ
              const opMin = opMax * 0.25;
              return (
                <circle
                  key={r}
                  className="wave-anim"
                  cx="328"
                  cy="262"
                  r={r}
                  fill="none"
                  stroke={PRIMARY}
                  strokeWidth={1.8 - i * 0.15}
                  strokeLinecap="round"
                  strokeDasharray={innerDashes[i]}
                  style={
                    {
                      "--wave-op-max": opMax,
                      "--wave-op-min": opMin,
                      animationDelay: `${i * 0.9}s`,
                    } as React.CSSProperties
                  }
                />
              );
            });
          })()}
          {(() => {
            const outerDashes = ["80 36 50 28", "65 42 30 24"];
            return [480, 565].map((r, i) => {
              const opMax = 0.15 - i * 0.04;
              const opMin = opMax * 0.25;
              return (
                <circle
                  key={`outer-${r}`}
                  className="wave-anim"
                  cx="328"
                  cy="262"
                  r={r}
                  fill="none"
                  stroke={PRIMARY}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray={outerDashes[i]}
                  style={
                    {
                      "--wave-op-max": opMax,
                      "--wave-op-min": opMin,
                      animationDelay: `${4.5 + i * 0.9}s`,
                    } as React.CSSProperties
                  }
                />
              );
            });
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
        return (
          <span
            key={`n-${i}`}
            className={`absolute ${animClass}`}
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

      {/* ドット */}
      {dots.map((d, i) => (
        <span
          key={`d-${i}`}
          className="absolute rounded-full dot-anim"
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            width: d.size,
            height: d.size,
            backgroundColor: d.color === "primary" ? PRIMARY : ACCENT,
            opacity: d.opacity,
            animationDelay: `${(i % 4) * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}

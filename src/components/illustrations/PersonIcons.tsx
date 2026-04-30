/**
 * 参加者の声セクション用：4つの異なる人物アイコン。
 * unDraw 風のシンプルな SVG。
 */
const PRIMARY = "#C75A4D";
const ACCENT = "#2C3E5C";
const BASE = "#FAF8F5";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** 1. ようこそ — 手を振る人 */
export function PersonWaveIcon() {
  return (
    <Frame>
      <circle cx="60" cy="60" r="58" fill={PRIMARY} opacity="0.12" />
      {/* 体 */}
      <path
        d="M40 105 q20 -28 20 -45 q0 17 20 45 z"
        fill={ACCENT}
      />
      {/* 頭 */}
      <circle cx="60" cy="48" r="14" fill={PRIMARY} />
      {/* 手を振る腕 */}
      <line x1="74" y1="62" x2="92" y2="38" stroke={ACCENT} strokeWidth="5" strokeLinecap="round" />
      <circle cx="92" cy="38" r="5" fill={PRIMARY} />
      {/* キラ */}
      <circle cx="100" cy="28" r="2.5" fill={PRIMARY} />
      <circle cx="105" cy="42" r="2" fill={PRIMARY} opacity="0.6" />
    </Frame>
  );
}

/** 2. 一歩踏み出す — マイクに向かう人 */
export function PersonStepIcon() {
  return (
    <Frame>
      <circle cx="60" cy="60" r="58" fill={ACCENT} opacity="0.1" />
      {/* マイク */}
      <line x1="86" y1="62" x2="86" y2="98" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="86" cy="56" rx="6" ry="9" fill={PRIMARY} />
      {/* 体（少し前傾） */}
      <path
        d="M28 105 q18 -30 24 -42 q-2 18 18 42 z"
        fill={PRIMARY}
      />
      {/* 頭 */}
      <circle cx="50" cy="48" r="13" fill={ACCENT} />
      {/* 伸ばした腕 */}
      <line x1="62" y1="62" x2="80" y2="60" stroke={ACCENT} strokeWidth="5" strokeLinecap="round" />
    </Frame>
  );
}

/** 3. ちがう表現に出会う — 二人で語る */
export function PersonsTalkIcon() {
  return (
    <Frame>
      <circle cx="60" cy="60" r="58" fill={PRIMARY} opacity="0.1" />
      {/* 左の人 */}
      <g>
        <circle cx="38" cy="48" r="11" fill={PRIMARY} />
        <path d="M22 105 q14 -22 16 -32 q-2 12 16 32 z" fill={ACCENT} />
      </g>
      {/* 右の人 */}
      <g>
        <circle cx="82" cy="48" r="11" fill={ACCENT} />
        <path d="M66 105 q14 -22 16 -32 q-2 12 16 32 z" fill={PRIMARY} />
      </g>
      {/* 吹き出し（中央上） */}
      <g>
        <ellipse cx="60" cy="32" rx="14" ry="10" fill="white" stroke={ACCENT} strokeWidth="1.5" />
        <circle cx="54" cy="32" r="1.5" fill={ACCENT} />
        <circle cx="60" cy="32" r="1.5" fill={ACCENT} />
        <circle cx="66" cy="32" r="1.5" fill={ACCENT} />
      </g>
    </Frame>
  );
}

/** 4. 仲間と出会う — 3人の集まり */
export function PersonsGroupIcon() {
  return (
    <Frame>
      <circle cx="60" cy="60" r="58" fill={ACCENT} opacity="0.1" />
      {/* 後列の二人 */}
      <g>
        <circle cx="36" cy="46" r="10" fill={ACCENT} />
        <path d="M22 92 q12 -20 14 -28 q0 10 14 28 z" fill={PRIMARY} opacity="0.8" />
      </g>
      <g>
        <circle cx="84" cy="46" r="10" fill={PRIMARY} />
        <path d="M70 92 q12 -20 14 -28 q0 10 14 28 z" fill={ACCENT} opacity="0.85" />
      </g>
      {/* 前列の人（中央） */}
      <g>
        <circle cx="60" cy="56" r="13" fill={PRIMARY} />
        <path d="M40 110 q18 -28 20 -38 q2 10 20 38 z" fill={ACCENT} />
      </g>
    </Frame>
  );
}

const map = {
  wave: PersonWaveIcon,
  step: PersonStepIcon,
  talk: PersonsTalkIcon,
  group: PersonsGroupIcon,
} as const;

export function PersonIcon({ type }: { type: keyof typeof map }) {
  const Component = map[type];
  return <Component />;
}

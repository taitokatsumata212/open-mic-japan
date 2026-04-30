/**
 * /about「私たちが大事にする器の広さ」セクション用の小型アイコン4種。
 */
const PRIMARY = "#C75A4D";
const ACCENT = "#2C3E5C";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** ジャンル：4方向の小さなマーカー（多様性） */
export function GenreIcon() {
  return (
    <Frame>
      <circle cx="32" cy="32" r="26" fill={PRIMARY} opacity="0.12" />
      <circle cx="32" cy="14" r="5" fill={PRIMARY} />
      <rect x="48" y="28" width="8" height="8" rx="1.5" fill={ACCENT} />
      <polygon points="32,52 26,44 38,44" fill={PRIMARY} />
      <path d="M 8 32 q 4 -6 8 0 q -4 6 -8 0 z" fill={ACCENT} />
      <circle cx="32" cy="32" r="3" fill={ACCENT} />
    </Frame>
  );
}

/** 人々：3人の頭 */
export function PeopleIcon() {
  return (
    <Frame>
      <circle cx="32" cy="32" r="26" fill={ACCENT} opacity="0.1" />
      <circle cx="20" cy="26" r="8" fill={ACCENT} />
      <circle cx="32" cy="22" r="9" fill={PRIMARY} />
      <circle cx="44" cy="26" r="8" fill={ACCENT} />
      <path d="M 10 50 q 10 -10 22 -10 q 12 0 22 10 z" fill={PRIMARY} opacity="0.85" />
    </Frame>
  );
}

/** 火花：偶然の出会い */
export function SparkIcon() {
  return (
    <Frame>
      <circle cx="32" cy="32" r="26" fill={PRIMARY} opacity="0.12" />
      {/* 中心の星型 */}
      <path
        d="M 32 12 L 36 28 L 52 32 L 36 36 L 32 52 L 28 36 L 12 32 L 28 28 Z"
        fill={PRIMARY}
      />
      <circle cx="32" cy="32" r="5" fill="white" />
      <circle cx="32" cy="32" r="2.5" fill={ACCENT} />
    </Frame>
  );
}

/** 成長：芽 → 枝 */
export function GrowthIcon() {
  return (
    <Frame>
      <circle cx="32" cy="32" r="26" fill={ACCENT} opacity="0.1" />
      {/* 鉢 */}
      <path d="M 22 50 L 42 50 L 39 56 L 25 56 Z" fill={ACCENT} />
      {/* 茎 */}
      <line
        x1="32"
        y1="50"
        x2="32"
        y2="22"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* 葉 */}
      <ellipse
        cx="24"
        cy="32"
        rx="6"
        ry="4"
        fill={PRIMARY}
        transform="rotate(-30 24 32)"
      />
      <ellipse
        cx="40"
        cy="28"
        rx="7"
        ry="4.5"
        fill={PRIMARY}
        transform="rotate(35 40 28)"
      />
      <ellipse
        cx="32"
        cy="18"
        rx="5"
        ry="6"
        fill={PRIMARY}
      />
    </Frame>
  );
}

const map = {
  genre: GenreIcon,
  people: PeopleIcon,
  spark: SparkIcon,
  growth: GrowthIcon,
} as const;

export function SpaciousnessIcon({ type }: { type: keyof typeof map }) {
  const Component = map[type];
  return <Component />;
}

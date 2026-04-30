/**
 * Activity ページごとの飾りイラスト。
 * unDraw スタイルの素朴な SVG を omj-primary (#C75A4D) で描いています。
 * 後日、unDraw（https://undraw.co/）の SVG に差し替える場合は
 * このファイル内の各コンポーネントを書き換えてください。
 */

const PRIMARY = "#C75A4D";
const ACCENT = "#2C3E5C";
const BASE = "#FAF8F5";

function Frame({
  children,
  viewBox = "0 0 400 300",
}: {
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** コミュニティ：マイクを囲む人の輪 */
export function CommunityIllustration() {
  return (
    <Frame>
      {/* 床のライン */}
      <line x1="40" y1="240" x2="360" y2="240" stroke={ACCENT} strokeOpacity="0.15" strokeWidth="2" />

      {/* マイク（中央・PNGアイコン） */}
      <image
        href="/images/mic-icon.png"
        x="170"
        y="80"
        width="60"
        height="170"
        preserveAspectRatio="xMidYMax meet"
      />

      {/* 人の輪（4人 半円形に並ぶ） */}
      {[
        { cx: 90, cy: 175 },
        { cx: 145, cy: 145 },
        { cx: 255, cy: 145 },
        { cx: 310, cy: 175 },
      ].map((p, i) => (
        <g key={i}>
          {/* 体 */}
          <path
            d={`M${p.cx - 20} ${p.cy + 60} q20 -25 20 -45 q0 20 20 45 z`}
            fill={i % 2 === 0 ? PRIMARY : ACCENT}
            opacity={i % 2 === 0 ? 1 : 0.85}
          />
          {/* 頭 */}
          <circle cx={p.cx} cy={p.cy} r="14" fill={i % 2 === 0 ? ACCENT : PRIMARY} />
        </g>
      ))}

      {/* 装飾ドット */}
      <circle cx="60" cy="80" r="4" fill={PRIMARY} opacity="0.5" />
      <circle cx="350" cy="60" r="3" fill={ACCENT} opacity="0.4" />
    </Frame>
  );
}

/** イベント：ステージのスポットライトと旗 */
export function EventsIllustration() {
  return (
    <Frame>
      {/* 床 */}
      <line x1="40" y1="240" x2="360" y2="240" stroke={ACCENT} strokeOpacity="0.15" strokeWidth="2" />

      {/* スポットライト円錐 */}
      <polygon points="200,30 130,240 270,240" fill={PRIMARY} opacity="0.14" />

      {/* ステージ */}
      <rect x="110" y="225" width="180" height="18" rx="3" fill={ACCENT} />

      {/* マイク（中央・PNGアイコン） */}
      <image
        href="/images/mic-icon.png"
        x="170"
        y="65"
        width="60"
        height="170"
        preserveAspectRatio="xMidYMax meet"
      />

      {/* 旗（左右） */}
      <g>
        <line x1="70" y1="70" x2="70" y2="220" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
        <polygon points="70,70 120,85 70,100" fill={PRIMARY} />
      </g>
      <g>
        <line x1="330" y1="70" x2="330" y2="220" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
        <polygon points="330,70 280,85 330,100" fill={PRIMARY} opacity="0.7" />
      </g>

      {/* 装飾の音符 */}
      <text x="50" y="140" fontSize="24" fill={PRIMARY} opacity="0.7">♪</text>
      <text x="330" y="160" fontSize="22" fill={ACCENT} opacity="0.6">♫</text>
    </Frame>
  );
}

/** 教育：本＋電球 */
export function EducationIllustration() {
  return (
    <Frame>
      {/* 床 */}
      <line x1="40" y1="240" x2="360" y2="240" stroke={ACCENT} strokeOpacity="0.15" strokeWidth="2" />

      {/* 本（開いた状態） */}
      <g transform="translate(150, 170)">
        <path d="M0 0 L50 -10 L50 60 L0 70 Z" fill={ACCENT} />
        <path d="M50 -10 L100 0 L100 70 L50 60 Z" fill={PRIMARY} />
        <path d="M0 0 L50 -10 L50 60 L0 70 Z" fill="white" opacity="0.8" />
        <path d="M50 -10 L100 0 L100 70 L50 60 Z" fill="white" opacity="0.7" />
        {/* ページの線 */}
        <line x1="10" y1="15" x2="40" y2="9" stroke={ACCENT} strokeWidth="1.5" />
        <line x1="10" y1="25" x2="40" y2="19" stroke={ACCENT} strokeWidth="1.5" />
        <line x1="10" y1="35" x2="40" y2="29" stroke={ACCENT} strokeWidth="1.5" />
        <line x1="60" y1="9" x2="90" y2="15" stroke={PRIMARY} strokeWidth="1.5" />
        <line x1="60" y1="19" x2="90" y2="25" stroke={PRIMARY} strokeWidth="1.5" />
        <line x1="60" y1="29" x2="90" y2="35" stroke={PRIMARY} strokeWidth="1.5" />
      </g>

      {/* 電球（本の上） */}
      <g transform="translate(200, 90)">
        <ellipse cx="0" cy="0" rx="22" ry="26" fill={PRIMARY} opacity="0.18" />
        <path d="M-12 -8 q12 -22 24 0 q-2 14 -8 18 l-8 0 q-6 -4 -8 -18 z" fill={PRIMARY} />
        <rect x="-8" y="14" width="16" height="6" rx="2" fill={ACCENT} />
        <line x1="-6" y1="24" x2="6" y2="24" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* 光線 */}
      {[
        [180, 60, 165, 40],
        [220, 60, 235, 40],
        [200, 50, 200, 30],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={PRIMARY} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      ))}

      {/* 装飾 */}
      <circle cx="80" cy="200" r="5" fill={ACCENT} opacity="0.4" />
      <circle cx="320" cy="200" r="4" fill={PRIMARY} opacity="0.4" />
    </Frame>
  );
}

/** 地域：地図とピン */
export function RegionalIllustration() {
  return (
    <Frame>
      {/* 床 */}
      <line x1="40" y1="240" x2="360" y2="240" stroke={ACCENT} strokeOpacity="0.15" strokeWidth="2" />

      {/* 地図っぽい背景の四角形 */}
      <rect x="80" y="80" width="240" height="140" rx="8" fill={ACCENT} opacity="0.08" />

      {/* 道（曲線） */}
      <path
        d="M100 200 Q160 130 200 160 T300 100"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.4"
      />

      {/* ピン3つ：都市・地域・地域 */}
      {[
        { cx: 140, cy: 195, isCity: true },
        { cx: 210, cy: 155, isCity: false },
        { cx: 290, cy: 105, isCity: false },
      ].map((p, i) => (
        <g key={i}>
          <path
            d={`M${p.cx} ${p.cy - 28} q-12 0 -12 12 q0 14 12 24 q12 -10 12 -24 q0 -12 -12 -12 z`}
            fill={p.isCity ? PRIMARY : ACCENT}
          />
          <circle cx={p.cx} cy={p.cy - 18} r="4" fill="white" />
        </g>
      ))}

      {/* 装飾の点 */}
      <circle cx="60" cy="100" r="3" fill={PRIMARY} opacity="0.4" />
      <circle cx="340" cy="170" r="3" fill={ACCENT} opacity="0.4" />
    </Frame>
  );
}

const map = {
  community: CommunityIllustration,
  events: EventsIllustration,
  education: EducationIllustration,
  regional: RegionalIllustration,
} as const;

export function ActivityIllustration({
  type,
}: {
  type: keyof typeof map;
}) {
  const Component = map[type];
  return <Component />;
}

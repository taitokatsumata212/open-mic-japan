/**
 * Activity ページごとの飾りイラスト。
 * unDraw スタイルの素朴な SVG を omj-primary (#C75A4D) で描いています。
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
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** コミュニティ：人々の輪（マイクなし） */
export function CommunityIllustration() {
  // 6人を半円形に配置、中心は接続を示す柔らかい円
  // 体が viewBox（h=300）に収まるよう head と cy を調整
  const people = [
    { cx: 60, cy: 150, head: 16 },
    { cx: 130, cy: 100, head: 18 },
    { cx: 200, cy: 80, head: 20 },
    { cx: 270, cy: 100, head: 18 },
    { cx: 340, cy: 150, head: 16 },
    { cx: 200, cy: 175, head: 20 }, // 手前
  ];

  return (
    <Frame>
      {/* 中心の柔らかい円（つながりを表す） */}
      <circle cx="200" cy="140" r="100" fill={PRIMARY} opacity="0.08" />
      <circle cx="200" cy="140" r="60" fill={PRIMARY} opacity="0.1" />

      {/* 接続の線（円周の人々を繋ぐ） */}
      {people.map((p, i) => {
        const next = people[(i + 1) % people.length];
        return (
          <line
            key={`l-${i}`}
            x1={p.cx}
            y1={p.cy}
            x2={next.cx}
            y2={next.cy}
            stroke={ACCENT}
            strokeWidth="1.5"
            opacity="0.18"
            strokeDasharray="3 4"
          />
        );
      })}

      {/* 人々（頭と体） */}
      {people.map((p, i) => {
        const isAccent = i % 2 === 0;
        const bodyHeight = p.head * 3.3;
        return (
          <g key={`p-${i}`}>
            <path
              d={`M ${p.cx - p.head * 1.4} ${p.cy + bodyHeight} q ${p.head * 1.4} -${p.head * 2.2} ${p.head * 1.4} -${p.head * 3.2} q 0 ${p.head} ${p.head * 1.4} ${p.head * 3.2} z`}
              fill={isAccent ? ACCENT : PRIMARY}
              opacity={isAccent ? 0.92 : 1}
            />
            <circle
              cx={p.cx}
              cy={p.cy}
              r={p.head}
              fill={isAccent ? PRIMARY : ACCENT}
            />
          </g>
        );
      })}

      {/* 装飾ドット */}
      <circle cx="40" cy="60" r="4" fill={PRIMARY} opacity="0.5" />
      <circle cx="370" cy="50" r="3" fill={ACCENT} opacity="0.4" />
      <circle cx="200" cy="40" r="3" fill={PRIMARY} opacity="0.4" />
    </Frame>
  );
}

/** イベント：ステージ・スポットライト・大きなマイク（PNG）・旗 */
export function EventsIllustration() {
  return (
    <Frame>
      {/* スポットライト円錐（広め＆濃いめ） */}
      <polygon points="200,10 70,260 330,260" fill={PRIMARY} opacity="0.16" />
      <polygon points="200,10 110,260 290,260" fill={PRIMARY} opacity="0.13" />

      {/* ステージ */}
      <rect x="60" y="248" width="280" height="22" rx="3" fill={ACCENT} />
      <rect x="60" y="248" width="280" height="3" fill={BASE} opacity="0.18" />

      {/* マイク（中央・大きめに） */}
      <image
        href="/images/mic-icon.png"
        x="135"
        y="20"
        width="130"
        height="240"
        preserveAspectRatio="xMidYMax meet"
      />

      {/* 旗（左右） */}
      <g>
        <line x1="50" y1="50" x2="50" y2="240" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
        <polygon points="50,50 110,68 50,86" fill={PRIMARY} />
      </g>
      <g>
        <line x1="350" y1="50" x2="350" y2="240" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
        <polygon points="350,50 290,68 350,86" fill={PRIMARY} opacity="0.7" />
      </g>

      {/* 装飾の音符 */}
      <text x="30" y="140" fontSize="28" fill={PRIMARY} opacity="0.65">♪</text>
      <text x="350" y="160" fontSize="26" fill={ACCENT} opacity="0.6">♫</text>
      <text x="80" y="200" fontSize="22" fill={ACCENT} opacity="0.45">♬</text>
      <text x="320" y="210" fontSize="22" fill={PRIMARY} opacity="0.5">♪</text>
    </Frame>
  );
}

/** 教育：本＋電球 */
export function EducationIllustration() {
  return (
    <Frame>
      {/* 背景の柔らかい円 */}
      <circle cx="200" cy="170" r="130" fill={PRIMARY} opacity="0.08" />

      {/* 本（開いた状態・大きめ） */}
      <g transform="translate(115, 170)">
        <path d="M0 0 L70 -14 L70 80 L0 94 Z" fill={ACCENT} />
        <path d="M70 -14 L140 0 L140 94 L70 80 Z" fill={PRIMARY} />
        <path d="M0 0 L70 -14 L70 80 L0 94 Z" fill="white" opacity="0.88" />
        <path d="M70 -14 L140 0 L140 94 L70 80 Z" fill="white" opacity="0.78" />
        {/* ページの線 */}
        <line x1="14" y1="20" x2="56" y2="12" stroke={ACCENT} strokeWidth="2" />
        <line x1="14" y1="34" x2="56" y2="26" stroke={ACCENT} strokeWidth="2" />
        <line x1="14" y1="48" x2="56" y2="40" stroke={ACCENT} strokeWidth="2" />
        <line x1="14" y1="62" x2="56" y2="54" stroke={ACCENT} strokeWidth="2" />
        <line x1="84" y1="12" x2="126" y2="20" stroke={PRIMARY} strokeWidth="2" />
        <line x1="84" y1="26" x2="126" y2="34" stroke={PRIMARY} strokeWidth="2" />
        <line x1="84" y1="40" x2="126" y2="48" stroke={PRIMARY} strokeWidth="2" />
        <line x1="84" y1="54" x2="126" y2="62" stroke={PRIMARY} strokeWidth="2" />
      </g>

      {/* 電球（本の上） */}
      <g transform="translate(200, 80)">
        <ellipse cx="0" cy="0" rx="34" ry="40" fill={PRIMARY} opacity="0.18" />
        <path
          d="M -18 -12 q 18 -34 36 0 q -3 22 -12 28 l -12 0 q -9 -6 -12 -28 z"
          fill={PRIMARY}
        />
        <rect x="-12" y="22" width="24" height="9" rx="2" fill={ACCENT} />
        <rect x="-9" y="33" width="18" height="3" rx="1" fill={ACCENT} />
        <line x1="-9" y1="40" x2="9" y2="40" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* 光線 */}
      {[
        [172, 50, 152, 22],
        [228, 50, 248, 22],
        [200, 38, 200, 12],
        [185, 44, 175, 18],
        [215, 44, 225, 18],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={PRIMARY}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      ))}

      {/* 装飾 */}
      <circle cx="60" cy="220" r="5" fill={ACCENT} opacity="0.4" />
      <circle cx="340" cy="220" r="4" fill={PRIMARY} opacity="0.4" />
    </Frame>
  );
}

/** 地域：地図とピン */
export function RegionalIllustration() {
  return (
    <Frame>
      {/* 地図エリア（全面拡大） */}
      <rect x="40" y="40" width="320" height="220" rx="10" fill={ACCENT} opacity="0.08" />

      {/* 道（曲線） */}
      <path
        d="M 70 230 Q 150 130 220 170 T 340 80"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeDasharray="6 5"
        opacity="0.45"
      />

      {/* 等高線（雰囲気） */}
      <path
        d="M 60 100 Q 200 60 340 110"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1"
        opacity="0.18"
      />
      <path
        d="M 60 200 Q 200 230 340 200"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1"
        opacity="0.18"
      />

      {/* ピン4つ：東京・神奈川・山梨・京都 */}
      {[
        { cx: 105, cy: 215, isCity: true, label: "東京" },
        { cx: 175, cy: 175, isCity: false, label: "神奈川" },
        { cx: 245, cy: 130, isCity: false, label: "山梨" },
        { cx: 315, cy: 90, isCity: false, label: "京都" },
      ].map((p, i) => (
        <g key={i}>
          <path
            d={`M ${p.cx} ${p.cy - 36} q -16 0 -16 16 q 0 18 16 30 q 16 -12 16 -30 q 0 -16 -16 -16 z`}
            fill={p.isCity ? PRIMARY : ACCENT}
          />
          <circle cx={p.cx} cy={p.cy - 22} r="5" fill="white" />
        </g>
      ))}

      {/* 装飾の点 */}
      <circle cx="60" cy="60" r="3" fill={PRIMARY} opacity="0.4" />
      <circle cx="340" cy="240" r="3" fill={ACCENT} opacity="0.4" />
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

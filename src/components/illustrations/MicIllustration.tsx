/**
 * ヒーロー用：マイクのイラスト。
 */
const PRIMARY = "#C75A4D";
const ACCENT = "#2C3E5C";

export function MicIllustration() {
  return (
    <svg
      viewBox="0 0 400 480"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      {/* 背景の柔らかい円 */}
      <circle cx="200" cy="220" r="170" fill={PRIMARY} opacity="0.06" />
      <circle cx="200" cy="220" r="120" fill={PRIMARY} opacity="0.08" />

      {/* スタンドの土台 */}
      <ellipse cx="200" cy="448" rx="80" ry="10" fill={ACCENT} opacity="0.15" />
      <rect x="170" y="430" width="60" height="14" rx="3" fill={ACCENT} />

      {/* スタンドの棒 */}
      <line
        x1="200"
        y1="280"
        x2="200"
        y2="430"
        stroke={ACCENT}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* マイクヘッド本体（楕円） */}
      <g>
        {/* 影 */}
        <ellipse cx="205" cy="158" rx="68" ry="100" fill={ACCENT} opacity="0.15" />
        {/* メインのヘッド */}
        <ellipse cx="200" cy="155" rx="68" ry="100" fill={PRIMARY} />
        {/* メッシュのハイライト（縦線） */}
        {[-50, -30, -10, 10, 30, 50].map((dx, i) => (
          <line
            key={i}
            x1={200 + dx}
            y1="80"
            x2={200 + dx}
            y2="230"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.18"
          />
        ))}
        {/* メッシュのハイライト（横線） */}
        {[100, 120, 140, 160, 180, 200, 220].map((y, i) => (
          <line
            key={i}
            x1="140"
            y1={y}
            x2="260"
            y2={y}
            stroke="white"
            strokeWidth="1.5"
            opacity="0.18"
          />
        ))}
        {/* ハイライト */}
        <ellipse cx="172" cy="125" rx="14" ry="32" fill="white" opacity="0.3" />
      </g>

      {/* マイクと棒のジョイント */}
      <rect x="186" y="252" width="28" height="34" rx="4" fill={ACCENT} />
      <rect x="180" y="262" width="40" height="6" rx="2" fill={PRIMARY} />

      {/* 音符（飛んでいる） */}
      <g fill={ACCENT} opacity="0.7">
        <text x="60" y="120" fontSize="38" fontFamily="serif">♪</text>
        <text x="320" y="160" fontSize="32" fontFamily="serif">♫</text>
        <text x="80" y="280" fontSize="28" fontFamily="serif">♬</text>
      </g>
      <g fill={PRIMARY} opacity="0.5">
        <text x="310" y="280" fontSize="26" fontFamily="serif">♪</text>
        <text x="40" y="200" fontSize="22" fontFamily="serif">♫</text>
      </g>

      {/* 装飾の小さな粒 */}
      <circle cx="65" cy="60" r="4" fill={PRIMARY} opacity="0.4" />
      <circle cx="335" cy="80" r="5" fill={ACCENT} opacity="0.3" />
      <circle cx="350" cy="350" r="4" fill={PRIMARY} opacity="0.4" />
      <circle cx="50" cy="370" r="3" fill={ACCENT} opacity="0.4" />
    </svg>
  );
}

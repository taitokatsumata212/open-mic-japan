/**
 * ヒーロー用：レトロなボーカルマイク（昔ながらの放送マイク／ステージマイク風）。
 */
const PRIMARY = "#C75A4D";
const PRIMARY_DARK = "#A8463B";
const ACCENT = "#2C3E5C";
const ACCENT_DARK = "#1F2C42";

export function MicIllustration() {
  return (
    <svg
      viewBox="0 0 400 520"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      <defs>
        {/* グリル（メッシュ）のグラデ */}
        <linearGradient id="micGrille" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={PRIMARY} />
          <stop offset="60%" stopColor={PRIMARY_DARK} />
          <stop offset="100%" stopColor="#7E332C" />
        </linearGradient>
        {/* ボディのグラデ */}
        <linearGradient id="micBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={ACCENT_DARK} />
          <stop offset="50%" stopColor={ACCENT} />
          <stop offset="100%" stopColor={ACCENT_DARK} />
        </linearGradient>
        {/* メッシュのドットパターン */}
        <pattern id="meshDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="white" opacity="0.22" />
          <circle cx="7" cy="7" r="1.4" fill="white" opacity="0.22" />
        </pattern>
      </defs>

      {/* 背景の柔らかい円 */}
      <circle cx="200" cy="240" r="190" fill={PRIMARY} opacity="0.06" />
      <circle cx="200" cy="240" r="135" fill={PRIMARY} opacity="0.07" />

      {/* ===== マイクヘッド（球状グリル） ===== */}
      <g>
        {/* 影 */}
        <ellipse cx="206" cy="178" rx="92" ry="98" fill={ACCENT} opacity="0.18" />

        {/* メインの球グリル */}
        <ellipse cx="200" cy="170" rx="92" ry="98" fill="url(#micGrille)" />
        {/* メッシュのドット */}
        <ellipse cx="200" cy="170" rx="92" ry="98" fill="url(#meshDots)" />

        {/* ヘッドの上にあるリング（リム） */}
        <ellipse cx="200" cy="76" rx="92" ry="14" fill={ACCENT} />
        <ellipse cx="200" cy="74" rx="86" ry="9" fill={ACCENT_DARK} />

        {/* メッシュの縦カーブライン */}
        <path d="M 110 170 Q 200 150 290 170" stroke="white" strokeWidth="1.5" opacity="0.25" fill="none" />
        <path d="M 115 200 Q 200 180 285 200" stroke="white" strokeWidth="1.5" opacity="0.22" fill="none" />
        <path d="M 122 230 Q 200 210 278 230" stroke="white" strokeWidth="1.5" opacity="0.18" fill="none" />
        <path d="M 130 250 Q 200 234 270 250" stroke="white" strokeWidth="1.5" opacity="0.14" fill="none" />

        {/* 白いハイライト（ガラス感） */}
        <ellipse cx="170" cy="138" rx="22" ry="42" fill="white" opacity="0.32" />
        <ellipse cx="158" cy="120" rx="6" ry="14" fill="white" opacity="0.5" />
      </g>

      {/* ===== ヘッドとボディのジョイント（リング3段） ===== */}
      <g>
        <rect x="160" y="262" width="80" height="14" rx="3" fill={ACCENT} />
        <rect x="160" y="262" width="80" height="3" fill="white" opacity="0.2" />
        <rect x="166" y="278" width="68" height="10" rx="2" fill={ACCENT_DARK} />
        <rect x="170" y="290" width="60" height="6" rx="2" fill={ACCENT} />
      </g>

      {/* ===== ボディ（ハンドル） ===== */}
      <g>
        <rect x="174" y="296" width="52" height="160" rx="8" fill="url(#micBody)" />
        {/* スイッチ */}
        <rect x="186" y="328" width="28" height="12" rx="2" fill={PRIMARY} />
        <circle cx="200" cy="334" r="3" fill="white" opacity="0.8" />
        {/* ハンドル下部のテクスチャ（縦線） */}
        {[182, 190, 198, 206, 214, 222].map((x, i) => (
          <line key={i} x1={x} y1="370" x2={x} y2="450" stroke="white" strokeWidth="1" opacity="0.13" />
        ))}
        {/* ハンドルのハイライト */}
        <rect x="178" y="296" width="6" height="160" rx="3" fill="white" opacity="0.2" />
      </g>

      {/* ===== ボトムキャップ ===== */}
      <g>
        <rect x="172" y="450" width="56" height="14" rx="4" fill={ACCENT_DARK} />
        <rect x="180" y="462" width="40" height="10" rx="3" fill={ACCENT} />
      </g>

      {/* ===== ケーブル ===== */}
      <path
        d="M 200 472 Q 195 490 220 500 Q 250 510 270 495"
        stroke={ACCENT_DARK}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 200 472 Q 195 490 220 500 Q 250 510 270 495"
        stroke={ACCENT}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* ===== 音符 ===== */}
      <g fill={ACCENT} opacity="0.7">
        <text x="50" y="120" fontSize="40" fontFamily="serif">♪</text>
        <text x="320" y="160" fontSize="34" fontFamily="serif">♫</text>
      </g>
      <g fill={PRIMARY} opacity="0.55">
        <text x="70" y="270" fontSize="28" fontFamily="serif">♬</text>
        <text x="312" y="290" fontSize="26" fontFamily="serif">♪</text>
      </g>

      {/* 装飾の小さな粒 */}
      <circle cx="60" cy="60" r="4" fill={PRIMARY} opacity="0.5" />
      <circle cx="345" cy="80" r="5" fill={ACCENT} opacity="0.35" />
      <circle cx="355" cy="380" r="4" fill={PRIMARY} opacity="0.4" />
      <circle cx="40" cy="380" r="3" fill={ACCENT} opacity="0.4" />
    </svg>
  );
}

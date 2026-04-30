/**
 * ヒーロー用：人が輝くステージ。
 * - スポットライトの円錐
 * - ステージのカーテン（左右）と床
 * - レトロなボーカルマイク（スタンド付き）
 * - マイクの後ろに立つ人物のシルエット（後ろ姿）
 */
const PRIMARY = "#C75A4D";
const PRIMARY_DARK = "#A8463B";
const ACCENT = "#2C3E5C";
const ACCENT_DARK = "#1F2C42";

export function MicIllustration() {
  return (
    <svg
      viewBox="0 0 400 560"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-hidden="true"
    >
      {/* ===== 背景の柔らかい光 ===== */}
      <circle cx="200" cy="240" r="220" fill={PRIMARY} opacity="0.06" />

      {/* ===== ステージのカーテン（左右） ===== */}
      <g>
        {/* 左カーテン */}
        <path
          d="M 0 0 L 95 0 L 95 80 Q 86 110 95 140 Q 86 170 95 200 Q 86 230 95 260 L 75 290 Q 55 305 30 285 L 0 285 Z"
          fill={PRIMARY_DARK}
        />
        {/* 左カーテンの折り目 */}
        <path d="M 22 0 L 18 285" stroke={ACCENT_DARK} strokeWidth="1" opacity="0.45" />
        <path d="M 50 0 L 46 285" stroke={ACCENT_DARK} strokeWidth="1" opacity="0.45" />
        <path d="M 75 0 L 72 285" stroke={ACCENT_DARK} strokeWidth="1" opacity="0.45" />
        {/* ハイライト */}
        <path d="M 35 0 L 33 280" stroke={PRIMARY} strokeWidth="2" opacity="0.7" />
        <path d="M 62 0 L 60 280" stroke={PRIMARY} strokeWidth="2" opacity="0.6" />

        {/* 右カーテン */}
        <path
          d="M 400 0 L 305 0 L 305 80 Q 314 110 305 140 Q 314 170 305 200 Q 314 230 305 260 L 325 290 Q 345 305 370 285 L 400 285 Z"
          fill={PRIMARY_DARK}
        />
        <path d="M 378 0 L 382 285" stroke={ACCENT_DARK} strokeWidth="1" opacity="0.45" />
        <path d="M 350 0 L 354 285" stroke={ACCENT_DARK} strokeWidth="1" opacity="0.45" />
        <path d="M 325 0 L 328 285" stroke={ACCENT_DARK} strokeWidth="1" opacity="0.45" />
        <path d="M 365 0 L 367 280" stroke={PRIMARY} strokeWidth="2" opacity="0.7" />
        <path d="M 338 0 L 340 280" stroke={PRIMARY} strokeWidth="2" opacity="0.6" />

        {/* カーテンレール */}
        <rect x="0" y="0" width="400" height="14" fill={ACCENT_DARK} />
        <rect x="0" y="14" width="400" height="3" fill={ACCENT} />
      </g>

      {/* ===== スポットライトの円錐 ===== */}
      <polygon points="200,18 70,460 330,460" fill={PRIMARY} opacity="0.18" />
      <polygon points="200,18 110,460 290,460" fill={PRIMARY} opacity="0.14" />
      <polygon points="200,18 145,460 255,460" fill="white" opacity="0.32" />

      {/* ===== ステージ床 ===== */}
      <g>
        <rect x="0" y="460" width="400" height="60" fill={ACCENT} />
        <rect x="0" y="460" width="400" height="4" fill={ACCENT_DARK} />
        {/* 床の板目（うっすら） */}
        {[120, 200, 280].map((x) => (
          <line
            key={x}
            x1={x}
            y1="460"
            x2={x - 30}
            y2="520"
            stroke={ACCENT_DARK}
            strokeWidth="1.5"
            opacity="0.55"
          />
        ))}
      </g>

      {/* ===== 後ろ姿の人物シルエット ===== */}
      {/* 人物は中央やや右寄り、マイクが左寄りに見えるように配置 */}
      <g transform="translate(225, 0)">
        {/* 体（肩〜胴） */}
        <path
          d="
            M 0 240
            C -32 244, -54 264, -58 290
            C -62 320, -58 360, -50 410
            C -44 440, -38 460, -32 460
            L 32 460
            C 38 460, 44 440, 50 410
            C 58 360, 62 320, 58 290
            C 54 264, 32 244, 0 240
            Z
          "
          fill={ACCENT_DARK}
        />
        {/* うなじ・襟元 */}
        <path
          d="M -22 240 Q 0 232, 22 240 L 22 226 Q 0 218, -22 226 Z"
          fill={ACCENT_DARK}
        />
        {/* 頭 */}
        <ellipse cx="0" cy="206" rx="32" ry="36" fill={ACCENT_DARK} />
        {/* 髪のトップ */}
        <path
          d="M -30 200 Q 0 178, 30 200 Q 30 184, 0 174 Q -30 184, -30 200 Z"
          fill={ACCENT_DARK}
        />
        {/* 肩のハイライト（光が当たっている感じ） */}
        <path
          d="M -52 282 Q 0 270, 52 282"
          stroke={PRIMARY}
          strokeWidth="2.5"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M -10 196 Q 0 188, 10 196"
          stroke={PRIMARY}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </g>

      {/* ===== マイク（人物の左前方、スタンドで床に立つ） ===== */}
      <g transform="translate(165, 0)">
        {/* 影 */}
        <ellipse cx="0" cy="458" rx="28" ry="5" fill={ACCENT_DARK} opacity="0.55" />

        {/* スタンドの土台 */}
        <rect x="-22" y="448" width="44" height="12" rx="2" fill={ACCENT_DARK} />
        <rect x="-15" y="442" width="30" height="8" rx="2" fill={ACCENT} />

        {/* スタンドの棒 */}
        <line
          x1="0"
          y1="280"
          x2="0"
          y2="442"
          stroke={ACCENT_DARK}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="-2"
          y1="288"
          x2="-2"
          y2="438"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.22"
        />

        {/* マイクのヨーク */}
        <path
          d="M -18 282 C -22 268, -18 254, -10 252 L -12 244 C -22 244, -28 256, -28 270 C -28 280, -24 286, -18 290 Z"
          fill={ACCENT_DARK}
        />
        <path
          d="M 18 282 C 22 268, 18 254, 10 252 L 12 244 C 22 244, 28 256, 28 270 C 28 280, 24 286, 18 290 Z"
          fill={ACCENT_DARK}
        />

        {/* マイクヘッド外枠 */}
        <path
          d="
            M 0 138
            C -22 142, -38 156, -44 172
            C -48 188, -48 208, -46 226
            L -46 244
            C -46 254, -38 260, -28 260
            L 28 260
            C 38 260, 46 254, 46 244
            L 46 226
            C 48 208, 48 188, 44 172
            C 38 156, 22 142, 0 138
            Z
          "
          fill={ACCENT_DARK}
        />

        {/* グリル（赤いボディ） */}
        <path
          d="
            M 0 146
            C -16 150, -28 162, -32 176
            C -35 188, -34 204, -32 220
            L -32 240
            C -32 248, -26 252, -18 252
            L 18 252
            C 26 252, 32 248, 32 240
            L 32 220
            C 34 204, 35 188, 32 176
            C 28 162, 16 150, 0 146
            Z
          "
          fill={PRIMARY}
        />

        {/* 横スリット */}
        <g stroke={ACCENT_DARK} strokeWidth="3" strokeLinecap="round">
          <line x1="-22" y1="160" x2="22" y2="160" />
          <line x1="-28" y1="172" x2="28" y2="172" />
          <line x1="-30" y1="184" x2="30" y2="184" />
          <line x1="-31" y1="196" x2="31" y2="196" />
          <line x1="-32" y1="208" x2="32" y2="208" />
          <line x1="-32" y1="220" x2="32" y2="220" />
          <line x1="-32" y1="232" x2="32" y2="232" />
          <line x1="-30" y1="244" x2="30" y2="244" />
        </g>

        {/* 縦のメタルバー */}
        <rect x="-39" y="160" width="6" height="98" rx="2" fill={ACCENT_DARK} />
        <rect x="33" y="160" width="6" height="98" rx="2" fill={ACCENT_DARK} />

        {/* 頂点の小さな突起 */}
        <rect x="-4" y="128" width="8" height="14" rx="1.5" fill={ACCENT_DARK} />

        {/* ハイライト */}
        <path
          d="M -16 158 Q -22 184, -20 220 Q -16 248, -8 252"
          stroke="white"
          strokeWidth="2.5"
          opacity="0.3"
          fill="none"
          strokeLinecap="round"
        />

        {/* ピボット */}
        <circle cx="-12" cy="276" r="4" fill={PRIMARY} stroke={ACCENT_DARK} strokeWidth="1.2" />
        <circle cx="12" cy="276" r="4" fill={PRIMARY} stroke={ACCENT_DARK} strokeWidth="1.2" />
      </g>

      {/* ===== 音符 ===== */}
      <g fill={PRIMARY} opacity="0.7">
        <text x="48" y="180" fontSize="32" fontFamily="serif">♪</text>
        <text x="332" y="200" fontSize="28" fontFamily="serif">♫</text>
      </g>
      <g fill="white" opacity="0.55">
        <text x="100" y="100" fontSize="22" fontFamily="serif">♬</text>
        <text x="290" y="120" fontSize="20" fontFamily="serif">♪</text>
      </g>
    </svg>
  );
}

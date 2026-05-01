/**
 * 参加者の声セクション用：SNS プロフィール風の抽象人物アイコン。
 * 円形のフレームに収まる、抽象的な顔のシルエット。
 */
const PRIMARY = "#C75A4D";
const ACCENT = "#2C3E5C";
const SOFT = "#FAF8F5";

function Frame({
  bg,
  children,
}: {
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto rounded-full"
      role="img"
      aria-hidden="true"
    >
      {/* 円形フレーム（プロフィール画像のような） */}
      <circle cx="60" cy="60" r="60" fill={bg} />
      {/* 中身 */}
      {children}
      {/* 外周のリング */}
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}

/** 1. やわらかい笑顔（あたたかい場の空気） */
export function PersonWaveIcon() {
  return (
    <Frame bg={PRIMARY}>
      {/* 体（肩） */}
      <path
        d="M 18 120 Q 30 88, 60 88 Q 90 88, 102 120 Z"
        fill={SOFT}
        opacity="0.9"
      />
      {/* 頭 */}
      <circle cx="60" cy="56" r="26" fill={SOFT} />
      {/* 髪のシルエット */}
      <path
        d="M 36 50 Q 36 32, 60 30 Q 84 32, 84 52 Q 80 42, 60 42 Q 40 42, 36 52 Z"
        fill={ACCENT}
      />
      {/* 目（点） */}
      <circle cx="51" cy="58" r="2.2" fill={ACCENT} />
      <circle cx="69" cy="58" r="2.2" fill={ACCENT} />
      {/* やわらかい笑み */}
      <path
        d="M 52 67 Q 60 73, 68 67"
        stroke={ACCENT}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </Frame>
  );
}

/** 2. 一歩踏み出す（声を出す側） */
export function PersonStepIcon() {
  return (
    <Frame bg={ACCENT}>
      {/* 体 */}
      <path
        d="M 18 120 Q 30 88, 60 88 Q 90 88, 102 120 Z"
        fill={PRIMARY}
        opacity="0.9"
      />
      {/* 頭 */}
      <circle cx="60" cy="56" r="26" fill={SOFT} />
      {/* 短めの髪 */}
      <path
        d="M 38 48 Q 42 30, 60 30 Q 78 30, 82 48 Q 76 40, 60 40 Q 44 40, 38 48 Z"
        fill={PRIMARY}
      />
      {/* 目（少し上向き） */}
      <path d="M 49 56 L 53 56" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 67 56 L 71 56" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
      {/* 開いた口（声を出している） */}
      <ellipse cx="60" cy="68" rx="3" ry="4" fill={ACCENT} />
      {/* マイクの示唆（小さなドット） */}
      <circle cx="92" cy="60" r="3" fill={PRIMARY} />
      <circle cx="92" cy="60" r="6" fill="none" stroke={PRIMARY} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 2" />
    </Frame>
  );
}

/** 3. 出会い（ちがう表現に出会える） */
export function PersonsTalkIcon() {
  return (
    <Frame bg={PRIMARY}>
      {/* 二人の頭が並ぶ */}
      {/* 左の人 */}
      <g>
        <path
          d="M 4 120 Q 12 92, 36 92 Q 56 92, 64 120 Z"
          fill={SOFT}
          opacity="0.85"
        />
        <circle cx="36" cy="58" r="20" fill={SOFT} />
        <path
          d="M 18 54 Q 18 38, 36 36 Q 54 38, 54 56 Q 50 46, 36 46 Q 22 46, 18 54 Z"
          fill={ACCENT}
        />
        <circle cx="30" cy="59" r="1.8" fill={ACCENT} />
        <circle cx="42" cy="59" r="1.8" fill={ACCENT} />
        <path
          d="M 30 67 Q 36 71, 42 67"
          stroke={ACCENT}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* 右の人 */}
      <g>
        <path
          d="M 56 120 Q 64 92, 88 92 Q 108 92, 116 120 Z"
          fill={ACCENT}
          opacity="0.9"
        />
        <circle cx="88" cy="58" r="20" fill={SOFT} />
        <path
          d="M 70 56 Q 72 38, 88 36 Q 104 38, 106 54 Q 100 46, 88 46 Q 76 46, 70 56 Z"
          fill={PRIMARY}
        />
        <circle cx="82" cy="59" r="1.8" fill={ACCENT} />
        <circle cx="94" cy="59" r="1.8" fill={ACCENT} />
        <path
          d="M 82 67 Q 88 71, 94 67"
          stroke={ACCENT}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </Frame>
  );
}

/** 4. 仲間と出会う（コミュニティ） */
export function PersonsGroupIcon() {
  return (
    <Frame bg={ACCENT}>
      {/* 後列：左右の人（少し小さく） */}
      {/* 左奥 */}
      <g>
        <circle cx="26" cy="50" r="14" fill={SOFT} />
        <path d="M 14 48 Q 14 36, 26 34 Q 38 36, 38 50 Q 34 42, 26 42 Q 18 42, 14 48 Z" fill={PRIMARY} />
        <circle cx="22" cy="51" r="1.5" fill={ACCENT} />
        <circle cx="30" cy="51" r="1.5" fill={ACCENT} />
        <path d="M 6 100 Q 12 78, 26 78 Q 38 78, 42 90 L 40 100 Z" fill={SOFT} opacity="0.65" />
      </g>
      {/* 右奥 */}
      <g>
        <circle cx="94" cy="50" r="14" fill={SOFT} />
        <path d="M 82 48 Q 82 36, 94 34 Q 106 36, 106 50 Q 102 42, 94 42 Q 86 42, 82 48 Z" fill={PRIMARY} />
        <circle cx="90" cy="51" r="1.5" fill={ACCENT} />
        <circle cx="98" cy="51" r="1.5" fill={ACCENT} />
        <path d="M 78 90 Q 82 78, 94 78 Q 108 78, 114 100 L 80 100 Z" fill={SOFT} opacity="0.65" />
      </g>
      {/* 前列：中央の人 */}
      <g>
        <path
          d="M 26 120 Q 36 92, 60 92 Q 84 92, 94 120 Z"
          fill={PRIMARY}
        />
        <circle cx="60" cy="62" r="20" fill={SOFT} />
        <path
          d="M 42 58 Q 42 42, 60 40 Q 78 42, 78 60 Q 74 50, 60 50 Q 46 50, 42 58 Z"
          fill={ACCENT}
        />
        <circle cx="54" cy="63" r="1.8" fill={ACCENT} />
        <circle cx="66" cy="63" r="1.8" fill={ACCENT} />
        <path d="M 54 71 Q 60 75, 66 71" stroke={ACCENT} strokeWidth="1.8" fill="none" strokeLinecap="round" />
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

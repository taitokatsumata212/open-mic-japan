export type GalleryCategory =
  | "open-mic"
  | "utage"
  | "event"
  | "workshop"
  | "regional";

export type GalleryImage = {
  id: string;
  src: string | null;
  alt: string;
  caption?: string;
  category: GalleryCategory;
};

/**
 * 写真の差し替え/削除はこの配列を編集するだけで済みます。
 * `/public/images/` にファイルを配置し、`src` を `/images/<filename>` に設定してください。
 * 許諾未取得の写真は `src: null` のまま、もしくは項目ごと削除でOK。
 */
export const galleryImages: GalleryImage[] = [
  // === オープンマイク ===
  {
    id: "openmic-add-01",
    src: "/images/openmic-add-01.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク",
    category: "open-mic",
  },
  {
    id: "openmic-add-02",
    src: "/images/openmic-add-02.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク",
    category: "open-mic",
  },
  {
    id: "openmic-add-03",
    src: "/images/openmic-add-03.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク",
    category: "open-mic",
  },
  {
    id: "openmic-add-04",
    src: "/images/openmic-add-04.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク",
    category: "open-mic",
  },
  {
    id: "openmic-add-05",
    src: "/images/openmic-add-05.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク｜2024年3月",
    category: "open-mic",
  },
  {
    id: "openmic-3rd-01",
    src: "/images/openmic-3rd-01.jpg",
    alt: "SOY-POY 3周年でのオープンマイク",
    caption: "SOY-POY 3周年｜2025年5月",
    category: "open-mic",
  },
  {
    id: "openmic-rilipa-01",
    src: "/images/openmic-rilipa-01.jpg",
    alt: "リリースパーティーの様子",
    caption: "リリースパーティー｜2025年7月",
    category: "open-mic",
  },
  {
    id: "openmic-mizuha-01",
    src: "/images/openmic-mizuha-01.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク｜2022年3月",
    category: "open-mic",
  },

  // === 宴（野外イベント） ===
  {
    id: "utage-2025-01",
    src: "/images/utage-2025-01.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2025年5月",
    category: "utage",
  },
  {
    id: "utage-2025-02",
    src: "/images/utage-2025-02.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2025年5月",
    category: "utage",
  },
  {
    id: "utage-2025-03",
    src: "/images/utage-2025-03.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2025年5月",
    category: "utage",
  },
  {
    id: "utage-2025-extra-01",
    src: "/images/utage-2025-extra-01.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2025年5月",
    category: "utage",
  },
  {
    id: "utage-2025-extra-02",
    src: "/images/utage-2025-extra-02.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2025年5月",
    category: "utage",
  },
  {
    id: "utage-2024-01",
    src: "/images/utage-2024-01.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2024年5月",
    category: "utage",
  },
  {
    id: "utage-2024-02",
    src: "/images/utage-2024-02.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2024年5月",
    category: "utage",
  },
  {
    id: "utage-2024-extra-01",
    src: "/images/utage-2024-extra-01.jpg",
    alt: "野外イベント「宴」の風景",
    caption: "宴｜2024年5月",
    category: "utage",
  },

  // === 協力拠点での企画イベント ===
  // OMJ ではなく協力団体 SOY-POY 拠点で開かれた企画イベントの様子。
  // 場の広がりを示す素材として掲載。
  {
    id: "event-enso-01",
    src: "/images/event-enso-01.jpg",
    alt: "EnsO イベント（リリースパーティ）",
    caption: "EnsO リリースパーティ｜2025年10月",
    category: "event",
  },
  {
    id: "event-enso-02",
    src: "/images/event-enso-02.jpg",
    alt: "EnsO イベント（リリースパーティ）",
    caption: "EnsO リリースパーティ｜2025年10月",
    category: "event",
  },
  {
    id: "event-enso-03",
    src: "/images/event-enso-03.jpg",
    alt: "EnsO イベント（リリースパーティ）",
    caption: "EnsO リリースパーティ｜2025年10月",
    category: "event",
  },
  {
    id: "event-banka-01",
    src: "/images/event-banka-01.jpg",
    alt: "『晩夏』クラシックピアノ×生花コンサート",
    caption: "『晩夏』クラシックピアノ×生花コンサート",
    category: "event",
  },
  {
    id: "event-banka-02",
    src: "/images/event-banka-02.jpg",
    alt: "『晩夏』クラシックピアノ×生花コンサート",
    caption: "『晩夏』クラシックピアノ×生花コンサート",
    category: "event",
  },
  {
    id: "event-jyudo-01",
    src: "/images/event-jyudo-01.jpg",
    alt: "ああ獣道3",
    caption: "ああ獣道3｜2025年8月",
    category: "event",
  },
  {
    id: "event-jyudo-02",
    src: "/images/event-jyudo-02.jpg",
    alt: "ああ獣道3",
    caption: "ああ獣道3｜2025年8月",
    category: "event",
  },
  {
    id: "event-jyudo-03",
    src: "/images/event-jyudo-03.jpg",
    alt: "ああ獣道3",
    caption: "ああ獣道3｜2025年8月",
    category: "event",
  },
  {
    id: "event-dsc-01",
    src: "/images/event-dsc-01.jpg",
    alt: "ひとり芝居公演『キャンバスと一角』",
    caption: "ひとり芝居公演『キャンバスと一角』",
    category: "event",
  },
  {
    id: "event-sarake-01",
    src: "/images/event-sarake-01.jpg",
    alt: "さらけだし",
    caption: "さらけだし｜2021年4月",
    category: "event",
  },
  {
    id: "event-sarake-02",
    src: "/images/event-sarake-02.jpg",
    alt: "さらけだし",
    caption: "さらけだし｜2021年4月",
    category: "event",
  },
  {
    id: "event-sarake-03",
    src: "/images/event-sarake-03.jpg",
    alt: "さらけだし",
    caption: "さらけだし｜2021年4月",
    category: "event",
  },

  // === ワークショップ・講習会 ===
  {
    id: "workshop-edu-01",
    src: "/images/workshop-edu-01.jpg",
    alt: "インプロ講習会",
    caption: "インプロ講習会",
    category: "workshop",
  },
  {
    id: "workshop-edu-02",
    src: "/images/workshop-edu-02.jpg",
    alt: "教育・ワークショップの様子",
    caption: "教育・ワークショップ",
    category: "workshop",
  },
  {
    id: "workshop-impro-01",
    src: "/images/workshop-impro-01.jpg",
    alt: "インプロ講習会",
    caption: "インプロ講習会｜2022年12月",
    category: "workshop",
  },
  {
    id: "workshop-collage-01",
    src: "/images/workshop-collage.jpg",
    alt: "コラージュワークショップ",
    caption: "コラージュワークショップ｜2023年7月",
    category: "workshop",
  },

  // === 地域開催（神奈川県） ===
  {
    id: "regional-chigasaki-02",
    src: "/images/regional-chigasaki-02.jpg",
    alt: "茅ヶ崎での演奏",
    caption: "茅ヶ崎｜2025年3月",
    category: "regional",
  },
  {
    id: "regional-chigasaki-03",
    src: "/images/regional-chigasaki-03.jpg",
    alt: "茅ヶ崎での演奏",
    caption: "茅ヶ崎｜2025年3月",
    category: "regional",
  },
  {
    id: "regional-aonohara-01",
    src: "/images/regional-aonohara-01.jpg",
    alt: "青野原での開催",
    caption: "青野原｜2025年5月",
    category: "regional",
  },
  {
    id: "regional-aonohara-02",
    src: "/images/regional-aonohara-02.jpg",
    alt: "青野原での開催",
    caption: "青野原｜2025年5月",
    category: "regional",
  },
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  "open-mic": "オープンマイク",
  utage: "宴（野外イベント）",
  event: "協力拠点での企画イベント",
  workshop: "ワークショップ・講習会",
  regional: "地域開催（神奈川県）",
};

/**
 * カテゴリごとの注釈（任意）。null の場合は表示しない。
 * 「協力拠点 SOY-POY での企画」など、関係性を明示するために使う。
 */
export const galleryCategoryNotes: Partial<Record<GalleryCategory, string>> = {
  event:
    "協力団体 SOY-POY の拠点で開かれた企画イベント。場の広がりを伝える素材として掲載しています。",
};

export type GalleryCategory = "open-mic" | "utage" | "workshop" | "regional";

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
    id: "openmic-3rd-01",
    src: "/images/openmic-3rd-01.jpg",
    alt: "SOY-POY 3周年でのオープンマイク",
    caption: "SOY-POY 3周年｜2025年5月",
    category: "open-mic",
  },
  {
    id: "openmic-3rd-02",
    src: "/images/openmic-3rd-02.jpg",
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
    id: "openmic-mikey-01",
    src: "/images/openmic-mikey-01.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク｜2022年9月",
    category: "open-mic",
  },
  {
    id: "openmic-mikey-02",
    src: "/images/openmic-mikey-02.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク｜2022年9月",
    category: "open-mic",
  },
  {
    id: "openmic-mizuha-01",
    src: "/images/openmic-mizuha-01.jpg",
    alt: "オープンマイクの様子",
    caption: "オープンマイク｜2022年3月",
    category: "open-mic",
  },
  {
    id: "openmic-mizuha-02",
    src: "/images/openmic-mizuha-02.jpg",
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

  // === ワークショップ ===
  {
    id: "workshop-sarake-01",
    src: "/images/workshop-sarake-01.jpg",
    alt: "さらけだしワークショップ",
    caption: "さらけだし｜2021年4月",
    category: "workshop",
  },
  {
    id: "workshop-sarake-02",
    src: "/images/workshop-sarake-02.jpg",
    alt: "さらけだしワークショップ",
    caption: "さらけだし｜2021年4月",
    category: "workshop",
  },
  {
    id: "workshop-tsuya-01",
    src: "/images/workshop-tsuya-01.jpg",
    alt: "つやにぃセッション",
    caption: "つやにぃセッション｜2025年2月",
    category: "workshop",
  },
  {
    id: "workshop-impro-01",
    src: "/images/workshop-impro-01.jpg",
    alt: "インプロ講習会",
    caption: "インプロ講習会｜2022年12月",
    category: "workshop",
  },

  // === 地域開催（神奈川県） ===
  {
    id: "regional-chigasaki-01",
    src: "/images/regional-chigasaki-01.jpg",
    alt: "茅ヶ崎での開催",
    caption: "茅ヶ崎｜2025年3月",
    category: "regional",
  },
  {
    id: "regional-chigasaki-02",
    src: "/images/regional-chigasaki-02.jpg",
    alt: "茅ヶ崎での開催",
    caption: "茅ヶ崎｜2025年3月",
    category: "regional",
  },
  {
    id: "regional-aonohara-01",
    src: "/images/regional-aonohara-01.jpg",
    alt: "青野原出遊",
    caption: "青野原｜2025年5月",
    category: "regional",
  },
  {
    id: "regional-aonohara-02",
    src: "/images/regional-aonohara-02.jpg",
    alt: "青野原出遊",
    caption: "青野原｜2025年5月",
    category: "regional",
  },
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  "open-mic": "オープンマイク",
  utage: "宴（野外イベント）",
  workshop: "ワークショップ",
  regional: "地域開催（神奈川県）",
};

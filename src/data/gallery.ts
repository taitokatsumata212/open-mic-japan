export type GalleryCategory =
  | "open-mic"
  | "utage"
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
  {
    id: "soypoy-01",
    src: null,
    alt: "SOY-POY でのオープンマイク",
    caption: "オープンマイク｜SOY-POY",
    category: "open-mic",
  },
  {
    id: "soypoy-02",
    src: null,
    alt: "SOY-POY での演奏風景",
    caption: "演奏風景｜SOY-POY",
    category: "open-mic",
  },
  {
    id: "soypoy-03",
    src: null,
    alt: "マイクの前で語る出演者",
    caption: "語りの場｜SOY-POY",
    category: "open-mic",
  },
  {
    id: "utage-01",
    src: null,
    alt: "野外イベント「宴」の風景",
    caption: "宴｜野外開催",
    category: "utage",
  },
  {
    id: "utage-02",
    src: null,
    alt: "宴の物販エリア",
    caption: "宴｜小商いの輪",
    category: "utage",
  },
  {
    id: "workshop-01",
    src: null,
    alt: "大学でのワークショップ",
    caption: "ワークショップ｜大学",
    category: "workshop",
  },
  {
    id: "workshop-02",
    src: null,
    alt: "授業での実践",
    caption: "授業｜表現と場づくり",
    category: "workshop",
  },
  {
    id: "regional-01",
    src: null,
    alt: "地域開催の様子",
    caption: "地域開催｜茅ヶ崎",
    category: "regional",
  },
];

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  "open-mic": "オープンマイク",
  utage: "宴",
  workshop: "ワークショップ",
  regional: "地域開催",
};

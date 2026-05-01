import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SupportCTA } from "@/components/SupportCTA";
import {
  galleryCategoryLabels,
  galleryCategoryNotes,
  galleryImages,
  type GalleryCategory,
} from "@/data/gallery";

export const metadata = {
  title: "写真ギャラリー",
};

const categories: GalleryCategory[] = [
  "open-mic",
  "utage",
  "event",
  "workshop",
  "regional",
];

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            Gallery
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            写真ギャラリー
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            オープンマイク、宴、ワークショップ、地域開催——
            これまでの場の記録を、少しずつ集めています。
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {categories.map((cat) => {
            const list = galleryImages.filter((img) => img.category === cat);
            const note = galleryCategoryNotes[cat];
            return (
              <div key={cat} id={cat} className="mb-14 last:mb-0 scroll-mt-16">
                <h2 className="text-xl md:text-2xl font-bold mb-1 text-omj-text">
                  {galleryCategoryLabels[cat]}
                </h2>
                {note && (
                  <p className="mb-5 text-sm text-omj-sub leading-relaxed">
                    {note}
                  </p>
                )}
                {!note && <div className="mb-5" />}
                <GalleryGrid images={list} />
              </div>
            );
          })}
          <p className="mt-10 text-sm text-omj-sub leading-relaxed">
            ※
            掲載されている写真は、被写体の方の許諾状況に応じて随時差し替え・追加してまいります。掲載に関するご相談は
            <a href="/contact" className="text-omj-primary underline">
              お問い合わせ
            </a>
            までお願いします。
          </p>
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

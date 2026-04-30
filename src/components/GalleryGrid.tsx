import { GalleryImage } from "@/data/gallery";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-omj-border p-10 text-center text-omj-sub">
        現在準備中です。順次写真を追加していきます。
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {images.map((image) => (
        <figure
          key={image.id}
          className="group relative aspect-square overflow-hidden rounded-md bg-omj-border"
        >
          {image.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-omj-sub p-2 text-center">
              {image.caption ?? image.alt}
            </div>
          )}
          {image.caption && (
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent text-white text-xs px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

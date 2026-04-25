import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

const featured = new Set([
  "/images/alvin-recital-closeup.jpg",
  "/images/alvin-sacred-chapel.jpg",
]);

const imagePositions: Record<string, string> = {
  "/images/alvin-wayne-duo-hero.jpg": "object-[50%_28%]",
  "/images/alvin-recital-closeup.jpg": "object-[56%_20%]",
  "/images/alvin-sacred-chapel.jpg": "object-[52%_22%]",
  "/images/alvin-ensemble-performance.jpg": "object-[50%_24%]",
  "/images/alvin-competition-stage.jpg": "object-[50%_20%]",
  "/images/alvin-orchestra-performance.jpg": "object-[50%_22%]",
  "/images/alvin-portrait-blue.jpg": "object-[50%_15%]",
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {images.map((image) => {
        const isFeatured = featured.has(image.src);
        return (
          <figure
            key={image.src}
            className={`group overflow-hidden rounded-2xl border border-taupe/40 bg-white/85 shadow-soft ${
              isFeatured ? "md:col-span-2" : ""
            }`}
          >
            <div className={`relative ${isFeatured ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition duration-500 group-hover:scale-[1.02] ${
                  imagePositions[image.src] ?? "object-center"
                }`}
              />
            </div>
            <figcaption className="px-5 py-4 text-sm uppercase tracking-[0.11em] text-charcoal/75">
              {image.alt}
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
}

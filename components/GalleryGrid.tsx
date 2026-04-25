import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

const tallImages = new Set([
  "/images/alvin-portrait-blue.jpg",
  "/images/alvin-competition-stage.jpg",
]);

const wideImages = new Set([
  "/images/alvin-recital-closeup.jpg",
  "/images/alvin-sacred-chapel.jpg",
]);

const imagePositions: Record<string, string> = {
  "/images/alvin-wayne-duo-hero.jpg": "object-[50%_30%]",
  "/images/alvin-recital-closeup.jpg": "object-[56%_20%]",
  "/images/alvin-sacred-chapel.jpg": "object-[52%_22%]",
  "/images/alvin-ensemble-performance.jpg": "object-[50%_24%]",
  "/images/alvin-competition-stage.jpg": "object-[50%_20%]",
  "/images/alvin-orchestra-performance.jpg": "object-[50%_20%]",
  "/images/alvin-portrait-blue.jpg": "object-[50%_10%]",
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="grid auto-rows-[230px] gap-5 md:grid-cols-6 md:auto-rows-[180px]">
      {images.map((image) => (
        <div
          key={image.src}
          className={`group relative overflow-hidden border border-stone/60 bg-parchment/30 shadow-soft ${
            wideImages.has(image.src)
              ? "md:col-span-4 md:row-span-2"
              : tallImages.has(image.src)
                ? "md:col-span-2 md:row-span-3"
                : "md:col-span-2 md:row-span-2"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition duration-700 group-hover:scale-[1.02] ${
              imagePositions[image.src] ?? "object-center"
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </section>
  );
}

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
  "/images/alvin-opera-production.jpg",
]);

const wideImages = new Set([
  "/images/vox-sacra-duo-stage.jpg",
  "/images/alvin-chapel-prayer.jpg",
]);

const imagePositions: Record<string, string> = {
  "/images/vox-sacra-duo-stage.jpg":     "object-[50%_22%]",
  "/images/alvin-portrait-blue.jpg":     "object-[50%_10%]",
  "/images/wayne-piano-closeup.jpg":     "object-[50%_18%]",
  "/images/wayne-piano-smiling.jpg":     "object-[50%_18%]",
  "/images/alvin-chapel-prayer.jpg":     "object-[50%_0%]",
  "/images/alvin-recital-strings.jpg":   "object-[50%_38%]",
  "/images/alvin-opera-production.jpg":  "object-[50%_25%]",
  "/images/alvin-recital-closeup.jpg":   "object-[56%_22%]",
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

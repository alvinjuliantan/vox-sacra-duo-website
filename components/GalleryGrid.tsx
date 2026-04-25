import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

const layoutClass: Record<string, string> = {
  "/images/alvin-recital-closeup.jpg": "md:col-span-2 md:row-span-2",
  "/images/alvin-sacred-chapel.jpg": "md:row-span-2",
  "/images/alvin-portrait-blue.jpg": "md:row-span-2",
};

const ratioClass: Record<string, string> = {
  "/images/alvin-recital-closeup.jpg": "aspect-[16/10] md:aspect-auto md:h-full",
  "/images/alvin-sacred-chapel.jpg": "aspect-[4/5] md:aspect-auto md:h-full",
  "/images/alvin-portrait-blue.jpg": "aspect-[4/5] md:aspect-auto md:h-full",
};

const imagePositions: Record<string, string> = {
  "/images/alvin-wayne-duo-hero.jpg": "object-[50%_26%]",
  "/images/alvin-recital-closeup.jpg": "object-[56%_20%]",
  "/images/alvin-sacred-chapel.jpg": "object-[52%_18%]",
  "/images/alvin-ensemble-performance.jpg": "object-[50%_24%]",
  "/images/alvin-competition-stage.jpg": "object-[50%_20%]",
  "/images/alvin-orchestra-performance.jpg": "object-[50%_20%]",
  "/images/alvin-portrait-blue.jpg": "object-[50%_10%]",
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="grid auto-rows-[220px] gap-4 md:auto-rows-[190px] md:grid-cols-3 md:gap-5 lg:auto-rows-[230px]">
      {images.map((image) => (
        <div
          key={image.src}
          className={`relative overflow-hidden rounded-[1.3rem] bg-warmstone/20 ${layoutClass[image.src] ?? ""}`}
        >
          <div className={`relative h-full w-full ${ratioClass[image.src] ?? "aspect-[4/5]"}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition duration-500 hover:scale-[1.02] ${
                imagePositions[image.src] ?? "object-center"
              }`}
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

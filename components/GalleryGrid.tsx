import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

const sizing = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[210px]">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`${sizing[index] ?? "md:col-span-1"} group relative overflow-hidden rounded-3xl border border-stone/55 bg-white shadow-float`}
        >
          {/* Replace each image file in public/images with final edited photographs. */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ))}
    </section>
  );
}

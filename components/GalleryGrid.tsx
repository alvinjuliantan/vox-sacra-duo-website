import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <section className="columns-1 gap-5 space-y-5 md:columns-2 lg:columns-3">
      {images.map((image) => (
        <div key={image.src} className="break-inside-avoid overflow-hidden rounded-md border border-stone/60 bg-white shadow-elegant">
          {/* Replace each image file in public/images with final edited photographs. */}
          <Image src={image.src} alt={image.alt} width={800} height={1000} className="h-auto w-full object-cover" />
        </div>
      ))}
    </section>
  );
}

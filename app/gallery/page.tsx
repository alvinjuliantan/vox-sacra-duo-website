import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Performance images in sacred, recital, and collaborative settings"
      />
      <section className="section-shell py-16">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}

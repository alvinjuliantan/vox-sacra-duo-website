import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A visual journal of recital, sacred, and collaborative performance moments"
      />
      <section className="section-shell py-16 md:py-20">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}

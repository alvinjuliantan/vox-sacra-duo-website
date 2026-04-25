import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Curated performance images across sacred, recital, and collaborative settings"
      />
      <section className="section-shell section-gap pt-10 md:pt-12">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}

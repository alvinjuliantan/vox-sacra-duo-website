import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A curated sequence of rehearsal, recital, and sacred performance moments."
      />
      <section className="section-shell pb-24">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}

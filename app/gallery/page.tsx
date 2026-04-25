import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="A curated selection of sacred and recital moments across chapel, concert, and collaborative settings"
      />
      <section className="section-shell py-14">
        <p className="max-w-3xl text-lg leading-relaxed text-charcoal/85">
          These photographs capture the atmosphere of Vox Sacra Duo performances: intimate storytelling,
          devotional stillness, and expressive collaboration.
        </p>
      </section>
      <section className="section-shell pb-24">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}

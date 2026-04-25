import ArtistCard from "@/components/ArtistCard";
import PageHeader from "@/components/PageHeader";
import { artists } from "@/data/artists";
import { siteContent } from "@/data/siteContent";

export default function ArtistsPage() {
  return (
    <>
      <PageHeader title="Artists" subtitle="Voice and piano partnership" />
      <section className="section-shell section-gap">
        <div className="soft-panel p-8 md:p-10">
          <p className="max-w-4xl text-lg leading-relaxed text-charcoal/84">{siteContent.duoCopy}</p>
        </div>
      </section>
      <section className="section-shell grid gap-8 pb-16 md:pb-24">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </section>
    </>
  );
}

import ArtistCard from "@/components/ArtistCard";
import PageHeader from "@/components/PageHeader";
import { artists } from "@/data/artists";
import { siteContent } from "@/data/siteContent";

export default function ArtistsPage() {
  return (
    <>
      <PageHeader title="Artists" subtitle="Voice and piano partnership" />
      <section className="section-shell py-14">
        <p className="max-w-4xl text-lg leading-relaxed text-charcoal/90">{siteContent.duoCopy}</p>
      </section>
      <section className="section-shell grid gap-8 pb-20">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </section>
    </>
  );
}

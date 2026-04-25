import ArtistCard from "@/components/ArtistCard";
import PageHeader from "@/components/PageHeader";
import { artists } from "@/data/artists";
import { siteContent } from "@/data/siteContent";

export default function ArtistsPage() {
  return (
    <>
      <PageHeader title="Artists" subtitle="Alvin Tan, baritone · Wayne Teo, piano" />
      <section className="section-shell py-16 md:py-20">
        <p className="max-w-4xl text-lg leading-relaxed text-charcoal/88">{siteContent.duoCopy}</p>
      </section>
      <section className="section-shell grid gap-14 pb-24 md:gap-16">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </section>
    </>
  );
}

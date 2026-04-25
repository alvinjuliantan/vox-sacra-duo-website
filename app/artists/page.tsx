import ArtistCard from "@/components/ArtistCard";
import PageHeader from "@/components/PageHeader";
import { artists } from "@/data/artists";

export default function ArtistsPage() {
  return (
    <>
      <PageHeader
        title="Artists"
        subtitle="Vox Sacra Duo unites baritone and piano in programmes shaped for sacred, classical, and intimate recital settings."
      />
      <section className="section-shell pb-20">
        <p className="max-w-4xl text-lg text-charcoal/84">
          Alvin Tan and Wayne Teo collaborate with a shared focus on musical clarity, textual meaning,
          and atmosphere. Their partnership is designed for audiences who value serious artistry presented
          with warmth and poise.
        </p>
      </section>
      <section className="section-shell grid gap-10 pb-24">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </section>
    </>
  );
}

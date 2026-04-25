import Image from "next/image";
import type { Artist } from "@/data/artists";

type ArtistCardProps = {
  artist: Artist;
};

export default function ArtistCard({ artist }: ArtistCardProps) {
  const isWayne = artist.name.toLowerCase().includes("wayne");

  return (
    <article className="overflow-hidden rounded-md border border-stone/70 bg-white shadow-elegant">
      <div className="relative h-72 bg-stone/30">
        {/* Replace artist image files in public/images. */}
        {isWayne ? (
          <div className="flex h-full items-center justify-center bg-stone/40 text-center text-charcoal">
            <div>
              <p className="font-serif text-2xl text-burgundy">Portrait forthcoming</p>
              <p className="mt-2 text-sm">Replace with /images/wayne-piano-portrait.jpg</p>
            </div>
          </div>
        ) : (
          <Image src={artist.image} alt={`${artist.name} portrait`} fill className="object-cover" />
        )}
      </div>
      <div className="p-8">
        <h3 className="text-3xl text-burgundy">{artist.name}</h3>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold">{artist.role}</p>
        <div className="mt-6 space-y-4 text-charcoal/90">
          {artist.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

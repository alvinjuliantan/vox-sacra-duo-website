import Image from "next/image";
import type { Artist } from "@/data/artists";

type ArtistCardProps = {
  artist: Artist;
};

export default function ArtistCard({ artist }: ArtistCardProps) {
  const isAlvin = artist.name.toLowerCase().includes("alvin");

  // Both portraits now match a 3:4 frame so the pair reads as balanced.
  const objectPosition = isAlvin ? "object-[50%_10%]" : "object-[50%_12%]";

  return (
    <article className="editorial-panel">
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="relative aspect-[3/4] border border-stone/60 bg-parchment/35">
          {artist.image ? (
            <Image
              src={artist.image}
              alt={`${artist.name} portrait`}
              fill
              className={`object-cover ${objectPosition}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 35vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-8 text-center">
              <div>
                <p className="font-serif text-3xl text-warmblack">Portrait forthcoming</p>
                <p className="mt-2 text-sm text-charcoal/75">Professional portrait to be added.</p>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl">{artist.name}</h3>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-bronze">{artist.role}</p>
          <div className="mt-8 space-y-6 text-base text-charcoal/87 md:text-lg">
            {artist.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

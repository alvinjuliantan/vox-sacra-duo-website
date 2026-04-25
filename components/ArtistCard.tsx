import Image from "next/image";
import type { Artist } from "@/data/artists";

type ArtistCardProps = {
  artist: Artist;
};

export default function ArtistCard({ artist }: ArtistCardProps) {
  const isWayne = artist.name.toLowerCase().includes("wayne");
  const imagePosition = isWayne ? "object-[50%_25%]" : "object-[50%_18%]";

  return (
    <article className="overflow-hidden rounded-2xl border border-taupe/45 bg-white/85 shadow-elegant">
      <div className="relative aspect-[5/4] bg-warmstone/30 md:aspect-[16/10]">
        {isWayne ? (
          <div className="flex h-full items-center justify-center bg-warmstone/40 text-center text-charcoal">
            <div>
              <p className="font-serif text-3xl text-bronze">Portrait forthcoming</p>
              <p className="mt-2 text-sm">Replace with /images/wayne-piano-portrait.jpg</p>
            </div>
          </div>
        ) : (
          <Image
            src={artist.image}
            alt={`${artist.name} portrait`}
            fill
            className={`object-cover ${imagePosition}`}
          />
        )}
      </div>
      <div className="p-8 md:p-10">
        <h3 className="text-4xl text-charcoal">{artist.name}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.24em] text-olive">{artist.role}</p>
        <div className="mt-7 space-y-5 text-charcoal/88 leading-relaxed">
          {artist.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

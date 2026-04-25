import Image from "next/image";
import type { Artist } from "@/data/artists";

type ArtistCardProps = {
  artist: Artist;
};

export default function ArtistCard({ artist }: ArtistCardProps) {
  const isWayne = artist.name.toLowerCase().includes("wayne");

  return (
    <article className="grid gap-8 border-b border-taupe/40 pb-14 md:grid-cols-[0.92fr_1.08fr] md:gap-12 md:pb-16">
      <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[1.8rem] bg-warmstone/35">
        {isWayne ? (
          <div className="flex aspect-[3/4] items-center justify-center text-center text-charcoal">
            <div>
              <p className="font-serif text-3xl text-bronze">Portrait forthcoming</p>
              <p className="mt-2 text-sm text-charcoal/80">Replace with /images/wayne-piano-portrait.jpg</p>
            </div>
          </div>
        ) : (
          <div className="relative aspect-[3/4]">
            <Image
              src={artist.image}
              alt={`${artist.name} portrait`}
              fill
              className="object-contain object-top"
              sizes="(min-width: 768px) 36vw, 90vw"
            />
          </div>
        )}
      </div>

      <div className="md:pt-4">
        <p className="text-xs uppercase tracking-[0.24em] text-olive">{artist.role}</p>
        <h3 className="mt-3 text-4xl leading-tight text-charcoal md:text-5xl">{artist.name}</h3>
        <div className="mt-7 space-y-5 text-charcoal/87 leading-relaxed">
          {artist.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import type { Artist } from "@/data/artists";

type ArtistCardProps = {
  artist: Artist;
};

export default function ArtistCard({ artist }: ArtistCardProps) {
  const isAlvin = artist.name.toLowerCase().includes("alvin");

  const imageContainerClass = isAlvin
    ? "min-h-[560px] sm:min-h-[640px] md:min-h-[760px]"
    : "min-h-[420px] md:min-h-[560px]";

  const imageClass = isAlvin
    ? "object-contain object-top p-4 sm:p-6 md:p-8"
    : "object-cover object-[50%_16%]";

  return (
    <article className="editorial-panel">
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className={`relative border border-stone/60 bg-parchment/35 ${imageContainerClass}`}>
          {artist.image ? (
            <Image
              src={artist.image}
              alt={`${artist.name} portrait`}
              fill
              className={imageClass}
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

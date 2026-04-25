import Image from "next/image";
import type { Artist } from "@/data/artists";

type ArtistCardProps = {
  artist: Artist;
};

export default function ArtistCard({ artist }: ArtistCardProps) {
  const isWayne = artist.name.toLowerCase().includes("wayne");

  return (
    <article className="soft-panel overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[340px] bg-stone/35">
          {/* Replace artist image files in public/images. */}
          {isWayne ? (
            <div className="flex h-full items-center justify-center text-center text-charcoal/75">
              <div className="rounded-2xl border border-stone/70 bg-white/70 px-8 py-10">
                <p className="font-serif text-3xl">Portrait forthcoming</p>
                <p className="mt-2 text-sm">Replace with /images/wayne-piano-portrait.jpg</p>
              </div>
            </div>
          ) : (
            <Image src={artist.image} alt={`${artist.name} portrait`} fill className="object-cover object-top" />
          )}
        </div>
        <div className="px-7 py-9 md:px-10 md:py-11">
          <h3 className="text-4xl">{artist.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-olive/75">{artist.role}</p>
          <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-charcoal/85">
            {artist.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

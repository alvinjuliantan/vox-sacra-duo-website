import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { artists } from "@/data/artists";
import { recordings } from "@/data/recordings";

const settings = [
  "Chapels and churches",
  "Private salons",
  "Curated cultural spaces",
  "Weddings and memorials",
  "Intimate recital evenings",
];

const numerals = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii.", "viii."];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Sacred and classical music for intimate, meaningful gatherings"
        subtitle="Baritone Alvin Tan and pianist Wayne Teo present programmes shaped with reverence, musical clarity, and recital artistry."
      />

      <section className="section-shell py-20 md:py-24">
        <div className="mx-auto mb-12 flex w-fit items-center gap-4 text-bronze md:mb-16">
          <span className="block h-px w-16 bg-gradient-to-r from-transparent via-bronze to-transparent" />
          <span className="font-serif text-lg italic opacity-80">✦</span>
          <span className="block h-px w-16 bg-gradient-to-r from-transparent via-bronze to-transparent" />
        </div>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="section-intro">About</p>
            <h2 className="mt-4 text-4xl md:text-5xl">An artistic partnership in voice and piano</h2>
            <p className="mt-6 max-w-2xl text-lg text-charcoal/84">
              Vox Sacra Duo brings together sacred repertoire, classical song, and reflective recital
              programming for occasions where music is received in close listening. Each performance is
              prepared with sensitivity to venue, audience, and purpose.
            </p>
          </div>
          <ul className="space-y-4 border-l border-stone pl-6 text-charcoal/88">
            {settings.map((item) => (
              <li key={item} className="border-b border-dotted border-stone/40 pb-3 last:border-b-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-stone/40 bg-parchment/40 py-16 md:py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-intro">Music Samples</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Selected Recordings</h2>
            <p className="mt-5 text-base text-charcoal/82 md:text-lg">
              Four selections from the duo&apos;s recital and sacred programme repertoire.
            </p>
            <div className="mx-auto mt-7 flex w-fit items-center gap-4 text-bronze">
              <span className="block h-px w-12 bg-gradient-to-r from-transparent via-bronze to-transparent" />
              <span className="font-serif text-base italic opacity-80">·</span>
              <span className="block h-px w-12 bg-gradient-to-r from-transparent via-bronze to-transparent" />
            </div>
          </div>

          {recordings.length > 0 ? (
            <div className="mx-auto mt-12 grid max-w-3xl gap-0">
              {recordings.map((recording, index) => (
                <article
                  key={recording.title}
                  className="border-b border-stone/40 py-8 last:border-b-0"
                >
                  <p className="font-serif text-sm italic text-bronze">
                    {numerals[index] ?? `${index + 1}.`}
                  </p>
                  <h3 className="mt-1 text-2xl md:text-3xl">{recording.title}</h3>
                  {recording.composer ? (
                    <p className="mt-1 font-serif text-base italic text-charcoal/70">
                      {recording.composer}
                    </p>
                  ) : null}
                  {recording.description ? (
                    <p className="mt-2 text-sm text-charcoal/78">{recording.description}</p>
                  ) : null}
                  <audio controls preload="metadata" className="mt-4 w-full">
                    <source src={recording.src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </article>
              ))}
            </div>
          ) : (
            <p className="mx-auto mt-10 max-w-2xl text-center text-charcoal/80">
              Audio selections will be published shortly.
            </p>
          )}
        </div>
      </section>

      <section className="section-shell py-20 md:py-24">
        <p className="section-intro text-center">Artists</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl md:text-5xl">
          Musicianship rooted in text, tone, and stillness
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {artists.map((artist) => {
            const calloutImage = artist.name.toLowerCase().includes("alvin")
              ? "/images/alvin-portrait-blue.jpg"
              : "/images/wayne-piano-smiling.jpg";
            const calloutPosition = artist.name.toLowerCase().includes("alvin")
              ? "object-[50%_10%]"
              : "object-[50%_22%]";
            return (
              <article key={artist.name}>
                <div className="relative aspect-[4/5] max-w-md border border-stone/40 bg-parchment/40">
                  <Image
                    src={calloutImage}
                    alt={artist.name}
                    fill
                    className={`object-cover ${calloutPosition}`}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <h3 className="mt-7 text-3xl md:text-4xl">{artist.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-bronze">{artist.role}</p>
                <p className="mt-5 text-charcoal/84">{artist.bio[0]}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <Link href="/artists" className="link-elegant">
            Read Full Biographies
          </Link>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <CTASection
          title="Plan a sacred or private recital"
          text="Share your venue, occasion, and preferred dates. We will respond with a suitable programme approach for your setting."
          buttonLabel="Send an Enquiry"
          buttonLink="/enquiry"
        />
      </section>
    </>
  );
}

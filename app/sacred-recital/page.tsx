import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { sacredRepertoire } from "@/data/repertoire";

const formats = [
  "30 minute sacred reflection",
  "45 minute chapel recital",
  "60 minute full sacred recital",
  "Custom programme for weddings, memorials, feast days, parish events, and private chapel gatherings",
];

const suitableFor = [
  "Church recitals",
  "Chapel evenings",
  "Wedding ceremonies",
  "Memorial services",
  "Private prayer gatherings",
  "Parish cultural events",
  "Sacred music evenings",
];

export default function SacredRecitalPage() {
  return (
    <>
      <PageHeader title="Sacred Recital" subtitle="A curated voice and piano programme for prayerful and intimate spaces" />

      <section className="section-shell grid gap-14 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div>
          <p className="text-lg leading-relaxed text-charcoal/88">
            Vox Sacra Duo presents sacred repertoire with a recital sensibility: expressive vocal line,
            poetic text, and piano partnership shaped for contemplation, beauty, and emotional sincerity.
          </p>
          <div className="mt-10 space-y-10 border-y border-taupe/45 py-10">
            <div>
              <h2 className="text-3xl text-charcoal md:text-4xl">Sample repertoire</h2>
              <ul className="mt-5 grid gap-3 text-charcoal/88 md:grid-cols-2">
                {sacredRepertoire.map((item) => (
                  <li key={item} className="border-b border-taupe/30 pb-2">{item}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl text-charcoal">Programme formats</h3>
                <ul className="mt-4 space-y-2 text-charcoal/86">
                  {formats.map((item) => (
                    <li key={item} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl text-charcoal">Suitable for</h3>
                <ul className="mt-4 space-y-2 text-charcoal/86">
                  {suitableFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:pt-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-warmstone/40 shadow-elegant">
            <Image
              src="/images/alvin-sacred-chapel.jpg"
              alt="Sacred chapel performance"
              fill
              className="object-cover object-[52%_18%]"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-warmstone/30 shadow-soft">
            <Image
              src="/images/alvin-recital-closeup.jpg"
              alt="Recital close-up"
              fill
              className="object-cover object-[56%_18%]"
            />
          </div>
        </div>
      </section>

      <section className="section-shell pb-12">
        <CTASection
          title="Plan a sacred recital"
          text="We can shape an appropriate programme for your chapel, church, feast day, or private spiritual gathering."
          buttonLabel="Send an Enquiry"
          buttonLink="/enquiry"
        />
      </section>
    </>
  );
}

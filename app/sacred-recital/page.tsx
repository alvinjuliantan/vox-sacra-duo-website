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
      <PageHeader title="Sacred Recital" subtitle="Music for reflection, prayer, and beauty" />
      <section className="section-shell py-16">
        <p className="max-w-4xl text-lg leading-relaxed text-charcoal/88">
          Vox Sacra Duo presents a sacred voice and piano recital designed for chapels, churches, and
          intimate spiritual spaces. The programme draws from beloved sacred works, devotional classics,
          and inspirational songs that create an atmosphere of stillness, reverence, and emotional depth.
        </p>
      </section>

      <section className="section-shell grid gap-8 pb-24 md:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-2xl border border-taupe/45 bg-white/85 p-8 shadow-soft">
            <h2 className="text-3xl text-charcoal">Sample repertoire</h2>
            <ul className="mt-5 space-y-2 text-charcoal/90">
              {sacredRepertoire.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-taupe/45 bg-white/85 p-8 shadow-soft">
            <h2 className="text-3xl text-charcoal">Programme formats</h2>
            <ul className="mt-5 space-y-2 text-charcoal/90">
              {formats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-taupe/45 bg-white/85 p-8 shadow-soft">
            <h2 className="text-3xl text-charcoal">Suitable For</h2>
            <ul className="mt-5 space-y-2 text-charcoal/90">
              {suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-taupe/45 shadow-elegant">
            <Image
              src="/images/alvin-sacred-chapel.jpg"
              alt="Sacred chapel performance"
              fill
              className="object-cover object-[52%_20%]"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-taupe/45 shadow-elegant">
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

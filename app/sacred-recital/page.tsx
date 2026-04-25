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

      <section className="section-shell section-gap">
        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-panel p-8 md:p-10">
            <p className="text-lg leading-relaxed text-charcoal/82">
              Vox Sacra Duo presents a sacred voice and piano recital designed for chapels, churches, and
              intimate spiritual spaces. The programme draws from beloved sacred works, devotional classics,
              and inspirational songs that create an atmosphere of stillness, reverence, and emotional depth.
            </p>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-stone/60 shadow-float">
            {/* Replace /images/alvin-sacred-chapel.jpg with your best chapel/sacred setting image */}
            <Image
              src="/images/alvin-sacred-chapel.jpg"
              alt="Sacred chapel performance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="soft-panel p-8">
            <h2 className="text-3xl">Sample repertoire</h2>
            <ul className="mt-5 space-y-2 text-charcoal/85">
              {sacredRepertoire.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="soft-panel p-8">
            <h2 className="text-3xl">Programme formats</h2>
            <ul className="mt-5 space-y-2 text-charcoal/85">
              {formats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="soft-panel p-8">
            <h2 className="text-3xl">Suitable For</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-charcoal/85">
              {suitableFor.map((item) => (
                <li key={item} className="rounded-xl border border-stone/45 bg-white/80 px-4 py-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-stone/60 shadow-float">
            {/* Replace /images/alvin-recital-closeup.jpg with a formal recital close-up image */}
            <Image src="/images/alvin-recital-closeup.jpg" alt="Recital close-up" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-shell pb-10">
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

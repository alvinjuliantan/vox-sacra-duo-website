import PageHeader from "@/components/PageHeader";
import RepertoireSection from "@/components/RepertoireSection";
import { repertoireSections } from "@/data/repertoire";

export default function RepertoirePage() {
  return (
    <>
      <PageHeader
        title="Repertoire"
        subtitle="Sacred, classical, and inspirational programmes for intimate and meaningful settings"
      />
      <section className="section-shell grid gap-8 py-16">
        {repertoireSections.map((section) => (
          <RepertoireSection
            key={section.title}
            title={section.title}
            items={section.items}
            description={section.description}
          />
        ))}
      </section>
    </>
  );
}

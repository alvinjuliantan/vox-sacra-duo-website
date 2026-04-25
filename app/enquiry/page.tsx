import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";

export default function EnquiryPage() {
  return (
    <>
      <PageHeader title="Enquiry" subtitle="Book Vox Sacra Duo for your event or recital series" />
      <section className="section-shell section-gap pb-10">
        <div className="soft-panel mb-8 p-8 md:p-10">
          <p className="max-w-3xl text-lg leading-relaxed text-charcoal/84">
            Vox Sacra Duo is available for sacred recitals, chapel concerts, church services, weddings,
            memorials, private gatherings, and bespoke classical programmes.
          </p>
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}

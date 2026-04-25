type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-20 md:py-24">
      <div className="section-shell">
        <p className="section-intro">Vox Sacra Duo</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.02] md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-charcoal/82 md:text-xl">{subtitle}</p>
        <div className="editorial-rule mt-12" />
      </div>
    </section>
  );
}

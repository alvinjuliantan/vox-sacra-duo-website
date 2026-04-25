type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-ivory via-ivory to-warmstone/35 pb-10 pt-24 md:pb-12 md:pt-28">
      <div className="section-shell">
        <p className="text-xs uppercase tracking-[0.24em] text-olive">Vox Sacra Duo</p>
        <h1 className="mt-5 text-5xl leading-[0.98] text-charcoal md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-charcoal/82 md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}

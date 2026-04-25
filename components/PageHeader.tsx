type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-taupe/40 bg-gradient-to-b from-ivory via-ivory to-warmstone/40 py-24">
      <div className="section-shell">
        <h1 className="text-5xl text-charcoal md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-charcoal/80 md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}

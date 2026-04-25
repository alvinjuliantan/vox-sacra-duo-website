type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-stone/60 bg-gradient-to-b from-ivory to-stone/40 py-20">
      <div className="section-shell">
        <h1 className="text-4xl text-burgundy md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-charcoal/85">{subtitle}</p>
      </div>
    </section>
  );
}

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="section-shell pt-10 md:pt-14">
      <div className="soft-panel px-8 py-12 md:px-12 md:py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-olive/75">Vox Sacra Duo</p>
        <h1 className="mt-3 text-4xl md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal/80 md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}

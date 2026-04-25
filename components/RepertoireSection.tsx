type RepertoireSectionProps = {
  title: string;
  items: string[];
  description?: string;
};

export default function RepertoireSection({ title, items, description }: RepertoireSectionProps) {
  return (
    <section className="rounded-2xl border border-taupe/45 bg-white/85 p-8 shadow-soft md:p-10">
      <h2 className="text-3xl text-charcoal md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-charcoal/82 leading-relaxed">{description}</p> : null}
      {items.length > 0 ? (
        <ul className="mt-6 grid gap-3 text-charcoal/90 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-lg border border-warmstone/60 bg-ivory/60 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

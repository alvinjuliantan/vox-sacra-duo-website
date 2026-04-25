type RepertoireSectionProps = {
  title: string;
  items: string[];
  description?: string;
};

export default function RepertoireSection({ title, items, description }: RepertoireSectionProps) {
  return (
    <section className="rounded-md border border-stone/70 bg-white p-8 shadow-elegant">
      <h2 className="text-2xl text-burgundy md:text-3xl">{title}</h2>
      {description ? <p className="mt-4 text-charcoal/85">{description}</p> : null}
      {items.length > 0 ? (
        <ul className="mt-5 grid gap-3 text-charcoal/90 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="border-b border-stone/40 pb-2">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

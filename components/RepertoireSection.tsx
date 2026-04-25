type RepertoireSectionProps = {
  title: string;
  items: string[];
  description?: string;
};

export default function RepertoireSection({ title, items, description }: RepertoireSectionProps) {
  return (
    <section className="editorial-panel">
      <h2 className="text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-charcoal/84">{description}</p> : null}
      {items.length > 0 ? (
        <ul className="mt-8 grid gap-x-10 gap-y-4 border-l border-stone/80 pl-6 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="text-charcoal/88">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

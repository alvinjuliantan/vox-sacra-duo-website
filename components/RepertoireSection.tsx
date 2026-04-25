type RepertoireSectionProps = {
  title: string;
  items: string[];
  description?: string;
};

export default function RepertoireSection({ title, items, description }: RepertoireSectionProps) {
  return (
    <section className="soft-panel p-8 md:p-10">
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-charcoal/80">{description}</p> : null}
      {items.length > 0 ? (
        <ul className="mt-6 grid gap-x-10 gap-y-3 text-charcoal/88 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="rounded-xl border border-stone/45 bg-white/75 px-4 py-2.5">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

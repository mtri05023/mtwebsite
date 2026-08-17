type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionTitle({ eyebrow, title, description, align = "left", tone = "light" }: SectionTitleProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-navy-900";
  const descriptionClass = tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-600">{eyebrow}</p> : null}
      <h2 className={`text-3xl font-bold leading-tight md:text-4xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}

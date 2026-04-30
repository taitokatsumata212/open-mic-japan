import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`mb-8 ${alignClass}`}>
      {eyebrow && (
        <div className="text-xs tracking-widest uppercase text-omj-primary mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-omj-text leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-omj-sub leading-relaxed">{description}</p>
      )}
    </div>
  );
}

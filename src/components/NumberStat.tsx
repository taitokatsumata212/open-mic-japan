export function NumberStat({
  number,
  label,
  size = "md",
}: {
  number: string;
  label: string;
  size?: "md" | "lg";
}) {
  const numberSize = size === "lg" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl";
  return (
    <div className="text-center">
      <div className={`font-bold text-omj-primary ${numberSize}`}>{number}</div>
      <div className="mt-1 text-sm text-omj-sub">{label}</div>
    </div>
  );
}

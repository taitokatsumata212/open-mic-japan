import Link from "next/link";
import { Fragment } from "react";

export type Crumb = {
  href?: string;
  label: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="パンくず" className="text-xs text-omj-sub">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={`${c.label}-${i}`}>
              <li>
                {c.href && !isLast ? (
                  <Link
                    href={c.href}
                    className="hover:text-omj-primary transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-omj-text">{c.label}</span>
                )}
              </li>
              {!isLast && <li aria-hidden="true">/</li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

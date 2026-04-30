import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";

export type LegalRelated = {
  href: string;
  label: string;
};

const ALL_RELATED: LegalRelated[] = [
  { href: "/legal/commerce", label: "特定商取引法に基づく表記" },
  { href: "/legal/privacy", label: "プライバシーポリシー" },
  { href: "/legal/terms", label: "利用規約" },
];

export function LegalPageShell({
  title,
  enactedAt,
  revisedAt,
  currentHref,
  children,
}: {
  title: string;
  enactedAt?: string;
  revisedAt?: string;
  currentHref: string;
  children: ReactNode;
}) {
  const others = ALL_RELATED.filter((r) => r.href !== currentHref);
  return (
    <>
      <section className="py-12 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { href: "/", label: "ホーム" },
              { label: "法務" },
              { label: title },
            ]}
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-omj-text">
            {title}
          </h1>
          {(enactedAt || revisedAt) && (
            <p className="mt-3 text-xs text-omj-sub">
              {enactedAt && <>制定日：{enactedAt}</>}
              {enactedAt && revisedAt && <span className="mx-2">／</span>}
              {revisedAt && <>最終改定日：{revisedAt}</>}
            </p>
          )}

          <div className="mt-8 max-w-3xl text-omj-text legal-body">
            {children}
          </div>

          <div className="mt-14 pt-8 border-t border-omj-border">
            <p className="text-xs uppercase tracking-widest text-omj-sub mb-3">
              関連ページ
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {others.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-omj-primary hover:underline"
                  >
                    →&nbsp;{r.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-omj-primary hover:underline"
                >
                  →&nbsp;お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

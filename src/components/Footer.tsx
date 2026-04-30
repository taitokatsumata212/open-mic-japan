import Link from "next/link";
import { LineButton } from "./LineButton";
import { CONTACT_EMAIL, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-omj-border bg-white mt-20">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-medium text-omj-text mb-2">Open Mic Japan</p>
          <p className="text-sm text-omj-sub leading-relaxed">
            特定非営利活動法人オープンマイクジャパン
            <br />
            〒155-0031 東京都世田谷区北沢2-30-14 重宗ビル3F
            <br />
            設立：2025年8月22日
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-omj-text mb-3">サイト</p>
          <ul className="space-y-2 text-sm text-omj-sub">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-omj-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/support"
                className="hover:text-omj-primary transition-colors"
              >
                支援する
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-omj-primary transition-colors"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-omj-text mb-3">繋がる</p>
          <LineButton size="sm" />
          <p className="mt-4 text-sm text-omj-sub">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-omj-primary"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-omj-border">
        <div className="max-w-container mx-auto px-5 sm:px-8 py-5 text-xs text-omj-sub">
          © {new Date().getFullYear()} 特定非営利活動法人オープンマイクジャパン
        </div>
      </div>
    </footer>
  );
}

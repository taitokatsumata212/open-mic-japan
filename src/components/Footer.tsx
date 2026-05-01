import Link from "next/link";
import { LineButton } from "./LineButton";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-omj-border bg-white mt-20">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-medium text-omj-text mb-2">オープンマイクジャパン</p>
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
            <li>
              <Link
                href="/activities"
                className="hover:text-omj-primary transition-colors"
              >
                活動
              </Link>
            </li>
            <li>
              <Link
                href="/history"
                className="hover:text-omj-primary transition-colors"
              >
                あゆみ
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-omj-primary transition-colors"
              >
                ギャラリー
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="hover:text-omj-primary transition-colors"
              >
                お知らせ
              </Link>
            </li>
            <li>
              <Link
                href="/voices"
                className="hover:text-omj-primary transition-colors"
              >
                応援者の声
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-omj-primary transition-colors"
              >
                支援する
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-omj-text mb-3">団体について</p>
          <ul className="space-y-2 text-sm text-omj-sub">
            <li>
              <Link
                href="/about"
                className="hover:text-omj-primary transition-colors"
              >
                わたしたちについて
              </Link>
            </li>
            <li>
              <Link
                href="/about/disclosure"
                className="hover:text-omj-primary transition-colors"
              >
                情報公開
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
            <li>
              <Link
                href="/library"
                className="hover:text-omj-primary transition-colors"
              >
                読みもの
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
        <div className="max-w-container mx-auto px-5 sm:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-omj-sub">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link
                href="/legal/commerce"
                className="hover:text-omj-primary transition-colors"
              >
                特定商取引法に基づく表記
              </Link>
            </li>
            <li>
              <Link
                href="/legal/privacy"
                className="hover:text-omj-primary transition-colors"
              >
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms"
                className="hover:text-omj-primary transition-colors"
              >
                利用規約
              </Link>
            </li>
          </ul>
          <div>
            © {new Date().getFullYear()} 特定非営利活動法人オープンマイクジャパン
          </div>
        </div>
      </div>
    </footer>
  );
}

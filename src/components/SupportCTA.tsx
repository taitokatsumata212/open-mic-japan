import Link from "next/link";
import { LineButton } from "./LineButton";

export function SupportCTA() {
  return (
    <section className="bg-white border-y border-omj-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          一緒に場をつくりませんか
        </h2>
        <p className="text-omj-sub leading-relaxed max-w-xl mx-auto">
          会員になる、寄付する、法人として協賛する、まずはLINEで繋がる——
          関わり方はいくつもあります。
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/support"
            className="inline-flex items-center px-6 py-3 rounded-md bg-omj-primary hover:bg-omj-primary-dark text-white font-medium transition-colors"
          >
            支援する
          </Link>
          <LineButton />
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-md border border-omj-border hover:border-omj-primary text-omj-text font-medium transition-colors"
          >
            法人協賛を相談する
          </Link>
        </div>
      </div>
    </section>
  );
}

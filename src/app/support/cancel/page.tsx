import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata = {
  title: "お申し込みをキャンセルしました",
};

export default function CancelPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-omj-sub mb-2">
            Cancelled
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-omj-text">
            お申し込みをキャンセルしました
          </h1>
          <p className="mt-6 text-omj-text leading-loose">
            決済は行われていません。引き続き、ご無理のない範囲でご検討ください。
          </p>
          <p className="mt-3 text-sm text-omj-sub leading-relaxed">
            ご不明点があれば{" "}
            <Link href="/contact" className="text-omj-primary underline">
              お問い合わせ
            </Link>{" "}
            または LINE 公式アカウントよりお気軽にご連絡ください。
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/support"
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-omj-primary hover:bg-omj-primary-dark text-white font-medium text-sm transition-colors"
            >
              支援ページに戻る
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 rounded-md border border-omj-border hover:border-omj-primary text-omj-text font-medium text-sm transition-colors"
            >
              ホームへ戻る
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

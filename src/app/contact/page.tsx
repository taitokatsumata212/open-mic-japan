import { Container } from "@/components/Container";
import { LineButton } from "@/components/LineButton";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "お問い合わせ",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            Contact
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            お問い合わせ
          </h1>
          <p className="mt-6 text-omj-sub leading-loose">
            会員制度・法人協賛・取材・出演・地域開催のご相談など、なんでもお気軽にご連絡ください。
          </p>

          <div className="mt-10 space-y-8">
            <div className="rounded-lg border border-omj-border p-7 bg-white">
              <p className="text-sm text-omj-sub mb-2">メール</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xl font-medium text-omj-primary hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-3 text-sm text-omj-sub leading-relaxed">
                お名前・ご所属・ご用件をお書き添えのうえ、メールにてご連絡ください。通常2〜3営業日以内にお返事します。
              </p>
            </div>

            <div className="rounded-lg border border-omj-border p-7 bg-white">
              <p className="text-sm text-omj-sub mb-3">LINE 公式アカウント</p>
              <LineButton size="lg" />
              <p className="mt-3 text-sm text-omj-sub leading-relaxed">
                気軽な質問や、まずは話だけ聞きたい方は LINE
                でも受け付けています。
              </p>
            </div>

            <div className="rounded-lg border border-omj-border p-7 bg-omj-base">
              <p className="text-sm text-omj-sub mb-2">団体情報</p>
              <p className="text-omj-text leading-relaxed">
                特定非営利活動法人オープンマイクジャパン
                <br />
                〒155-0031 東京都世田谷区北沢2-30-14 重宗ビル3F
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

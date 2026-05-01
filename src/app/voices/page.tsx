import { Container } from "@/components/Container";
import { SupportCTA } from "@/components/SupportCTA";
import { voices } from "@/data/voices";

export const metadata = {
  title: "応援者の声",
};

export default function VoicesPage() {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            Voices
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            応援者の声
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            SOY-POY の長期メンバー、地域パートナー、協賛パートナーなど——オープンマイクジャパン の活動を支えてくださっている方々からのメッセージを順次掲載していきます。
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {voices.length === 0 ? (
            <div className="rounded-lg border border-dashed border-omj-border p-12 text-center bg-white">
              <p className="text-omj-text font-medium mb-2">
                現在準備中です
              </p>
              <p className="text-sm text-omj-sub leading-relaxed max-w-md mx-auto">
                応援者の方々からのメッセージは、2026年5月以降に順次公開予定です。
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {voices.map((v) => (
                <blockquote
                  key={v.id}
                  className="rounded-lg border border-omj-border p-7 bg-white"
                >
                  <p className="text-omj-text leading-relaxed">{v.body}</p>
                  <footer className="mt-5 text-sm text-omj-sub">
                    {v.name}
                    {v.affiliation && (
                      <span className="ml-2">／ {v.affiliation}</span>
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

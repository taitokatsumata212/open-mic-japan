import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LineButton } from "@/components/LineButton";
import { NumberStat } from "@/components/NumberStat";
import { ActivityIllustration } from "@/components/activities/Illustrations";
import { OtherActivities } from "@/components/activities/OtherActivities";
import { activities, getActivity, type Activity } from "@/data/activities";

type Params = { slug: Activity["slug"] };

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  try {
    const a = getActivity(slug);
    return { title: a.title, description: a.summary };
  } catch {
    return { title: "事業紹介" };
  }
}

const VALID_SLUGS = activities.map((a) => a.slug);

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) notFound();
  const activity = getActivity(slug);

  return (
    <>
      <section className="py-12 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { href: "/", label: "ホーム" },
              { href: "/activities", label: "事業紹介" },
              { label: activity.title },
            ]}
          />
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-widest text-omj-primary font-bold mb-2">
                {activity.number}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-omj-text">
                {activity.title}
              </h1>
              <div className="mt-7 prose-omj text-omj-text">
                {activity.lead.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-omj-base p-8 md:p-10">
                <ActivityIllustration type={activity.illustration} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {activity.values.length > 0 && (
        <section className="bg-white border-y border-omj-border py-14">
          <Container>
            <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
              Values
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              この事業で大切にしていること
            </h2>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {activity.values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-5 rounded-lg border border-omj-border bg-omj-base"
                >
                  <span className="shrink-0 mt-0.5 text-omj-primary font-bold text-sm">
                    0{i + 1}
                  </span>
                  <p className="text-sm text-omj-text leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {activity.examples.length > 0 && (
        <section className="py-14">
          <Container>
            <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
              Examples
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              具体的な取り組み
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {activity.examples.map((ex, i) => (
                <article
                  key={i}
                  className="p-6 rounded-lg border border-omj-border bg-white"
                >
                  <h3 className="font-bold text-omj-text mb-2">{ex.title}</h3>
                  <p className="text-sm text-omj-text leading-relaxed">
                    {ex.body}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {activity.stats && activity.stats.length > 0 && (
        <section className="bg-white border-y border-omj-border py-12">
          <Container>
            <div
              className={`grid gap-6 md:gap-8 ${
                activity.stats.length === 1
                  ? "grid-cols-1"
                  : activity.stats.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {activity.stats.map((s, i) => (
                <NumberStat key={i} number={s.number} label={s.label} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-14">
        <Container>
          <div className="rounded-lg border border-omj-border bg-omj-base p-7 md:p-9">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-omj-text">
              もっと知る・関わる
            </h2>
            <p className="text-omj-sub leading-relaxed mb-6 max-w-2xl">
              ご質問・出張のご相談・パートナーとしての関わりなど、
              気になることがあれば気軽にご連絡ください。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <LineButton />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-omj-border hover:border-omj-primary text-omj-text font-medium transition-colors"
              >
                お問い合わせ
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-omj-primary hover:bg-omj-primary-dark text-white font-medium transition-colors"
              >
                支援する
              </Link>
            </div>

            {activity.relatedLinks && activity.relatedLinks.length > 0 && (
              <div className="pt-4 border-t border-omj-border">
                <p className="text-xs uppercase tracking-widest text-omj-sub mb-3">
                  関連ページ
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {activity.relatedLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-omj-primary hover:underline inline-flex items-center gap-1"
                      >
                        →&nbsp;{l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      <OtherActivities currentSlug={activity.slug} />
    </>
  );
}

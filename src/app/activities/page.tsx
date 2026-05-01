import { Container } from "@/components/Container";
import { SupportCTA } from "@/components/SupportCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ActivityCard } from "@/components/activities/ActivityCard";
import { activities } from "@/data/activities";

export const metadata = {
  title: "活動",
};

export default function ActivitiesIndexPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <Container>
          <Breadcrumb
            items={[
              { href: "/", label: "ホーム" },
              { label: "活動" },
            ]}
          />
          <p className="mt-6 text-xs tracking-widest uppercase text-omj-primary mb-2">
            Activities
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            活動
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            オープンマイクという実践を社会にひらいていく、4つの取り組み。
            それぞれをクリックすると、詳細ページに進みます。
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-5">
            {activities.map((a) => (
              <ActivityCard key={a.slug} activity={a} />
            ))}
          </div>
        </Container>
      </section>

      <SupportCTA />
    </>
  );
}

import Link from "next/link";
import { getOtherActivities, type Activity } from "@/data/activities";
import { ActivityCard } from "./ActivityCard";

export function OtherActivities({ currentSlug }: { currentSlug: Activity["slug"] }) {
  const others = getOtherActivities(currentSlug);

  return (
    <section className="bg-white border-y border-omj-border py-14">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-3">
          <div>
            <p className="text-xs tracking-widest uppercase text-omj-primary mb-1">
              Other activities
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-omj-text">
              他の事業も見る
            </h2>
          </div>
          <Link
            href="/activities"
            className="text-sm text-omj-primary hover:underline"
          >
            事業紹介一覧へ戻る →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {others.map((a) => (
            <ActivityCard key={a.slug} activity={a} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}

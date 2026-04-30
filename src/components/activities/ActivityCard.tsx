import Link from "next/link";
import type { Activity } from "@/data/activities";
import { ActivityIllustration } from "./Illustrations";

export function ActivityCard({
  activity,
  variant = "full",
}: {
  activity: Activity;
  /**
   * full = 一覧用（イラスト＋本文）
   * compact = ページ末尾の「他の事業を見る」用
   */
  variant?: "full" | "compact";
}) {
  if (variant === "compact") {
    return (
      <Link
        href={`/activities/${activity.slug}`}
        className="group block rounded-lg border border-omj-border bg-white p-5 hover:border-omj-primary transition-colors"
      >
        <p className="text-xs tracking-widest text-omj-primary font-medium mb-1">
          {activity.number}
        </p>
        <p className="font-bold text-omj-text group-hover:text-omj-primary transition-colors">
          {activity.title}
        </p>
        <p className="mt-2 text-xs text-omj-sub leading-relaxed line-clamp-2">
          {activity.summary}
        </p>
        <span className="mt-3 inline-block text-xs text-omj-primary">
          詳しく見る →
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/activities/${activity.slug}`}
      className="group block rounded-lg border border-omj-border bg-white overflow-hidden hover:border-omj-primary transition-colors"
    >
      <div className="aspect-[16/9] bg-omj-base p-4 md:p-5 flex items-center justify-center">
        <div className="w-full max-w-[420px]">
          <ActivityIllustration type={activity.illustration} />
        </div>
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-xs tracking-widest text-omj-primary font-bold">
            {activity.number}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-omj-text group-hover:text-omj-primary transition-colors">
            {activity.title}
          </h3>
        </div>
        <p className="text-sm text-omj-text leading-relaxed">
          {activity.summary}
        </p>
        <span className="mt-4 inline-block text-sm text-omj-primary font-medium">
          詳しく見る →
        </span>
      </div>
    </Link>
  );
}

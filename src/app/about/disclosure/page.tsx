import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "情報公開",
};

type DocStatus = "published" | "preparing" | "scheduled";

const statusLabel: Record<DocStatus, { text: string; cls: string }> = {
  published: { text: "公開済み", cls: "bg-omj-primary text-white" },
  preparing: { text: "準備中", cls: "bg-omj-border text-omj-sub" },
  scheduled: { text: "公開予定", cls: "bg-omj-accent text-white" },
};

type Doc = {
  title: string;
  description?: string;
  status: DocStatus;
  schedule?: string;
  href?: string;
};

const groups: { heading: string; docs: Doc[] }[] = [
  {
    heading: "1. 法人情報",
    docs: [
      {
        title: "団体概要・役員一覧",
        description:
          "法人名、本部事務局所在地、設立日、活動領域、役員名簿などの基本情報。",
        status: "published",
        href: "/about#organization",
      },
      {
        title: "定款",
        description:
          "特定非営利活動法人オープンマイクジャパン定款。請求があり次第、PDFでお渡しします。",
        status: "preparing",
      },
      {
        title: "設立趣意書",
        description:
          "法人設立の背景・理念・目的を記したドキュメント。",
        status: "preparing",
      },
    ],
  },
  {
    heading: "2. 事業計画・予算",
    docs: [
      {
        title: "2025年度 事業計画書",
        description: "設立初年度の事業計画。",
        status: "preparing",
      },
      {
        title: "2025年度 活動予算書",
        description: "設立初年度の予算書。",
        status: "preparing",
      },
      {
        title: "2026年度 事業計画書",
        description: "2026年4月〜2027年3月の事業計画。",
        status: "scheduled",
        schedule: "2026年4月公開予定",
      },
      {
        title: "2026年度 活動予算書",
        description: "2026年4月〜2027年3月の予算書。",
        status: "scheduled",
        schedule: "2026年4月公開予定",
      },
    ],
  },
  {
    heading: "3. 事業報告・決算",
    docs: [
      {
        title: "2025年度 事業報告書",
        description:
          "2025年8月（設立）〜2026年3月の活動実績。社員総会承認後に公開します。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "2025年度 活動計算書（損益計算書）",
        description: "2025年度の収益・費用の計算書。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "2025年度 貸借対照表",
        description: "2025年度末の資産・負債・正味財産。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "2025年度 財産目録",
        description: "2025年度末の財産目録。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "2025年度 監事監査報告書",
        description: "監事による会計および業務監査の報告書。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
    ],
  },
  {
    heading: "4. 助成・協賛・支援者",
    docs: [
      {
        title: "助成金・補助金の採択履歴",
        description:
          "公的助成・民間助成の採択状況。採択後に随時更新します。",
        status: "preparing",
      },
      {
        title: "法人パートナー一覧",
        description: "協賛いただいている法人さま。契約後に随時掲載します。",
        status: "preparing",
        href: "/support",
      },
    ],
  },
];

export default function DisclosurePage() {
  return (
    <>
      <section className="py-12 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { href: "/", label: "ホーム" },
              { href: "/about", label: "About" },
              { label: "情報公開" },
            ]}
          />
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <p className="text-xs tracking-widest uppercase text-omj-primary mb-2">
            Disclosure
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            情報公開
          </h1>
          <p className="mt-6 text-omj-sub leading-loose max-w-2xl">
            特定非営利活動法人オープンマイクジャパンは、法令に基づき、定款・役員名簿・事業計画・事業報告・決算等の情報を公開しています。本ページに公開していない書類についても、ご請求があれば遅滞なくお渡しします。
          </p>
          <p className="mt-3 text-sm text-omj-sub max-w-2xl">
            2025年8月22日に設立されたばかりの団体のため、年次報告類は順次公開していきます。書類を個別にご希望される方は、
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-omj-primary underline"
            >
              {CONTACT_EMAIL}
            </a>
            までお問い合わせください。
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="space-y-10">
            {groups.map((group) => (
              <div key={group.heading}>
                <h2 className="text-lg md:text-xl font-bold mb-4 text-omj-text border-l-4 border-omj-primary pl-3">
                  {group.heading}
                </h2>
                <ul className="divide-y divide-omj-border bg-white rounded-lg border border-omj-border">
                  {group.docs.map((doc) => {
                    const badge = statusLabel[doc.status];
                    return (
                      <li
                        key={doc.title}
                        className="px-5 sm:px-6 py-5 flex flex-col sm:flex-row gap-3 sm:items-start sm:justify-between"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${badge.cls}`}
                            >
                              {badge.text}
                            </span>
                            {doc.schedule && (
                              <span className="text-[11px] text-omj-sub">
                                {doc.schedule}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 font-medium text-omj-text">
                            {doc.title}
                          </p>
                          {doc.description && (
                            <p className="mt-1 text-sm text-omj-sub leading-relaxed">
                              {doc.description}
                            </p>
                          )}
                        </div>
                        {doc.href && (
                          <Link
                            href={doc.href}
                            className="shrink-0 inline-flex items-center text-sm text-omj-primary hover:underline"
                          >
                            詳しく見る →
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-omj-border">
            <p className="text-xs uppercase tracking-widest text-omj-sub mb-3">
              関連ページ
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-omj-primary hover:underline"
                >
                  →&nbsp;1ページでわかるオープンマイクジャパン
                </Link>
              </li>
              <li>
                <Link
                  href="/about#roadmap"
                  className="text-sm text-omj-primary hover:underline"
                >
                  →&nbsp;ロードマップ（Phase 1〜4）
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-omj-primary hover:underline"
                >
                  →&nbsp;支援する
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-omj-primary hover:underline"
                >
                  →&nbsp;お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}

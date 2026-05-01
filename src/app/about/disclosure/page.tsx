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
  /** 内部リンク または PDF URL */
  href?: string;
  /** 外部 PDF か。true の場合はダウンロードアイコン表示 */
  isPdf?: boolean;
};

const groups: { heading: string; docs: Doc[] }[] = [
  {
    heading: "1. 法人情報",
    docs: [
      {
        title: "団体概要・役員一覧",
        description:
          "法人名、本部事務局所在地、設立日、会社法人等番号、事業年度、役員名簿などの基本情報。",
        status: "published",
        href: "/about#organization",
      },
      {
        title: "定款",
        description:
          "特定非営利活動法人オープンマイクジャパン定款（2025年8月22日施行）。法人の名称・目的・事業・会員・役員・会議・資産・会計・解散等を定めた基本規程。",
        status: "published",
        href: "/documents/teikan.pdf",
        isPdf: true,
      },
      {
        title: "法人登記簿（全部事項証明書）",
        description:
          "東京法務局による登記事項全部証明書。会社法人等番号 0109-05-004823、法人成立 2025年8月22日。",
        status: "published",
        href: "/documents/touki.pdf",
        isPdf: true,
      },
      {
        title: "設立趣旨書",
        description:
          "法人設立の背景・理念・目的を記したドキュメント。アーティスト支援と地域文化振興の必要性、NPO 法人化の意義を整理。",
        status: "published",
        href: "/documents/shushisho.pdf",
        isPdf: true,
      },
    ],
  },
  {
    heading: "2. 事業計画・予算",
    docs: [
      {
        title: "令和7年度 事業計画書（設立年度）",
        description:
          "法人成立日（2025年8月22日）〜2026年3月31日の事業計画。オープンマイクを中心としたコミュニティ形成、公共の場での実施、ウェブメディア発信。",
        status: "published",
        href: "/documents/jigyou-keikaku-r7.pdf",
        isPdf: true,
      },
      {
        title: "令和7年度 活動予算書（設立年度）",
        description: "設立年度の予算。事業費総額 約2,030千円。",
        status: "published",
        href: "/documents/yosan-r7.pdf",
        isPdf: true,
      },
      {
        title: "令和8年度 事業計画書",
        description: "2026年4月1日〜2027年3月31日の事業計画。",
        status: "published",
        href: "/documents/jigyou-keikaku-r8.pdf",
        isPdf: true,
      },
      {
        title: "令和8年度 活動予算書",
        description: "2026年度の予算書。",
        status: "published",
        href: "/documents/yosan-r8.pdf",
        isPdf: true,
      },
    ],
  },
  {
    heading: "3. 事業報告・決算",
    docs: [
      {
        title: "令和7年度 事業報告書",
        description:
          "2025年8月22日（設立）〜2026年3月31日の活動実績。社員総会承認後に公開します。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "令和7年度 活動計算書（損益計算書）",
        description: "令和7年度の収益・費用の計算書。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "令和7年度 貸借対照表",
        description: "令和7年度末の資産・負債・正味財産。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "令和7年度 財産目録",
        description: "令和7年度末の財産目録。",
        status: "scheduled",
        schedule: "2026年6月公開予定",
      },
      {
        title: "令和7年度 監事監査報告書",
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
            2025年8月22日に設立されたばかりの団体のため、初年度の事業報告・決算は2026年6月以降に順次公開します。書類を個別にご希望される方は、
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

      <section className="bg-white border-y border-omj-border py-10">
        <Container>
          <h2 className="text-base md:text-lg font-bold mb-4 text-omj-text">
            法人基本情報
          </h2>
          <div className="overflow-hidden rounded-lg border border-omj-border">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["正式名称", "特定非営利活動法人オープンマイクジャパン"],
                  ["所轄庁", "東京都"],
                  ["認証申請日", "2025年2月9日"],
                  ["設立年月日", "2025年8月22日（令和7年8月22日 登記）"],
                  [
                    "主たる事務所",
                    "〒155-0031 東京都世田谷区北沢二丁目30番14号 重宗ビル3F",
                  ],
                  ["会社法人等番号", "0109-05-004823"],
                  ["事業年度", "毎年4月1日〜翌年3月31日（設立当初は2025年8月22日〜2026年3月31日）"],
                  ["代表者", "理事長　荒木美月"],
                  ["公告方法", "官報による公告（貸借対照表は当法人ホームページにて公告）"],
                ].map(([k, v]) => (
                  <tr
                    key={k}
                    className="border-b border-omj-border last:border-0"
                  >
                    <th className="text-left bg-omj-base font-medium px-4 py-3 w-44 text-omj-text align-top">
                      {k}
                    </th>
                    <td className="px-4 py-3 text-omj-text align-top">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <h2 className="text-base md:text-lg font-bold mb-4 text-omj-text">
            事業の種類（定款 第5条）
          </h2>
          <ol className="space-y-2 text-sm text-omj-text rounded-lg border border-omj-border bg-white p-5 md:p-6 list-decimal pl-9">
            <li>
              コミュニティスペースの運営及びその場所における演奏会、コンサート、個展、展示会等の開催およびアーティストへの支援
            </li>
            <li>
              公共の場を活用したアーティストコミュニティの形成・活動支援、講習会等の実施
            </li>
            <li>
              この法人のウェブサイト及びウェブメディアを制作・運営し、アーティストや地域活動を発信
            </li>
            <li>その他目的を達成するために必要な事業</li>
          </ol>
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
                        {doc.href && doc.isPdf && (
                          <a
                            href={doc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 inline-flex items-center gap-1 text-sm text-omj-primary hover:underline"
                          >
                            PDF を開く ↗
                          </a>
                        )}
                        {doc.href && !doc.isPdf && (
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

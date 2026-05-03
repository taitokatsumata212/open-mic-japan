import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const OG_TITLE = "NPO法人オープンマイクジャパン | 声を、ひらく場をつくる";
const OG_DESCRIPTION =
  "オープンマイクという実践を通じて、人と人、表現と創作、都市と地方をつないでいく NPO 法人です。";
const OG_IMAGE = "/images/openmic-mizuha-01.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://openmicjapan.com"),
  title: {
    default: "オープンマイクジャパン｜声を、ひらく場をつくる。",
    template: "%s｜オープンマイクジャパン",
  },
  description:
    "NPO法人オープンマイクジャパン。オープンマイクという実践を通じて、人と人、表現と創作、都市と地方をつないでいく団体です。",
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://openmicjapan.com",
    siteName: "オープンマイクジャパン",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1600,
        height: 1068,
        alt: "オープンマイクジャパンの開催風景",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId="G-MELVQD30T8" />
      </body>
    </html>
  );
}

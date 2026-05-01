# Open Mic Japan ウェブサイト

NPO法人オープンマイクジャパンの公式サイト。Next.js (App Router, TypeScript) + Tailwind CSS で構築。

## 仮ドメイン公開について

このリポジトリは **Vercel 仮ドメインで先行公開** することを前提としています。検索エンジンには登録されない設定（`robots.txt` で全 Disallow + `noindex, nofollow` メタ）になっています。本ドメインへ切り替える際は最後のセクションを参照してください。

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで <http://localhost:3000> を開く。

## ビルド

```bash
npm run build
npm start
```

## ディレクトリ構成

```
content/
  news/                  ← お知らせ記事（マークダウン）
  _drafts/               ← 法人化以前の文案ドラフト（公開対象外）
public/
  images/                ← 写真ファイル
  robots.txt             ← noindex 設定
src/
  app/                   ← App Router ページ
  components/            ← 共通コンポーネント
  data/
    gallery.ts           ← 写真ギャラリーのメタデータ配列
    voices.ts            ← 応援者の声データ
  lib/
    constants.ts         ← LINE URL・連絡先などの定数
    news.ts              ← マークダウンの読み込み・変換
```

## デプロイ（Vercel）

1. GitHub にリポジトリを作成して push
2. <https://vercel.com/new> から該当リポジトリを Import
3. Framework Preset は自動で **Next.js** が選択される
4. Environment Variables なし（v1 時点）
5. デプロイ完了後、`*.vercel.app` の仮ドメインで公開

## お知らせ（News）の追加方法

`content/news/` に `YYYY-MM-DD-slug.md` 形式でファイルを作成。

```markdown
---
title: 記事タイトル
date: 2026-05-15
category: announcement   # announcement | event | report | media | partner
excerpt: 一覧やOG向けの短い説明文
---

本文（Markdown）。リンクは [テキスト](/about) のように書ける。
```

## 写真の差し替え方

1. `public/images/` に画像を配置（例：`event-soypoy-01.jpg`）
2. `src/data/gallery.ts` を編集
   - 既存項目の `src: null` を `src: "/images/event-soypoy-01.jpg"` に変更
   - 新規項目を配列に追加
3. 許諾が取れない写真は配列から削除、または `src: null` に戻すだけで非表示になります

写真選別のガイドラインは `public/images/README.md` を参照。

## 応援者の声（Voices）の追加方法

`src/data/voices.ts` の `voices` 配列に項目を追加。配列が空の間は「準備中」表記が出るようになっています。

## 本ドメインへの切り替え時にやること

仮ドメイン公開を解除して検索エンジンに公開する際の手順：

1. **`public/robots.txt`** を編集
   ```
   User-agent: *
   Allow: /

   Sitemap: https://本ドメイン/sitemap.xml
   ```
2. **`src/app/layout.tsx`** の `metadata.robots` から `index: false, follow: false` を削除（または `index: true, follow: true` に変更）
3. **OGP 画像・ファビコン** を `public/` 直下に配置（`favicon.ico`, `og-image.png` など）し、`metadata` を拡張
4. Vercel 側でカスタムドメインを設定
5. 必要に応じて `sitemap.ts` を追加

## 仕様メモ

- カラー：`#C75A4D`（メイン）/ `#2C3E5C`（アクセント）/ `#06C755`（LINE）
- フォント：Noto Sans JP（`next/font/google`）
- LINE 友だち追加 URL：<https://lin.ee/qpamCfh>
- メール：`info@openmicjapan.com`（`src/lib/constants.ts` で集中管理）
- SOY-POY は法人として別組織。「協力団体」「協力拠点」と表記する

## ドラフト原稿の置き場所

法人化以前にチームで検討していた文案は `content/_drafts/` 以下に保管しています。サイトのビルドには影響しません。

## Phase 2 以降の予定

- Notion CMS 連携（お知らせの動的化）
- Stripe Subscription / 単発寄付の決済導線
- お問い合わせフォーム送信機能
- ロゴ画像差し替え（現状はテキストロゴ）
- ファビコン・OGP 画像

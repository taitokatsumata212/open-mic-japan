"use client";

import { useState } from "react";

/**
 * 既存会員/サポーター向け：メールアドレスで Stripe Customer Portal に飛ぶ。
 */
export function PortalLink() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handle = async () => {
    setError(null);
    if (!email.trim()) {
      setError("メールアドレスを入力してください");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "ポータルを開けませんでした");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "エラーが発生しました");
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-omj-border bg-omj-base p-5 md:p-6">
      <p className="text-sm font-medium text-omj-text mb-1">
        すでに会員 / サポーターの方
      </p>
      <p className="text-xs text-omj-sub leading-relaxed mb-3">
        登録時のメールアドレスを入力すると、解約・カード変更・領収書ダウンロードができるポータルが開きます。
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          className="flex-1 px-3 py-2.5 min-h-[44px] rounded-md border border-omj-border bg-white text-omj-text focus:outline-none focus:border-omj-primary"
        />
        <button
          type="button"
          onClick={handle}
          disabled={loading}
          className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-md bg-omj-text hover:bg-black text-white font-medium text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "..." : "ポータルを開く"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs text-omj-primary leading-relaxed">{error}</p>
      )}
    </div>
  );
}

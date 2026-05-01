"use client";

import { useState } from "react";

const PRESETS = [1000, 3000, 5000, 10000];
const MIN = 500;
const MAX = 100_000;

export function DonationForm() {
  const [amount, setAmount] = useState<number>(3000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handle = async () => {
    setError(null);
    if (!Number.isFinite(amount) || amount < MIN || amount > MAX) {
      setError(`寄付額は ${MIN.toLocaleString()}円 〜 ${MAX.toLocaleString()}円 の範囲で指定してください`);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "donation_onetime", amount }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "決済の開始に失敗しました");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "エラーが発生しました");
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-omj-border bg-white p-6 md:p-7">
      <p className="text-sm font-medium text-omj-text mb-3">
        金額を選ぶ（または自由に入力）
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {PRESETS.map((v) => {
          const active = amount === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => setAmount(v)}
              className={`px-3 py-2.5 min-h-[44px] rounded-md text-sm font-medium transition-colors tabular-nums ${
                active
                  ? "bg-omj-primary text-white border-omj-primary"
                  : "border border-omj-border text-omj-text bg-white hover:border-omj-primary"
              }`}
            >
              {v.toLocaleString()}円
            </button>
          );
        })}
      </div>
      <label className="block">
        <span className="block text-xs text-omj-sub mb-1.5">
          自由入力（{MIN.toLocaleString()}円 〜 {MAX.toLocaleString()}円）
        </span>
        <div className="flex items-center gap-2">
          <input
            type="number"
            inputMode="numeric"
            min={MIN}
            max={MAX}
            step={100}
            value={amount}
            onChange={(e) => setAmount(Math.floor(Number(e.target.value) || 0))}
            className="flex-1 px-3 py-2.5 min-h-[44px] rounded-md border border-omj-border bg-white text-omj-text tabular-nums focus:outline-none focus:border-omj-primary"
          />
          <span className="text-sm text-omj-sub">円</span>
        </div>
      </label>

      <button
        type="button"
        onClick={handle}
        disabled={loading}
        className="mt-5 inline-flex items-center justify-center w-full md:w-auto px-6 py-3 min-h-[48px] rounded-md bg-omj-primary hover:bg-omj-primary-dark text-white font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "リダイレクト中…" : `${amount.toLocaleString()}円を寄付する`}
      </button>

      {error && (
        <p className="mt-3 text-xs text-omj-primary leading-relaxed">{error}</p>
      )}
    </div>
  );
}

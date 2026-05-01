"use client";

import { useState } from "react";
import type { CheckoutPlanKey } from "@/lib/stripe";

export function CheckoutButton({
  plan,
  label,
  variant = "primary",
  className = "",
}: {
  plan: CheckoutPlanKey;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handle = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "決済の開始に失敗しました");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "エラーが発生しました");
      setLoading(false);
    }
  };

  const base =
    "inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] rounded-md font-medium text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-omj-primary hover:bg-omj-primary-dark text-white"
      : "border border-omj-border hover:border-omj-primary text-omj-text bg-white";

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handle}
        disabled={loading}
        className={`${base} ${styles}`}
      >
        {loading ? "リダイレクト中…" : label}
      </button>
      {error && (
        <p className="mt-2 text-xs text-omj-primary leading-relaxed">{error}</p>
      )}
    </div>
  );
}

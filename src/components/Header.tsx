"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-omj-base/90 backdrop-blur border-b border-omj-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group flex flex-col leading-none text-omj-text hover:text-omj-primary transition-colors"
        >
          <span className="text-[10px] font-bold tracking-[0.18em] text-omj-sub group-hover:text-omj-primary transition-colors">
            NPO法人
          </span>
          <span className="mt-0.5 text-lg font-bold tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-omj-text hover:text-omj-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/support"
            className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-omj-primary hover:bg-omj-primary-dark text-white text-sm font-medium transition-colors"
          >
            支援する
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          aria-label="メニューを開く"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">メニュー</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-omj-border bg-omj-base">
          <div className="max-w-container mx-auto px-5 sm:px-8 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-omj-text hover:text-omj-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/support"
              className="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-omj-primary text-white font-medium"
              onClick={() => setOpen(false)}
            >
              支援する
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

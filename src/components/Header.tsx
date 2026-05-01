"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-omj-base/90 backdrop-blur border-b border-omj-border">
      <div className="max-w-container mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group flex flex-col leading-none text-omj-text hover:text-omj-primary transition-colors"
          onClick={handleLogoClick}
        >
          <span className="text-[10px] font-bold tracking-[0.18em] text-omj-sub group-hover:text-omj-primary transition-colors">
            NPO法人
          </span>
          <span className="mt-0.5 text-base sm:text-lg font-bold tracking-tight">
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

        <div className="lg:hidden flex items-center gap-1">
          <Link
            href="/support"
            onClick={() => setOpen(false)}
            className="inline-flex items-center px-3 h-10 rounded-md bg-omj-primary hover:bg-omj-primary-dark text-white text-sm font-medium transition-colors"
          >
            支援
          </Link>
          <button
            type="button"
            className="p-2.5 -mr-2 inline-flex items-center justify-center w-11 h-11"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
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
      </div>

      <nav
        id="mobile-nav"
        className={`lg:hidden border-t border-omj-border bg-omj-base overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="max-w-container mx-auto px-5 sm:px-8 py-3 flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 min-h-[44px] flex items-center text-base text-omj-text hover:text-omj-primary border-b border-omj-border last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/support"
            className="mt-4 mb-2 inline-flex items-center justify-center min-h-[48px] px-4 rounded-md bg-omj-primary text-white font-medium"
            onClick={() => setOpen(false)}
          >
            支援する
          </Link>
        </div>
      </nav>
    </header>
  );
}

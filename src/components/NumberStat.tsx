"use client";

import { useEffect, useRef, useState } from "react";

type Segment =
  | { type: "digit"; target: string }
  | { type: "static"; text: string };

function parseSegments(input: string): Segment[] {
  const out: Segment[] = [];
  let buf = "";
  let bufKind: "digit" | "static" | null = null;
  for (const ch of input) {
    const isDigit = /[0-9]/.test(ch);
    const kind: "digit" | "static" = isDigit ? "digit" : "static";
    if (bufKind === null || bufKind === kind) {
      buf += ch;
      bufKind = kind;
    } else {
      if (bufKind === "digit") out.push({ type: "digit", target: buf });
      else out.push({ type: "static", text: buf });
      buf = ch;
      bufKind = kind;
    }
  }
  if (buf) {
    if (bufKind === "digit") out.push({ type: "digit", target: buf });
    else out.push({ type: "static", text: buf });
  }
  return out;
}

function AnimatedDigits({
  target,
  active,
  duration = 1200,
}: {
  target: string;
  active: boolean;
  duration?: number;
}) {
  const [displayed, setDisplayed] = useState(() =>
    target
      .split("")
      .map(() => "0")
      .join("")
  );
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    const startTime = performance.now();
    const targetDigits = target.split("");

    let raf = 0;
    const tick = () => {
      const now = performance.now();
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // Each digit settles at staggered times (later digits settle later)
      const next = targetDigits.map((td, i) => {
        const settleAt = (i + 1) / (targetDigits.length + 1);
        if (t >= settleAt) return td;
        return Math.floor(Math.random() * 10).toString();
      });
      setDisplayed(next.join(""));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplayed(target);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return <span className="tabular-nums">{displayed}</span>;
}

export function NumberStat({
  number,
  label,
  size = "md",
}: {
  number: string;
  label: string;
  size?: "md" | "lg";
}) {
  const numberSize =
    size === "lg"
      ? "text-5xl sm:text-6xl md:text-7xl"
      : "text-4xl sm:text-5xl md:text-6xl";

  const segments = parseSegments(number);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center group"
    >
      <div
        className={`font-bold text-omj-primary leading-none tracking-tight ${numberSize}`}
      >
        {segments.map((seg, i) =>
          seg.type === "digit" ? (
            <AnimatedDigits
              key={i}
              target={seg.target}
              active={active}
              duration={1200 + i * 120}
            />
          ) : (
            <span
              key={i}
              className="text-omj-sub text-[0.32em] align-baseline ml-1 font-medium tracking-wider"
            >
              {seg.text}
            </span>
          )
        )}
      </div>
      <div className="mt-3 h-px w-12 bg-omj-primary/40" />
      <div className="mt-3 text-xs sm:text-sm text-omj-sub tracking-wide leading-relaxed max-w-[160px]">
        {label}
      </div>
    </div>
  );
}

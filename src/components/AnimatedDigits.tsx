"use client";

import { useEffect, useRef, useState } from "react";

/**
 * NumberStat の AnimatedDigits を、ラベル無し・スタイル自由で
 * 単独で使えるようにした版。viewport に入った瞬間に
 * 0 → ターゲット数字へスロットマシン的に切り替わる。
 */
export function AnimatedDigits({
  target,
  duration = 1200,
  className,
}: {
  target: string;
  duration?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState(() =>
    target
      .split("")
      .map((c) => (/[0-9]/.test(c) ? "0" : c))
      .join("")
  );
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

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
      const next = targetDigits.map((td, i) => {
        if (!/[0-9]/.test(td)) return td;
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

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {displayed}
    </span>
  );
}

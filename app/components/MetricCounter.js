'use client';

import { useEffect, useRef, useState } from 'react';

function parse(value) {
  const str = String(value);
  const prefix = str.match(/^[^0-9]*/)?.[0] ?? '';
  const suffix = str.match(/[^0-9.]+$/)?.[0] ?? '';
  const num = parseFloat(str.replace(/[^0-9.]/g, ''));
  const decimals = (str.match(/\.(\d+)/) ?? [, ''])[1].length;
  return { prefix, suffix, num, decimals };
}

export default function MetricCounter({ value }) {
  const { prefix, suffix, num, decimals } = parse(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplay(parseFloat((ease * num).toFixed(decimals)));
          if (p < 1) rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [num, decimals]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display);

  return (
    <span ref={ref} className="text-4xl font-light tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
}

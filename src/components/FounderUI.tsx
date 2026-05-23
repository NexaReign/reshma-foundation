"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && setInView(true));
    }, options || { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref.current]);
  return { ref, inView } as const;
}

export function CountUp({ from = 0, to, duration = 1200, className = '' }: { from?: number; to: number; duration?: number; className?: string }) {
  const [value, setValue] = useState(from);
  const start = useRef<number | null>(null);
  useEffect(() => {
    let raf = 0;
    const step = (ts: number) => {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      setValue(Math.floor(from + (to - from) * progress));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span className={className}>{value.toLocaleString()}</span>;
}

export function FadeIn({ children, className = '' }: { children: any; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref as any} className={`${className} transform transition duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {children}
    </div>
  );
}

export function Accordion({ title, children }: { title: string; children: any }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-white">
        <span className="font-semibold text-slate-900">{title}</span>
        <span className="text-slate-600">{open ? '−' : '+'}</span>
      </button>
      <div className={`p-4 bg-white transition-max-height duration-300 ${open ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        {children}
      </div>
    </div>
  );
}

export default null;

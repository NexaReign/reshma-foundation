"use client";

import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

export default function FounderPhilosophy() {
  const p = (founderData as any).philosophy;
  return (
    <FadeIn>
      <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm border border-slate-100 text-center">
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">{p.title}</h3>
        <p className="text-slate-700 max-w-3xl mx-auto">{p.content}</p>
        <blockquote className="mt-6 italic text-slate-800">“{p.quote}”</blockquote>
      </section>
    </FadeIn>
  );
}

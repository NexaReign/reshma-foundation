"use client";

import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

export default function LegacySection() {
  const lines = (founderData as any).legacyParagraphLines || [];
  return (
    <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">A Flame in the Hearts of the People - A Short story of the founder</h3>
      <div className="space-y-3 text-slate-700">
        {lines.map((l: string, i: number) => (
          <FadeIn key={i}><p>{l}</p></FadeIn>
        ))}
      </div>
      <div className="mt-6 text-right text-slate-800 font-semibold">“The true measure of life is the lives we uplift.”</div>
    </section>
  );
}

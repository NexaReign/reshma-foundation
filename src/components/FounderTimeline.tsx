"use client";

import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

export default function FounderTimeline() {
  const timeline = (founderData as any).timeline || [];
  return (
    <section className="mt-8">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Life Journey</h3>
      <div className="relative ml-4">
        <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-[#fb7185] to-[#7c3aed] rounded" />
        <div className="space-y-6">
          {timeline.map((t: any, i: number) => (
            <FadeIn key={i}>
              <div className="pl-6">
                <div className="mb-1 text-sm font-semibold text-slate-800">{t.title}</div>
                <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">{t.content}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

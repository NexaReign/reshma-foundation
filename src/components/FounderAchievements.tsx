"use client";

import founderData from "@/data/founder.json";
import { CountUp, FadeIn } from "./FounderUI";

export default function FounderAchievements() {
  const achievements = (founderData as any).achievements || [];
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Achievements</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {achievements.map((a: any, i: number) => (
          <FadeIn key={i}>
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm border border-slate-100">
              <div className="text-2xl font-bold text-slate-900"><CountUp to={a.value} /></div>
              <div className="text-sm text-slate-700 mt-1">{a.label}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

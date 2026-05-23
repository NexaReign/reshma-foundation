"use client";

import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

function ImpactCard({ title, content, icon }: { title: string; content: string; icon: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
      <div className="flex items-start gap-4">
        <div className="rounded-full bg-[#f3f4f6] p-3 text-xl">{icon}</div>
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <p className="text-slate-700 mt-2">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default function FounderImpact() {
  const impact = (founderData as any).impact;
  return (
    <section className="mt-8">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">Humanitarian Impact</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <ImpactCard icon="🌴" title={impact.Palm.title} content={impact.Palm.content} />
        </FadeIn>
        <FadeIn>
          <ImpactCard icon="🎓" title={impact.education.title} content={impact.education.content} />
        </FadeIn>
        <FadeIn>
          <ImpactCard icon="🤝" title={impact.marginalized.title} content={impact.marginalized.content} />
        </FadeIn>
        <FadeIn>
          <ImpactCard icon="❤️" title={impact.medical.title} content={impact.medical.content} />
        </FadeIn>
      </div>
    </section>
  );
}

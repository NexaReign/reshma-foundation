"use client";

import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

export default function FounderDonationMovement() {
  const dm = (founderData as any).donationMovement;
  return (
    <FadeIn>
      <section className="mt-10 rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">{dm.title}</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <p className="italic text-slate-800 text-lg">“{dm.quote}”</p>
            <p className="mt-4 text-slate-700">{dm.content}</p>
          </div>
          <div className="rounded-2xl bg-yellow-50 p-6 border border-yellow-100">
            <div className="text-6xl">🫀</div>
            <p className="mt-2 text-slate-700">Pledged body donation to Keelpak Medical College, Chennai and runs awareness programs for body & organ donation.</p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

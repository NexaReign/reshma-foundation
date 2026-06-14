"use client";

import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

export default function FounderHungerRelief() {
  const hr = (founderData as any).hungerRelief;
  return (
    <FadeIn>
      <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">{hr.title}</h3>
        <p className="text-slate-700">{hr.content}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="rounded-lg bg-[#6FCF97] p-3 text-[#14532D] font-extrabold">RICE</div>
          <div className="rounded-lg bg-[#6FCF97] p-3 text-[#14532D] font-extrabold">DAL</div>
          <div className="rounded-lg bg-[#6FCF97] p-3 text-[#14532D] font-extrabold">OIL</div>
          <div className="rounded-lg bg-[#6FCF97] p-3 text-[#14532D] font-extrabold">GROCERIES</div>
          <div className="rounded-lg bg-[#6FCF97] p-3 text-[#14532D] font-extrabold">CLOTHING</div>
          <div className="rounded-lg bg-[#6FCF97] p-3 text-[#14532D] font-extrabold">ESSENTIAL ITEMS</div>
        </div>
      </section>
    </FadeIn>
  );
}

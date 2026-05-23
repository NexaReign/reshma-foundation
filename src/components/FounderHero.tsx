"use client";

import Image from "next/image";
import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

export default function FounderHero() {
  const hero = (founderData as any).hero;
  return (
    <section className="relative overflow-hidden rounded-b-3xl bg-gradient-to-br from-[#fff7ed] to-[#fef3c7] py-12">
      <div className="mx-auto max-w-6xl px-6 lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex-1 lg:pr-8">
          <h1 className="text-4xl font-extrabold text-slate-900">{hero.name}</h1>
          <p className="mt-2 text-slate-700">{hero.subtitle}</p>
          <p className="mt-4 text-2xl font-semibold text-slate-900">{hero.tagline}</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="rounded-full bg-[#fb7185] px-5 py-3 text-white font-semibold shadow">Explore Journey</button>
            <button className="rounded-full border border-slate-300 px-5 py-3 bg-white font-semibold">Community Impact</button>
          </div>

          <FadeIn>
            <blockquote className="mt-8 rounded-2xl bg-white/80 p-6 shadow-md border-l-4 border-[#fb7185] max-w-xl">
              <p className="italic text-slate-800">“{hero.quote}”</p>
              <p className="mt-3 text-sm text-slate-600">{hero.quoteBy}</p>
            </blockquote>
          </FadeIn>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-80 lg:shrink-0">
          <div className="relative mx-auto h-64 w-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <Image src={hero.founderPhoto} alt={hero.name} fill className="object-cover" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {hero.badges.map((b: any, i: number) => (
              <div key={i} className="rounded-xl bg-white/90 p-3 text-center text-sm font-semibold shadow">{b.label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

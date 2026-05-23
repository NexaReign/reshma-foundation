"use client";

import Image from "next/image";
import founderData from "@/data/founder.json";
import { FadeIn } from "./FounderUI";

export default function FounderProfileCard() {
  const profile = (founderData as any).profile;
  const photo = (founderData as any).hero.founderPhoto;
  return (
    <FadeIn>
      <div className="rounded-3xl bg-white/60 backdrop-blur-sm p-6 shadow-md border border-slate-200 lg:flex lg:items-center">
        <div className="w-full lg:w-44 lg:shrink-0">
          <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow">
            <Image src={photo} alt={profile.name} fill className="object-cover" />
          </div>
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-6">
          <h3 className="text-2xl font-semibold text-slate-900">{profile.name}</h3>
          <p className="text-slate-700 mt-2">{profile.roles.join(' • ')}</p>
          <p className="mt-3 text-slate-700">Birth place: {profile.birthPlace}</p>
          <p className="mt-1 text-slate-700">Current: {profile.currentJourney}</p>

          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-600">Upload Founder Photo</label>
            <input type="file" accept="image/*" className="mt-2 block w-full text-sm text-slate-600" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

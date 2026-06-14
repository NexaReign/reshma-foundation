"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FounderHero from "@/components/FounderHero";
import FounderProfileCard from "@/components/FounderProfileCard";
import FounderTimeline from "@/components/FounderTimeline";
import FounderImpact from "@/components/FounderImpact";
import FounderDonationMovement from "@/components/FounderDonationMovement";
import FounderHungerRelief from "@/components/FounderHungerRelief";
import FounderPhilosophy from "@/components/FounderPhilosophy";
import FounderAchievements from "@/components/FounderAchievements";
import FounderGallery from "@/components/FounderGallery";
import LegacySection from "@/components/LegacySection";

export default function AboutFounder() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <FounderHero />

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12 space-y-8">
        <FounderProfileCard />
        <FounderTimeline />
        <FounderImpact />
        <FounderDonationMovement />
        <FounderHungerRelief />
        <FounderPhilosophy />
        <FounderAchievements />

        <FounderGallery />

        <LegacySection />
      </section>

      <Footer />
    </main>
  );
}

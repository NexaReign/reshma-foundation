import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutFounder() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#fb7185]" />
          <h1 className="text-4xl font-semibold text-slate-950">About Dr. K. Manivannan</h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950 mb-4">Founder & Visionary Leader</h2>
              <p className="text-lg leading-8 text-slate-700">
                Dr. K. Manivannan is the founder of Reshma Foundation and has served communities with quiet determination
                since 1988. His belief in service as the path to real happiness fuels every initiative.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950 mb-3">Early Beginnings</h3>
                <p className="text-slate-700 leading-7">
                  Born in Keerathangalam, Pudukkottai, he discovered his passion for social work during school and joined
                  the Rotaract Club of Govt. Polytechnic in 1988. This marked the beginning of his lifelong commitment to community service.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950 mb-3">Philosophy & Principles</h3>
                <p className="text-slate-700 leading-7 mb-4">
                  He believes true happiness comes from service, and that essential needs like food, clothing, and shelter
                  are fundamental rights for a peaceful life.
                </p>
                <p className="text-slate-700 leading-7">
                  Despite his extensive work, he avoids media publicity and operates based on strong personal ethics,
                  focusing on genuine impact rather than recognition.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#fcd34d] via-[#fb7185] to-[#4338ca] p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-semibold">38+ Years of Service</p>
                  <p className="text-sm opacity-90">Continuous community work since 1988</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-semibold">7 Successful Marriages</p>
                  <p className="text-sm opacity-90">Arranged for visually challenged couples with full support</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-semibold">First Transgender Inclusion</p>
                  <p className="text-sm opacity-90">Pioneered transgender membership in Lions Club</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-semibold">200,000 Palm Seeds</p>
                  <p className="text-sm opacity-90">Planted for drought relief and soil conservation</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950 mb-4">Vision for 2022-2023</h3>
              <p className="text-slate-700 leading-7">
                The Reshma Foundation focuses on five key Pearl Projects that uplift lives through nature conservation,
                economic inclusion, hunger relief, medical support, and education. Each project represents a commitment
                to sustainable, compassionate change.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950 mb-6">Community Impact Stories</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-[#fef3c7] to-[#fde68a] p-6">
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Visually Challenged Empowerment</h4>
              <p className="text-slate-700 leading-7">
                Seven successful marriages arranged with care, providing all necessary wedding arrangements,
                household items, and ongoing support for independent living.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8] p-6">
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Transgender Community Support</h4>
              <p className="text-slate-700 leading-7">
                First to include transgender individuals in the Lions Club movement, creating a dedicated association
                for their welfare and helping them transition into respected entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

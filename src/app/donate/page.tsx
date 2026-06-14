import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonorsList from "@/components/DonorsList";
import DonateForm from "@/components/DonateForm";

export default function Donate() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff7ed] to-[#fff3e0] text-slate-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c]" />
              <span className="text-sm font-medium text-slate-700">Join the movement</span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-slate-950 mb-6">
              Power Change with Every Contribution
            </h1>

            <p className="text-lg text-slate-700 max-w-xl leading-relaxed mb-8">
              Your generosity helps fund education, healthcare, hunger relief and community projects across
              Tamil Nadu. Fast, secure donations let us reach more people — see live updates below.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl bg-white/60 backdrop-blur px-6 py-4 shadow-md">
                <p className="text-sm text-slate-600">Projects Funded</p>
                <p className="text-2xl font-semibold text-slate-900">128</p>
              </div>
              <div className="rounded-2xl bg-white/60 backdrop-blur px-6 py-4 shadow-md">
                <p className="text-sm text-slate-600">Meals Served</p>
                <p className="text-2xl font-semibold text-slate-900">54,000+</p>
              </div>
              <div className="rounded-2xl bg-white/60 backdrop-blur px-6 py-4 shadow-md">
                <p className="text-sm text-slate-600">Volunteers</p>
                <p className="text-2xl font-semibold text-slate-900">1,300+</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-tr from-white to-white/80 p-6 shadow-2xl">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-r from-[#f97316] to-[#fb7185] opacity-30 blur-3xl" />
              <h2 className="text-2xl font-semibold text-slate-950 mb-4">Donate Online</h2>
              <p className="text-sm text-slate-600 mb-6">Secure payment powered by Razorpay — instant receipts.</p>

              <div className="rounded-2xl bg-slate-50 p-6">
                <DonateForm />
              </div>

              <div className="mt-6 text-xs text-slate-500">We use secure encryption and never share your payment details.</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Donors</h3>
              <p className="text-sm text-slate-500">Live updates from our donations table</p>
            </div>
            <DonorsList />
          </div>

          <aside className="rounded-3xl bg-gradient-to-br from-white/80 via-[#fff7eb] to-white/90 p-6 shadow-2xl border border-white/30">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-md font-semibold mb-1">Other Ways to Help</h4>
                <p className="text-xs text-slate-500">Choose a simple way to support our work — every bit helps.</p>
              </div>
              {/* <div className="text-sm text-slate-400">Trusted & Secure</div> */}
            </div>

            <div className="mt-4 grid gap-3">
              <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#fffaf0] to-[#fff5eb] p-4 border border-orange-50 shadow-sm">
                <div className="h-10 w-10 flex-none rounded-lg bg-gradient-to-tr from-[#fb923c] to-[#f97316] flex items-center justify-center text-white font-bold">UPI</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-900">UPI</div>
                  <div className="text-xs text-slate-600 font-mono">reshma.foundation@oksbi</div>
                </div>
                {/* <div className="text-xs text-slate-500">Scan or pay</div> */}
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] p-4 border border-slate-100 shadow-sm">
                <div className="h-10 w-10 flex-none rounded-lg bg-gradient-to-tr from-[#60a5fa] to-[#3b82f6] flex items-center justify-center text-white font-bold">Bank</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-900">Bank Transfer</div>
                  <div className="text-xs text-slate-600">State Bank of India — SBIN0001234</div>
                </div>
                <div className="text-xs text-slate-500">IFSC: SBIN0001234</div>
              </div>

              <div className="rounded-2xl p-4 bg-gradient-to-tr from-[#ffffff] to-[#fffbf0] border border-white/30 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-900">Volunteer or Sponsor</div>
                    <div className="text-xs text-slate-600">Partner with us on projects or sponsor a child’s education.</div>
                  </div>
                  <a href="/contact" className="ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f97316] to-[#fb7185] px-3 py-1 text-white text-xs font-semibold shadow">Contact Us</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

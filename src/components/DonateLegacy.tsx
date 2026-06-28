import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonorsList from "@/components/DonorsList";
import DonateForm from "@/components/DonateForm";

export default function DonateLegacy() {
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
        </div>
      </section>

      <Footer />
    </main>
  );
}

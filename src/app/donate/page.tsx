import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Donate() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fef3c7] to-[#fff7ed] text-slate-950">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 text-slate-950 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#fff7ed] via-[#fef3c7] to-transparent opacity-95" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#f97316]/10 blur-3xl" />
        <div className="absolute left-0 top-40 h-64 w-64 rounded-full bg-[#38bdf8]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8">


              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Give from the heart through Reshma Foundation
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                  Every donation brings food, healthcare, education and dignity to vulnerable families and communities in Tamil Nadu. This temporary page helps us continue supporting lives while Razorpay documentation is completed.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/10">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Account Number</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">126100102332</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/10">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Bank & Branch</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">COSMOS BANK - ANNA NAGAR</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/10 sm:col-span-2">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">IFSC Code</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">COSB0000126</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/10">
                <p className="text-sm text-slate-700">For any queries, please contact our founder:</p>
                <a href="tel:9840677330" className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-slate-950 transition hover:text-[#f97316]">
                  9840677330
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10">
                <div className="overflow-hidden rounded-[2rem] bg-slate-100">
                  <Image
                    src="/images/donate/ReshmaFoundationQR.JPG"
                    alt="Reshma Foundation donation QR code"
                    width={1200}
                    height={1200}
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-5 text-center">
                  <h2 className="text-2xl font-semibold text-white">Scan the QR to donate</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Open your UPI app, scan the code and support urgent initiatives at Reshma Foundation.
                  </p>
                  <div className="mt-4 rounded-2xl bg-slate-900/90 px-4 py-3 text-slate-100">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">UPI ID</p>
                    <p className="mt-2 text-base font-semibold">tpss.r9840677330@timecosmos</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-950 shadow-xl shadow-slate-950/10">
                <h3 className="text-2xl font-semibold">How donations help others</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Your support directly fuels education programs, food relief missions and healthcare aid for underserved families. Donations create safer learning environments and empower communities to build a stronger future.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                  <li>• Provide meals and medical aid to vulnerable families.</li>
                  <li>• Fund school supplies, tuition support, and life skills training.</li>
                  <li>• Strengthen community outreach and resilience projects.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-2xl shadow-slate-950/10 sm:mt-16">
            <p className="text-base leading-7">
              Razorpay setup in progress by the team.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

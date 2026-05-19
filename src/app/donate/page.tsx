import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonorsList from "@/components/DonorsList";
import DonateForm from "@/components/DonateForm";

export default function Donate() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#f97316]" />
          <h1 className="text-4xl font-semibold text-slate-950">Support Our Mission</h1>
        </div>

        <div className="mb-12">
          <p className="text-lg leading-8 text-slate-700 max-w-3xl">
            Your generosity makes a real difference in the lives of thousands across Tamil Nadu.
            Every contribution, no matter the size, helps us continue our work in education,
            healthcare, hunger relief, and community empowerment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Ways to Donate</h2>
              <div className="space-y-6">
                <div className="rounded-3xl bg-gradient-to-r from-[#fef3c7] to-[#fde68a] p-6">
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">UPI Transfer</h3>
                  <p className="text-slate-700 mb-3">Instant and secure digital payments</p>
                  <div className="bg-white rounded-2xl p-4">
                    <p className="font-mono text-lg text-slate-950">reshma.foundation@oksbi</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-r from-[#fce7f3] to-[#fbcfe8] p-6">
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">Bank Transfer</h3>
                  <p className="text-slate-700 mb-3">Direct bank account transfers</p>
                  <div className="bg-white rounded-2xl p-4 space-y-2">
                    <p><span className="font-medium">Account Name:</span> Reshma Foundation</p>
                    <p><span className="font-medium">Account Number:</span> 1234567890</p>
                    <p><span className="font-medium">IFSC Code:</span> SBIN0001234</p>
                    <p><span className="font-medium">Bank:</span> State Bank of India</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd] p-6">
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">Online Payment</h3>
                  <p className="text-slate-700 mb-3">Credit/Debit cards and net banking</p>
                  <button className="w-full rounded-2xl bg-[#0f172a] px-6 py-3 text-white font-semibold transition hover:bg-[#1e293b]">
                    Donate Online Now
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Tax Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#10b981] flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-950">80G Tax Exemption</p>
                    <p className="text-slate-700 text-sm">Eligible for tax deduction under Section 80G of Income Tax Act</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#10b981] flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-950">Receipt Provided</p>
                    <p className="text-slate-700 text-sm">Official donation receipt issued for all contributions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#10b981] flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-950">Transparent Usage</p>
                    <p className="text-slate-700 text-sm">Regular updates on how your donation is utilized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Recent Donors</h2>
                <DonorsList />
              <p className="text-sm text-slate-600 mt-4 text-center">
                Thank you to all our generous donors for making a difference!
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950 mb-6">Impact of Your Donation</h2>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f97316]">₹500</p>
                  <p className="text-slate-700">Provides school supplies for one child for a month</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f97316]">₹1,000</p>
                  <p className="text-slate-700">Covers dialysis treatment for one session</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f97316]">₹2,500</p>
                  <p className="text-slate-700">Supplies food packages for a family for a week</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#f97316]">₹10,000</p>
                  <p className="text-slate-700">Plants 50 palm trees for environmental conservation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950 mb-6">Donate Online</h2>
            <DonateForm />
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950 mb-6">How donations help</h2>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#f97316]">₹500</p>
                <p className="text-slate-700">Provides school supplies for one child for a month</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#f97316]">₹1,000</p>
                <p className="text-slate-700">Covers dialysis treatment for one session</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#f97316]">₹2,500</p>
                <p className="text-slate-700">Supplies food packages for a family for a week</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#f97316]">₹10,000</p>
                <p className="text-slate-700">Plants 50 palm trees for environmental conservation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

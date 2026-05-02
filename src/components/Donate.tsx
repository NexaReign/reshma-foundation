import { donors } from "@/data/donors";

export default function Donate() {
  return (
    <section id="donate" className="bg-[#fff7ed] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f97316]">Donate</p>
            <h2 className="text-3xl font-semibold text-slate-950">Support our people-first initiatives</h2>
          </div>
          <div className="rounded-3xl bg-white px-6 py-4 shadow-sm">
            <p className="text-sm text-slate-600">UPI & payment options</p>
            <p className="mt-2 text-lg font-semibold text-slate-950">UPI: reshma.foundation@oksbi</p>
            <p className="text-sm text-slate-700">Bank transfer and online payment details can be added here.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold text-slate-950">Donor recognition</h3>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-[#f8fafc] p-4">
            <div className="scroll-fade">
              <div className="space-y-4">
                {donors.map((donor) => (
                  <div key={donor.name} className="flex items-center justify-between rounded-3xl bg-white px-5 py-4 shadow-sm">
                    <span className="font-medium text-slate-900">{donor.name}</span>
                    <span className="text-slate-600">{donor.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#f97316]">Contact</p>
            <h2 className="text-3xl font-semibold text-slate-950">Get in touch</h2>
          </div>
          <p className="max-w-xl text-slate-600">
            Reach us by phone, email or social media. Learn more about our location and send quick feedback below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Contact details</h3>
              <p className="mt-3 text-slate-700">contactData.</p>
              <p className="text-slate-700">Email: info@reshmafoundation.org</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Socials</h3>
              <p className="mt-3 text-slate-700">Facebook: fb.com/reshma.foundation</p>
              <p className="text-slate-700">LinkedIn: linkedin.com/company/reshma-foundation</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Address</h3>
              <p className="mt-3 text-slate-700">Keerathangalam, Pudukkottai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-slate-950">Map location</p>
              <div className="mt-4 h-72 rounded-3xl bg-slate-100 p-6 text-slate-600">
                <p className="text-sm">Map embed placeholder</p>
                <p className="mt-3 text-sm leading-7">
                  Replace with a Google Maps iframe or embed once the exact address is confirmed.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-slate-950">Quick feedback</p>
              <form className="mt-4 space-y-4">
                <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3" />
                <input type="email" placeholder="Your email" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3" />
                <textarea placeholder="Your message" rows={4} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3" />
                <button type="submit" className="w-full rounded-3xl bg-[#f97316] px-5 py-3 text-white transition hover:bg-[#ea580c]">
                  Send feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

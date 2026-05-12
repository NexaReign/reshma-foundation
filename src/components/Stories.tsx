export default function Stories() {
  return (
    <section id="stories" className="bg-[#fdf2f8] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#d946ef]" />
          <div>
            <h2 className="text-3xl font-semibold text-slate-950">Hear stories of our beloved beneficiaries</h2>
            <p className="text-slate-600">Real journeys from those touched by Reshma Foundation&apos;s care.</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-5 h-56 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_60%)] p-6 text-slate-950">
              <p className="text-xl font-semibold">Visually Challenged support</p>
              <p className="mt-4 text-slate-700">Seven successful weddings arranged with care, community support and household essentials.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-5 h-56 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(192,132,252,0.18),_transparent_60%)] p-6 text-slate-950">
              <p className="text-xl font-semibold">Transgender inclusivity</p>
              <p className="mt-4 text-slate-700">First transgender-inclusive Lions Club partnership and welfare association with entrepreneurial resources.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-5 h-56 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(251,207,232,0.18),_transparent_60%)] p-6 text-slate-950">
              <p className="text-xl font-semibold">Education support</p>
              <p className="mt-4 text-slate-700">Re-enrolling children who dropped out during the pandemic and providing books, uniforms, and bags.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-slate-950">Beneficiary story</h3>
            <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100">
              <iframe
                className="h-full w-full"
                src="https://youtu.be/D1D83gLdnv4?si=ie40yOlQ8OBTWNfo"
                title="Beneficiary story video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-semibold text-slate-950">Photo highlights</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Hunger relief", "Medical aid", "Education support", "Nature care"].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-100 p-5 text-slate-700">
                  <p className="font-semibold">{item}</p>
                  <p className="mt-2 text-sm leading-6">A glimpse of the foundation&apos;s work in the community.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

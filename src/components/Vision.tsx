const visionPoints = [
  "A society where every child can attend school without barriers.",
  "A community where healthcare support reaches those facing serious illness.",
  "A future where environmental stewardship protects local ecosystems.",
  "An inclusive world where marginalized groups are respected and empowered.",
];

export default function Vision() {
  return (
    <section id="vision" className="px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#f59e0b]" />
          <h2 className="text-3xl font-semibold text-slate-950">Vision</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visionPoints.map((point) => (
            <div key={point} className="rounded-3xl bg-gradient-to-br from-[#ede9fe] via-[#fce7f3] to-[#fff7ed] p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

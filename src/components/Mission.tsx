const missionPoints = [
  "Serve the most vulnerable with dignity and compassion.",
  "Ensure food, clothing, and shelter reach communities in need.",
  "Create lasting impact through inclusive education and economic support.",
  "Protect the environment and build resilience against drought.",
];

export default function Mission() {
  return (
    <section id="mission" className="bg-[#fff7f1] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#fb7185]" />
          <h2 className="text-3xl font-semibold text-slate-950">Mission</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missionPoints.map((point) => (
            <div key={point} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

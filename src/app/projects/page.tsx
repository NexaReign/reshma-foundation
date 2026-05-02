import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#f59e0b]" />
          <h1 className="text-4xl font-semibold text-slate-950">Our Projects</h1>
        </div>

        <div className="mb-12">
          <p className="text-lg leading-8 text-slate-700 max-w-3xl">
            Reshma Foundation undertakes comprehensive initiatives to uplift communities across Tamil Nadu.
            Our projects focus on sustainable development, social inclusion, and humanitarian support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#fb923c] text-white">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-4">{project}</h3>
              <p className="text-slate-700 leading-7">
                This project addresses critical community needs through targeted interventions,
                sustainable solutions, and collaborative partnerships with local stakeholders.
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

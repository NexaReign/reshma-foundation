import Image from "next/image";
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

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={project.id} className={`rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="lg:w-1/2">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#fb923c] text-white">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-950 mb-4">{project.title}</h3>
                <p className="text-slate-700 leading-7">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

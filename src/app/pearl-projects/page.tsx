import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pearlProjects } from "@/data/projects";

export default function PearlProjects() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#c084fc]" />
          <h1 className="text-4xl font-semibold text-slate-950">Pearl Projects</h1>
        </div>

        <div className="mb-12">
          <p className="text-lg leading-8 text-slate-700 max-w-3xl">
            Our flagship initiatives for 2022-2023, named Pearl Projects, represent our commitment to transformative
            change across five critical areas of community development and social welfare.
          </p>
        </div>

        <div className="space-y-12">
          {pearlProjects.map((project) => (
            <div key={project.id} className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#c084fc] to-[#a855f7] flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-slate-950">{project.title}</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 mb-2">Initiative</h3>
                      <p className="text-slate-700 leading-7">{project.description}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 mb-2">Impact</h3>
                      <p className="text-slate-700 leading-7">{project.impact}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 mb-2">Partners</h3>
                    <p className="text-slate-700 leading-7">{project.partners}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

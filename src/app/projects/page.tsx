import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryProjects } from "@/data/projects";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#f59e0b]" />
          <h1 className="text-4xl font-semibold text-slate-950">Gallery</h1>
        </div>

        <div className="mb-12">
          <p className="text-lg leading-8 text-slate-700 max-w-3xl">
            Explore our collection of impactful projects and initiatives that have transformed communities across Tamil Nadu.
          </p>
        </div>

        <div className="space-y-16">
          {galleryProjects.map((project) => (
            <div key={project.id} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-slate-950 mb-4">{project.title}</h2>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto">{project.description}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {project.sections.map((section, index) => (
                  <div key={index} className="rounded-3xl overflow-hidden shadow-sm bg-white">
                    <div className="aspect-video relative">
                      <Image
                        src={section.image}
                        alt={`${project.title} - ${section.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-950 mb-2">{section.title}</h3>
                      <p className="text-slate-700 text-sm leading-6">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

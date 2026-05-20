import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePreview from "@/components/ImagePreview";
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

        <div className="space-y-20">
          {galleryProjects.map((project) => (
            <section key={project.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-3">{project.title === 'School Gallery' ? 'School' : 'Media'}</p>
                <h2 className="text-3xl font-semibold text-slate-950 mb-4">{project.title}</h2>
                <p className="text-lg leading-8 text-slate-700 max-w-3xl">{project.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.images.map((image, index) => (
                  <div key={`${project.id}-${index}`} className="overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-sm transition hover:shadow-md">
                    <div className="aspect-square relative">
                      <ImagePreview src={image} alt={`${project.title} image ${index + 1}`} className="w-full h-full">
                        <Image
                          src={image}
                          alt={`${project.title} image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </ImagePreview>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

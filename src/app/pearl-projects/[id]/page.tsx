import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePreview from "@/components/ImagePreview";
import { pearlProjects } from "@/data/projects";
import { notFound } from "next/navigation";

const bgColors = [
  "bg-gradient-to-br from-[#fcefe3] via-[#fff6ff] to-[#eef2ff]", // nature
  "bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fbbf24]", // marginalized
  "bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0]", // hunger
  "bg-gradient-to-br from-[#fef2f2] via-[#fee2e2] to-[#fecaca]", // medical
  "bg-gradient-to-br from-[#f3e8ff] via-[#e9d5ff] to-[#d8b4fe]", // education
];

export default async function PearlProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = pearlProjects.find(p => p.id === id);
  if (!project) {
    notFound();
  }

  const bgColor = bgColors[pearlProjects.indexOf(project)] || "bg-[#fff7ed]";

  return (
    <main className={`min-h-screen text-slate-950 ${bgColor}`}>
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.4em] text-sm font-semibold text-slate-500 mb-6">Pearl Project</p>
          <h1 className="text-5xl font-semibold text-slate-950 mb-6">{project.title}</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">{project.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {project.images.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-square relative">
                <ImagePreview src={image} alt={`${project.title} image ${index + 1}`} className="h-full w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
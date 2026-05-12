import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-slate-950 mb-4">{project.title}</h1>
          <p className="text-lg leading-8 text-slate-700 max-w-3xl mx-auto">{project.sections[0]?.content || "Learn more about our initiatives."}</p>
        </div>

        <div className="space-y-16">
          {project.sections.map((section, index) => (
            <article key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={section.image}
                    alt={`${project.title} - ${section.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">{section.title}</h3>
                  <p className="text-slate-700 leading-7">{section.content}</p>
                </div>
                {index === 0 && (
                  <div className="text-sm text-slate-500 mt-4">
                    Section {index + 1} of {project.sections.length}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
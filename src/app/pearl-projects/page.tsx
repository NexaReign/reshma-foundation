import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pearlProjects } from "@/data/projects";

const pearlProjectDetails = {
  "Nature Conservation": {
    description: "Planting 200,000 palm seeds across Tamil Nadu to combat drought and prevent soil erosion through sustainable reforestation initiatives.",
    impact: "Protecting water resources, preventing desertification, and creating sustainable agricultural practices for future generations.",
    partners: "Local communities, government forestry departments, and environmental NGOs."
  },
  "Marginalized Communities": {
    description: "Empowering the transgender and visually challenged communities through job placement in companies like Ola, Uber, and Rapido, and by providing entrepreneurial resources.",
    impact: "Creating economic independence, social inclusion, and breaking down barriers to employment for marginalized groups.",
    partners: "Corporate partners, disability rights organizations, and community leaders."
  },
  "Hunger Relief": {
    description: "Partnering with the Lions Club to distribute essential food items to orphanages, elderly homes, and the homeless across Tamil Nadu.",
    impact: "Ensuring no one goes hungry, providing nutritional support, and building community resilience during times of need.",
    partners: "Lions Club International, local food banks, and charitable organizations."
  },
  "Medical Support": {
    description: "Providing financial aid for dialysis, cancer treatment, and pediatric care at government hospitals throughout the state.",
    impact: "Making healthcare accessible to those who cannot afford treatment, reducing medical poverty, and improving health outcomes.",
    partners: "Government hospitals, medical professionals, and healthcare NGOs."
  },
  "Education": {
    description: "Re-enrolling students who dropped out during the pandemic and providing uniforms, books, and bags to underprivileged school children.",
    impact: "Ensuring educational continuity, reducing dropout rates, and creating equal opportunities for academic success.",
    partners: "Schools, teachers, educational foundations, and local governments."
  }
};

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
          {pearlProjects.map((project) => {
            const details = pearlProjectDetails[project as keyof typeof pearlProjectDetails];
            return (
              <div key={project} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#c084fc] to-[#a855f7] flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-slate-950">{project}</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 mb-2">Initiative</h3>
                      <p className="text-slate-700 leading-7">{details.description}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 mb-2">Impact</h3>
                      <p className="text-slate-700 leading-7">{details.impact}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 mb-2">Partners</h3>
                    <p className="text-slate-700 leading-7">{details.partners}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}

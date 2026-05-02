import Link from "next/link";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { projects, pearlProjects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#fcefe3] via-[#fff6ff] to-[#eef2ff] px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="space-y-6 text-center md:text-left">
            <p className="inline-flex rounded-full bg-[#ffd59e] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
              Serving since 1988
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Reshma Foundation: Service, hope, and dignity for every community.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              Guided by Dr. K. Manivannan&apos;s lifelong devotion to social service, the foundation empowers marginalized groups, supports education, medical care, and nature conservation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:w-3/4">
            <Link href="/projects" className="rounded-2xl bg-[#fb923c] px-6 py-4 text-center text-white shadow-lg shadow-orange-200 transition hover:bg-[#f97316]">
              Explore Projects
            </Link>
            <Link href="/donate" className="rounded-2xl border border-[#7c3aed] bg-white px-6 py-4 text-center text-[#7c3aed] shadow-sm transition hover:border-transparent hover:bg-[#f7efff]">
              Support the Mission
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <HeroSlider />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#f59e0b]" />
          <h2 className="text-3xl font-semibold text-slate-950">Our Projects</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <article key={project} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <span className="mb-4 inline-flex rounded-full bg-[#fde68a] px-3 py-1 text-sm font-semibold text-[#92400e]">Project {index + 1}</span>
              <h3 className="text-xl font-semibold text-slate-950">{project}</h3>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-6 py-3 text-slate-900 transition hover:bg-slate-200">
            View All Projects →
          </Link>
        </div>
      </section>

      <section className="bg-[#faf5ff] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-1 w-16 rounded-full bg-[#c084fc]" />
            <h2 className="text-3xl font-semibold text-slate-950">Pearl Projects</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pearlProjects.map((item) => (
              <div key={item} className="rounded-3xl bg-white px-5 py-6 text-center shadow-sm">
                <p className="text-lg font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pearl-projects" className="inline-flex items-center gap-2 rounded-2xl bg-[#c084fc] px-6 py-3 text-white transition hover:bg-[#a855f7]">
              Learn More About Pearl Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f97316]">About Founder</p>
            <h2 className="text-4xl font-semibold leading-tight text-slate-950">Dr. K. Manivannan</h2>
            <p className="text-lg leading-8 text-slate-700">
              Dr. K. Manivannan is the founder of Reshma Foundation and has served communities with quiet determination since 1988. His belief in service as the path to real happiness fuels every initiative.
            </p>
            <Link href="/about-founder" className="inline-flex items-center gap-2 rounded-2xl bg-[#fb7185] px-6 py-3 text-white transition hover:bg-[#f43f5e]">
              Read Full Story →
            </Link>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-[#fcd34d] via-[#fb7185] to-[#4338ca] p-6 text-white shadow-lg">
            <div className="rounded-[1.5rem] bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f8fafc]">Vision for 2022–2023</p>
              <p className="mt-4 text-lg leading-8">
                The Reshma Foundation focuses on five key Pearl Projects that uplift lives through nature conservation, economic inclusion, hunger relief, medical support, and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdf2f8] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-1 w-16 rounded-full bg-[#d946ef]" />
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Hear stories of our beloved beneficiaries</h2>
              <p className="text-slate-600">Real journeys from those touched by Reshma Foundation&apos;s care.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 h-56 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_60%)] p-6 text-slate-950">
                <p className="text-xl font-semibold">Visually Challenged support</p>
                <p className="mt-4 text-slate-700">Seven successful marriages arranged with care, community support and household essentials.</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 h-56 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(192,132,252,0.18),_transparent_60%)] p-6 text-slate-950">
                <p className="text-xl font-semibold">Transgender inclusivity</p>
                <p className="mt-4 text-slate-700">First transgender-inclusive Lions Club partnership and welfare association with entrepreneurial resources.</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 h-56 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(251,207,232,0.18),_transparent_60%)] p-6 text-slate-950">
                <p className="text-xl font-semibold">Education support</p>
                <p className="mt-4 text-slate-700">Re-enrolling children who dropped out during the pandemic and providing books, uniforms, and bags.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950 mb-4">Get in Touch</h2>
            <p className="text-slate-700 mb-6">
              Have questions about our work or want to get involved? We'd love to hear from you.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-[#7c3aed] px-6 py-3 text-white transition hover:bg-[#6d28d9]">
              Contact Us →
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950 mb-4">Support Our Mission</h2>
            <p className="text-slate-700 mb-6">
              Your donation helps us continue our work in transforming lives across Tamil Nadu.
            </p>
            <Link href="/donate" className="inline-flex items-center gap-2 rounded-2xl bg-[#f97316] px-6 py-3 text-white transition hover:bg-[#ea580c]">
              Donate Now →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

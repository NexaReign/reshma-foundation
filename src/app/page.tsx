import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import ImagePreview from "@/components/ImagePreview";
import { projects, pearlProjects } from "@/data/projects";

const heroImage = "/images/hero/foundationWelcome.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-slate-950">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#fcefe3] via-[#fff6ff] to-[#eef2ff] px-6 py-16 md:px-12" style={{backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
          <div className="space-y-6 text-center md:text-left text-white">
            <p className="inline-flex rounded-full bg-[#ffd59e] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
              Serving since 1988
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl drop-shadow-lg">
              Reshma Foundation: Service, hope, and dignity for every community.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-white/90 sm:text-xl drop-shadow-md">
              Guided by Dr. K. Manivannan&apos;s lifelong devotion to social service, the foundation empowers marginalized groups, supports education, medical care, and nature conservation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:w-3/4">
            <Link href="/projects" className="rounded-2xl bg-[#fb923c] px-6 py-4 text-center text-white shadow-lg shadow-orange-200 transition hover:bg-[#f97316]">
              Explore Projects
            </Link>
            <Link href="/donate" className="rounded-2xl border border-white bg-white/10 backdrop-blur-sm px-6 py-4 text-center text-white shadow-sm transition hover:bg-white/20">
              Support the Mission
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <HeroSlider />
        </div>
      </section>

      <section className="bg-[#faf5ff] px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-1 w-16 rounded-full bg-[#c084fc]" />
            <h2 className="text-3xl font-semibold text-slate-950">Pearl Projects</h2>
          </div>
          <div className="space-y-12">
            {pearlProjects.map((item, index) => (
              <Link key={item.id} href={`/pearl-projects/${item.id}`} className="block">
                <article className={`rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:shadow-md flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] relative">
                      <ImagePreview src={item.images?.[0] || "/images/hero/foundationWelcome.png"} alt={item.title} className="w-full h-full">
                        <Image
                          src={item.images?.[0] || "/images/hero/foundationWelcome.png"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </ImagePreview>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 p-8">
                    <span className="mb-4 inline-flex rounded-full bg-[#e9d5ff] px-3 py-1 text-sm font-semibold text-[#7c3aed]">Pearl Project {index + 1}</span>
                    <h3 className="text-2xl font-semibold text-slate-950 mb-4">{item.title}</h3>
                    <p className="text-slate-700 leading-7">{item.summary}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pearl-projects" className="inline-flex items-center gap-2 rounded-2xl bg-[#c084fc] px-6 py-3 text-white transition hover:bg-[#a855f7]">
              Learn More About Pearl Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://youtu.be/D1D83gLdnv4?si=ie40yOlQ8OBTWNfo"
                title="Reshma Foundation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-950">Watch Our Impact in Action</h2>
              <p className="text-lg leading-8 text-slate-700">
                See how Reshma Foundation is transforming lives across Tamil Nadu through our various initiatives and community programs.
              </p>
              <a
                href="https://youtu.be/D1D83gLdnv4?si=ie40yOlQ8OBTWNfo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
              >
                Go to YouTube →
              </a>
            </div>
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

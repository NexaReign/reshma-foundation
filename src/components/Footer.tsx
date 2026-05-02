export default function Footer() {
  return (
    <footer className="bg-[#0f172a] px-6 py-10 text-slate-200 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-[#fbbf24]">Reshma Foundation</p>
          <p className="max-w-lg text-slate-300">
            Empowering communities through service, compassion, and inclusive action across Tamil Nadu.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">Email</p>
            <p className="mt-2 text-slate-300">info@reshmafoundation.org</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Phone</p>
            <p className="mt-2 text-slate-300">+91 98765 43210</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Socials</p>
            <p className="mt-2 text-slate-300">Facebook / LinkedIn</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Reshma Foundation. All rights reserved.
      </div>
    </footer>
  );
}

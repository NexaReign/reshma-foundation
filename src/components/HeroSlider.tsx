const slides = [
  "Planting 500,000 palm seeds across Tamil Nadu to protect soil and water.",
  "Empowering transgender and visually challenged communities through jobs and entrepreneurship.",
  "Delivering essential food support to orphanages, elderly homes and the homeless.",
  "Providing financial aid for dialysis, cancer care and pediatric support.",
  "Re-enrolling children and giving school uniforms, books, and bags.",
];

export default function HeroSlider() {
  return (
    <div className="marquee rounded-[2rem] border border-slate-200 bg-white/90 p-4 md:p-6 shadow-xl shadow-slate-200">
      <div className="marquee-track flex items-center gap-4">
        {slides.concat(slides).map((text, index) => (
          <div
            key={`${text}-${index}`}
            className="inline-flex w-auto max-w-[90vw] rounded-3xl border border-slate-200 bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fb7185] px-4 md:px-6 py-3 md:py-4 items-center text-slate-950 shadow-md"
          >
            <p className="text-lg font-semibold leading-8 whitespace-nowrap">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

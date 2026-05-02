const slides = [
  "Planting 200,000 palm seeds across Tamil Nadu to protect soil and water.",
  "Empowering transgender and visually challenged communities through jobs and entrepreneurship.",
  "Delivering essential food support to orphanages, elderly homes and the homeless.",
  "Providing financial aid for dialysis, cancer care and pediatric support.",
  "Re-enrolling children and giving school uniforms, books, and bags.",
];

export default function HeroSlider() {
  return (
    <div className="marquee rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200">
      <div className="marquee-track">
        {slides.concat(slides).map((text, index) => (
          <div key={`${text}-${index}`} className="min-w-[32rem] rounded-3xl border border-slate-200 bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fb7185] p-6 text-slate-950 shadow-md">
            <p className="text-lg font-semibold leading-8">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

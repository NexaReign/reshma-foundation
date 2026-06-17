const slides = [
  " Planting 500,000 palm seeds across Tamil Nadu",
  " Empowering transgender and visually challenged communities",
  " Delivering essential food support to those in need",
  " Providing aid for dialysis, cancer care and pediatric support",
  " Re-enrolling children with uniforms, books and school supplies",
];

export default function HeroSlider() {
  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {[...slides, ...slides].map((text, index) => (
          <div key={index} className="ticker-card">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
const faqs = [
  {
    question: "How can I support Reshma Foundation?",
    answer: "You can donate, volunteer, or share our initiatives with your network. Use the Donate section to see UPI and payment details.",
  },
  {
    question: "What are the Pearl Projects?",
    answer: "The Pearl Projects focus on nature conservation, marginalized communities, hunger relief, medical support, and education.",
  },
  {
    question: "How does the foundation help the visually challenged?",
    answer: "We support education, marriage arrangements, household essentials, and inclusive job placement for visually challenged individuals.",
  },
  {
    question: "Where is the Reshma Foundation located?",
    answer: "The foundation is based in Tamil Nadu, with active service programs across the state.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-1 w-16 rounded-full bg-[#7c3aed]" />
          <h2 className="text-3xl font-semibold text-slate-950">FAQ</h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
              <p className="mt-3 text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

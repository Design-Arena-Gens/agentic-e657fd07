const faqs = [
  {
    question: "How is my program personalized?",
    answer:
      "FitFlow adapts the weekly blueprint around your primary goal, schedule, and equipment. You can tweak session intensity and swap exercises from our video library with a single tap.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "The planner supports full gym, minimalist, and bodyweight-only setups. Each workout shows substitutions, so you can train anywhere without losing momentum.",
  },
  {
    question: "Can beginners join advanced programs?",
    answer:
      "Absolutely. Every block includes baseline assessments and scaled variations. You will always see coaching cues for technique, tempo, and safe progressions.",
  },
  {
    question: "Do you track recovery metrics?",
    answer:
      "Yes. Daily readiness check-ins sync with Apple Health and wearable data. We suggest volume adjustments and recovery protocols when your metrics flag fatigue.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs" className="py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-zinc-900 sm:text-4xl">
            Answers for ambitious movers
          </h2>
          <p className="mt-3 text-lg text-zinc-600">
            Everything you need to know before starting your next training
            block.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm open:border-brand/30 open:bg-brand/5 open:shadow-lg"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-zinc-900 transition group-open:text-brand">
                {faq.question}
                <span className="ml-4 text-brand transition group-open:rotate-90">
                  →
                </span>
              </summary>
              <p className="mt-4 text-sm text-zinc-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


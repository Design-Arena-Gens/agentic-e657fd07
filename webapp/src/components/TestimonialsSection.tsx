const testimonials = [
  {
    name: "Jordan S.",
    role: "Firefighter · Colorado",
    quote:
      "FitFlow trims the fluff. I get programming that keeps me mission-ready without burning me out. The planner makes it impossible to skip recovery.",
  },
  {
    name: "Priya D.",
    role: "Product manager · NYC",
    quote:
      "I finally built consistency. The weekly agenda fits my schedule, and the short mobility resets keep my back happy after long laptop days.",
  },
  {
    name: "Leo G.",
    role: "Amateur triathlete · Austin",
    quote:
      "The endurance block dialed in my pacing zones. The nutrition targets pair perfectly with the training load, so race day felt effortless.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Social proof
            </p>
            <h2
              id="testimonials-heading"
              className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl"
            >
              Trusted by professional coaches and everyday athletes.
            </h2>
          </div>
          <p className="max-w-xl text-lg text-zinc-600">
            From hybrid athletes and weekend warriors to beginners, the
            community leans on FitFlow to train smarter with sustainable
            intensity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-zinc-600">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="text-base font-semibold text-zinc-900">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-brand">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


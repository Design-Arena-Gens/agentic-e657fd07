import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden py-24"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-blue-600 to-emerald-500 opacity-90" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 rounded-3xl px-4 py-16 text-center text-white sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.4em]">
          Level up
        </p>
        <h2
          id="cta-heading"
          className="text-3xl font-semibold sm:text-4xl md:text-5xl"
        >
          Ready to unlock your strongest season yet?
        </h2>
        <p className="max-w-2xl text-lg text-white/80">
          Start a 14-day free trial. Personalized programming, daily readiness
          checks, and coaching support included. Cancel anytime.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#planner"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Plan my week
          </Link>
          <Link
            href="#faqs"
            className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View membership perks
          </Link>
        </div>
      </div>
    </section>
  );
}

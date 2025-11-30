const programs = [
  {
    name: "Strength Foundations",
    focus: "Build muscle and joint stability",
    duration: "6-week progressive block",
    details: ["3 lifting sessions weekly", "Guided mobility", "Video library"],
    level: "Beginner → Intermediate",
  },
  {
    name: "Engine Builder",
    focus: "Boost aerobic capacity and endurance",
    duration: "8-week mixed-modal plan",
    details: [
      "Zone-based cardio prescriptions",
      "Tempo strength support",
      "Weekly performance testing",
    ],
    level: "Intermediate",
  },
  {
    name: "Athlete Reset",
    focus: "Reduce fatigue and rebuild explosiveness",
    duration: "4-week deload cycle",
    details: [
      "Daily breathwork",
      "Sleep rhythm reset",
      "Reactive agility sessions",
    ],
    level: "All levels",
  },
];

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:py-28"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Training tracks
          </p>
          <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
            Programs engineered for real-world performance
          </h2>
          <p className="text-lg text-zinc-600">
            Choose the path that matches your ambition. Every program includes
            coaching cues, warm-up primers, and built-in recovery so you can
            train smarter, not just harder.
          </p>
        </div>
        <a
          href="#get-started"
          className="hidden rounded-full border border-brand/20 px-6 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white md:inline-flex"
        >
          Start a free trial
        </a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.name}
            className="group flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/80">
                  {program.level}
                </span>
                <h3 className="text-xl font-semibold text-zinc-900">
                  {program.name}
                </h3>
              </div>
              <p className="text-sm text-zinc-600">{program.focus}</p>
              <p className="inline-flex items-center rounded-full bg-brand/5 px-4 py-1 text-xs font-medium text-brand">
                {program.duration}
              </p>
              <ul className="space-y-3 text-sm text-zinc-600">
                {program.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-xs text-brand">
                      ✓
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="mt-8 inline-flex items-center justify-between rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand/10"
            >
              View sample week
              <span aria-hidden>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}


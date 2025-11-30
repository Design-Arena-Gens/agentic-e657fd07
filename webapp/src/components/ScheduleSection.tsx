const schedule = [
  {
    day: "Monday",
    focus: "Heavy Strength",
    details: ["Back squat wave loading", "Single-leg RDL ladder", "Core carries"],
  },
  {
    day: "Tuesday",
    focus: "Engine Intervals",
    details: ["Bike erg 5×3 min @ 80%", "Active recovery mobility"],
  },
  {
    day: "Wednesday",
    focus: "Athletic Movement",
    details: ["Plyo complex", "Acceleration sleds", "Reactive change of direction"],
  },
  {
    day: "Thursday",
    focus: "Reset & Restore",
    details: ["Low-intensity cardio 30 min", "90/90 breathing", "Soft tissue work"],
  },
  {
    day: "Friday",
    focus: "Dynamic Strength",
    details: ["Deadlift triples", "Olympic lift technique", "Assault runner sprints"],
  },
  {
    day: "Saturday",
    focus: "Community Burner",
    details: ["Team circuit", "Partner carries", "Cooldown stretch"],
  },
];

export function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="bg-zinc-50 py-24"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Weekly rhythm
          </p>
          <h2
            id="schedule-heading"
            className="text-3xl font-semibold text-zinc-900 sm:text-4xl"
          >
            A balanced schedule to move, recover, and progress.
          </h2>
          <p className="text-lg text-zinc-600">
            Personalize each block, or follow the blueprint below for a well
            rounded training week that alternates focus areas and recovery.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {schedule.map((session) => (
            <article
              key={session.day}
              className="rounded-3xl border border-zinc-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <header className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-900">
                  {session.day}
                </h3>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {session.focus}
                </span>
              </header>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                {session.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-8 rounded-full bg-brand/40" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


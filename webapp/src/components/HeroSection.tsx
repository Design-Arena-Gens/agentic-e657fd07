import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-fitness-texture"
      id="hero"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand via-blue-500/40 to-emerald-400/40 opacity-70" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-20 text-zinc-900 sm:px-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark shadow-sm backdrop-blur">
            Your all-in-one fitness studio
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Build strength, boost endurance, and move with purpose.
          </h1>
          <p className="max-w-xl text-lg text-zinc-700 sm:text-xl">
            FitFlow combines personalized workout planning, smart progress
            tracking, and evidence-based recovery to help you train like an
            athlete—no matter your starting point.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#planner"
              className="group flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Build my program
              <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white transition group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="#programs"
              className="flex items-center justify-center rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore training tracks
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-white sm:grid-cols-4">
            {[
              { title: "Members coached", value: "35k+" },
              { title: "Avg. commitment", value: "18 min/day" },
              { title: "Programs available", value: "42" },
              { title: "Satisfaction", value: "4.9 / 5" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/10 p-4">
                <dt className="text-xs uppercase tracking-wide text-white/70">
                  {item.title}
                </dt>
                <dd className="text-2xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/30 bg-white/60 p-6 shadow-2xl backdrop-blur">
          <div className="absolute inset-x-0 top-8 mx-auto h-24 w-24 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
              Today&apos;s focus
            </h2>
            <div className="grid gap-4 text-sm font-medium text-zinc-700">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  Warm-up
                </p>
                <p className="pt-1 text-lg text-zinc-900">
                  Mobility series · 6 min
                </p>
                <p className="text-xs text-zinc-500">
                  Hip openers, shoulder prep, thoracic rotations
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  Strength
                </p>
                <p className="pt-1 text-lg text-zinc-900">
                  Lower body power · 4 rounds
                </p>
                <ul className="mt-2 space-y-1 text-xs text-zinc-500">
                  <li>Back squats · 6 reps @ 70%</li>
                  <li>Romanian deadlift · 8 reps @ 60%</li>
                  <li>Split squat jumps · 12 reps</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  Conditioning
                </p>
                <p className="pt-1 text-lg text-zinc-900">
                  Interval run · 16 min
                </p>
                <p className="text-xs text-zinc-500">
                  1:1 work-to-rest ratio, maintain 70-80% max heart rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


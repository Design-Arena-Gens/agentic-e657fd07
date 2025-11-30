"use client";

import { useMemo, useState } from "react";

type GoalKey = "strength" | "endurance" | "fatLoss" | "mobility";

const goalCopy: Record<
  GoalKey,
  {
    title: string;
    headline: string;
    focus: string[];
    finisher: string;
  }
> = {
  strength: {
    title: "Strength & Power",
    headline: "Compound lifts + explosive finishers",
    focus: [
      "Primary lifts in 5×5 or 4×6 structure",
      "Accessory supersets for stability",
      "Contrast training to convert strength to power",
    ],
    finisher: "3 rounds: 6 kettlebell swings · 6 box jumps · 60s rest",
  },
  endurance: {
    title: "Endurance Engine",
    headline: "Zone 2 base with weekly threshold touches",
    focus: [
      "Long intervals at 70% max heart rate",
      "Tempo strength ladder for fatigue resistance",
      "Brisk ruck or steady row for active recovery",
    ],
    finisher: "20 min EMOM: 15 calorie row + 12 wall balls",
  },
  fatLoss: {
    title: "Metabolic Shred",
    headline: "Hybrid circuits that keep the heart rate elevated",
    focus: [
      "Giant sets mixing compound moves and plyometrics",
      "Minimal rest, intentional breathing",
      "Core stability to anchor posture under fatigue",
    ],
    finisher: "4 min tabata: alternating battle ropes & burpees",
  },
  mobility: {
    title: "Mobility Reset",
    headline: "Intentional movement to restore range of motion",
    focus: [
      "Joint CARs with progressive holds",
      "Elastic strength via tempo bodyweight drills",
      "Breath-led patterning to unlock end ranges",
    ],
    finisher: "Guided breathwork + passive stretch sequence",
  },
};

const equipmentPresets = {
  minimal: "Dumbbells, bands, tempo control",
  full: "Barbell, rack, cable system, sled",
  bodyweight: "Suspension trainer, sliders, plyo box",
};

const daySplits = {
  3: ["Total Body", "Strength + Conditioning", "Mobility & Core"],
  4: ["Upper Push", "Lower", "Upper Pull", "Conditioning"],
  5: [
    "Heavy Lower",
    "Upper Strength",
    "Active Recovery",
    "Dynamic Lower",
    "Conditioning Finisher",
  ],
};

export function WorkoutPlanner() {
  const [goal, setGoal] = useState<GoalKey>("strength");
  const [equipment, setEquipment] = useState<keyof typeof equipmentPresets>("full");
  const [days, setDays] = useState<3 | 4 | 5>(4);

  const plan = useMemo(() => {
    const overview = goalCopy[goal];
    const split = daySplits[days];
    return {
      overview,
      split,
      equipmentNotes: equipmentPresets[equipment],
    };
  }, [goal, equipment, days]);

  return (
    <section
      id="planner"
      className="bg-zinc-50 py-24"
      aria-labelledby="planner-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Smart planner
            </p>
            <h2
              id="planner-heading"
              className="text-3xl font-semibold text-zinc-900 sm:text-4xl"
            >
              Build a weekly plan tailored to your goal and availability.
            </h2>
            <p className="text-lg text-zinc-600">
              Plot your goal, available equipment, and commitment. Get a clean
              blueprint you can follow today, with clear priorities for every
              session.
            </p>
          </div>
          <div className="rounded-3xl border border-brand/20 bg-white/80 p-6 shadow-xl backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Session focus
            </h3>
            <p className="mt-3 text-lg font-semibold text-zinc-900">
              {plan.overview.title}
            </p>
            <p className="text-sm text-zinc-600">{plan.overview.headline}</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              {plan.overview.focus.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-brand/20 bg-brand/5 p-4 text-sm text-brand">
              Finisher: {plan.overview.finisher}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <form className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Goal
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ["strength", "Strength"],
                    ["endurance", "Endurance"],
                    ["fatLoss", "Fat loss"],
                    ["mobility", "Mobility"],
                  ] as [GoalKey, string][]
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setGoal(value)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                      goal === value
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-zinc-200 text-zinc-600 hover:border-brand/40 hover:text-brand"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Days / week
                <select
                  className="rounded-full border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value) as 3 | 4 | 5)}
                >
                  <option value={3}>3 days</option>
                  <option value={4}>4 days</option>
                  <option value={5}>5 days</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Equipment
                <select
                  className="rounded-full border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  value={equipment}
                  onChange={(event) =>
                    setEquipment(event.target.value as keyof typeof equipmentPresets)
                  }
                >
                  <option value="full">Full gym</option>
                  <option value="minimal">Minimal setup</option>
                  <option value="bodyweight">Bodyweight focus</option>
                </select>
              </label>
            </div>
          </form>

          <aside className="space-y-6 rounded-3xl border border-brand/15 bg-white p-6 shadow-lg">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Equipment emphasis
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                {plan.equipmentNotes}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Weekly split
              </p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                {plan.split.map((day, index) => (
                  <li
                    key={day}
                    className="flex items-center justify-between rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3"
                  >
                    <span className="font-semibold text-brand">
                      Day {index + 1}
                    </span>
                    <span>{day}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useMemo, useState } from "react";

type SexOption = "female" | "male";

function formatNumber(value: number) {
  return Number.isFinite(value) ? value.toFixed(1) : "—";
}

function getBmiStatus(bmi: number) {
  if (!Number.isFinite(bmi)) return "—";
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Optimal range";
  if (bmi < 29.9) return "Elevated";
  return "High risk";
}

function calcDailyCalories({
  weightKg,
  heightCm,
  age,
  sex,
  activity,
}: {
  weightKg: number;
  heightCm: number;
  age: number;
  sex: SexOption;
  activity: number;
}) {
  const bmr =
    sex === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  const maintenance = bmr * activity;
  return {
    maintenance,
    deficit: maintenance - 400,
    surplus: maintenance + 300,
  };
}

export function CalculatorSection() {
  const [weight, setWeight] = useState("72");
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("29");
  const [sex, setSex] = useState<SexOption>("male");
  const [activity, setActivity] = useState("1.55");

  const parsedWeight = parseFloat(weight);
  const parsedHeightCm = parseFloat(height);
  const parsedHeightM = parsedHeightCm / 100;
  const parsedAge = parseFloat(age);
  const parsedActivity = parseFloat(activity);

  const bmi = useMemo(() => {
    if (!parsedWeight || !parsedHeightM) return NaN;
    return parsedWeight / (parsedHeightM * parsedHeightM);
  }, [parsedWeight, parsedHeightM]);

  const calories = useMemo(() => {
    if (!parsedWeight || !parsedHeightCm || !parsedAge || !parsedActivity)
      return {
        maintenance: NaN,
        deficit: NaN,
        surplus: NaN,
      };
    return calcDailyCalories({
      weightKg: parsedWeight,
      heightCm: parsedHeightCm,
      age: parsedAge,
      sex,
      activity: parsedActivity,
    });
  }, [parsedWeight, parsedHeightCm, parsedAge, sex, parsedActivity]);

  return (
    <section
      id="calculators"
      className="py-24"
      aria-labelledby="calculators-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Performance metrics
          </p>
          <h2
            id="calculators-heading"
            className="text-3xl font-semibold text-zinc-900 sm:text-4xl"
          >
            Track your progress with science-backed calculators.
          </h2>
          <p className="text-lg text-zinc-600">
            Use these quick tools to calibrate nutrition targets and monitor
            body composition changes. All inputs stay on your device.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">
              Personal metrics
            </h3>
            <p className="text-sm text-zinc-600">
              Update your stats to refresh every calculator.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Weight (kg)
                <input
                  type="number"
                  min={30}
                  max={200}
                  step={0.1}
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Height (cm)
                <input
                  type="number"
                  min={120}
                  max={220}
                  step={0.5}
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                  className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Age
                <input
                  type="number"
                  min={16}
                  max={80}
                  step={1}
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Activity
                <select
                  value={activity}
                  onChange={(event) => setActivity(event.target.value)}
                  className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                >
                  <option value="1.2">Sedentary (1.2)</option>
                  <option value="1.375">Light (1.375)</option>
                  <option value="1.55">Moderate (1.55)</option>
                  <option value="1.725">Very active (1.725)</option>
                  <option value="1.9">Athlete (1.9)</option>
                </select>
              </label>
              <fieldset className="col-span-full flex gap-4 text-sm">
                <legend className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Sex
                </legend>
                <label className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-zinc-600 transition hover:border-brand/40 hover:text-brand">
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    checked={sex === "female"}
                    onChange={() => setSex("female")}
                  />
                  Female
                </label>
                <label className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-zinc-600 transition hover:border-brand/40 hover:text-brand">
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    checked={sex === "male"}
                    onChange={() => setSex("male")}
                  />
                  Male
                </label>
              </fieldset>
            </div>
          </form>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-brand/20 bg-white p-6 shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                Body Mass Index
              </h3>
              <p className="mt-3 text-4xl font-semibold text-zinc-900">
                {formatNumber(bmi)}
              </p>
              <p className="text-sm text-zinc-600">
                Status:{" "}
                <span className="font-semibold text-brand">
                  {getBmiStatus(bmi)}
                </span>
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                BMI is a broad indicator. Pair it with waist measurements and
                performance trends for better insights.
              </p>
            </div>
            <div className="rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/5 via-white to-emerald-50 p-6 shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                Daily calories
              </h3>
              <dl className="mt-4 space-y-3 text-sm text-zinc-600">
                <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 font-medium text-brand">
                  <dt>Maintenance</dt>
                  <dd>{formatNumber(calories.maintenance)}</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3">
                  <dt>Fat loss target (-400)</dt>
                  <dd>{formatNumber(calories.deficit)}</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3">
                  <dt>Lean mass gain (+300)</dt>
                  <dd>{formatNumber(calories.surplus)}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-zinc-500">
                Targets use the Mifflin-St Jeor equation with your selected
                activity multiplier. Adjust weekly based on biofeedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


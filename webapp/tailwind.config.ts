import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#60a5fa",
        },
      },
      backgroundImage: {
        "fitness-texture":
          "radial-gradient(circle at top left, rgba(37,99,235,0.2), transparent 60%), radial-gradient(circle at bottom right, rgba(16,185,129,0.25), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;

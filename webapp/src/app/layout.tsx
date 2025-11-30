import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitFlow | Personalized Fitness Training Programs",
  description:
    "Design your fitness journey with tailored workout plans, recovery insights, and science-backed nutrition targets. Train smarter with FitFlow.",
  keywords: [
    "fitness app",
    "workout planner",
    "strength training",
    "endurance program",
    "nutrition calculator",
    "home workouts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { CalculatorSection } from "@/components/CalculatorSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkoutPlanner } from "@/components/WorkoutPlanner";

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <WorkoutPlanner />
        <CalculatorSection />
        <ScheduleSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

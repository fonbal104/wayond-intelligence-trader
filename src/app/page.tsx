import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import PerformanceSection from "@/sections/PerformanceSection";
import WhyWITSection from "@/sections/WhyWITSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import AboutSection from "@/sections/AboutSection";
import FAQSection from "@/sections/FAQSection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <PerformanceSection />
      <WhyWITSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
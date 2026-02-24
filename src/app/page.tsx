import Hero3D from "@/components/hero/Hero3D";
import HeroOverlay from "@/components/hero/HeroOverlay";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import TariffsSection from "@/components/sections/TariffsSection";
import StepsSection from "@/components/sections/StepsSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import StatsSection from "@/components/sections/StatsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FaqSection from "@/components/sections/FaqSection";
import MarinaWidget from "@/components/ai-widget/MarinaWidget";

export default function Home() {
  return (
    <main className="relative bg-slate-900 font-sans selection:bg-brand-light text-slate-800">
      <Navbar />

      <div className="relative">
        {/* z-indexes ensure sections stack top-down visually like a deck of cards if configured so, 
            but here we want them to overlay each other upwards. 
            So later sections should have higher z-index (which they naturally do by DOM order),
            but sticky works best when all have same level or increasing z-index */}

        <section id="hero" className="relative min-h-[110vh] md:min-h-screen w-full overflow-hidden bg-slate-50 flex flex-col justify-center">
          {/* Light Pearl Aurora Background */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob pointer-events-none" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-cyan-100/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000 pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000 pointer-events-none" />
          <Hero3D />
          <HeroOverlay />
        </section>

        <section id="services" className="relative w-full bg-slate-50 py-20">
          <ServicesSection />
        </section>

        <section id="steps" className="relative w-full bg-white py-10">
          <StepsSection />
        </section>

        <section id="tariffs" className="relative w-full bg-slate-50 py-10">
          <TariffsSection />
        </section>

        <section id="advantages" className="relative w-full bg-brand overflow-hidden py-10">
          {/* subtle pattern or gradient in background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand opacity-80" />
          <div className="relative z-10"><AdvantagesSection /></div>
        </section>

        <section id="stats" className="relative w-full bg-white">
          <StatsSection />
        </section>

        <section id="comparison" className="relative w-full bg-white py-10">
          <ComparisonSection />
        </section>

        <section id="social" className="relative w-full bg-white py-10">
          <SocialProofSection />
        </section>

        <section id="faq" className="relative w-full bg-slate-50 pt-10 flex flex-col">
          <FaqSection />
          <div className="mt-20 w-full"><Footer /></div>
        </section>
      </div>

      <MarinaWidget />
    </main>
  );
}

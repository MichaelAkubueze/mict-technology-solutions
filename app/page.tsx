import BusinessPillars from "@/components/sections/BusinessPillars";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import Training from "@/components/sections/Training";
import WhyMICT from "@/components/sections/WhyMICT";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <BusinessPillars />

        <Services />

        <Training />

        <Solutions />

        <Industries />

        <Projects />

        <WhyMICT />

        <CTA />
      </main>

      <WhatsAppButton />
    </>
  );
}
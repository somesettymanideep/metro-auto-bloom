import { useEffect } from "react";
import { MetroHeader } from "@/components/MetroHeader";
import { MetroHero } from "@/components/MetroHero";
import {
  TrustBar,
  AboutSection,
  FounderSection,
  ServicesSection,
  InventorySection,
  WhySection,
  TestimonialsSection,
  ProcessSection,
  EnquirySection,
  FAQSection,
  CTASection,
  HappyCustomersSection,
  MetroFooter,
  StickyContact,
} from "@/components/MetroSections";



export default function Home() {
  useEffect(() => {
    document.title = "Metro Cars Vijayawada | Buy Pre Owned Cars in Vijayawada";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <MetroHeader />
      <MetroHero />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <InventorySection />

      <WhySection />
      <TestimonialsSection />
      <ProcessSection />
      <EnquirySection />
      <FAQSection />
      <CTASection />
      <HappyCustomersSection />
      <MetroFooter />
      <StickyContact />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { MetroHeader } from "@/components/MetroHeader";
import { MetroHero } from "@/components/MetroHero";
import {
  TrustBar,
  AboutSection,
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Metro Cars Vijayawada | Buy Pre Owned Cars in Vijayawada" },
      { name: "description", content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available." },
      { name: "keywords", content: "pre owned cars in vijayawada, used cars vijayawada, second hand cars vijayawada, buy used cars vijayawada, certified pre owned cars, used car dealer vijayawada, metro cars vijayawada" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Metro Cars Vijayawada" },
      { property: "og:title", content: "Metro Cars Vijayawada | Buy Pre Owned Cars in Vijayawada" },
      { property: "og:description", content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://metro-drive-vja.lovable.app/" },
      { property: "og:site_name", content: "Metro Cars Vijayawada" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Metro Cars Vijayawada | Buy Pre Owned Cars in Vijayawada" },
      { name: "twitter:description", content: "Buy certified pre owned cars in Vijayawada at Metro Cars. Wide range of sedans, SUVs, hatchbacks & luxury vehicles. Transparent pricing, verified history, easy financing options available." },
    ],
    links: [{ rel: "canonical", href: "https://metro-drive-vja.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <MetroHeader />
      <MetroHero />
      <TrustBar />
      <AboutSection />
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

import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FeaturesSection } from "@/components/features-section";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <FeaturesSection />
      {/* <FeatureWithImageLeft /> */}
      <Features />
      <Faq />
      <CtaSection />
    </>
  );
}

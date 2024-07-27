import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Technologies } from "@/components/technologies";
import { FeaturesSection } from "@/components/features-section";
import { FeatureWithImageLeft } from "@/components/feature-image-left";
import { Features } from "@/components/features";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <FeaturesSection />
      <FeatureWithImageLeft />
      <Features />
      <Faq />
      <CtaSection />
    </>
  );
}

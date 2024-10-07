import { CtaSection } from "@/components/cta-section";
import { DragonflyFeature } from "@/components/dragonfly-feature";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FeaturesSection } from "@/components/features-section";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Technologies } from "@/components/technologies";
import { PastProjects } from "../components/past-projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <FeaturesSection />
      <DragonflyFeature />
      <PastProjects />
      {/* <FeatureWithImageLeft /> */}
      <Features />

      <Faq />
      <CtaSection />
    </>
  );
}

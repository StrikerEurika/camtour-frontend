import Hero from "@/components/ui/Hero";
import Culture from "@/components/ui/Culture";
import TopDestinations from "@/components/ui/TopDestinations";
import Carousel from "@/components/Carousel";
import ExperiencesAdventure from "@/components/ui/ExperiencesAdventure";
import QuickTravelTips from "@/components/ui/QuickTravelTips";
import CamTourHero from "@/components/ui/CamTourHero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TopDestinations />
      <Culture />
      <ExperiencesAdventure />
      <QuickTravelTips />
      <CamTourHero />
    </>
  );
}

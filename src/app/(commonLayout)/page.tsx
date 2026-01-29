import FounderMessage from "@/components/HomePage/FoundersMessage/FoundersMessage";
import HeroSection from "@/components/HomePage/Hero/Hero";
import OurClientele from "@/components/HomePage/OurClientele/OurClientele";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <OurClientele/>
      <FounderMessage/>
    </div>
  );
}

import FounderMessage from "@/components/HomePage/FoundersMessage/FoundersMessage";
import HeroSection from "@/components/HomePage/Hero/Hero";
import OurClientele from "@/components/HomePage/OurClientele/OurClientele";
import OurServices from "@/components/OurServices/OurServices";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <OurClientele/>
      <OurServices/>
      <FounderMessage/>
    </div>
  );
}

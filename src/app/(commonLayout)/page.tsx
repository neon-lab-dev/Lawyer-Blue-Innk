import FounderMessage from "@/components/HomePage/FoundersMessage/FoundersMessage";
import HeroSection from "@/components/HomePage/Hero/Hero";
import OurClientele from "@/components/HomePage/OurClientele/OurClientele";
import OurServices from "@/components/OurServices/OurServices";
import ContactUs from "@/components/Shared/ContactUs/ContactUs";
import WhyChooseBlueInkk from "@/components/Shared/WhyChooseBlueInkk/WhyChooseBlueInkk";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <OurClientele/>
      <OurServices/>
      <WhyChooseBlueInkk/>
      <FounderMessage/>
    <ContactUs/>
    </div>
  );
}

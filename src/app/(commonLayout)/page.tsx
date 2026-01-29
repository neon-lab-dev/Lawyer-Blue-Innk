import FounderMessage from "@/components/HomePage/FoundersMessage/FoundersMessage";
import HeroSection from "@/components/HomePage/HeroSectoin/HeroSectoin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <FounderMessage/>
    </div>
  );
}

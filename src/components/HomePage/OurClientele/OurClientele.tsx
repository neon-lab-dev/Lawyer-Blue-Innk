import Container from "@/components/Reusable/Container/Container";
import { IMAGES } from "../../../../public/assets";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const OurClientele = () => {
  const stats = [
    { title: "Clients Helped", value: 40000 },
    { title: "Years Legal Experience", value: 15 },
    { title: "Practice Areas", value: 100 },
  ];

  const clients = [
    IMAGES.airArabia,
    IMAGES.haldirams,
    IMAGES.wakefit,
    IMAGES.micromax,
  ];

  return (
    <section className="bg-neutral-25 py-14 md:py-18 font-neue-montreal">
      <Container>
        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-9 md:gap-0 items-center justify-between">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="text-neutral-15 space-y-3 text-center"
            >
              <h3 className="text-5xl leading-14 font-medium">{stat.value}+</h3>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>

        <hr className="border border-neutral-30 my-14" />

        {/* Title */}
        <h1 className="title mb-12 text-center">Our Clientele</h1>

        {/* Marquee */}
        <div className="relative">
          <div className="w-10 md:w-37 h-24 bg-gradient-client absolute left-0 z-10"></div>
          <div className="w-10 md:w-37 h-24 bg-gradient-client absolute right-0 z-10 rotate-180"></div>

          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover
            className="overflow-hidden"
          >
            {clients.map((logo, index) => (
              <div
                key={index}
                className="mx-10 md:mx-30 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  className="object-contain w-40"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default OurClientele;

import Image from "next/image";
import Container from "@/components/Reusable/Container/Container";
import { IMAGES } from "@/assets";
import SectionHeading from "@/components/Reusable/Heading/SectionHeading";

const FounderMessage = () => {
  return (
    <section className="bg-neutral-05 py-12 md:py-14">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <SectionHeading text="Founder’s Message" />
            <p className="text-neutral-15 text-sm md:text-lg leading-relaxed mb-4 mt-6">
              At Bluelnkk, we see intellectual property as the power to innovate
              and the commitment to protect that innovation. Our vision is to
              deliver globally benchmarked IP solutions with precision,
              integrity, and strategic clarity.
            </p>

            <p className="text-neutral-15 text-sm md:text-lg leading-relaxed">
              Trusted by a growing global clientele, we remain focused on one
              purpose: protecting innovation, strengthening brands, and enabling
              long-term value across jurisdictions.
            </p>
          </div>

          {/* Image Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src={IMAGES.founder} // <-- change to your founder image
                alt="Founder"
                className="w-full h-[280px] md:h-[388px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderMessage;

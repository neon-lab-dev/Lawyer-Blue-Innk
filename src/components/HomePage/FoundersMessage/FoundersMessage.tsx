import Image from "next/image";
import Container from "@/components/Reusable/Container/Container";
import { IMAGES } from "../../../../public/assets";

const FounderMessage = () => {
  return (
    <section className="bg-neutral-05 py-14 font-neue-montreal">
      <Container>
        <div className="flex items-center gap-6">
          {/* Text Content */}
          <div className="w-1/2">
            <h3 className="title">Founder’s Message</h3>
            <p className="text-neutral-15 text-sm md:text-lg leading-relaxed mt-3 font-work-sans">
              At BlueInkk, we see intellectual property as the power to innovate
              and the commitment to protect that innovation. Our vision is to
              deliver globally benchmarked IP solutions with precision,
              integrity, and strategic clarity.
              <br />
              <br />
              Trusted by a growing global clientele, we remain focused on one
              purpose: protecting innovation, strengthening brands, and enabling
              long-term value across jurisdictions.
            </p>

            
          </div>

          {/* Image */}
          <Image
            src={IMAGES.founder}
            alt="Founder"
            className="w-1/2 h-125"
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default FounderMessage;

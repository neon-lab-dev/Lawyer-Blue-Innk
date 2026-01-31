import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const OurTeam = () => {
  return (
    <div className="bg-neutral-05 pt-12 pb-12 lg:pb-32 font-neue-montreal">
      <Container>
        <Heading
          heading="Meet Our Legal Experts"
          description="A team of experienced lawyers committed to providing clear, ethical, and client-focused legal guidance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 lg:mt-26.5">
          {[1, 2, 3, 4, 5, 6]?.map((_, index) => (
            <div key={index} className="max-w-[288px] relative">
              <Image src={IMAGES.dummyTeamMember} alt="Founder" />
              <div className="bg-secondary-05 p-6 absolute bottom-0">
                <h3 className="text-2xl text-neutral-15 font-medium font-neue-montreal">
                  Sarah Johnson
                </h3>
                <p className="font-work-sans font-medium mt-1.5">
                  Corporate Law Specialist (10+ yrs experience)
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;

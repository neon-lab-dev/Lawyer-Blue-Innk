import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const OurTeam = () => {
  const teamMembers = [
    {
      name : "Mayank Goel",
      position : "Founding Partner",
      image : IMAGES.founder
    },
    {
      name : "Sukhveer Singh",
      position : "Partner",
      image : IMAGES.SukhveerSingh
    },
    {
      name : "Riya Gupta",
      position : "Partner",
      image : IMAGES.RiyaGupta
    },
    {
      name : "Raj Priya",
      position : "Senior Associate",
      image : IMAGES.RajPriya
    },
    {
      name : "Aditi Tiwari",
      position : "Senior Associate",
      image : IMAGES.AditiTiwari
    },
  ]
  return (
    <div className="bg-neutral-05 pt-12 pb-12 lg:pb-32 font-neue-montreal">
      <Container>
        <Heading
          heading="Meet Our Legal Experts"
          description="A team of experienced lawyers committed to providing clear, ethical, and client-focused legal guidance."
        />

        <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-12 mt-12 lg:mt-26.5">
          {teamMembers?.map((member, index) => (
            <div key={index} className="max-w-[288px]">
              <Image src={member?.image} alt="Founder" className="h-75 object-cover" />
              <div className="bg-secondary-05 p-6">
                <h3 className="text-2xl text-neutral-15 font-medium font-neue-montreal">
                  {member?.name}
                </h3>
                <p className="font-work-sans font-medium mt-1.5">
                  {member?.position}
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

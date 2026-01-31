import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const Awards = () => {
  return (
    <div className="bg-neutral-05 pt-12 pb-32 font-neue-montreal">
      <Container>
        <Heading
          heading="Awards & Recognition"
          description="Honoured for legal excellence, consistent performance, and trusted intellectual property expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 lg:mt-26.5">
          {[1, 2, 3, 4, 5, 6]?.map((_, index) => (
            <div
              key={index}
              className="max-w-[288px] flex flex-col items-center gap-6"
            >
              <Image src={IMAGES.awardDummy} alt="Founder" />
              <p className="font-work-sans font-medium text-center">
                Award Name
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Awards;

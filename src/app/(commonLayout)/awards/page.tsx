import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets";

const Awards = () => {
  const awards = [
    {
      image : IMAGES.award1,
      title : "Trademark Law Firm of the Year",
      description : "Blue Inkk was recognised as Trademark Law Firm of the Year at the 28th IIPLA 2026 Conference, organised by the International Intellectual Property Law Association (IIPLA), held in Dubai on 19–20 January 2026 at the Radisson Blu Hotel, Dubai Waterfront, for excellence in trademark prosecution, enforcement, and strategic advisory services."
    }
  ]
  return (
    <div className="bg-neutral-05 pt-12 pb-32 font-neue-montreal">
      <Container>
        <Heading
          heading="Awards & Recognition"
          description="Honoured for legal excellence, consistent performance, and trusted intellectual property expertise."
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-12 lg:mt-26.5">
          {awards?.map((award, index) => (
            <div
              key={index}
              className="items-center flex flex-col md:flex-row gap-7 md:gap-10"
            >
              <Image src={award?.image} alt="Founder" className="max-w-full md:max-w-[288px]" />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-14 text-neutral-15">
                {award?.title}
              </h2>
              <p className="font-work-sans text-base lg:text-lg font-medium max-w-[600px] mt-3">
                {award?.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Awards;

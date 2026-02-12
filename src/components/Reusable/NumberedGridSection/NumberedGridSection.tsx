import React from "react";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";

const NumberedGridSection = ({heading, description} : {heading: string, description?: string}) => {
  const practiceAreas = [
    { id: "1", title: "Trademark" },
    { id: "2", title: "Copyright" },
    { id: "3", title: "Design" },
    { id: "4", title: "Patent" },
    { id: "5", title: "Contracts & Agreements" },
    { id: "6", title: "IP Valuation & Due Diligence" },
    { id: "7", title: "Commercial Litigation" },
    { id: "8", title: "Criminal Litigation" },
    { id: "9", title: "Arbitration & Conciliation" },
    { id: "10", title: "IP Enforcement & Anti Counterfeiting" },
  ];
  return (
    <Container>
      <div className="font-neue-montreal pt-14 pb-19">
        <Heading
          heading={heading}
          description={description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
          {practiceAreas.map((area, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-3 flex-1">
              <div
                  key={area.id}
                  className="bg-gradient-service-card p-6 rounded-3xl "
                >
                  <h3 className="text-2xl font-medium text-neutral-15 italic"> {area.title} </h3>
                </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NumberedGridSection;

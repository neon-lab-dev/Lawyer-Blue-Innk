import React from "react";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";

const NumberedGridSection = ({heading, description} : {heading: string, description?: string}) => {
  const practiceAreas = [
    { id: "01", title: "Trademark" },
    { id: "02", title: "Copyright" },
    { id: "03", title: "Design" },
    { id: "04", title: "Patent" },
    { id: "05", title: "IP Enforcement & Anti Counterfeiting" },
    { id: "06", title: "IP Valuation & Due Diligence" },
    { id: "07", title: "Commercial Litigation" },
    { id: "08", title: "Criminal Litigation" },
    { id: "09", title: "Arbitration & Conciliation" },
    { id: "10", title: "Contracts & Agreements" },
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
                  className="bg-gradient-service-card p-6 rounded-3xl"
                >
                  <h3 className="title">{area.id}</h3>
                  <p className="text-2xl font-medium text-neutral-15 mt-3">
                    {area.title}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NumberedGridSection;

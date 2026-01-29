import Container from "../Reusable/Container/Container";
import Heading from "../Reusable/Heading/Heading";

const OurServices = () => {
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

  // Number of columns
  const columns = 3;
  const rows = Math.ceil(practiceAreas.length / columns);

  // Spliting items into columns
  const columnsData = Array.from({ length: columns }, (_, colIndex) =>
    practiceAreas.filter(
      (_, index) => index >= colIndex * rows && index < (colIndex + 1) * rows,
    ),
  );

  return (
    <Container>
      <div className="font-neue-montreal pt-14 pb-19">
        <Heading
          heading="Our Services"
          description="Comprehensive legal services tailored to your needs."
        />

        <div className="flex gap-3 mt-12">
          {columnsData.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-3 flex-1">
              {col.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-service-card p-6 rounded-3xl"
                >
                  <h3 className="title">{item.id}</h3>
                  <p className="text-2xl font-medium text-neutral-15 mt-3">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurServices;

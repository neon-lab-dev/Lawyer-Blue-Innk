import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import NumberedContentSection from "@/components/Reusable/NumberedContentSection/NumberedContentSection";

const AboutUs = () => {
  const coreValues = [
    {
      id: "01",
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in every case we handle.",
    },
    {
      id: "02",
      title: "Excellence",
      description:
        "We pursue excellence in legal strategy, execution, and client service.",
    },
    {
      id: "03",
      title: "Compassion",
      description: "We understand the human element in every legal matter.",
    },
    {
      id: "04",
      title: "Results",
      description:
        "We are committed to achieving the best possible outcomes for our clients.",
    },
  ];

  return (
    <div>
      <AboutUsHero />
      <NumberedContentSection heading="Core Values" items={coreValues} />
    </div>
  );
};

export default AboutUs;

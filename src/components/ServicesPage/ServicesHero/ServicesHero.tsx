import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";

const ServicesHero = () => {
  return (
    <section className="bg-neutral-05 pt-12 pb-32 font-neue-montreal">
      <Container>
        <div className="max-w-285 mx-auto">
          <Heading
            heading="Legal Expertise Tailored to Your Situation"
            description=" Explore our practice areas and speak with an experienced lawyer
            about your specific legal needs."
          />
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;

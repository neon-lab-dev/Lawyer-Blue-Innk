import Container from "@/components/Reusable/Container/Container";

const ServicesHero = () => {
  return (
    <section className="bg-neutral-05 pt-12 pb-32 font-neue-montreal">
      <Container>
        <div className="max-w-285 mx-auto">
          <h1 className="text-5xl font-medium leading-14 text-neutral-15 max-w-170.25">
            Legal Expertise Tailored to Your Situation
          </h1>

          <p className="text-lg text-neutral-15 font-work-sans leading-7 mt-3 max-w-170.25">
            Explore our practice areas and speak with an experienced lawyer
            about your specific legal needs.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
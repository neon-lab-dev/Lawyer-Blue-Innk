import Container from "@/components/Reusable/Container/Container";

const Hero = () => {
  return (
    <section className="bg-neutral-05 pt-12 pb-18 font-neue-montreal">
      <Container>
        <div className="max-w-2xl flex flex-col gap-6">
          <div>
            <h1 className="text-5xl font-medium leading-14 text-neutral-15">
              Trusted Legal Representation, When It Matters Most.
            </h1>

            <p className="text-lg text-neutral-15 font-work-sans mt-3">
              Experienced attorneys helping individuals and businesses protect
              their <br /> rights with confidence.
            </p>
          </div>
          {/* <Button label="Enquire Now" /> */}

          <p className="text-sm font-medium text-neutral-20">
            Confidential - Quick Response - No <br /> obligation
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
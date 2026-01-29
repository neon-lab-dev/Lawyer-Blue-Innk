import Container from "@/components/Reusable/Container/Container";

const Hero = () => {
  return (
    <section className="bg-neutral-05 py-10 md:py-14">
      <Container>
        <div className="p-6 md:p-12 max-w-xl text-white">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            Trusted Legal Representation,
            <br />
            When It Matters Most.
          </h1>

          <p className="text-sm md:text-base text-white/90 mb-6">
            Experienced attorneys helping individuals and businesses protect
            their rights with confidence.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-primary-10 text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition">
              Get Free Consultation →
            </button>

            <span className="text-xs text-white/80">
              Confidential • Quick Response • No obligation
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

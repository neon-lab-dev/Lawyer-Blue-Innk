import Container from "@/components/Reusable/Container/Container";

const AboutUsHero = () => {
  return (
    <section className="bg-neutral-05 pt-12 pb-18 font-neue-montreal">
      <Container>
        <div className="max-w-[1140px] mx-auto">
          <h1 className="text-5xl font-medium leading-14 text-neutral-15">
            About BlueInkk
          </h1>

          <p className="text-lg text-neutral-15 font-work-sans leading-7 mt-3">
            Blue Inkk is a full-service Intellectual Property law firm providing
            strategic, business-driven IP solutions worldwide. Founded in
            October 2019 by Mayank Goel, and later joined by Sukhveer Singh and
            Riya Gupta, the firm was built to make IP protection proactive,
            precise, and commercially effective.
            <br />
            Following a 360° IP Protection Approach, Blue Inkk delivers
            end-to-end IP services across creation, protection, enforcement, and
            monetisation, with strong expertise in domestic and international
            trademark filings, including the Madrid Protocol, across 100+
            countries.
            <br />
            Recognised by the Government of India among the Top 15 domestic law
            firms for trademark filings, Blue Inkk serves 40,000+ clients,
            including Air Arabia, Micromax, Faces Canada, Wakefit, Haldiram’s,
            and eminent personalities such as Ajay Devgn and Premanand Maharaj
            Ji.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHero;

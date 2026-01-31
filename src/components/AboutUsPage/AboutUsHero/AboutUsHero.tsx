import Container from "@/components/Reusable/Container/Container";

const AboutUsHero = () => {
  return (
    <section className="bg-neutral-05 pt-12 pb-18 font-neue-montreal">
      <Container>
        <div className="max-w-285 mx-auto">
          <h1 className="text-5xl font-medium leading-14 text-neutral-15">
            About Us
          </h1>

          <p className="text-lg text-neutral-15 font-work-sans leading-7 mt-6">
            <strong>Blue Inkk</strong> is a full-service Intellectual Property law
            firm delivering strategic, business-driven IP solutions to innovators
            across the globe. Founded in <strong>October 2019</strong> by{" "}
            <strong>Mayank Goel</strong>, and later joined by{" "}
            <strong>Sukhveer Singh</strong> and <strong>Riya Gupta</strong>, the
            firm was built with a clear vision—to make intellectual property
            protection proactive, precise, and commercially effective.
          </p>

          <p className="text-lg text-neutral-15 font-work-sans leading-7 mt-5">
            At Blue Inkk, we follow a <strong>360° IP Protection Approach</strong>,
            offering end-to-end services covering creation, protection,
            enforcement, and monetisation of intellectual property. We work
            closely with <strong>individuals</strong>,{" "}
            <strong>startups</strong>, <strong>MSMEs</strong>, and{" "}
            <strong>large corporations</strong>, tailoring our strategies to
            align legal protection with long-term business goals.
          </p>

          <p className="text-lg text-neutral-15 font-work-sans leading-7 mt-5">
            Our team has deep expertise in{" "}
            <strong>domestic and international trademark filings</strong>,
            including extensive experience under the{" "}
            <strong>Madrid Protocol</strong>, as well as national filings across
            multiple jurisdictions. From prosecution, renewals, and portfolio
            management to enforcement and advisory, we provide seamless IP
            protection in <strong>over 100 countries</strong>.
          </p>

          <p className="text-lg text-neutral-15 font-work-sans leading-7 mt-5">
            Blue Inkk has been{" "}
            <strong>
              recognised by the Government of India among the Top 15 domestic law
              firms for trademark filings
            </strong>
            , making us the youngest firm to receive this distinction. Today, we
            proudly serve a growing client base of{" "}
            <strong>40,000+ clients</strong>, including leading brands such as{" "}
            <strong>
              Air Arabia, Micromax, Faces Canada, Wakefit, and Haldiram’s
            </strong>
            , along with eminent personalities like{" "}
            <strong>Ajay Devgn</strong> and{" "}
            <strong>Premanand Maharaj Ji (Premanand Govind Sharan)</strong>.
          </p>

          <p className="text-lg text-neutral-15 font-work-sans leading-7 mt-5">
            Driven by <strong>excellence, ethical practice, and{" "}
            constant vigilance</strong>, we believe intellectual property is not
            just a legal asset—it is a business advantage. As innovation
            accelerates worldwide, Blue Inkk remains committed to safeguarding
            creativity and strengthening the legal foundation on which modern
            businesses grow.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHero;
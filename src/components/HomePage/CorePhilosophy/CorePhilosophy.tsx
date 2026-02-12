import Container from "@/components/Reusable/Container/Container";
import React from "react";

const CorePhilosophySimple: React.FC = () => {
  return (
    <div className="bg-gradient-service-card py-14 font-neue-montreal">
      <Container>
        <h4 className="title">
        Core Philosophy
      </h4>
      <p className="text-neutral-15 text-sm md:text-lg leading-relaxed mb-4 mt-3 font-work-sans max-w-[1000px]">
        At Blue Inkk, we view Intellectual Property as a strategic business
        asset. Our approach is driven by excellence, expertise, and efficiency.
        We are committed to building long-term client relationships founded on
        trust, responsiveness, and professional integrity, ensuring every
        client’s IP is protected with complete dedication.
      </p>
      </Container>
    </div>
  );
};

export default CorePhilosophySimple;

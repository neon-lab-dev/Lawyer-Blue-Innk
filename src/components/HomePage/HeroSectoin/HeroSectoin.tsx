import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-neutral-05 py-10 md:py-14">
      <Container>
        <div className="relative">
          {/* Main Image Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.heroImage}
              alt="Legal Representation"
              className="w-full h-[420px] md:h-[480px] object-cover"
              priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Text Content */}
            <div className="absolute inset-0 flex items-end md:items-center">
              <div className="p-6 md:p-12 max-w-xl text-white">
                <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                  Trusted Legal Representation,
                  <br />
                  When It Matters Most.
                </h1>

                <p className="text-sm md:text-base text-white/90 mb-6">
                  Experienced attorneys helping individuals and businesses
                  protect their rights with confidence.
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
            </div>
          </div>

          {/* Floating Right Card */}
          <div className="mt-6 md:mt-0 md:absolute right-0 md:bottom-8 md:right-8 bg-secondary-05 rounded-2xl p-6 md:p-8 max-w-sm shadow-lg">
            <p className="text-neutral-800 font-medium text-base md:text-lg leading-snug">
              Get a free case evaluation
              <br />
              within 24 hours.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

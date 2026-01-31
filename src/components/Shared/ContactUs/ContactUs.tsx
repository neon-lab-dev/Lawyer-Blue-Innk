"use client";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { ICONS, IMAGES } from "../../../../public/assets";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: ICONS.phone,
      href: "tel:+91-9958000637",
    },
    {
      icon: ICONS.email,
      href: "mailto:ipr@blueinkk.com",
    },
    {
      icon: ICONS.time,
      info: "09:00 AM - 06:00 PM (Mon - Fri)",
    },
  ];
  return (
    <Container>
      <div className="py-14">
        <div className="flex flex-col md:flex-row gap-12 md:gap-10 lg:gap-0 items-center justify-between">
          <div className="w-full md:w-1/2 space-y-8">
            <Heading
              heading="Contact Us"
              description="We usually respond within 24 hours"
            />

            {/* Form */}
            <ContactUsForm />
          </div>

          {/* Contact info */}
          <div className="space-y-6 w-full md:w-1/3">
            <Image
              src={IMAGES.logo}
              alt="Lawyer Blue Innk"
              width={84}
              height={84}
              className="size-21"
            />
            <h3 className="text-neutral-15 text-lg lg:text-2xl font-medium font-neue-montreal">
              Address- G-49-50, SECOND FLOOR, OFFICE NO. 1, METRO STATION, near
              SECTOR 16, Block G, Noida Sector 3, Noida, Uttar Pradesh 201301
            </h3>

            <div className="flex flex-col gap-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-lg text-neutral-15 font-work-sans"
                >
                  <Image src={item.icon} alt="" className="w-6 h-6" />
                  {item.href ? (
                    <a href={item.href} className="hover:underline">
                      {item.href.replace(/^(tel:|mailto:)/, "")}
                    </a>
                  ) : (
                    <p>{item.info}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;

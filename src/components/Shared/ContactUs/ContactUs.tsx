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
      href: "tel:+91 9370308788",
    },
    {
      icon: ICONS.email,
      href: "mailto:bluelnkk124@gmail",
    },
    {
      icon: ICONS.time,
      info: "09:00 AM - 06:00 PM (Mon - Fri)",
    },
  ];
  return (
    <Container>
      <div className="py-14">
        <Heading
          heading="Contact Us"
          description="We usually respond within 24 hours"
        />
        <div className="flex items-center justify-between mt-8">
          {/* Form */}
          <ContactUsForm />

          {/* Contact info */}
          <div className="space-y-6 w-1/3">
            <Image
              src={IMAGES.logo}
              alt="Lawyer Blue Innk"
              width={84}
              height={84}
              className="size-21"
            />
            <h3 className="text-neutral-15 text-2xl font-medium font-neue-montreal">
              Sr no. 72/1B/63, Solitaire Business Hub, Balewadi Link Road,
              Balewadi, Pune - 67
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { ICONS, IMAGES } from "../../../../public/assets";

type FooterLink = {
  label: string;
  path?: string | null;
  icon?: any;
};

type FooterSection = {
  heading: string;
  links: FooterLink[];
};

const Footer = () => {
  const footerLinks: FooterSection[] = [
    {
      heading: "Quick Links",
      links: [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/" },
        { label: "Services", path: "/" },
        { label: "Why Choose Us", path: "/why-choose-us" },
        { label: "Our Team", path: "/" },
        { label: "Awards", path: "/" },
        { label: "Practice Areas", path: "/" },
        { label: "Contact Us", path: "/" },
      ],
    },
    {
      heading: "Practice Areas",
      links: [
        { label: "Trademarks" },
        { label: "Copyright" },
        { label: "Design" },
        { label: "Patent" },
        { label: "IP Litigation" },
        { label: "IP Valuation & Due Diligence" },
        { label: "Commercial Litigation" },
        { label: "Arbitration & Conciliation" },
        { label: "Contracts & Agreements" },
        { label: "Media & Entertainment" },
      ],
    },

    {
      heading: "Contact Info",
      links: [
        {
          label: "+91 93703 08788",
          path: "tel:+919370308788",
          icon: ICONS.phone,
        },
        {
          label: "bluelnkk124@gmail.com",
          path: "mailto:bluelnkk124@gmail.com",
          icon: ICONS.email,
        },
        {
          label: "09:00 AM – 06:00 PM (Mon – Fri)",
          path: null,
          icon: ICONS.time,
        },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-25">
      <Container>
        <div className="py-12 md:py-14">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={IMAGES.logo}
                  alt="Lokplaaza"
                  width={48}
                  height={48}
                  className="size-18 w-auto"
                />
              </Link>

              <p className="text-neutral-15 font-medium font-work-sans text-lg max-w-70 mb-6">
                Trusted legal expertise for over two decades. Your success is
                our commitment.
              </p>
            </div>

            {/* Links Columns */}
            {footerLinks.map((section) => (
              <div key={section.heading} className="space-y-4 text-neutral-15">
                <h3 className="font-medium text-2xl font-neue-montreal mb-6">
                  {section.heading}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const isExternal =
                      link.path?.startsWith("tel:") ||
                      link.path?.startsWith("mailto:");

                    return (
                      <li key={link.label}>
                        {link.path ? (
                          isExternal ? (
                            <a
                              href={link.path}
                              className="hover:text-success-600 transition-colors duration-200 flex items-center gap-2 group"
                            >
                              {link.icon && (
                                <Image
                                  src={link.icon}
                                  alt={link.label}
                                  className="size-5"
                                />
                              )}
                              <span className="group-hover:translate-x-1 transition-transform">
                                {link.label}
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={link.path}
                              className="hover:text-success-600 transition-colors duration-200 flex items-center gap-2 group"
                            >
                              {link.icon && (
                                <Image
                                  src={link.icon}
                                  alt={link.label}
                                  className="size-5"
                                />
                              )}
                              <span className="group-hover:translate-x-1 transition-transform">
                                {link.label}
                              </span>
                            </Link>
                          )
                        ) : (
                          <div className="flex items-center gap-2 opacity-80">
                            {link.icon && (
                              <Image
                                src={link.icon}
                                alt={link.label}
                                className="size-5"
                              />
                            )}
                            <span>{link.label}</span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <hr className="border border-neutral-40 my-6" />
          <p className="text-neutral-15 font-work-sans text-lg text-center">
            © BlueInkk Law Firm. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

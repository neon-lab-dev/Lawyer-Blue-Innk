import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IMAGES } from "../../../../public/assets";

const Footer = () => {
  const footerLinks = [
    {
      heading: "Furniture",
      links: [
        { label: "Home Furniture", path: "/" },
        { label: "Office Furniture", path: "/" },
        { label: "Modular Kitchen", path: "/" },
        { label: "Wardrobe", path: "/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", path: "/" },
        { label: "Contact", path: "/" },
        { label: "Careers", path: "/" },
        { label: "Blog", path: "/" },
      ],
    },
    {
      heading: "Contact Info",
      links: [
        {
          label: "+91 93703 08788",
          path: "tel:+919370308788",
          icon: FaPhoneAlt,
        },
        {
          label: "bluelnkk124@gmail.com",
          path: "mailto:bluelnkk124@gmail.com",
          icon: FaEnvelope,
        },
        {
          label: "09:00 AM – 06:00 PM (Mon – Fri)",
          path: null,
          icon: FaClock,
        },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-05">
      <Container>
        <div className="py-12 md:py-14">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={IMAGES.logo}
                  alt="Lokplaaza"
                  width={48}
                  height={48} 
                  className="size-18 w-auto"
                />
              </Link>

              <p className="text-neutral-600 leading-relaxed max-w-lg mb-6">
                Trusted legal expertise for over two decades. Your success is our
                commitment.
              </p>
            </div>

            {/* Links Columns */}
            {footerLinks.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h3 className="text-neutral-800 font-semibold text-lg mb-4">
                  {section.heading}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const Icon = "icon" in link ? link.icon : null;
                    const isExternal =
                      link.path?.startsWith("tel:") ||
                      link.path?.startsWith("mailto:");

                    return (
                      <li key={link.label}>
                        {link.path ? (
                          isExternal ? (
                            <a
                              href={link.path}
                              className="text-neutral-600 hover:text-success-600 transition-colors duration-200 flex items-center gap-2 group"
                            >
                              {Icon && (
                                <Icon className="opacity-70 group-hover:text-success-600 transition-colors" />
                              )}
                              <span className="group-hover:translate-x-1 transition-transform">
                                {link.label}
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={link.path}
                              className="text-neutral-600 hover:text-success-600 transition-colors duration-200 flex items-center gap-2 group"
                            >
                              {Icon && (
                                <Icon className="opacity-70 group-hover:text-success-600 transition-colors" />
                              )}
                              <span className="group-hover:translate-x-1 transition-transform">
                                {link.label}
                              </span>
                            </Link>
                          )
                        ) : (
                          <div className="text-neutral-600 flex items-center gap-2 opacity-80">
                            {Icon && <Icon />}
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

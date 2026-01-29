"use client";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMAGES } from "../../../../public/assets";

const Navbar = () => {
  const pathname = usePathname();

  const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Our Team",
      path: "/our-team",
    },
    {
      label: "Awards",
      path: "/awards",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <>
      <div className="bg-white shadow-navbar font-work-sans w-full z-999 py-6">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image src={IMAGES.logo} alt="blue ink" className="size-12" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {navlinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`text-sm font-medium ${
                    pathname === item.path
                      ? "text-neutral-15 font-semibold"
                      : "text-neutral-10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button label="Enquire Now" />
            </div>

            {/* Mobile Hamburger */}
            {/* <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden flex items-center justify-center size-12 rounded-full bg-neutral-10"
              aria-label="Open Menu"
            >
              <Image src={ICONS.hamburgerMenu} alt="menu" className="size-6" />
            </button>  */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;

"use client";
import {IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/",
    },
    {
      label: "Services",
      path: "/",
    },
    {
      label: "Our Team",
      path: "/",
    },
    {
      label: "Awards",
      path: "/",
    },
    {
      label: "Contact Us",
      path: "/",
    },
  ];


  return (
    <>
      <div className="bg-white font-work-sans w-full z-999 ">
        <Container>
          <div className="flex items-center justify-between py-6 ">
            {/* Logo */}
            <Link href="/">
              <Image
                src={IMAGES.logo}
                alt="blue ink"
                className="h-12 w-12"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              
              {navlinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`text-sm font-medium ${
                    pathname === item.path
                      ? "text-shadow-neutral-15"
                      : "text-neutral-10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button label="Enquire Now"/>
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

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICONS, IMAGES } from "../../../../public/assets";
import { useState, useEffect, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [, startTransition] = useTransition();
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    startTransition(() => {
      setIsMenuOpen(false);
    });
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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

  // Menu animation variants
  const menuVariants: any = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <div className="bg-white shadow-navbar font-work-sans w-full z-50 py-4 sticky top-0">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src={IMAGES.logo}
                alt="blue ink"
                className="size-10 md:size-18"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
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
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex cursor-pointer"
              aria-label="Open Menu"
            >
              <Image src={ICONS.hamburgerMenu} alt="menu" className="size-6" />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-neutral-15/10 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sliding Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 left-0 right-0 bg-neutral-05 z-50 md:hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center shadow-navbar justify-between p-6">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image src={IMAGES.logo} alt="blue ink" className="size-10" />
                </Link>

                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer p-2"
                  aria-label="Close Menu"
                >
                  <Image
                    src={ICONS.cross || "/close.svg"}
                    alt="close"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-6">
                <motion.ul className="flex flex-col space-y-6">
                  {navlinks.map((item) => (
                    <motion.li key={item.label} variants={menuItemVariants}>
                      <Link
                        href={item.path}
                        className={`text-lg font-medium py-2 flex items-center justify-between ${
                          pathname === item.path
                            ? "text-neutral-15 font-semibold"
                            : "text-neutral-10"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                        <Image
                          src={ICONS.rightArrowBlack}
                          alt="right arrow"
                          width={24}
                          height={24}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

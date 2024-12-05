"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { Strings } from "@/constants/strings";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const param = usePathname()?.toLowerCase();
  const isBackgroundWhite = param === "/donate" || param === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Our Story" },
    { href: "/initiatives", label: "Our Initiatives" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all font-semibold duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/5 backdrop-blur-sm "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"./logo.jpeg"}
              className="rounded object-contain"
              alt="Logo"
              width={50}
              height={50}
            />
            <span
              className={`font-bold text-xl ${
                isScrolled || isBackgroundWhite
                  ? "text-gray-700"
                  : "text-white/90"
              }`}
            >
              {Strings.ORGANIZATION_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-rose-500 transition-colors ${
                  isScrolled || isBackgroundWhite
                    ? "text-gray-700"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white"
            >
              <Link href={Strings.DONATE_LINK}>Donate</Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-500"
            >
              {isOpen ? (
                <X
                  className={` h-6 w-6 ${
                    isScrolled || isBackgroundWhite
                      ? "text-gray-700"
                      : "text-white/90"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled || isBackgroundWhite
                      ? "text-gray-700"
                      : "text-white/90"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden bg-white `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 hover:text-rose-500 hover:bg-gray-50 rounded-md text-gray-700`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white w-full rounded-none"
          >
            <Link href={Strings.DONATE_LINK}>Donate</Link>
          </Button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Clients", href: "#clients" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for both desktop and mobile
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleMobileMenuClick = (href) => {
    setIsMobileMenuOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 border-gray-100 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={(e) => handleSmoothScroll(e, "#home")}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/images/BeLoud.png"
                  alt="Logo"
                  width={140}
                  height={140}
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`transition-colors duration-200 font-medium hover:scale-105 transform ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 transition-all duration-300 ${
                isScrolled ? "bg-white/95" : "bg-black/20"
              }`}
            >
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileMenuClick(item.href)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 transform hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white hover:text-blue-300 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolling down past 100px, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // Always show at top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <div className="text-2xl md:text-3xl font-bold text-black tracking-tight">
              Brian Ariyo
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link href="/photography" className="text-m font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
              PHOTOGRAPHY
            </Link>
            <Link href="/videography" className="text-m font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
              VIDEOGRAPHY
            </Link>
            <Link href="/production" className="text-m font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
              PRODUCTION
            </Link>
            <Link href="/about" className="text-m font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
              ABOUT
            </Link>
            <Link href="/contact" className="text-m font-medium text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
              CONTACT
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="w-5 h-0.5 bg-gray-600"></span>
                <span className="w-5 h-0.5 bg-gray-600"></span>
                <span className="w-5 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (hidden by default) */}
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="/videography" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 cursor-pointer">
              VIDEOGRAPHY
            </Link>
            <Link href="/photography" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 cursor-pointer">
              PHOTOGRAPHY
            </Link>
            <Link href="/production" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 cursor-pointer">
              PRODUCTION
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 cursor-pointer">
              ABOUT
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 cursor-pointer">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

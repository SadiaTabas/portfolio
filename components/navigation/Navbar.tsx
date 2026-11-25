"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const primaryCv = profileData.cvDownloads[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F3EEEA]/90 backdrop-blur-md shadow-sm border-b border-[#E3DDD6]/80 py-3"
          : "bg-[#F3EEEA]/80 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8500] rounded-lg p-1"
            aria-label="Tabassum Aktar Sadia - Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#FF8500] text-white flex items-center justify-center font-black text-sm tracking-tighter shadow-sm transition-transform duration-300 group-hover:scale-105">
              TS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#171717] group-hover:text-[#FF8500] transition-colors">
                TABASSUM AKTAR SADIA
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#777777]">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-[#FF8500]"
                      : "text-[#171717] hover:text-[#FF8500] hover:bg-[#EAE4DE]/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#FF8500] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Direct Download CV Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Direct Download CV Button */}
            <a
              href={primaryCv.path}
              download={primaryCv.fileName}
              className="hidden sm:inline-flex items-center gap-2 bg-[#171717] text-white px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-[#FF8500] transition-all duration-300 shadow-sm active:scale-95"
              title="Download CV (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#E8E2DC] text-[#171717] hover:text-[#FF8500] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F3EEEA] border-b border-[#E3DDD6] shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-[#FF8500] text-white"
                      : "text-[#171717] hover:bg-[#EAE4DE]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-[#777777]"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#E3DDD6]">
            <a
              href={primaryCv.path}
              download={primaryCv.fileName}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-[#E3DDD6] text-xs font-bold text-[#171717] hover:border-[#FF8500] shadow-xs"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#FF8500]" />
                <span>Get My CV</span>
              </span>
              <span className="text-[10px] text-[#FF8500] font-semibold">PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import { profileData } from "@/data/profile";
import { socialsData } from "@/data/socials";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171717] text-white pt-16 pb-12 border-t border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#292929]">
          {/* Col 1: Identity & Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF8500] text-white flex items-center justify-center font-black text-sm tracking-tighter">
                TS
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-white">
                  TABASSUM AKTAR SADIA
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-[#FF8500] font-semibold">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>
            <p className="text-sm text-[#999999] leading-relaxed">
              Computer Science & Engineering graduate from AIUB with hands-on industry experience building scalable web applications, robust backend services, and automated software testing.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#777777]">
              <MapPin className="w-3.5 h-3.5 text-[#FF8500]" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#FF8500]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#BBBBBB]">
              <li>
                <Link href="/" className="hover:text-[#FF8500] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF8500] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[#FF8500] transition-colors">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#FF8500] transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-[#FF8500] transition-colors">
                  Technical Toolkit
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-[#FF8500] transition-colors">
                  Education & Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF8500] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: CV Downloads */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#FF8500]">
              Get My CV
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              {profileData.cvDownloads.map((cv) => (
                <a
                  key={cv.title}
                  href={cv.path}
                  download={cv.fileName}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] border border-[#333333] hover:border-[#FF8500] text-[#DDDDDD] transition-all group"
                >
                  <span className="font-semibold group-hover:text-[#FF8500]">
                    Download CV
                  </span>
                  <Download className="w-3.5 h-3.5 text-[#777777] group-hover:text-[#FF8500]" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#FF8500]">
              Connect Directly
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BBBBBB]">
              <li>
                <a
                  href={`mailto:${socialsData.email}`}
                  className="flex items-center gap-2 hover:text-[#FF8500] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#FF8500]" />
                  <span className="break-all">{socialsData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${socialsData.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-[#FF8500] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF8500]" />
                  <span>{socialsData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF8500] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#FF8500]" />
                  <span>github.com/SadiaTabas</span>
                </a>
              </li>
              <li>
                <a
                  href={socialsData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF8500] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#FF8500]" />
                  <span>linkedin.com/in/tabassum-aktar-sadia20044</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2026 Tabassum Aktar Sadia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#555555]">
              Driven by curiosity, powered by code, and focused on building meaningful digital experiences.
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#FF8500] transition-colors px-3 py-1.5 rounded-full bg-[#242424] hover:bg-[#2A2A2A] border border-[#333333]"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

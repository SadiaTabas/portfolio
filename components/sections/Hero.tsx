"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Sparkles, Code, CheckCircle, ChevronDown, Layers, Server, ShieldCheck } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3EEEA] pt-6 pb-20 lg:pt-12 lg:pb-28">
      {/* Decorative background grid and geometric accents */}
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-60" />
      <div className="absolute top-12 right-12 w-72 h-72 rounded-full bg-[#FF8500]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-60 h-60 rounded-full bg-[#171717]/5 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Professional Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E2DC] text-[#171717] w-fit mb-6 border border-[#DDD5CC]">
              <span className="w-2 h-2 rounded-full bg-[#FF8500] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest">
                {profileData.heroTagline}
              </span>
            </div>

            {/* Oversized Editorial Heading */}
            <h1 className="editorial-heading text-4xl sm:text-6xl xl:text-7xl text-[#171717] tracking-tight mb-6">
              <span className="block leading-[0.92]">TURNING IDEAS</span>
              <span className="block leading-[0.92]">INTO</span>
              <span className="block leading-[0.92]">
                <span className="text-[#FF8500] relative inline-block">
                  POWERFUL
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FF8500]/30 rounded-full" />
                </span>{" "}
                WEB EXPERIENCES
              </span>
            </h1>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-2xl mb-8">
              {profileData.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8500] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#171717] font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-300 shadow-xs active:scale-95"
              >
                <span>Let&apos;s Connect</span>
              </Link>

              <a
                href={profileData.cvDownloads[0].path}
                download={profileData.cvDownloads[0].fileName}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#E8E2DC] text-[#171717] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#DDD5CC] transition-all duration-200 shadow-xs"
                title="Get My CV (PDF)"
              >
                <Download className="w-4 h-4 text-[#FF8500]" />
                <span>Get My CV</span>
              </a>
            </div>

            {/* Key Information Badges */}
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-6 border-t border-[#DDD5CC]">
              {profileData.highlights.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                    {h.value}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Creative Portrait Composition (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Orange Geometric Backdrop Shape */}
            <div className="absolute w-[300px] sm:w-[380px] h-[360px] sm:h-[460px] bg-[#FF8500] rounded-3xl -rotate-6 transition-transform duration-500 hover:rotate-0 shadow-2xl" />

            {/* Secondary geometric accent border */}
            <div className="absolute w-[300px] sm:w-[380px] h-[360px] sm:h-[460px] border-2 border-[#171717] rounded-3xl rotate-3 pointer-events-none" />

            {/* Circular decorative badge */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#171717] text-white flex flex-col items-center justify-center z-20 shadow-lg border-2 border-white">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF8500]">AIUB</span>
              <span className="text-xs font-black">3.97</span>
            </div>

            {/* Portrait Container */}
            <div className="relative w-[280px] sm:w-[360px] h-[380px] sm:h-[480px] rounded-2xl overflow-hidden bg-[#E8E2DC] shadow-xl z-10 border border-[#D9D1C7] group">
              <Image
                src={profileData.portraitImage}
                alt="Tabassum Aktar Sadia"
                fill
                priority
                className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 280px, 360px"
              />

              {/* Gradient overlay at bottom for text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171717]/90 via-[#171717]/50 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF8500]">
                  Tabassum Aktar Sadia
                </span>
                <span className="text-[11px] text-[#DDDDDD] font-medium">
                  Full-Stack Developer · Dhaka, BD
                </span>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-xl border border-[#E3DDD6] z-20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF8500]/15 flex items-center justify-center text-[#FF8500]">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-[#171717] leading-tight">
                  7+ Production
                </span>
                <span className="text-[10px] text-[#777777]">
                  Dcastalia Client Experience
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#capabilities"
            className="flex flex-col items-center gap-1.5 text-[#777777] hover:text-[#FF8500] transition-colors group"
            aria-label="Scroll to core capabilities"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest">
              Explore Capabilities
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#FF8500]" />
          </a>
        </div>
      </div>
    </section>
  );
}

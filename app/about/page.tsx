import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Server, ShieldCheck, Heart, Sparkles, Award } from "lucide-react";
import { profileData } from "@/data/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Tabassum Aktar Sadia",
  description:
    "Learn more about Tabassum Aktar Sadia — Computer Science & Engineering graduate from AIUB, Full-Stack developer, backend engineer, and SQA specialist.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F3EEEA]">
      {/* Editorial Header Banner */}
      <section className="pt-8 pb-16 border-b border-[#DDD5CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
                BIOGRAPHY & BACKGROUND
              </span>
              <h1 className="editorial-heading text-4xl sm:text-6xl text-[#171717]">
                BEHIND THE<br />
                <span className="text-[#FF8500]">CODE.</span>
              </h1>
            </div>
            <p className="text-sm text-[#666666] max-w-md leading-relaxed">
              Consolidating full-stack web engineering, backend API architecture, and rigorous software quality assurance into reliable digital applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Full-Width Dark Section */}
      <section className="py-20 bg-[#171717] text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Portrait & Decorative Accents (5 Cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Orange backdrop frame */}
              <div className="absolute w-[290px] sm:w-[350px] h-[370px] sm:h-[450px] bg-[#FF8500] rounded-2xl -rotate-3 transition-transform duration-500 hover:rotate-0" />
              
              {/* Orange Geometric Line Accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#FF8500]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#FF8500]" />

              {/* Portrait Image */}
              <div className="relative w-[280px] sm:w-[340px] h-[360px] sm:h-[440px] rounded-xl overflow-hidden bg-[#242424] border border-[#333333] shadow-2xl z-10 group">
                <Image
                  src={profileData.profileImage}
                  alt="Tabassum Aktar Sadia Profile"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 280px, 340px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-xs font-bold text-[#FF8500] tracking-wider uppercase">
                    Tabassum Aktar Sadia
                  </span>
                  <span className="text-[11px] text-[#BBBBBB]">
                    AIUB · CSE Graduate (CGPA 3.97)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Narrative & Stats (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold text-[#FF8500] tracking-widest uppercase mb-2">
                HELLO, I&apos;M SADIA
              </span>

              <h2 className="editorial-heading text-3xl sm:text-5xl text-white mb-6">
                COMPUTER SCIENCE<br />
                <span className="text-[#FF8500]">ENGINEER & DEVELOPER.</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#CCCCCC] leading-relaxed mb-8">
                <p>
                  I&apos;m Tabassum Aktar Sadia, a Computer Science and Engineering professional from American International University-Bangladesh (AIUB). My experience spans full-stack web application development, backend services, RESTful API engineering, relational database management, and software quality assurance.
                </p>
                <p>
                  Through my internship at Dcastalia Limited (Webcare Studio), I gained practical experience working with production client platforms, developing application features, integrating APIs, performing software testing, resolving technical issues, and improving application quality.
                </p>
                <p>
                  I enjoy understanding how systems work internally while also ensuring that the final product is reliable, secure, accessible, and user-friendly.
                </p>
              </div>

              {/* 3 Information Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#2A2A2A]">
                <div className="bg-[#1F1F1F] p-4 rounded-xl border border-[#2E2E2E]">
                  <span className="text-2xl font-black text-[#FF8500] block mb-1">
                    7+
                  </span>
                  <span className="text-xs font-bold text-white block">
                    Client Platforms
                  </span>
                  <span className="text-[10px] text-[#888888]">
                    Production repositories delivered
                  </span>
                </div>

                <div className="bg-[#1F1F1F] p-4 rounded-xl border border-[#2E2E2E]">
                  <span className="text-2xl font-black text-[#FF8500] block mb-1">
                    Full-Stack
                  </span>
                  <span className="text-xs font-bold text-white block">
                    Development
                  </span>
                  <span className="text-[10px] text-[#888888]">
                    Next.js, Laravel, NestJS, ASP.NET
                  </span>
                </div>

                <div className="bg-[#1F1F1F] p-4 rounded-xl border border-[#2E2E2E]">
                  <span className="text-2xl font-black text-[#FF8500] block mb-1">
                    3.97
                  </span>
                  <span className="text-xs font-bold text-white block">
                    CGPA / 4.00
                  </span>
                  <span className="text-[10px] text-[#888888]">
                    Dean&apos;s Honorable Mention
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3 Professional Focus Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF8500] block mb-2">
            THREE CORE PILLARS
          </span>
          <h2 className="editorial-heading text-3xl sm:text-4xl text-[#171717]">
            PROFESSIONAL FOCUS AREAS
          </h2>
          <p className="text-sm text-[#666666] mt-3">
            How my technical abilities translate into direct project value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 border border-[#E3DDD6] shadow-sm hover:border-[#FF8500] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1E5] text-[#FF8500] flex items-center justify-center mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold uppercase text-[#171717] tracking-tight mb-3">
              FULL-STACK DEVELOPMENT
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Building responsive frontend interfaces and integrating them with reliable backend services. Combining Next.js and React with server-side API data pipelines.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 border border-[#E3DDD6] shadow-sm hover:border-[#FF8500] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1E5] text-[#FF8500] flex items-center justify-center mb-6">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold uppercase text-[#171717] tracking-tight mb-3">
              BACKEND ENGINEERING
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Designing RESTful APIs, authentication workflows, database relationships, and application architecture across Laravel, NestJS, and ASP.NET Core.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 border border-[#E3DDD6] shadow-sm hover:border-[#FF8500] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1E5] text-[#FF8500] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold uppercase text-[#171717] tracking-tight mb-3">
              SOFTWARE QUALITY ASSURANCE
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Testing application functionality, validating APIs with Postman, identifying defects, automating UI checks with Selenium, and executing OWASP ZAP security audits.
            </p>
          </div>
        </div>
      </section>

      {/* What I Enjoy Working On Section */}
      <section className="py-20 bg-white border-t border-[#E3DDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF8500] block mb-2">
                PERSONAL DRIVE & PASSION
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl text-[#171717] mb-6">
                WHAT I ENJOY<br />
                <span className="text-[#FF8500]">WORKING ON.</span>
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed mb-6">
                I thrive in environments where clean architecture meets challenging business logic. Whether designing normalized schemas or securing token-based endpoints, I value precision and reliability.
              </p>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#FF8500] transition-colors"
              >
                <span>View Professional Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.whatIEnjoy.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#F3EEEA] border border-[#E5DFD9] flex items-start gap-3 hover:border-[#FF8500] transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FF8500]/15 text-[#FF8500] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FF8500] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#222222] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

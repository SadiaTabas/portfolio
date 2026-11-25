"use client";

import React from "react";
import Link from "next/link";
import { Layers, Server, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { profileData } from "@/data/profile";

const iconMap = {
  Layers: Layers,
  Server: Server,
  ShieldCheck: ShieldCheck,
};

export default function HomeCapabilities() {
  const highlights = [
    "7+ Production Client Repositories & Platforms",
    "Full-Stack Web Engineering (Next.js, React, Laravel)",
    "Backend API Development (NestJS, ASP.NET Core)",
    "Software Quality Assurance & SQA Automation",
    "Secure Web Architecture (JWT, BCrypt, OWASP ZAP)"
  ];

  return (
    <section id="capabilities" className="py-20 bg-[#171717] text-white relative">
      <div className="absolute inset-0 pattern-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#2A2A2A] pb-8">
          <div>
            <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
              ENGINEERING DISCIPLINES
            </span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-white">
              CORE CAPABILITIES &<br />
              <span className="text-[#FF8500]">SPECIALIZATIONS.</span>
            </h2>
          </div>
          <p className="text-sm text-[#999999] max-w-md leading-relaxed">
            Consolidating full-stack engineering, backend architecture, and rigorous quality assurance into dependable, production-ready software solutions.
          </p>
        </div>

        {/* 3 Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {profileData.capabilityAreas.map((area, index) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] || Layers;
            return (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-2xl p-8 border border-[#2B2B2B] hover:border-[#FF8500] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#262626] text-[#FF8500] flex items-center justify-center mb-6 group-hover:bg-[#FF8500] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#777777] block mb-2">
                    FOCUS 0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF8500] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#999999] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#292929] flex items-center justify-between text-xs font-bold text-[#FF8500]">
                  <span>Explore in Depth</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal Highlights Strip */}
        <div className="bg-[#222222] rounded-2xl p-6 sm:p-8 border border-[#2E2E2E]">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF8500] mb-4">
            Validated Competencies Across All Three CV Portfolios:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-[#CCCCCC]">
                <div className="w-4 h-4 rounded-full bg-[#FF8500]/20 text-[#FF8500] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

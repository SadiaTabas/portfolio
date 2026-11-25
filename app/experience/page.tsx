import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Calendar, MapPin, CheckCircle, Code2, ShieldAlert, Cpu, Search, GitBranch } from "lucide-react";
import { internshipInfo, responsibilityCategories } from "@/data/experience";
import ClientCards from "@/components/experience/ClientCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience | Tabassum Aktar Sadia",
  description:
    "Explore the industry web development and software quality assurance experience of Tabassum Aktar Sadia at Dcastalia Limited (Webcare Studio) across 7+ client platforms.",
};

const categoryIcons = [
  Code2,
  Cpu,
  ShieldAlert,
  Search,
  GitBranch
];

export default function ExperiencePage() {
  return (
    <div className="bg-[#F3EEEA]">
      {/* Header Banner */}
      <section className="pt-8 pb-16 border-b border-[#DDD5CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
                INDUSTRY TENURE & CLIENT PLATFORMS
              </span>
              <h1 className="editorial-heading text-4xl sm:text-6xl text-[#171717]">
                WHERE I&apos;VE<br />
                <span className="text-[#FF8500]">MADE AN IMPACT.</span>
              </h1>
            </div>
            <p className="text-sm text-[#666666] max-w-md leading-relaxed">
              Demonstrated engineering contributions across production codebases, full-stack CMS implementations, e-commerce ordering flows, and automated software testing.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Experience Card (Dcastalia Limited) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E3DDD6] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF8500]/5 rounded-bl-full pointer-events-none" />

          {/* Company & Role Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-[#F0EBE5] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2E5] text-[#FF8500] text-xs font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Primary Industry Internship</span>
              </div>
              <h2 className="editorial-heading text-2xl sm:text-4xl text-[#171717]">
                {internshipInfo.primaryTitle}
              </h2>
              <p className="text-sm font-bold text-[#FF8500] mt-1">
                Also documented as: {internshipInfo.secondaryTitle}
              </p>
              <h3 className="text-lg font-bold text-[#444444] mt-2">
                {internshipInfo.company}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 text-xs text-[#777777]">
              <div className="flex items-center gap-2 font-mono bg-[#F3EEEA] px-3 py-1.5 rounded-lg border border-[#E8E2DC]">
                <Calendar className="w-4 h-4 text-[#FF8500]" />
                <span className="font-bold text-[#171717]">{internshipInfo.periodDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-[#FF8500]" />
                <span>{internshipInfo.location}</span>
              </div>
              <span className="text-[10px] text-[#888888] italic max-w-xs text-left lg:text-right mt-1">
                {internshipInfo.statusNote}
              </span>
            </div>
          </div>

          {/* Scope Summary */}
          <div className="bg-[#FAF8F6] p-6 rounded-2xl border border-[#EDE7E1] mb-12">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF8500] mb-2">
              Scope of Industry Engagement
            </h4>
            <p className="text-sm text-[#444444] leading-relaxed">
              {internshipInfo.scopeSummary}
            </p>
          </div>

          {/* 5 Responsibility Categories */}
          <div className="space-y-10">
            <div className="border-b border-[#F0EBE5] pb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF8500]">
                DETAILED RESPONSIBILITY BREAKDOWN
              </span>
              <h3 className="text-2xl font-bold text-[#171717] mt-1">
                Engineering Work Across Five Core Domains
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {responsibilityCategories.map((cat, index) => {
                const Icon = categoryIcons[index] || Code2;
                return (
                  <div
                    key={cat.id}
                    className="p-6 rounded-2xl bg-[#FBF9F7] border border-[#E8E2DC] hover:border-[#FF8500] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFF2E5] text-[#FF8500] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#777777] bg-white px-2 py-0.5 rounded border border-[#E8E2DC]">
                          Source: {cat.sourceCV}
                        </span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#171717] mb-2">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-[#666666] mb-4 italic">
                        {cat.description}
                      </p>
                      <ul className="space-y-2 text-xs text-[#444444]">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500] shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Client Projects Section */}
      <section className="py-20 bg-[#171717] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#2A2A2A] pb-8">
            <div>
              <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
                PRODUCTION DELIVERABLES
              </span>
              <h2 className="editorial-heading text-3xl sm:text-5xl text-white">
                SELECTED CLIENT<br />
                <span className="text-[#FF8500]">PLATFORMS & SYSTEMS.</span>
              </h2>
            </div>
            <p className="text-sm text-[#999999] max-w-md leading-relaxed">
              Explore the dedicated platforms and enterprise systems developed or quality-tested during my tenure at Dcastalia Limited.
            </p>
          </div>

          {/* Interactive Client Cards Component */}
          <ClientCards />

          {/* Callout Footer */}
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF8500] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-[#E67700] transition-colors shadow-lg"
            >
              <span>Explore Independent Engineering Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

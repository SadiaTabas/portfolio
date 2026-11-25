import React from "react";
import Link from "next/link";
import {
  Code,
  Server,
  Database,
  ShieldCheck,
  Search,
  Wrench,
  CheckCircle,
  ArrowRight,
  Cpu
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills & Toolkit | Tabassum Aktar Sadia",
  description:
    "Comprehensive technical stack of Tabassum Aktar Sadia across Frontend (Next.js, React), Backend (Laravel, NestJS, ASP.NET Core), Databases, SQA Testing, and Security.",
};

const iconMap = {
  frontend: Code,
  backend: Server,
  databases: Database,
  "testing-qa": ShieldCheck,
  "security-performance-seo": Search,
  tools: Wrench,
};

export default function SkillsPage() {
  return (
    <div className="bg-[#F3EEEA] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-12 mb-16 border-b border-[#DDD5CC]">
          <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
            STACK ARCHITECTURE & METHODOLOGIES
          </span>
          <h1 className="editorial-heading text-4xl sm:text-6xl text-[#171717] mb-4">
            MY TECHNICAL<br />
            <span className="text-[#FF8500]">TOOLKIT.</span>
          </h1>
          <p className="text-sm text-[#666666] max-w-2xl leading-relaxed">
            Consolidating the full engineering stack from my Web Developer, Backend, and Software Quality Assurance CVs without arbitrary skill percentages.
          </p>
        </div>

        {/* 6 Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.id as keyof typeof iconMap] || Cpu;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-8 border border-[#E3DDD6] shadow-sm hover:shadow-xl hover:border-[#FF8500] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF1E5] text-[#FF8500] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777] bg-[#F3EEEA] px-2.5 py-1 rounded-md">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#171717] tracking-tight uppercase mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="space-y-2 mb-6">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                          skill.highlight
                            ? "bg-[#FFF9F5] border-[#FF8500]/30 text-[#171717] font-bold"
                            : "bg-[#FAF8F6] border-[#EDE6DF] text-[#444444]"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500]" />
                          )}
                          <span>{skill.name}</span>
                        </span>

                        {skill.tags && skill.tags.length > 0 && (
                          <span className="text-[10px] text-[#888888] font-mono">
                            {skill.tags[0]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EBE5] flex items-center justify-between text-[11px] text-[#777777]">
                  <span>Total Tools: {cat.skills.length}</span>
                  <span className="text-[#FF8500] font-semibold">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Stack Integration Philosophy Banner */}
        <div className="bg-[#171717] text-white rounded-3xl p-8 sm:p-14 border border-[#2E2E2E]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF8500] block mb-2">
                ENGINEERING PHILOSOPHY
              </span>
              <h2 className="editorial-heading text-2xl sm:text-4xl text-white mb-4">
                HOW THESE TECHNOLOGIES CONVERGE IN MY CODE.
              </h2>
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed mb-4">
                Rather than treating frontend, backend, and testing as isolated silos, I bridge them directly: architecting NestJS or Laravel APIs with type-safe contracts for Next.js, normalizing PostgreSQL schemas, and verifying end-to-end reliability through automated Selenium and Postman tests.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-[#DDDDDD]">
                  Type-Safe APIs
                </span>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-[#DDDDDD]">
                  Normalized Relational Schemas
                </span>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-[#DDDDDD]">
                  Automated SQA Validation
                </span>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-[#DDDDDD]">
                  WCAG Accessibility
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FF8500] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#E67700] transition-colors text-center"
              >
                <span>See Projects In Action</span>
              </Link>
              <Link
                href="/experience"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors text-center"
              >
                <span>Client Case Studies</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

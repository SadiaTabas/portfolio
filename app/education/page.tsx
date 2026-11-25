import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { educationData, achievementsData } from "@/data/education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Academic Honors | Tabassum Aktar Sadia",
  description:
    "Explore the academic qualifications, honors, and Dean's Honorable Mention of Tabassum Aktar Sadia (BSc CSE AIUB, CGPA 3.97/4.00).",
};

export default function EducationPage() {
  return (
    <div className="bg-[#F3EEEA] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-12 mb-16 border-b border-[#DDD5CC]">
          <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
            SCHOLASTIC ACHIEVEMENTS & DISTINCTIONS
          </span>
          <h1 className="editorial-heading text-4xl sm:text-6xl text-[#171717] mb-4">
            ACADEMIC<br />
            <span className="text-[#FF8500]">FOUNDATIONS.</span>
          </h1>
          <p className="text-sm text-[#666666] max-w-2xl leading-relaxed">
            A sustained record of academic distinction from national standardized science examinations to high-ranking performance in Computer Science & Engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 mb-20">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-[#FF8500]" />
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-[#171717]">
              Academic Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={edu.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3DDD6] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent tag */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#F0EBE5] gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF2E5] text-[#FF8500] px-2.5 py-0.5 rounded">
                        {edu.field}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F3EEEA] text-[#555555] px-2.5 py-0.5 rounded">
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="editorial-heading text-xl sm:text-3xl text-[#171717]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-bold text-[#555555] mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Score & Timeline */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
                    <div className="bg-[#171717] text-white px-4 py-2 rounded-xl text-center shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-[#FF8500] block">
                        {edu.scoreLabel}
                      </span>
                      <span className="text-lg font-black tracking-tight">
                        {edu.score}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#777777] font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#FF8500]" />
                      <span>{edu.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Coursework & Notes */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8">
                    {edu.coursework && (
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2">
                          Key Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#F3EEEA] text-[#333333] border border-[#E5DFD9]"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-4 text-xs text-[#666666] leading-relaxed bg-[#FAF8F6] p-4 rounded-xl border border-[#EFE9E3]">
                    <span className="font-bold text-[#171717] block mb-1">
                      Scholastic Standing:
                    </span>
                    <p>{edu.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements & Honors */}
        <div className="bg-[#171717] text-white rounded-3xl p-8 sm:p-14 border border-[#2E2E2E] mb-20 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-[#FF8500]" />
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-white">
              Honors & Academic Distinctions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Certificate Presentation */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border-2 border-[#FF8500]/50 shadow-2xl bg-[#242424] group">
                <Image
                  src={achievementsData[0].verifiedAssetPath || "/images/deans-honorable.jpeg"}
                  alt="Dean's Honorable Mention Certificate"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-xs py-2 px-3 text-center">
                  <span className="text-[11px] font-bold text-[#FF8500] uppercase tracking-wider">
                    Official AIUB Academic Distinction
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Honors Details */}
            <div className="lg:col-span-7 space-y-6">
              {achievementsData.map((ach) => (
                <div
                  key={ach.id}
                  className="p-6 rounded-2xl bg-[#202020] border border-[#2C2C2C] hover:border-[#FF8500] transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#FF8500]">
                      {ach.organization}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#888888] bg-white/10 px-2 py-0.5 rounded">
                      {ach.timeline}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA to Contact */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#171717] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-[#FF8500] transition-colors shadow-lg"
          >
            <span>Discuss Opportunities With Me</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

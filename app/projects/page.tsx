import React from "react";
import ProjectsList from "@/components/projects/ProjectsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Engineering Work | Tabassum Aktar Sadia",
  description:
    "Explore 13 software engineering projects developed by Tabassum Aktar Sadia across full-stack applications, NestJS APIs, ASP.NET Core systems, Laravel platforms, and SQA automation suites.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#F3EEEA] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-12 mb-12 border-b border-[#DDD5CC]">
          <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
            SOFTWARE SOLUTIONS & CODEBASES
          </span>
          <h1 className="editorial-heading text-4xl sm:text-6xl text-[#171717] mb-4">
            SELECTED<br />
            <span className="text-[#FF8500]">WORK & PROJECTS.</span>
          </h1>
          <p className="text-sm text-[#666666] max-w-2xl leading-relaxed">
            A comprehensive collection of 13 applications, production client implementations, and software engineering systems synthesized from my Web Developer, Backend, and SQA portfolios.
          </p>
        </div>

        {/* Dynamic Project List Component */}
        <ProjectsList />

      </div>
    </div>
  );
}

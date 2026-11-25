"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Code, Check, Globe } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function HomeFeaturedProjects() {
  // Top 3 featured projects (starts with Dhaka Metro Rail, then SD Inventory System, then MediCore Hospital!)
  const featured = projectsData.slice(0, 3);
  const totalCount = projectsData.length;

  return (
    <section className="py-24 bg-[#F3EEEA] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#DDD5CC] pb-8">
          <div>
            <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
              ENGINEERING EXPERIMENTS & APPLICATIONS
            </span>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-[#171717]">
              SELECTED<br />
              <span className="text-[#FF8500]">WORK & PROJECTS.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-sm text-[#666666] max-w-sm leading-relaxed">
              Real full-stack architectures, RESTful API backends, and tested applications from production platforms to university software engineering.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8500] hover:text-[#171717] transition-colors"
            >
              <span>VIEW ALL {totalCount} PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E3DDD6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Card Header & Preview Placeholder */}
              <div>
                <div className="relative h-48 bg-[#171717] p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 pattern-grid-dark opacity-30 pointer-events-none" />
                  
                  {/* Top Bar: Number, Category & Live Status */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF8500]">
                      PROJECT {project.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {project.liveUrl && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-green-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          LIVE
                        </span>
                      )}
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title Preview in Banner */}
                  <div className="relative z-10">
                    <p className="text-xs text-[#AAAAAA] line-clamp-1 mb-1 font-mono">
                      {project.primarySource}
                    </p>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF8500] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF8500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Body Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-xs font-bold text-[#FF8500] uppercase tracking-wider line-clamp-1">
                      {project.subtitle}
                    </p>
                    {project.liveUrl && (
                      <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#666666] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F3EEEA] text-[#444444] border border-[#E8E2DC]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-[#888888]">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="p-6 pt-0 border-t border-[#F0EBE5] flex items-center justify-between mt-auto">
                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] group-hover:text-[#FF8500] transition-colors"
                >
                  <span>Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#F3EEEA] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FF8500] text-white hover:bg-[#E67700] transition-colors text-[11px] font-bold shadow-xs active:scale-95"
                      aria-label="Open Live Demo"
                      title={`Live Site: ${project.liveUrl}`}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner linking to full portfolio */}
        <div className="mt-16 bg-[#171717] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#2E2E2E]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF8500] block mb-2">
              DISCOVER FULL ENGINEERING REPERTOIRE
            </span>
            <h3 className="editorial-heading text-2xl sm:text-3xl text-white mb-2">
              READY TO EXPLORE ALL {totalCount} PROJECTS & ARCHITECTURES?
            </h3>
            <p className="text-xs sm:text-sm text-[#999999] max-w-xl">
              Includes live Dhaka Metro Rail transit ticketing, live SD Inventory logistics platform, hospital doctor management, SafeHer women safety app, and corporate platforms.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF8500] text-white font-extrabold text-xs uppercase tracking-widest hover:bg-[#E67700] transition-all duration-300 shrink-0 shadow-lg"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

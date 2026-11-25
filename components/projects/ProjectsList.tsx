"use client";

import React, { useState, useMemo } from "react";
import { projectsData, projectCategories, type Project } from "@/data/projects";
import {
  ExternalLink,
  Github,
  Search,
  X,
  Layers,
  CheckCircle,
  Code,
  Shield,
  ArrowRight,
  Sparkles,
  Info,
  Globe
} from "lucide-react";

function FigmaIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

export default function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All Projects" ||
        project.category === selectedCategory ||
        project.allCategories.includes(selectedCategory);

      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search & Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {projectCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All Projects"
                ? projectsData.length
                : projectsData.filter((p) => p.allCategories.includes(cat)).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#171717] text-white shadow-md ring-2 ring-[#FF8500]"
                    : "bg-white text-[#555555] hover:bg-[#EAE4DE] border border-[#DDD5CC]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected
                      ? "bg-[#FF8500] text-white"
                      : "bg-[#EAE4DE] text-[#777777]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#777777] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#DDD5CC] text-xs text-[#171717] placeholder-[#888888] focus:outline-none focus:border-[#FF8500] focus:ring-1 focus:ring-[#FF8500] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#777777] hover:text-[#171717]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#E3DDD6] p-8">
          <Info className="w-10 h-10 text-[#FF8500] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#171717] mb-1">
            No projects matched your criteria
          </h3>
          <p className="text-xs text-[#777777] mb-4">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All Projects");
              setSearchQuery("");
            }}
            className="px-5 py-2 rounded-full bg-[#171717] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF8500] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E3DDD6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="h-44 bg-[#171717] p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 pattern-grid-dark opacity-30 pointer-events-none" />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF8500]">
                      PROJECT {project.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white px-2 py-0.5 rounded backdrop-blur-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Source */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] text-[#AAAAAA] font-mono block">
                        Source: {project.primarySource}
                      </span>
                      {project.liveUrl && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-green-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          LIVE
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-[#FF8500] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Accent Line */}
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

                  <p className="text-xs text-[#555555] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F3EEEA] text-[#444444] border border-[#E8E2DC]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="text-[10px] text-[#888888] font-semibold self-center">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 border-t border-[#F0EBE5] flex items-center justify-between mt-auto">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#171717] group-hover:text-[#FF8500] transition-colors"
                >
                  <span>Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#F3EEEA] text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#F3EEEA] text-[#171717] hover:bg-[#A259FF] hover:text-white transition-colors"
                      title="Figma Prototype / Design"
                      aria-label="Figma Prototype"
                    >
                      <FigmaIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#FF8500] text-white hover:bg-[#E67700] transition-colors text-[11px] font-bold shadow-xs"
                      title="Live Demo Platform"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E3DDD6] shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#171717] text-white p-6 sm:p-8 flex items-start justify-between border-b border-[#2E2E2E] z-20">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#FF8500]">
                    PROJECT {activeModalProject.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded">
                    {activeModalProject.category}
                  </span>
                  {activeModalProject.isClientProject && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FF8500] text-white px-2 py-0.5 rounded">
                      Client Platform
                    </span>
                  )}
                  {activeModalProject.liveUrl && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <h3 className="editorial-heading text-2xl sm:text-3xl text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-[#FF8500] font-bold mt-1">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#FF8500] text-white transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Comprehensive Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#777777] mb-2">
                  Project Overview & Scope
                </h4>
                <p className="text-sm text-[#444444] leading-relaxed">
                  {activeModalProject.longDescription}
                </p>
                <div className="mt-3 inline-block text-[11px] font-mono text-[#888888] bg-[#F3EEEA] px-2.5 py-1 rounded">
                  Source: {activeModalProject.primarySource}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#777777] mb-3">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F3EEEA] text-[#171717] border border-[#DDD5CC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#777777] mb-3">
                  Key Features & Workflows
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProject.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F6] border border-[#EFE9E3]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#FF8500] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#333333] font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights */}
              {activeModalProject.architectureHighlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#777777] mb-3">
                    Architectural & Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.architectureHighlights.map((arch, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#555555]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#FF8500] shrink-0 mt-1.5" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links & External Actions */}
              <div className="pt-6 border-t border-[#F0EBE5] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF8500] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E67700] transition-colors shadow-sm"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Site ({activeModalProject.liveUrl.replace('https://', '').replace(/\/$/, '')})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF8500] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}

                  {activeModalProject.figmaUrl && (
                    <a
                      href={activeModalProject.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#242424] text-white border border-[#3A3A3A] text-xs font-bold uppercase tracking-wider hover:bg-[#A259FF] hover:border-[#A259FF] transition-colors"
                    >
                      <FigmaIcon className="w-4 h-4" />
                      <span>Open Figma Design</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs font-bold text-[#777777] hover:text-[#171717]"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

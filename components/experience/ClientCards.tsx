"use client";

import React, { useState } from "react";
import { clientPlatforms } from "@/data/experience";
import { ChevronDown, ChevronUp, ExternalLink, Globe, Layers, ArrowUpRight } from "lucide-react";

export default function ClientCards() {
  const [expandedId, setExpandedId] = useState<string | null>("akhter-properties");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clientPlatforms.map((client) => {
        const isExpanded = expandedId === client.id;

        return (
          <div
            key={client.id}
            className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
              isExpanded
                ? "bg-white border-[#FF8500] shadow-xl ring-2 ring-[#FF8500]/20"
                : "bg-white/80 hover:bg-white border-[#E3DDD6] hover:border-[#D0C7BE] shadow-xs"
            }`}
          >
            {/* Card Header */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8500] bg-[#FFF2E5] px-2.5 py-1 rounded-md">
                  {client.category}
                </span>
                {client.liveUrl && (
                  <a
                    href={client.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-[#F3EEEA] text-[#171717] hover:bg-[#FF8500] hover:text-white transition-colors"
                    aria-label={`Visit live site for ${client.name}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-extrabold text-[#171717] tracking-tight mb-1">
                {client.name}
              </h3>
              <p className="text-xs font-semibold text-[#777777] mb-3">
                Role: {client.role}
              </p>
              <p className="text-xs text-[#555555] leading-relaxed mb-4">
                {client.description}
              </p>

              {/* Technologies chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {client.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F3EEEA] text-[#444444] border border-[#E8E2DC]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expandable Contributions */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-[#F0EBE5] animate-in fade-in duration-200">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#171717] mb-2.5">
                    Key Engineering Contributions:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#555555]">
                    {client.keyContributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8500] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {client.portalUrl && (
                    <div className="mt-3 pt-2">
                      <a
                        href={client.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8500] hover:underline"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Access Production Portal</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Toggle Button */}
            <div className="px-6 py-3 border-t border-[#F0EBE5] bg-[#FAF8F6] rounded-b-2xl">
              <button
                onClick={() => toggleExpand(client.id)}
                className="w-full flex items-center justify-between text-xs font-bold text-[#171717] hover:text-[#FF8500] transition-colors"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Collapse Details" : "View Contributions"}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#FF8500]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#777777]" />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

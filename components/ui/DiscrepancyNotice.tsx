"use client";

import React, { useState } from "react";
import { Info, X, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { cvDiscrepancies } from "@/data/profile";

export default function DiscrepancyNotice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#EFE9E3] border-b border-[#E0D8D0] py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[#444444]">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#FF8500] text-white text-[10px] font-bold">
            i
          </span>
          <span className="font-semibold text-[#171717]">
            Source Documentation Notice:
          </span>
          <span className="text-[#666666]">
            Verified from official curriculum vitae and academic records.
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 text-[#FF8500] hover:text-[#E67700] font-bold transition-colors text-left"
          aria-expanded={isOpen}
        >
          <span>{isOpen ? "Hide Documentation Notes" : "View Documentation Notes"}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {isOpen && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-[#DFD6CE] grid grid-cols-1 md:grid-cols-3 gap-4 pb-2 animate-in fade-in duration-200">
          {cvDiscrepancies.map((item) => (
            <div
              key={item.field}
              className="bg-white p-3 rounded-lg border border-[#E3DDD6] shadow-xs"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-[#171717] text-[11px] uppercase tracking-wider">
                  {item.field}
                </span>
                <span className="text-[10px] bg-[#FFF2E5] text-[#FF8500] font-bold px-1.5 py-0.5 rounded">
                  Active: {item.currentSelected}
                </span>
              </div>
              <ul className="space-y-1 mb-2 text-[11px] text-[#555555]">
                {item.options.map((opt, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-[#999999]">•</span>
                    <span>
                      <strong className="text-[#222222]">{opt.label}</strong> ({opt.source})
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-[#888888] italic border-t border-[#F0EBE5] pt-1.5">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

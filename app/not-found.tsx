import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F3EEEA] px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 border border-[#E3DDD6] shadow-sm text-center">
        <span className="text-4xl sm:text-6xl font-black text-[#FF8500] font-mono block mb-2">
          404
        </span>
        <h2 className="editorial-heading text-xl sm:text-2xl text-[#171717] mb-3">
          PAGE NOT FOUND
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-8">
          The requested portfolio section or link does not exist. Please navigate back to the home page or explore the main portfolio sections.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF8500] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

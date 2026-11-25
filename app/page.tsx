import Hero from "@/components/sections/Hero";
import HomeCapabilities from "@/components/sections/HomeCapabilities";
import HomeFeaturedProjects from "@/components/sections/HomeFeaturedProjects";
import Link from "next/link";
import { ArrowRight, Mail, Phone, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCapabilities />
      <HomeFeaturedProjects />

      {/* Quick Connect CTA Section on Homepage */}
      <section className="py-20 bg-[#F3EEEA] border-t border-[#DDD5CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E3DDD6] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF8500] block mb-2">
                LET&apos;S COLLABORATE
              </span>
              <h2 className="editorial-heading text-3xl sm:text-4xl text-[#171717] mb-4">
                HAVE A PROJECT OR ROLE IN MIND?
              </h2>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                I&apos;m currently available for full-stack web engineering, backend development, and software quality assurance opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#171717] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#FF8500] transition-colors shadow-md"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F3EEEA] text-[#171717] font-bold text-xs uppercase tracking-wider hover:bg-[#E2DDD6] transition-colors"
              >
                <span>Read Full Biography</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

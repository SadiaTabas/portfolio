import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight, ExternalLink, Download, MessageSquare } from "lucide-react";
import { socialsData } from "@/data/socials";
import { profileData } from "@/data/profile";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaboration | Tabassum Aktar Sadia",
  description:
    "Get in touch with Tabassum Aktar Sadia for full-stack engineering roles, backend API projects, and SQA opportunities.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F3EEEA] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-12 mb-16 border-b border-[#DDD5CC]">
          <span className="text-[11px] font-extrabold tracking-widest text-[#FF8500] uppercase block mb-2">
            INITIATE CONVERSATION & INQUIRIES
          </span>
          <h1 className="editorial-heading text-4xl sm:text-6xl text-[#171717] mb-4">
            LET&apos;S BUILD<br />
            <span className="text-[#FF8500]">SOMETHING GREAT.</span>
          </h1>
          <p className="text-sm text-[#666666] max-w-2xl leading-relaxed">
            I&apos;m always interested in discussing new opportunities, creative ideas, and interesting projects. Feel free to get in touch.
          </p>
        </div>

        {/* Main Grid: Left Details & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Column: Direct Info & Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#171717] text-white rounded-3xl p-8 sm:p-10 border border-[#2E2E2E]">
              <span className="text-xs font-mono font-bold text-[#FF8500] uppercase tracking-widest block mb-2">
                HAVE A PROJECT IN MIND?
              </span>
              <h2 className="editorial-heading text-2xl sm:text-3xl text-white mb-4">
                GET IN TOUCH DIRECTLY
              </h2>
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed mb-8">
                Whether you need a full-stack engineer to build an application, a backend developer for REST APIs, or SQA auditing, reach out directly.
              </p>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href={`mailto:${socialsData.email}`}
                  className="w-full py-3.5 px-6 rounded-full bg-[#FF8500] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#E67700] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send An Email</span>
                </a>

                <a
                  href={socialsData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#242424] text-white border border-[#3A3A3A] font-extrabold text-xs uppercase tracking-wider hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#FF8500]" />
                  <span>Let&apos;s Connect on LinkedIn</span>
                </a>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 pt-6 border-t border-[#292929] text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#242424] text-[#FF8500] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] uppercase font-bold tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${socialsData.email}`}
                      className="font-bold text-white hover:text-[#FF8500] transition-colors break-all"
                    >
                      {socialsData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#242424] text-[#FF8500] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] uppercase font-bold tracking-wider block">
                      Mobile & WhatsApp
                    </span>
                    <a
                      href={`tel:${socialsData.phone.replace(/\s+/g, "")}`}
                      className="font-bold text-white hover:text-[#FF8500] transition-colors"
                    >
                      {socialsData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#242424] text-[#FF8500] flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] uppercase font-bold tracking-wider block">
                      GitHub Profile
                    </span>
                    <a
                      href={socialsData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-[#FF8500] transition-colors"
                    >
                      github.com/SadiaTabas
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#242424] text-[#FF8500] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] uppercase font-bold tracking-wider block">
                      Location
                    </span>
                    <span className="font-bold text-white">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CV Download Block */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DDD6] shadow-xs">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF8500] block mb-1">
                RESUME ARCHIVES
              </span>
              <h4 className="text-base font-bold text-[#171717] mb-4">
                Get My Official CV
              </h4>
              <div className="space-y-2">
                {profileData.cvDownloads.map((cv) => (
                  <a
                    key={cv.title}
                    href={cv.path}
                    download={cv.fileName}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#F3EEEA] hover:bg-[#EAE4DE] text-xs font-bold text-[#171717] transition-all border border-transparent hover:border-[#FF8500] group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Download className="w-4 h-4 text-[#FF8500] shrink-0" />
                      <div>
                        <span className="block text-xs font-bold text-[#171717] group-hover:text-[#FF8500]">
                          Download CV
                        </span>
                        <span className="block text-[10px] text-[#777777] font-normal">
                          {cv.description}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#FF8500] font-bold bg-white px-2 py-0.5 rounded shadow-xs shrink-0">
                      PDF
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}

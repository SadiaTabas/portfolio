"use client";

import React, { useState } from "react";
import { Send, AlertCircle, Copy, Check, ExternalLink, Mail, RotateCcw } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isReady, setIsReady] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }
    return newErrors;
  };

  const getMailtoUrl = () => {
    const recipient = "tabassum.aktar24@gmail.com";
    const subject = encodeURIComponent(formData.subject.trim() || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nSubject: ${formData.subject.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const mailtoUrl = getMailtoUrl();

    // Open visitor's default email client
    window.location.href = mailtoUrl;

    // Show ready state with instructions
    setIsReady(true);
  };

  const handleLaunchEmailClient = () => {
    window.location.href = getMailtoUrl();
  };

  const handleReset = () => {
    setIsReady(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("tabassum.aktar24@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E3DDD6] shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-extrabold uppercase text-[#171717] tracking-tight mb-2">
          Send a Direct Message
        </h3>
        <p className="text-xs text-[#777777] leading-relaxed">
          Fill out the form below to prepare an email draft directly to my inbox.
        </p>
      </div>

      {isReady ? (
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FFF9F5] border border-[#FF8500]/40 text-center animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-[#FFF2E5] text-[#FF8500] flex items-center justify-center mx-auto mb-4 border border-[#FF8500]/20">
            <Mail className="w-7 h-7" />
          </div>

          <h4 className="text-lg sm:text-xl font-extrabold text-[#171717] mb-2 tracking-tight">
            Your message is ready! Please send it using your email application.
          </h4>

          <p className="text-xs text-[#555555] leading-relaxed mb-6 max-w-lg mx-auto">
            Your default email client has been opened with your message pre-filled. If it didn&apos;t launch automatically, click the button below to open your email client now.
          </p>

          <div className="p-4 rounded-xl bg-white border border-[#E8E2DC] text-left max-w-lg mx-auto mb-6 text-xs space-y-2">
            <div className="flex justify-between border-b border-[#F0EBE5] pb-1.5">
              <span className="text-[#888888] font-medium">To:</span>
              <span className="font-mono font-bold text-[#171717]">tabassum.aktar24@gmail.com</span>
            </div>
            <div className="flex justify-between border-b border-[#F0EBE5] pb-1.5">
              <span className="text-[#888888] font-medium">Subject:</span>
              <span className="font-semibold text-[#171717] truncate max-w-[260px] sm:max-w-[320px]">
                {formData.subject}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#888888] font-medium">From:</span>
              <span className="font-medium text-[#171717] truncate max-w-[260px] sm:max-w-[320px]">
                {formData.name} &lt;{formData.email}&gt;
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleLaunchEmailClient}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FF8500] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E67700] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Open Email Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#171717] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Send Another Message</span>
            </button>
          </div>

          <p className="text-[11px] text-[#888888] mt-6 italic">
            Important: A mailto link only opens an email draft in your email application; please remember to click &ldquo;Send&rdquo; in your mail app to complete delivery.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5"
              >
                Your Name <span className="text-[#FF8500]">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border text-xs text-[#171717] placeholder-[#999999] focus:outline-none focus:ring-1 focus:ring-[#FF8500] transition-colors ${
                  errors.name ? "border-red-500 bg-red-50/20" : "border-[#E5DFD9]"
                }`}
              />
              {errors.name && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5"
              >
                Email Address <span className="text-[#FF8500]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. sarah@company.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border text-xs text-[#171717] placeholder-[#999999] focus:outline-none focus:ring-1 focus:ring-[#FF8500] transition-colors ${
                  errors.email ? "border-red-500 bg-red-50/20" : "border-[#E5DFD9]"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5"
            >
              Subject / Topic <span className="text-[#FF8500]">*</span>
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Web Development Opportunity / Project Discussion"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: "" });
              }}
              className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border text-xs text-[#171717] placeholder-[#999999] focus:outline-none focus:ring-1 focus:ring-[#FF8500] transition-colors ${
                errors.subject ? "border-red-500 bg-red-50/20" : "border-[#E5DFD9]"
              }`}
            />
            {errors.subject && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-[#444444] mb-1.5"
            >
              Message <span className="text-[#FF8500]">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project scope, requirements, or role..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border text-xs text-[#171717] placeholder-[#999999] focus:outline-none focus:ring-1 focus:ring-[#FF8500] transition-colors resize-none ${
                errors.message ? "border-red-500 bg-red-50/20" : "border-[#E5DFD9]"
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button & Copy Email */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171717] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#FF8500] transition-colors shadow-md flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="text-xs font-bold text-[#777777] hover:text-[#171717] flex items-center gap-1.5"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-600">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#FF8500]" />
                  <span>Copy tabassum.aktar24@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

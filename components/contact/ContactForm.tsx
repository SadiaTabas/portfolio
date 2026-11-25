"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `From: ${formData.name || "Colleague"}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:tabassum.aktar24@gmail.com?subject=${subject}&body=${body}`;
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
          Fill out the form below to initiate communication or use direct email.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 rounded-2xl bg-[#FFF9F5] border border-[#FF8500]/40 text-center animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-[#FF8500] mx-auto mb-3" />
          <h4 className="text-lg font-bold text-[#171717] mb-2">
            Message Prepared Successfully!
          </h4>
          <p className="text-xs text-[#555555] leading-relaxed mb-6 max-w-md mx-auto">
            Thank you, {formData.name}. Since no third-party email API key (like Resend or SendGrid) is provisioned yet in this environment, you can transmit this message directly to my inbox with one click:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleMailtoDirect}
              className="px-6 py-3 rounded-full bg-[#FF8500] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E67700] transition-colors shadow-md flex items-center gap-2"
            >
              <span>Transmit via Default Email Client</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="px-6 py-3 rounded-full bg-[#F3EEEA] text-[#171717] text-xs font-bold uppercase tracking-wider hover:bg-[#E5DFD9] transition-colors"
            >
              Write Another Message
            </button>
          </div>
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
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
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

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171717] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#FF8500] transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 active:scale-95"
            >
              {isSubmitting ? (
                <span>Validating & Processing...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
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

      {/* Integration Disclosure Notice */}
      <div className="mt-8 pt-4 border-t border-[#F0EBE5] text-[11px] text-[#888888] leading-relaxed">
        <p className="font-semibold text-[#666666] mb-1">
          Technical Integration Architecture Note:
        </p>
        <p>
          This form executes standard client-side state handling and validation. In production deployment, connect it to your preferred backend handler (such as a Next.js App Router API route with Resend, Nodemailer, or AWS SES) or an EmailJS webhook.
        </p>
      </div>
    </div>
  );
}

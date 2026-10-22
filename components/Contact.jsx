"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, CheckCircle, Clock, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Full Website Redesign",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formEl = e.currentTarget;
      const data = new FormData(formEl);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
      } else {
        // Fallback to standard form submission if AJAX fails
        formEl.submit();
      }
    } catch (err) {
      // In case of fetch interception or network restriction, submit form natively
      e.target.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                <span className="w-5 h-[2px] bg-blue-600" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let's Build Something Exceptional Together
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Book your free 30-minute consultation. We'll audit your current site, discuss your goals, and map out a strategic timeline and scope.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">Email Us</div>
                    <a
                      href="mailto:hello@jovix.co.uk"
                      className="text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      hello@jovix.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">Call Us</div>
                    <a
                      href="tel:+919090598756"
                      className="text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      +91 90905 98756
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">Response Time</div>
                    <div className="text-base font-semibold text-slate-900">
                      Within 24 business hours
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">Office Location</div>
                    <a
                      href="https://maps.app.goo.gl/P4ZzpERyaXUN5ytk7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      GITA Engineering College, Bhubaneswar, Odisha
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-md">
              {formSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Consultation Request Received!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base">
                    Thank you, {formData.name || "there"}! We've received your project details and will review your requirements before reaching out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="51afeb6c-b7b3-4e0c-8978-d50aee9c530d"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Consultation Request - Jovix Website"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="Jovix Website"
                  />

                  <div className="flex items-center gap-3.5 mb-6 pb-5 border-b border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 p-1 flex items-center justify-center shrink-0 shadow-sm">
                      <Image
                        src="/images/jovix-symbol.png"
                        alt="Jovix Logo"
                        width={38}
                        height={38}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">
                        Request a Free Consultation
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        Tell us about your company and website objectives.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase text-slate-700 mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@yourcompany.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase text-slate-700 mb-1.5"
                      >
                        Mobile No. *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold uppercase text-slate-700 mb-1.5"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 transition-all bg-white"
                      >
                        <option value="Full Website Redesign">Full Website Redesign</option>
                        <option value="Business Management Systems (CRM/ERP/HRM)">Business Management Systems</option>
                        <option value="Custom Web Development (Next.js/React)">Custom Web Development</option>
                        <option value="UI/UX Design & Prototyping">UI/UX Design & Prototyping</option>
                        <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                        <option value="Performance & SEO Optimization">Performance & SEO Optimization</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase text-slate-700 mb-1.5"
                    >
                      Project Goals & Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what challenges your current site faces and what success looks like..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Horizontal Row: What to expect from Jovix & Prefer direct email? */}
        <div className="mt-10 lg:mt-12 pt-8 lg:pt-10 border-t border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: What to expect from Jovix */}
          <div className="lg:col-span-5 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                  <Image
                    src="/images/jovix-symbol.png"
                    alt="Jovix Logo Emblem"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                  What to expect from Jovix
                </h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                No pushy sales calls. You will speak directly with a lead designer and engineer who will offer tangible feedback on your site.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Direct engineer & designer communication guaranteed</span>
            </div>
          </div>

          {/* Right Card: Prefer direct email? (Jyoti & Jay in one horizontal line) */}
          <div className="lg:col-span-7 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="mb-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 mb-1">
                Prefer direct email?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Reach out directly to the founders for quick consultation and project inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Jyoti (Jitu) */}
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <span className="text-sm font-bold text-slate-900">Jyoti (Jitu)</span>
                    <span className="text-[11px] font-semibold text-slate-500">• Co-Founder & Tech</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <a
                      href="mailto:jitu@jovix.co.uk?subject=Project%20Inquiry%20-%20Jovix"
                      className="font-medium text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5 truncate"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">jitu@jovix.co.uk</span>
                    </a>
                    <a
                      href="tel:+919090598756"
                      className="font-medium text-slate-700 hover:text-blue-600 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>+91 90905 98756</span>
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:jitu@jovix.co.uk?subject=Project%20Inquiry%20-%20Jovix"
                  className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-bold text-blue-600 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 rounded-lg transition-colors shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>

              {/* Jay */}
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <span className="text-sm font-bold text-slate-900">Jay</span>
                    <span className="text-[11px] font-semibold text-slate-500">• Co-Founder & Product</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <a
                      href="mailto:jay@jovix.co.uk?subject=Project%20Inquiry%20-%20Jovix"
                      className="font-medium text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1.5 truncate"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">jay@jovix.co.uk</span>
                    </a>
                    <a
                      href="tel:+917846803792"
                      className="font-medium text-slate-700 hover:text-blue-600 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>+91 78468 03792</span>
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:jay@jovix.co.uk?subject=Project%20Inquiry%20-%20Jovix"
                  className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-bold text-blue-600 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/60 rounded-lg transition-colors shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

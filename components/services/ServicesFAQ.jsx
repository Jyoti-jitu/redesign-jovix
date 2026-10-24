"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { servicesFAQs } from "@/config/servicesContent";

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2.5 block">
            COMMON QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base lg:text-lg text-slate-600 font-normal">
            Everything you need to know about our project pricing, delivery timelines, ownership, and tech support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {servicesFAQs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-3 p-3.5 sm:p-6 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

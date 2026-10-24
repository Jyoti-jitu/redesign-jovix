import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import DemoProjects from "@/components/services/DemoProjects";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import { demoProjectsList } from "@/config/servicesContent";
import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Interactive Demo Projects & Concept Prototypes | Jovix",
  description:
    "Test-drive Jovix's live interactive demo prototypes classified by industry: Medical & Healthcare, CleanTech Calculators, Business Systems CRM/ERP, AI Chatbots, and E-Commerce.",
  alternates: {
    canonical: "/demo-projects",
  },
  openGraph: {
    title: "Interactive Demo Projects & Concept Prototypes | Jovix",
    description:
      "Test-drive Jovix's live interactive demo prototypes classified by industry: Medical & Healthcare, CleanTech Calculators, Business Systems CRM/ERP, AI Chatbots, and E-Commerce.",
    url: "https://jovix.co.uk/demo-projects",
    siteName: "Jovix",
    images: [
      {
        url: "/images/jovix-hero.png",
        width: 1983,
        height: 793,
        alt: "Jovix — Interactive Demo Projects & Prototypes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const demoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jovix.co.uk/demo-projects/#webpage",
      "url": "https://jovix.co.uk/demo-projects",
      "name": "Interactive Demo Projects & Concept Prototypes | Jovix",
      "description":
        "Test-drive Jovix's live interactive demo prototypes classified by industry.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jovix.co.uk",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Demo Projects",
            "item": "https://jovix.co.uk/demo-projects",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "name": "Live Concept Prototypes by Jovix",
      "itemListElement": demoProjectsList.map((demo, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": demo.title,
        "description": demo.description,
        "applicationCategory": demo.categoryLabel,
        "operatingSystem": "Web",
      })),
    },
  ],
};

export default function DemoProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Structured Schema */}
      <section aria-hidden="true" className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(demoSchema) }}
        />
      </section>

      {/* Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* Dedicated Hero */}
        <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-white pt-6 pb-10 sm:pt-16 sm:pb-20 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-blue-600 font-bold">Demo Projects</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] sm:text-sm font-bold tracking-wide uppercase mb-3.5 sm:mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                <span>INTERACTIVE PROTOTYPE LAB</span>
              </div>

              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] mb-3.5 sm:mb-6">
                Test-Drive Functional <span className="text-blue-600">Demo Projects</span>
              </h1>

              <p className="text-xs sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal mb-5 sm:mb-8">
                Explore real, working concept models classified by type — including healthcare appointment systems, digital prescription engines, diagnostic lab trackers, solar calculators, and AI bots.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10">
                <a
                  href="#demo-projects"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-base shadow-sm transition-all"
                >
                  <span>Select a Prototype Below</span>
                  <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </a>

                <Link
                  href="/services#delivered-projects"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-base shadow-xs transition-all"
                >
                  <span>View Delivered Client Work</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </Link>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-base border border-slate-300 shadow-xs transition-all"
                >
                  <span>Request Custom Build</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-5 sm:pt-8 border-t border-slate-200/80">
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="text-2xl sm:text-4xl font-black text-blue-600">9+</div>
                <div className="text-[11px] sm:text-sm font-semibold text-slate-600 mt-0.5 sm:mt-1">Classified Prototypes</div>
              </div>
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="text-2xl sm:text-4xl font-black text-blue-600">6</div>
                <div className="text-[11px] sm:text-sm font-semibold text-slate-600 mt-0.5 sm:mt-1">Industry Domains</div>
              </div>
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="text-2xl sm:text-4xl font-black text-blue-600">100%</div>
                <div className="text-[11px] sm:text-sm font-semibold text-slate-600 mt-0.5 sm:mt-1">Testable In Browser</div>
              </div>
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="text-2xl sm:text-4xl font-black text-blue-600">24/7</div>
                <div className="text-[11px] sm:text-sm font-semibold text-slate-600 mt-0.5 sm:mt-1">Interactive Simulators</div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Projects Interactive Showcase */}
        <DemoProjects />

        {/* Testimonials */}
        <ServicesTestimonials />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

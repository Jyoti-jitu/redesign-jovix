import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import DemoLiveSimulator from "@/components/services/DemoLiveSimulator";
import { demoProjectsList } from "@/config/servicesContent";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

export async function generateStaticParams() {
  return demoProjectsList.map((demo) => ({
    id: demo.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const demo = demoProjectsList.find((d) => d.id === id);

  if (!demo) {
    return {
      title: "Demo Prototype Not Found | Jovix",
    };
  }

  return {
    title: `${demo.title} — Interactive Demo Prototype | Jovix`,
    description: demo.description,
    alternates: {
      canonical: `/demo-projects/${demo.id}`,
    },
    openGraph: {
      title: `${demo.title} — Live Interactive Prototype`,
      description: demo.description,
      url: `https://jovix.co.uk/demo-projects/${demo.id}`,
      siteName: "Jovix",
      images: [
        {
          url: demo.image || "/images/jovix-hero.png",
          width: 1200,
          height: 630,
          alt: demo.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function DemoDetailPage({ params }) {
  const { id } = await params;
  const demo = demoProjectsList.find((d) => d.id === id);

  if (!demo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased text-slate-900">
      <Header />

      <main className="flex-1 pt-18 sm:pt-28 pb-10 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation & Back Button */}
          <div className="mb-4 sm:mb-8 flex items-center justify-between">
            <Link
              href="/demo-projects"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-bold text-xs sm:text-sm transition-all shadow-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Demo Projects</span>
            </Link>

            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl">
              Category: <strong className="text-slate-800">{demo.categoryLabel}</strong>
            </span>
          </div>

          {/* Prototype Header */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-10 shadow-xs mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-blue-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{demo.badge}</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium px-2 py-0.5 bg-slate-100 rounded-md">
                Production-Ready Concept
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              {demo.title}
            </h1>

            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base lg:text-lg text-blue-600 font-semibold leading-snug">
              {demo.tagline}
            </p>

            <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl">
              {demo.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-5 border-t border-slate-100 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 mr-1">Engineered With:</span>
              {demo.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-100 border border-slate-200/80 text-slate-700 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Dedicated Live Interactive Simulator */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>LIVE INTERACTIVE SIMULATION SANDBOX</span>
              </div>
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Prototype
              </span>
            </div>

            {/* Simulator Container */}
            <DemoLiveSimulator demo={demo} />
          </div>

          {/* Capabilities & Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-extrabold text-slate-950 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                <span>Key Capabilities Demonstrated</span>
              </h2>
              <div className="space-y-3">
                {demo.keyCapabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2">
                  CUSTOM SOFTWARE ENGINEERING
                </span>
                <h3 className="text-xl font-black text-white tracking-tight mb-2">
                  Want this tailored for your business?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  We engineer bespoke production-grade web applications, clinic platforms, booking systems, and business automation tailored precisely to your brand and operational workflows.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between gap-3">
                <Link
                  href="/services#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/demo-projects"
                  className="text-xs text-slate-400 hover:text-white font-semibold transition-colors"
                >
                  Explore other demos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import WhyJovixSection from "@/components/WhyJovixSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import heroConfig from "@/config/hero.js";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section (completely unchanged) */}
        <Hero config={heroConfig} />

        {/* 2. Trust Statistics Section */}
        <TrustStats />

        {/* 3. Our Services Section */}
        <ServicesSection />

        {/* 4. Why Jovix Section */}
        <WhyJovixSection />

        {/* 5. Our Process Section */}
        <ProcessSection />

        {/* 6. Featured Work Portfolio Section */}
        <FeaturedWorkSection />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

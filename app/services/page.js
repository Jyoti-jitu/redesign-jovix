import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ServicesHero from "@/components/services/ServicesHero";
import DeliveredProjects from "@/components/services/DeliveredProjects";
import DemoProjects from "@/components/services/DemoProjects";
import ServicesList from "@/components/services/ServicesList";
import DeliveryProcess from "@/components/services/DeliveryProcess";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import { deliveredProjectsList, demoProjectsList } from "@/config/servicesContent";

export const metadata = {
  title: "Delivered Projects & Live Demo Prototypes | Jovix",
  description:
    "Explore Jovix's full portfolio of delivered client projects and test-drive our interactive demo prototypes across healthcare, industrial engineering, clean energy, and business management systems.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Delivered Projects & Live Demo Prototypes | Jovix",
    description:
      "Explore Jovix's full portfolio of delivered client projects and test-drive our interactive demo prototypes across healthcare, industrial engineering, clean energy, and business management systems.",
    url: "https://jovix.co.uk/services",
    siteName: "Jovix",
    images: [
      {
        url: "/images/jovix-hero.png",
        width: 1983,
        height: 793,
        alt: "Jovix — Delivered Projects & Live Demo Prototypes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// JSON-LD schema for Services, Delivered Projects & Demo Prototypes
const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://jovix.co.uk/services/#webpage",
      "url": "https://jovix.co.uk/services",
      "name": "Delivered Projects & Live Demo Prototypes | Jovix",
      "description":
        "Explore Jovix's portfolio of delivered client projects and test-drive our interactive demo prototypes: healthcare portals, industrial calculators, CRM/ERP management systems, and AI workflows.",
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
            "name": "Delivered Projects & Demos",
            "item": "https://jovix.co.uk/services",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "name": "Delivered Projects Portfolio by Jovix",
      "itemListElement": deliveredProjectsList.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.title,
        "headline": project.title,
        "description": project.summary,
        "creator": {
          "@type": "Organization",
          "name": "Jovix",
        },
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Structured Schema */}
      <section aria-hidden="true" className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </section>

      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section with quick jump tabs */}
        <ServicesHero />

        {/* 3. Section 1: Delivered Projects Showcase (Real Client Work) */}
        <DeliveredProjects />

        {/* 4. Section 2: Demo Projects Showcase (Interactive Live Prototypes) */}
        <DemoProjects />

        {/* 5. Section 3: Core Services Overview */}
        <ServicesList />

        {/* 6. Section 4: Our 4-Stage Delivery Framework */}
        <DeliveryProcess />

        {/* 7. Section 5: Client Testimonials */}
        <ServicesTestimonials />

        {/* 8. Section 6: Frequently Asked Questions */}
        <ServicesFAQ />

        {/* 9. Section 7: Contact Consultation Section */}
        <Contact />
      </main>

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
}

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import AnnouncementsAndGalleryView from "@/components/announcements/AnnouncementsAndGalleryView";
import { announcementsHero, announcementsList } from "@/config/announcementsAndGalleryContent";
import Link from "next/link";
import { Bell, Sparkles, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Announcements & Company Updates | Jovix",
  description:
    "Explore the latest client project launches, engineering milestones, tech releases, and official updates from the Jovix software and web engineering team.",
  alternates: {
    canonical: "/announcements",
  },
  openGraph: {
    title: "Announcements & Company Updates | Jovix",
    description:
      "Explore the latest client project launches, engineering milestones, tech releases, and official updates from the Jovix software and web engineering team.",
    url: "https://jovix.co.uk/announcements",
    siteName: "Jovix",
    images: [
      {
        url: "/images/jovix-hero.png",
        width: 1983,
        height: 793,
        alt: "Jovix Announcements & Updates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const announcementsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://jovix.co.uk/announcements/#webpage",
      "url": "https://jovix.co.uk/announcements",
      "name": "Announcements & Company Updates | Jovix",
      "description":
        "Official company announcements, client project launches, engineering releases, and milestones.",
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
            "name": "Announcements",
            "item": "https://jovix.co.uk/announcements",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "name": "Latest Announcements from Jovix",
      "itemListElement": announcementsList.map((item, index) => ({
        "@type": "NewsArticle",
        "position": index + 1,
        "headline": item.title,
        "description": item.summary,
        "datePublished": item.isoDate,
        "author": {
          "@type": "Organization",
          "name": "Jovix",
        },
      })),
    },
  ],
};

export default function AnnouncementsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Structured Schema */}
      <section aria-hidden="true" className="hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(announcementsSchema) }}
        />
      </section>

      {/* Header Navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-white pt-6 pb-6 sm:pt-16 sm:pb-8 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-blue-600 font-bold">Announcements</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] sm:text-sm font-bold tracking-wide uppercase mb-3.5 sm:mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>{announcementsHero.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] mb-3.5 sm:mb-6">
                {announcementsHero.titlePart1}{" "}
                <span className="text-blue-600">{announcementsHero.titleHighlight}</span>
              </h1>

              <p className="text-xs sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal mb-5 sm:mb-8">
                {announcementsHero.subtitle}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-200/80">
              {announcementsHero.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs"
                >
                  <div className="text-2xl sm:text-4xl font-black text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-sm font-semibold text-slate-600 mt-0.5 sm:mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unified Announcements & Gallery Feed */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <AnnouncementsAndGalleryView />
        </div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

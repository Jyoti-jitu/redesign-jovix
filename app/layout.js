import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jovix.design"),
  title: {
    default: "Jovix — Digital Solutions, Business Management Systems & Web Development",
    template: "%s | Jovix",
  },
  description:
    "Jovix builds high-performance websites, custom CRM, ERP, HRM, inventory, clinic management systems, workflow automation, and digital marketing to scale businesses across India and worldwide.",
  keywords: [
    // Core Brand
    "Jovix",
    "Jovix Design",
    "Jovix Technologies",
    // Core Offerings
    "Website Development",
    "Custom Web Development",
    "Business Management Systems",
    "Custom CRM Development",
    "ERP Software Solutions",
    "HRM Software India",
    "Inventory Management System",
    "Clinic Management System",
    "Doctor Clinic Software",
    "Business Automation",
    "AI Workflow Automation",
    "Digital Marketing Services",
    "SEO Services India",
    // Modern Technology Stack
    "Next.js Development Agency",
    "React Web App Development",
    "Full-Stack Web Development",
    "Tailwind CSS Web Design",
    "High Performance Website Design",
    "Modern UI UX Design Agency",
    "Custom Software Engineering",
    // Local & Regional SEO
    "Web Development Company in Bhubaneswar",
    "Website Design Company Odisha",
    "Software Development Bhubaneswar",
    "Best Web Developers in India",
    "Top Digital Agency Bhubaneswar",
    // Business Use Cases
    "Startup MVP Development",
    "E-Commerce Storefront Development",
    "Healthcare and Clinic Web Systems",
    "Enterprise Digital Transformation",
  ],
  authors: [
    { name: "Jovix" },
    { name: "Jyoti Swarup Parhi", url: "https://github.com/Jyoti-jitu" },
    { name: "Jay" },
  ],
  creator: "Jovix",
  publisher: "Jovix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Jovix — Digital Solutions, Business Management Systems & Web Development",
    description:
      "We design and build high-performance websites, custom CRM, ERP, clinic systems, workflow automation, and digital marketing to scale modern businesses.",
    url: "https://jovix.design",
    siteName: "Jovix",
    images: [
      {
        url: "/images/jovix-hero.png",
        width: 1983,
        height: 793,
        alt: "Jovix — Digital Solutions for Real Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovix — Digital Solutions for Real Businesses",
    description:
      "We build modern websites, custom CRM, ERP, and business management systems that accelerate growth and operations.",
    images: ["/images/jovix-hero.png"],
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1877F2",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jovix.design/#organization",
      "name": "Jovix",
      "alternateName": ["Jovix Technologies", "Jovix Design Studio"],
      "url": "https://jovix.design",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jovix.design/images/jovix-symbol.png",
        "width": "192",
        "height": "192",
      },
      "image": "https://jovix.design/images/jovix-hero.png",
      "description":
        "Jovix designs and develops high-performance websites, custom business management systems (CRM, ERP, HRM, Inventory, Clinic), automation, and digital marketing solutions.",
      "email": "hello@jovix.co.uk",
      "telephone": "+919090598756",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "GITA Engineering College, Madanpur",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "752054",
        "addressCountry": "IN",
      },
      "hasMap": "https://maps.app.goo.gl/P4ZzpERyaXUN5ytk7",
      "founders": [
        {
          "@type": "Person",
          "name": "Jyoti Swarup Parhi (Jitu)",
          "jobTitle": "Co-Founder & Tech",
          "email": "jitu@jovix.co.uk",
          "telephone": "+919090598756",
        },
        {
          "@type": "Person",
          "name": "Jay",
          "jobTitle": "Co-Founder & Product",
          "email": "jay@jovix.co.uk",
          "telephone": "+917846803792",
        },
      ],
      "sameAs": [
        "https://maps.app.goo.gl/P4ZzpERyaXUN5ytk7",
        "https://github.com/Jyoti-jitu/redesign-jovix",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jovix.design/#website",
      "url": "https://jovix.design",
      "name": "Jovix",
      "description":
        "Digital Solutions, Web Development & Business Management Systems",
      "publisher": {
        "@id": "https://jovix.design/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://jovix.design/#service",
      "name": "Jovix Digital Agency",
      "url": "https://jovix.design",
      "image": "https://jovix.design/images/jovix-hero.png",
      "telephone": "+919090598756",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "GITA Engineering College, Madanpur",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "postalCode": "752054",
        "addressCountry": "IN",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Jovix Core Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development",
              "description":
                "Modern, responsive and high-performance websites built with Next.js and React for businesses of all sizes.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Management Systems",
              "description":
                "Custom CRM, ERP, HRM, inventory, clinic, and other management systems to simplify and automate business operations.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Automation",
              "description":
                "Automate repetitive tasks, workflow optimization, and operational efficiency using modern tools and AI.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing & SEO",
              "description":
                "Search engine optimization, targeted ads, performance marketing, and organic online visibility.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

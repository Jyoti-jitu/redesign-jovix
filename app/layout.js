import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jovix.design"),
  title: "Jovix — Digital Solutions for Real Businesses | Website Design & Development",
  description:
    "We design and develop modern websites that help businesses grow, attract customers, and build a strong online presence.",
  keywords: [
    "Website Design",
    "Web Development",
    "Next.js",
    "UI/UX Design",
    "E-commerce",
    "Jovix",
  ],
  authors: [{ name: "Jovix" }],
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
    title: "Jovix — Digital Solutions for Real Businesses",
    description:
      "We design and develop modern websites that help businesses grow, attract customers, and build a strong online presence.",
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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

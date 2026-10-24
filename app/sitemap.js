import { demoProjectsList } from "@/config/servicesContent";

/**
 * Dynamic XML Sitemap generator for search engines (Google, Bing)
 * Next.js automatically maps this to /sitemap.xml
 */
export default function sitemap() {
  const baseUrl = "https://jovix.co.uk";
  const currentDate = new Date().toISOString();

  const primaryRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo-projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/announcements`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const demoRoutes = demoProjectsList.map((demo) => ({
    url: `${baseUrl}/demo-projects/${demo.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...primaryRoutes, ...demoRoutes];
}

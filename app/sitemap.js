/**
 * Dynamic XML Sitemap generator for search engines (Google, Bing)
 * Next.js automatically maps this to /sitemap.xml
 */
export default function sitemap() {
  const baseUrl = "https://jovix.co.uk";
  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

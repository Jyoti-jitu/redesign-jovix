/**
 * Dynamic robots.txt configuration for search engine crawlers
 * Next.js automatically maps this to /robots.txt
 */
export default function robots() {
  const baseUrl = "https://jovix.co.uk";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

/**
 * Centralized configuration for the Jovix landing page content:
 * - Trust statistics & credibility metrics
 * - Services section content, high-resolution photography, and icons
 * - Why Jovix values and office location
 * - Our Process step-by-step framework
 * - Featured Work portfolio showcase
 */

export const trustConfig = {
  headline: "Trusted by businesses, clinics and startups across India",
  disclaimer: "Metrics represent cumulative agency project delivery milestones.",
  avatars: [
    { src: "/images/avatars/avatar-1.webp", alt: "Client profile illustration" },
    { src: "/images/avatars/avatar-2.webp", alt: "Client profile illustration" },
    { src: "/images/avatars/avatar-3.webp", alt: "Client profile illustration" },
    { src: "/images/avatars/avatar-4.webp", alt: "Client profile illustration" },
  ],
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Industries Served" },
    { value: "98%", label: "Client Satisfaction" },
  ],
  floatingCard: {
    text: "Practical Solutions for Real Businesses",
    icon: "trending-up",
  },
};

export const servicesConfig = {
  badge: "OUR SERVICES",
  titlePart1: "Solutions for",
  titleHighlight: "Every Business",
  description:
    "From websites and software to AI automation and digital marketing — we build practical solutions that help businesses grow.",
  viewAllLink: {
    label: "View all services",
    href: "#contact",
  },
  services: [
    {
      id: "website-development",
      title: "Website Development",
      description:
        "Modern, responsive and high-performance websites for businesses of all sizes.",
      image: "/images/services/website-development.webp",
      imageAlt: "A high-resolution photograph of a laptop displaying a professionally designed website in a bright, realistic workspace.",
      icon: "Monitor",
      link: {
        label: "Learn more",
        href: "#contact",
      },
    },
    {
      id: "business-management-systems",
      title: "Business Management Systems",
      description:
        "Custom CRM, ERP and other management systems to simplify and automate your business operations.",
      image: "/images/services/web-applications.webp",
      imageAlt: "Custom CRM, ERP, and business management system dashboard on screen",
      icon: "Layers",
      link: {
        label: "Learn more",
        href: "#contact",
      },
    },
    {
      id: "business-automation",
      title: "Business Automation",
      description:
        "Automate repetitive work and streamline operations using modern tools and AI.",
      image: "/images/services/business-automation.webp",
      imageAlt: "A realistic photograph of two professionals collaborating over business processes in a modern office.",
      icon: "Settings",
      link: {
        label: "Learn more",
        href: "#contact",
      },
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Get more customers with strategic SEO, ads and online presence.",
      image: "/images/services/digital-marketing.webp",
      imageAlt: "A high-resolution photograph of a laptop displaying business analytics and marketing charts.",
      icon: "ChartNoAxesColumnIncreasing",
      link: {
        label: "Learn more",
        href: "#contact",
      },
    },
  ],
};

export const whyJovixConfig = {
  badge: "WHY JOVIX",
  titlePart1: "We combine technology",
  titlePart2: "with",
  titleHighlight: "real business impact.",
  description:
    "Our focus is on clear communication, practical solutions and long-term partnerships.",
  officeImage: {
    src: "/images/why-jovix-office.jpeg",
    alt: "Jovix office at GITA Autonomous College, Bhubaneswar",
    badgeTitle: "Our Office",
    location: "GITA Engineering College, Bhubaneswar, Odisha",
    mapUrl: "https://maps.app.goo.gl/P4ZzpERyaXUN5ytk7",
  },
  benefits: [
    {
      id: "practical-solutions",
      title: "Practical Solutions",
      subtitle: "Built for real business needs",
      icon: "Cpu",
    },
    {
      id: "end-to-end-support",
      title: "End-to-End Support",
      subtitle: "From planning to deployment",
      icon: "LifeBuoy",
    },
    {
      id: "focused-on-results",
      title: "Focused on Results",
      subtitle: "More customers, more revenue",
      icon: "TrendingUp",
    },
    {
      id: "long-term-partnership",
      title: "Long-Term Partnership",
      subtitle: "We grow with your business",
      icon: "Handshake",
    },
  ],
};

export const processConfig = {
  badge: "OUR PROCESS",
  titlePart1: "From idea to",
  titleHighlight: "impact.",
  steps: [
    {
      step: "01",
      title: "Understand",
      description: "Understand the business, audience, and goals.",
      icon: "Lightbulb",
    },
    {
      step: "02",
      title: "Plan",
      description: "Define the project scope, strategy, and structure.",
      icon: "FileText",
    },
    {
      step: "03",
      title: "Build",
      description: "Design, develop, and test the solution.",
      icon: "Code2",
    },
    {
      step: "04",
      title: "Launch",
      description: "Launch the solution and improve it over time.",
      icon: "Rocket",
    },
  ],
};

export const featuredWorkConfig = {
  badge: "FEATURED WORK",
  titlePart1: "Projects that create",
  titleHighlight: "value.",
  viewAllLink: {
    label: "View all projects",
    href: "#contact",
  },
  projects: [
    {
      id: "doctor-clinic",
      title: "Doctor Clinic Website",
      description: "Online appointments and patient management.",
      image: "/images/portfolio-doctor-clinic.webp",
      imageAlt: "Doctor Clinic Website online appointments and patient management",
      href: "#contact",
    },
    {
      id: "forecast-earthing",
      title: "Forecast Earthing",
      description: "Industrial grounding & safety forecasting.",
      image: "/images/portfolio-forecast-earthing.webp",
      imageAlt: "Forecast Earthing industrial grounding and safety forecasting software",
      href: "#contact",
    },
    {
      id: "the-solarplate",
      title: "The Solarplate",
      description: "Solar estimation & quotation platform.",
      image: "/images/portfolio-the-solarplate.webp",
      imageAlt: "The Solarplate solar estimation and quotation analytics platform",
      href: "#contact",
    },
  ],
};

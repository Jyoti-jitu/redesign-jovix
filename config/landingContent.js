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
    href: "/services",
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
      title: "Customized Software & ERP Systems",
      description:
        "Bespoke CRM, ERP, and customized operations software engineered specifically for your exact business workflows.",
      image: "/images/services/web-applications.webp",
      imageAlt: "Customized software, CRM, ERP, and operations management dashboard on screen",
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
    href: "/services#delivered-projects",
  },
  projects: [
    {
      id: "forecast-earthing",
      title: "Forecast Earthing",
      description: "Industrial grounding & safety forecasting platform.",
      image: "/images/portfolio-forecast-earthing.webp",
      imageAlt: "Forecast Earthing industrial grounding and safety forecasting software",
      href: "https://forecastearthings.com",
    },
    {
      id: "the-solarplate",
      title: "A & P Energy Sphere",
      description: "Solar energy solutions & quotation platform.",
      image: "/images/portfolio-the-solarplate.webp",
      imageAlt: "A & P Energy & Project Sphere solar energy solutions platform",
      href: "https://ap-energy-project-sphere.jspbp2005.workers.dev/",
    },
    {
      id: "dr-sandeep-panigrahi",
      title: "Prof. Dr. Sandeep Panigrahi",
      description: "Senior Physician & Professor profile with online consultation booking.",
      image: "/images/portfolio-doctor-clinic.webp",
      imageAlt: "Prof. Dr. Sandeep Kumar Panigrahi official academic profile and consultation portal",
      href: "https://dr-sandeep-panigrahi.jspbp2005.workers.dev/",
    },
    {
      id: "the-smile-studio",
      title: "The Smile Studio Dental Clinic",
      description: "Dental clinic & cosmetic dentistry patient portal in Kalinga Vihar.",
      image: "/images/portfolio-smile-studio.jpg",
      imageAlt: "The Smile Studio dental clinic and patient appointment booking portal in Bhubaneswar",
      href: "https://the-smile-studio-zeta.vercel.app",
    },
    {
      id: "dr-abhishek-anand",
      title: "Dr. Abhishek Anand",
      description: "Paediatric surgeon & paediatric urology clinical practice in Bhubaneswar.",
      image: "/images/portfolio-dr-abhishek-anand.jpg",
      imageAlt: "Dr. Abhishek Anand Paediatric Surgeon at New Life Clinic Bhubaneswar official website",
      href: "https://dr-abhishek-anand.vercel.app/",
    },
    {
      id: "dr-radhamadhab-sahu",
      title: "Dr. Radhamadhab Sahu",
      description: "Senior ENT & skull base surgery department practice portal.",
      image: "/images/portfolio-dr-radhamadhab-sahu.jpg",
      imageAlt: "Dr. Radhamadhab Sahu Senior ENT and Skull Base Surgeon official practice portal",
      href: "https://dr-radhamadhab-sahu.vercel.app/",
    },
    {
      id: "fluxchat",
      title: "FluxChat Real-Time App",
      description: "Encrypted real-time messaging, group channels & typing indicators.",
      image: "/images/portfolio-fluxchat.jpg",
      imageAlt: "FluxChat real-time messaging application on laptop and smartphone",
      href: "https://fluxchat.dpdns.org/",
    },
    {
      id: "digitalvault",
      title: "DigitalVault Security",
      description: "Zero-knowledge encrypted document vault & password manager.",
      image: "/images/portfolio-digitalvault.jpg",
      imageAlt: "DigitalVault encrypted document and password storage platform",
      href: "https://smartreach.qzz.io/",
    },
    {
      id: "jitus-tech",
      title: "Jitus.tech Portfolio",
      description: "Futuristic interactive developer portfolio & systems architect showcase.",
      image: "/images/portfolio-jitus-tech.jpg",
      imageAlt: "Jitus.tech futuristic developer portfolio and systems architect showcase",
      href: "https://jitus.tech",
    },
    {
      id: "novamind-ai",
      title: "NovaMind AI Chatbot",
      description: "Enterprise conversational intelligence with persistent memory.",
      image: "/images/portfolio-novamind.jpg",
      imageAlt: "NovaMind AI conversational intelligence platform",
      href: "https://chatgpt-tau-rust-92.vercel.app/",
    },
    {
      id: "rail-setu",
      title: "RailSetu Railway Portal",
      description: "Modern Indian Railways ticket booking, live PNR tracker & route search.",
      image: "/images/portfolio-railsetu.jpg",
      imageAlt: "RailSetu modern Indian Railways ticket booking and PNR portal",
      href: "https://rail-setu-nu.vercel.app/",
    },
    {
      id: "snaplink-shortener",
      title: "SnapLink URL Shortener",
      description: "Cloud URL shortener with custom slugs, QR codes & link analytics.",
      image: "/images/portfolio-url-shortener.jpg",
      imageAlt: "SnapLink cloud URL shortener and link analytics platform",
      href: "https://url-shortner-rho-lovat.vercel.app/",
    },
  ],
};

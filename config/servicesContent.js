/**
 * Comprehensive Content for the Jovix Services & Delivered Projects Page
 * Centralized data source for services, delivered projects portfolio, testimonials, and FAQs.
 */

export const servicesPageHero = {
  badge: "OUR WORK & CAPABILITIES",
  titlePart1: "Explore Our Delivered Work &",
  titleHighlight: "Interactive Demo Projects",
  subtitle:
    "We build high-performance websites, custom CRM/ERP management systems, and AI automation. Discover our real-world client deliveries and test-drive our interactive live prototype demos.",
  stats: [
    { value: "50+", label: "Delivered Projects" },
    { value: "14+", label: "Interactive Prototype Demos" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100%", label: "On-Time Handover" },
  ],
};

export const demoCategories = [
  { id: "all", label: "All Demos" },
  { id: "custom-software", label: "Customized Software" },
  { id: "education", label: "Education & Coaching" },
  { id: "hospitality", label: "Restaurant & Hospitality" },
  { id: "legal", label: "Legal & Advocates" },
  { id: "medical", label: "Medical & Healthcare" },
  { id: "systems", label: "Business Systems (CRM/ERP)" },
  { id: "cleantech", label: "CleanTech & Energy" },
  { id: "automation", label: "AI & Automation" },
  { id: "ecommerce", label: "E-Commerce & Retail" },
  { id: "industrial", label: "Industrial & B2B" },
];

export const demoProjectsList = [
  // --- CUSTOMIZED SOFTWARE DEMOS ---
  {
    id: "demo-customized-software",
    title: "FlexiCore — Customized Enterprise Software & Operations Suite",
    tagline: "Bespoke multi-module enterprise software tailored to your exact business workflows, roles, and databases.",
    category: "custom-software",
    categoryLabel: "Customized Software",
    badge: "Custom Software Demo",
    image: "/images/services/web-applications.webp",
    imageAlt: "FlexiCore customized enterprise software operations suite and module builder demo",
    description:
      "Test this live customized software prototype designed for growing businesses. Build and test custom modules: toggle multi-warehouse inventory, custom GST invoicing, employee task dispatch, and automated WhatsApp alert triggers in real time.",
    keyCapabilities: [
      "Dynamic business module configurator (Inventory, HRM, Invoicing, CRM)",
      "Role-based granular access control (Superadmin, Branch Manager, Staff)",
      "Automated daily business ledger and real-time operational KPI alerts",
      "Custom API webhooks connecting WhatsApp, accounting, and third-party tools",
    ],
    techStack: ["Next.js 16", "React 19", "PostgreSQL", "Tailwind CSS", "REST & Webhooks"],
    demoType: "custom-software",
  },

  // --- EDUCATION & COACHING DEMOS ---
  {
    id: "demo-coaching-management",
    title: "CoachPulse — Coaching Institute ERP: Attendance, Fees & Course Management",
    tagline: "All-in-one institute operations suite for batch attendance, WhatsApp absence alerts, fees & scheduling.",
    category: "education",
    categoryLabel: "Education & Coaching",
    badge: "EdTech & Coaching Demo",
    image: "/images/services/web-applications.webp",
    imageAlt: "CoachPulse coaching institute operations management attendance fees and batch ERP demo",
    description:
      "A complete institute management suite built for competitive exam coaching centers, tuition academies, and test prep institutes (JEE/NEET/Foundation). Features 1-click batch digital attendance with automated parent WhatsApp absence alerts, student fee installment tracking with UPI payment links, and multi-faculty course batch scheduling.",
    keyCapabilities: [
      "1-Click batch digital attendance with automated parent WhatsApp absence alerts",
      "Fee installment schedules, dues tracking & instant automated digital GST receipts",
      "Course curriculum, batch timetable & classroom occupancy manager",
      "Student performance tracking, mock test rank cards & parent portal",
    ],
    techStack: ["Next.js 16", "React 19", "PostgreSQL", "Tailwind CSS", "WhatsApp Cloud API"],
    demoType: "coaching-management",
  },

  // --- RESTAURANT & HOSPITALITY DEMOS ---
  {
    id: "demo-restaurant-qr-booking",
    title: "DineFlow — Restaurant QR Code Order & Table Booking System",
    tagline: "Contactless table QR digital menu, live kitchen KOT display, and instant guest table reservations.",
    category: "hospitality",
    categoryLabel: "Restaurant & Hospitality",
    badge: "Restaurant & Hospitality Demo",
    image: "/images/portfolio-local-ecommerce.webp",
    imageAlt: "DineFlow restaurant QR code ordering and table reservation management system demo",
    description:
      "A complete contactless dining engine built for premium restaurants, cafes, and rooftop lounges. Diners scan a table QR code to view a rich visual menu, customize orders, and fire directly to the kitchen display (KOT). Also features pre-arrival table reservations with instant WhatsApp confirmation and seating zone allocation.",
    keyCapabilities: [
      "Table-specific dynamic QR code digital menu & instant reordering",
      "Live Kitchen Order Ticket (KOT) chef display & prep timer",
      "Table reservation engine with party size, seating zone & time slot",
      "Contactless UPI/Card bill split and automated WhatsApp receipt",
    ],
    techStack: ["Next.js 16", "React 19", "WebSockets", "Tailwind CSS", "WhatsApp Cloud API"],
    demoType: "restaurant-qr",
  },

  // --- LEGAL & ADVOCATE DEMOS ---
  {
    id: "demo-advocate-website",
    title: "LexAdvocate — Advocate Personalized Website & Booking System",
    tagline: "High-authority personal website for advocates with case consultation booking, chamber timings & court calendar.",
    category: "legal",
    categoryLabel: "Legal & Advocates",
    badge: "Advocate & Legal Demo",
    image: "/images/portfolio-business-automation.webp",
    imageAlt: "LexAdvocate advocate personalized website and legal consultation booking prototype",
    description:
      "A bespoke personal branding and confidential client intake platform engineered for practicing advocates, senior counsels, and legal law chambers. Includes verified Bar Council credentials, practice areas (Corporate, Civil, Criminal, RERA), High Court & District Court schedules, confidential case intake, and 1-click consultation booking with automated WhatsApp notifications.",
    keyCapabilities: [
      "Advocate professional bio, Bar Council registration & court affiliations",
      "Interactive practice area guides (Corporate, RERA, Criminal Defense, Writs)",
      "Confidential legal consultation booking (Chamber visit or Video conference)",
      "Automated WhatsApp consultation reminder & calendar invite generation",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "WhatsApp Cloud API", "Legal SEO Schema"],
    demoType: "advocate-website",
  },

  // --- MEDICAL & HEALTHCARE DEMOS ---
  {
    id: "demo-doctor-personalized-website",
    title: "DocProfile — Doctor Personalized Brand & Private Practice Website",
    tagline: "High-authority personal doctor website with multi-hospital OPD timings, treatments & WhatsApp booking.",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    badge: "Doctor Website Demo",
    image: "/images/portfolio-doctor-clinic.webp",
    imageAlt: "DocProfile personalized doctor website prototype with OPD chamber schedule",
    description:
      "A bespoke personal website built specifically for individual physicians, surgeons, and medical consultants. Enhances medical authority with verified credentials (MD, DM, FACC), multiple hospital OPD chamber schedules, procedure FAQs, patient testimonials, and instant 1-click WhatsApp appointment booking.",
    keyCapabilities: [
      "Doctor personal bio, medical degrees & hospital affiliations",
      "Multi-chamber OPD schedule (Private Clinic & Hospital visits)",
      "1-Click direct patient WhatsApp booking & Google Maps navigation",
      "Doctor SEO schema & verified patient case study testimonials",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "WhatsApp Cloud API", "Doctor SEO Schema"],
    demoType: "doctor-website",
  },
  {
    id: "demo-clinic-booking",
    title: "MedixCare — Clinic Operations & Appointment System",
    tagline: "End-to-end multi-specialty clinic management with live OPD queue, slot booking & reception dispatch.",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    badge: "Clinic Operations Demo",
    image: "/images/portfolio-clinic-management.webp",
    imageAlt: "MedixCare multi-specialty clinic operations and patient appointment scheduling system",
    description:
      "A complete clinic management suite built for polyclinics, diagnostic centers, and hospital outpatient departments. Manages patient walk-in token queues, multi-doctor OPD schedules, reception desk billing, and automatic WhatsApp appointment confirmations in real-time.",
    keyCapabilities: [
      "Live OPD token queue & doctor chamber dispatch board",
      "Multi-specialist appointment slot booking & SMS/WhatsApp alerts",
      "Reception desk patient intake, vitals entry & consultation billing",
      "Doctor schedule management & digital OPD room status",
    ],
    techStack: ["Next.js 16", "React 19", "PostgreSQL", "Tailwind CSS", "WhatsApp Cloud API"],
    demoType: "clinic-booking",
  },
  {
    id: "demo-clinic-ehr",
    title: "MediRx EHR — Digital Prescriptions & Patient History Records",
    tagline: "Paperless clinic EMR with drug search shortcuts, dosage calculation, and 1-click PDF print.",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    badge: "Medical Demo",
    image: "/images/portfolio-clinic-management.webp",
    imageAlt: "MediRx digital prescription and electronic health record dashboard demo",
    description:
      "A clinical dashboard prototype designed for doctors and clinics. Easily compose prescription records with pre-configured dosages, chronic condition tags, and instant WhatsApp PDF delivery to patients.",
    keyCapabilities: [
      "Fast drug database search with auto-suggest dosages",
      "Patient consultation timeline and allergy tracking",
      "One-click branded prescription PDF printing",
      "HIPAA/ABDM compliance-ready medical database schema",
    ],
    techStack: ["React 19", "Next.js", "PostgreSQL", "Tailwind CSS"],
    demoType: "clinic-ehr",
  },
  {
    id: "demo-clinic-lab",
    title: "HealthLab — Diagnostic Sample & Pathology Report Dispatcher",
    tagline: "Automated pathology sample tracking and instant WhatsApp PDF lab report delivery.",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    badge: "Medical Demo",
    image: "/images/services/web-applications.webp",
    imageAlt: "HealthLab pathology diagnostic sample tracking system demo",
    description:
      "Diagnostic center workflow prototype. Follow test samples through collection, lab processing, pathologist sign-off, and automated notification delivery to patients via SMS & WhatsApp.",
    keyCapabilities: [
      "Barcode sample tracking pipeline (Collected, Testing, Verified)",
      "Automated test normal-range flags and pathologist approval",
      "Instant WhatsApp PDF diagnostic report download link",
      "Diagnostic revenue and daily sample audit charts",
    ],
    techStack: ["Next.js App Router", "Tailwind CSS", "Node.js", "Webhooks"],
    demoType: "clinic-lab",
  },

  // --- CLEANTECH & ENERGY DEMOS ---
  {
    id: "demo-solar-calculator",
    title: "SolarCalc AI — Rooftop Solar & Financial ROI Simulator",
    tagline: "Interactive CleanTech calculator computing capacity, savings, and payback period live.",
    category: "cleantech",
    categoryLabel: "CleanTech & Energy",
    badge: "CleanTech Demo",
    image: "/images/portfolio-the-solarplate.webp",
    imageAlt: "SolarCalc AI solar rooftop calculator and savings estimator",
    description:
      "Test this live computational tool built for renewable energy companies. Adjust monthly electricity expenditure to calculate recommended solar KW size, estimated 25-year financial savings, and break-even timeline in seconds.",
    keyCapabilities: [
      "Dynamic mathematical solar capacity sizing",
      "Real-time electricity bill savings & payback computation",
      "Instant customized PDF quotation generation simulation",
      "High-converting inquiry capture funnel",
    ],
    techStack: ["React 19", "Financial Modeling Engine", "Tailwind CSS", "Chart.js"],
    demoType: "calculator",
  },

  // --- AI & AUTOMATION DEMOS ---
  {
    id: "demo-lead-bot",
    title: "NovaMind AI — 24/7 Enterprise Conversational Intelligence Chatbot",
    tagline: "Intelligent conversational chatbot that qualifies leads, answers questions, and streams dynamic responses.",
    category: "automation",
    categoryLabel: "AI & Automation",
    badge: "Live AI Demo",
    image: "/images/portfolio-novamind.jpg",
    imageAlt: "NovaMind AI conversational platform demonstration interface",
    description:
      "Experience our enterprise AI conversation engine live in production. Test real scenarios, ask complex questions, review code snippets, and experience sub-second streaming neural responses with persistent session memory.",
    keyCapabilities: [
      "24/7 conversational qualification with persistent chat memory",
      "Streaming neural responses under 120ms",
      "Secure authenticated user sessions with JWT",
      "Enterprise-grade dark-mode UI for desktop & mobile",
    ],
    techStack: ["Next.js", "OpenAI / Neural API", "PostgreSQL", "Tailwind CSS"],
    demoType: "chatbot",
  },

  // --- BUSINESS SYSTEMS (CRM/ERP) DEMOS ---
  {
    id: "demo-crm-kanban",
    title: "OmniDesk — Business CRM & Lead Pipeline Dashboard",
    tagline: "Tailor-made visual sales pipeline tracker with revenue forecasting and GST invoicing.",
    category: "systems",
    categoryLabel: "Business Systems (CRM/ERP)",
    badge: "CRM Demo",
    image: "/images/services/website-development.webp",
    imageAlt: "OmniDesk CRM pipeline and client dashboard prototype",
    description:
      "A testable CRM dashboard model demonstrating stage-by-stage deal management, lead status categorization, and executive revenue forecasting without the bloat of off-the-shelf software.",
    keyCapabilities: [
      "Visual drag-and-drop lead stage pipeline (New, In Progress, Won)",
      "Instant GST invoice generation and client ledger tracking",
      "Granular role-based security permissions",
      "Automated team reminder triggers",
    ],
    techStack: ["React 19", "PostgreSQL Schema", "Tailwind CSS", "Supabase"],
    demoType: "crm",
  },
  {
    id: "demo-gst-invoice",
    title: "FastInvoice — Automated GST Billing & Quotation Engine",
    tagline: "Generate GST-compliant invoices and multi-item quotations with automated tax breakdown.",
    category: "systems",
    categoryLabel: "Business Systems (CRM/ERP)",
    badge: "ERP Demo",
    image: "/images/services/web-applications.webp",
    imageAlt: "FastInvoice automated GST billing dashboard demo",
    description:
      "Custom billing software demo. Add client details, select products or services with automatic HSN/SAC codes, compute CGST/SGST/IGST, and download professional PDF invoices in 1 click.",
    keyCapabilities: [
      "Automated CGST (9%) + SGST (9%) or IGST (18%) computation",
      "Custom company header, digital stamp, and bank QR code",
      "Client ledger balance and payment reminder triggers",
      "Multi-currency support for international export invoices",
    ],
    techStack: ["Next.js", "React", "PDF Generator", "Tailwind CSS"],
    demoType: "invoice",
  },

  // --- E-COMMERCE & RETAIL DEMOS ---
  {
    id: "demo-ecommerce",
    title: "SwiftCommerce — Sub-Second UPI Checkout Storefront",
    tagline: "Headless e-commerce storefront with live inventory sync and 1-click UPI checkout.",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Retail",
    badge: "E-Commerce Demo",
    image: "/images/portfolio-local-ecommerce.webp",
    imageAlt: "SwiftCommerce fast mobile e-commerce storefront preview",
    description:
      "Engineered for high conversion and zero cart abandonment. Features sub-second page loads, real-time stock reservation across multiple branches, and simulated 1-click UPI QR checkout.",
    keyCapabilities: [
      "Frictionless 1-click UPI QR and Card checkout simulation",
      "Instant variant switching with zero page reload",
      "Live multi-warehouse stock reservation",
      "Automated order dispatch & WhatsApp tracking alerts",
    ],
    techStack: ["Next.js App Router", "Tailwind CSS", "Razorpay / UPI", "Redis Cache"],
    demoType: "ecommerce",
  },

  // --- INDUSTRIAL & B2B DEMOS ---
  {
    id: "demo-industrial",
    title: "IndustrialSpec — Engineering Grounding Calculator",
    tagline: "Industrial specification tool computing soil resistivity and electrode specs.",
    category: "industrial",
    categoryLabel: "Industrial & B2B",
    badge: "Engineering Demo",
    image: "/images/portfolio-forecast-earthing.webp",
    imageAlt: "IndustrialSpec engineering electrode calculator demo",
    description:
      "Demonstrating interactive calculation tools for industrial manufacturing and engineering. Contractors select soil types to immediately compute required earthing electrode depth and fault current tolerance.",
    keyCapabilities: [
      "IEEE standard soil resistivity formulation",
      "Automated electrode specification recommendation",
      "Downloadable technical specification sheet preview",
      "Integrated contractor quotation inquiry routing",
    ],
    techStack: ["Next.js", "Interactive Mathematical Forms", "Tailwind CSS"],
    demoType: "industrial",
  },
];

export const detailedServicesList = [
  {
    id: "website-development",
    number: "01",
    title: "Website & Web Application Development",
    tagline: "Ultra-fast, mobile-responsive, modern websites that convert visitors into paying clients.",
    icon: "Monitor",
    badge: "Core Engineering",
    description:
      "We design and build bespoke web experiences engineered on modern technologies like Next.js 16, React 19, and Tailwind CSS. Every website is built from the ground up for sub-second page loads, maximum search engine visibility, and seamless conversion funnels.",
    deliverables: [
      "Custom responsive corporate & brand websites",
      "Next.js App Router & server-side rendering for top SEO",
      "Interactive customer portals & booking web apps",
      "Mobile-first UI/UX with smooth micro-interactions",
      "CMS integration for effortless non-technical updates",
      "Enterprise security, SSL, and Core Web Vitals optimization",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "Node.js", "Vercel"],
    resultsMetric: "Average 0.4s load speed & 98+ Google Lighthouse scores",
    featuredDeliveredProject: "dr-sandeep-panigrahi",
  },
  {
    id: "business-management-systems",
    number: "02",
    title: "Customized Software & Business Management Systems (CRM / ERP / Operations)",
    tagline: "Tailor-made software platforms to manage inventory, clients, billing, workflows, and employees without off-the-shelf bloat.",
    icon: "Layers",
    badge: "Customized Software",
    description:
      "Off-the-shelf software is often bloated, expensive, and inflexible. Jovix builds tailor-made CRM, ERP, EHR clinic software, and inventory systems designed specifically around your exact business workflows and team hierarchy.",
    deliverables: [
      "Custom CRM (Customer Relationship Management) & lead pipelines",
      "ERP software for manufacturing, trading, and services",
      "Clinic & Patient Management Systems (EHR, appointments, prescriptions)",
      "Multi-warehouse inventory & supply chain tracking",
      "GST-ready automated invoice and quotation generators",
      "Granular role-based permissions and executive analytics dashboards",
    ],
    techStack: ["React", "Next.js", "PostgreSQL", "Node.js", "REST / GraphQL", "Supabase"],
    resultsMetric: "Over 85% reduction in manual paperwork & administrative overhead",
    featuredDeliveredProject: "medixcare-clinic-erp",
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Automation & AI Workflows",
    tagline: "Eliminate repetitive tasks, automate lead routing, and connect all your tools seamlessly.",
    icon: "Settings",
    badge: "AI & Efficiency",
    description:
      "Free your team from repetitive manual operations. We connect your communication channels, databases, spreadsheets, and lead sources with intelligent automation and custom AI assistants that work 24/7 without error.",
    deliverables: [
      "24/7 WhatsApp Business API chatbots & auto-responders",
      "Instant lead capture & intelligent routing from Google/Meta ads",
      "Automated quotation, email, and SMS customer follow-up cadences",
      "Custom AI assistants powered by OpenAI / Claude for customer support",
      "Webhook and multi-app integrations (Stripe, Razorpay, Google Sheets, CRMs)",
      "Automated financial reconciliation and reporting alerts",
    ],
    techStack: ["OpenAI API", "WhatsApp Cloud API", "n8n / Webhooks", "Node.js", "Python"],
    resultsMetric: "Under 30-second average response time to new customer inquiries",
    featuredDeliveredProject: "autoflow-ai",
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing & Performance SEO",
    tagline: "Data-driven organic search rankings and targeted ad campaigns that scale revenue.",
    icon: "ChartNoAxesColumnIncreasing",
    badge: "Growth & Visibility",
    description:
      "Building a stunning digital platform is only the first step. Jovix drives qualified, ready-to-buy traffic to your business through advanced technical SEO, localized Google Maps optimization, and high-ROI advertising campaigns.",
    deliverables: [
      "Technical, on-page, and local SEO for Google search domination",
      "Google Business Profile (Maps) optimization for local footfall",
      "High-intent Google Ads (Search & Display) and Meta (Facebook/Instagram) ads",
      "Conversion Rate Optimization (CRO) and user heat-map analysis",
      "Comprehensive monthly performance analytics and ROI reporting",
      "Competitor intelligence and search rank tracking",
    ],
    techStack: ["Google Search Console", "Google Analytics 4", "SEMrush", "Meta Ads Manager", "Google Ads"],
    resultsMetric: "3.2x average increase in organic search traffic within 90 days",
    featuredDeliveredProject: "forecast-earthing",
  },
];

export const projectFilterCategories = [
  { id: "all", label: "All Projects" },
  { id: "custom-software", label: "Customized Software" },
  { id: "websites", label: "Websites & Portals" },
  { id: "systems", label: "Business Systems (CRM/ERP)" },
  { id: "automation", label: "AI & Automation" },
  { id: "healthcare", label: "Healthcare & Clinics" },
  { id: "ecommerce", label: "E-Commerce" },
];

export const deliveredProjectsList = [
  {
    id: "snaplink-url-shortener",
    title: "SnapLink — Cloud URL Shortener, Branded Links & Click Analytics",
    client: "SnapLink Labs / Jovix Cloud Services",
    location: "Global / Edge CDN",
    status: "Live Production",
    year: "2026",
    category: "custom-software",
    categoryLabel: "Cloud Microservice & Link Management",
    secondaryCategory: "systems",
    image: "/images/portfolio-url-shortener.jpg",
    imageAlt: "SnapLink cloud URL shortener and link analytics platform interface on laptop and smartphone",
    liveUrl: "https://url-shortner-rho-lovat.vercel.app/",
    liveUrlLabel: "Launch Live URL Shortener",
    summary:
      "Full-stack cloud URL shortener featuring encrypted user authentication, custom link alias creation, dynamic QR code generation, and real-time link click analytics.",
    outcomeMetric: "<10ms Redirection Speed",
    metricDescription: "Edge-computed 302/301 redirection with automated visit telemetry.",
    challenge:
      "Businesses and creators require high-speed, branded short links without exorbitant subscription paywalls or rate limits imposed by legacy link shorteners.",
    solution:
      "Engineered an authenticated Node.js, Express, and MongoDB web service deployed on Vercel Edge with instant nano-ID hashing, customizable slugs, QR code synthesis, and click monitoring.",
    features: [
      "Instant short link generation with customizable slugs",
      "User authentication with protected personal dashboards",
      "Real-time link click analytics and referrer tracking",
      "Automated QR code creation and 1-click clipboard copying",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "REST APIs", "Vercel Edge"],
  },
  {
    id: "railsetu-railway-portal",
    title: "RailSetu — Modern Indian Railways Ticketing, PNR & Train Journey Platform",
    client: "RailSetu / TravelTech Labs",
    location: "India / Pan-Rail Cloud",
    status: "Live Production",
    year: "2026",
    category: "custom-software",
    categoryLabel: "Railway & Travel Tech",
    secondaryCategory: "websites",
    image: "/images/portfolio-railsetu.jpg",
    imageAlt: "RailSetu modern Indian Railways ticket booking and live journey portal",
    liveUrl: "https://rail-setu-nu.vercel.app/",
    liveUrlLabel: "Launch Live Railway Portal",
    summary:
      "Modern, responsive railway reservation and travel portal featuring high-speed train route search, live 10-digit PNR status tracking, station timetables, and seat availability.",
    outcomeMetric: "Sub-Second Station Query",
    metricDescription: "Real-time route discovery and live PNR confirmation lookup.",
    challenge:
      "Legacy railway portals in India frequently suffer from slow search response times, visual clutter, ad pollution, and unintuitive mobile booking steps.",
    solution:
      "Engineered an ultra-fast, user-friendly booking and journey management platform using React, Vite, and Tailwind CSS with instant station autocomplete, real-time PNR tracking, and Vande Bharat guides.",
    features: [
      "Sub-second source to destination train search and class quota filtering (1A, 2A, 3A, SL)",
      "Instant 10-digit PNR enquiry with real-time seat confirmation and coach allocation",
      "Interactive junction station schedules, train timetables, and platform tracking",
      "Modern mobile-first responsive layout engineered for high conversion and minimal bandwidth",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Railway API Bridge", "Web Vitals"],
  },
  {
    id: "novamind-ai-chatbot",
    title: "NovaMind — Enterprise AI Conversational Platform & Chatbot",
    client: "NovaMind Inc. / Jovix AI Labs",
    location: "Global / Cloud Edge",
    status: "Live Production",
    year: "2026",
    category: "automation",
    categoryLabel: "AI & Conversational Intelligence",
    secondaryCategory: "custom-software",
    image: "/images/portfolio-novamind.jpg",
    imageAlt: "NovaMind AI conversational platform interface on laptop and smartphone",
    liveUrl: "https://chatgpt-tau-rust-92.vercel.app/",
    liveUrlLabel: "Launch Live AI Chatbot",
    summary:
      "Enterprise-grade AI conversational platform featuring persistent chat history, streaming neural responses, secure JWT authentication, and multi-session contextual intelligence.",
    outcomeMetric: "<120ms Stream Latency",
    metricDescription: "Real-time generative AI streaming response speed.",
    challenge:
      "Organizations require custom ChatGPT-style conversational engines that preserve persistent chat histories, protect user credentials, and integrate seamlessly with proprietary workflows.",
    solution:
      "Engineered a full-stack Next.js and Tailwind CSS web application powered by high-throughput neural APIs, encrypted JWT auth, persistent PostgreSQL chat threads, and streaming response UI.",
    features: [
      "Persistent chat thread memory with instant session recall",
      "Streaming neural network conversational responses under 120ms",
      "Secure JWT authentication and encrypted user credential storage",
      "Responsive dark-mode UI optimized for desktop and mobile devices",
    ],
    techStack: ["Next.js", "OpenAI / Neural API", "PostgreSQL", "Tailwind CSS", "JWT Auth"],
  },
  {
    id: "jitus-tech-custom-portfolio",
    title: "Jitus.tech — Futuristic Developer Portfolio & Systems Architect Showcase",
    client: "Jyoti Swarup Parhi (Lead Architect & Founder)",
    location: "Bhubaneswar, Odisha",
    status: "Live Production",
    year: "2026",
    category: "custom-software",
    categoryLabel: "Customized Portfolio & Interactive Web",
    secondaryCategory: "websites",
    image: "/images/portfolio-jitus-tech.jpg",
    imageAlt: "Jitus.tech futuristic developer portfolio and systems architect showcase by Jyoti Swarup Parhi",
    liveUrl: "https://jitus.tech",
    liveUrlLabel: "Visit Live Portfolio",
    summary:
      "Bespoke high-tech personal brand portfolio featuring an interactive neural constellation canvas, dual magnetic cyber cursor, ambient mouse spotlight, and full-stack engineering telemetry.",
    outcomeMetric: "100/100 Visual & Performance",
    metricDescription: "Interactive canvas physics, audio synthesizer, and zero-latency loading.",
    challenge:
      "Showcasing complex full-stack engineering, GenAI microservices, and system architecture through an unforgettable, ultra-high-aesthetic visual identity.",
    solution:
      "Crafted a custom cyber-futuristic web experience with interactive HTML5 canvas constellations, live text scramble effects, sound telemetry, and responsive dark-mode architecture.",
    features: [
      "Interactive Neural Constellation HTML5 canvas physics simulation",
      "Dual magnetic cyber cursor with dynamic ambient mouse spotlight",
      "Terminal telemetry, live text scrambling & audio synthesizer effects",
      "Full-stack project breakdowns, GitHub integrations & tech stack matrix",
    ],
    techStack: ["HTML5 Canvas", "Modern JavaScript", "Cyberpunk CSS", "Web Audio API", "Plus Jakarta Sans"],
  },
  {
    id: "digitalvault-secure-storage",
    title: "DigitalVault — Zero-Knowledge Encrypted Files & Password Manager",
    client: "SmartReach Technologies / Jovix Security Labs",
    location: "Global / Cloud Security Edge",
    status: "Live Production",
    year: "2026",
    category: "custom-software",
    categoryLabel: "Cybersecurity & Encrypted Vault",
    secondaryCategory: "systems",
    image: "/images/portfolio-digitalvault.jpg",
    imageAlt: "DigitalVault zero-knowledge encrypted document and password manager on laptop and mobile",
    liveUrl: "https://smartreach.qzz.io/",
    liveUrlLabel: "Launch Secure Vault",
    summary:
      "Client-side encrypted cybersecurity platform designed to protect confidential documents, critical identity certificates, and passwords with zero-knowledge AES-256 encryption.",
    outcomeMetric: "256-Bit AES Encryption",
    metricDescription: "Zero-knowledge client-side encryption with cross-device sync.",
    challenge:
      "Users and enterprises need an ultra-secure, tamper-proof repository for critical credentials and documents without trusting third-party server administrators.",
    solution:
      "Developed a React and Vite-powered zero-knowledge application where documents and passwords are encrypted and decrypted strictly inside the client's browser before cloud transmission.",
    features: [
      "Zero-knowledge AES-256 client-side file and document encryption",
      "Built-in password manager with instant search & copy-to-clipboard",
      "Cross-device synchronization across mobile, tablet, and desktop",
      "Biometric unlock and tamper-proof session authentication",
    ],
    techStack: ["React", "Vite", "Web Crypto API", "Tailwind CSS", "AES-256"],
  },
  {
    id: "fluxchat-realtime-messenger",
    title: "FluxChat — Real-Time Encrypted Web & Mobile Messaging App",
    client: "FluxChat Inc. / Jovix Labs",
    location: "Global / Cloud Edge",
    status: "Live Production",
    year: "2026",
    category: "custom-software",
    categoryLabel: "Chat Application & Real-Time Web",
    secondaryCategory: "systems",
    image: "/images/portfolio-fluxchat.jpg",
    imageAlt: "FluxChat real-time messaging application on laptop and smartphone",
    liveUrl: "https://fluxchat.dpdns.org/",
    liveUrlLabel: "Launch Live Chat App",
    summary:
      "Full-scale real-time messaging progressive web application (PWA) featuring end-to-end encrypted chats, collaborative channels, typing indicators, presence tracking, and multi-device cloud synchronization.",
    outcomeMetric: "<15ms Message Latency",
    metricDescription: "Real-time WebSocket and edge delivery speed worldwide.",
    challenge:
      "Building high-concurrency real-time messaging that works fluidly across desktop and mobile browsers without message drops, sync delays, or high server costs.",
    solution:
      "Engineered with Next.js App Router, WebSockets, Redis pub/sub messaging channels, Tailwind CSS with dynamic dark/light theme switching, and persistent edge storage.",
    features: [
      "Real-time instant messaging with typing indicators & read receipts",
      "Collaborative group channels & private direct messaging",
      "End-to-end security & encrypted message transmission",
      "Fluidly responsive progressive web app (PWA) across mobile & desktop",
    ],
    techStack: ["Next.js", "WebSockets", "Redis", "Tailwind CSS", "PWA"],
  },
  {
    id: "dr-radhamadhab-sahu",
    title: "Dr. Radhamadhab Sahu — Senior ENT & Skull Base Surgeon",
    client: "Dr. Radhamadhab Sahu (SUM Ultimate Medicare)",
    location: "Kalinga Nagar & SUM Ultimate Medicare, Bhubaneswar",
    status: "Live Production",
    year: "2026",
    category: "websites",
    categoryLabel: "Healthcare & Skull Base Surgery",
    secondaryCategory: "healthcare",
    image: "/images/portfolio-dr-radhamadhab-sahu.jpg",
    imageAlt: "Dr. Radhamadhab Sahu Senior ENT and Skull Base Surgeon official practice portal",
    liveUrl: "https://dr-radhamadhab-sahu.vercel.app/",
    liveUrlLabel: "Visit Live Website",
    hasCrown: true,
    summary:
      "Official surgical practice and clinical portal for Dr. Radhamadhab Sahu, Senior Consultant & HOD of ENT & Skull Base Surgery at SUM Ultimate Medicare and founder of E.N.T. & Cancer Super-Speciality Clinic.",
    outcomeMetric: "+220% Consultations",
    metricDescription: "Growth in specialized skull base, endoscopic sinus, and head-and-neck surgical referrals.",
    challenge:
      "Patients requiring complex cranial corridor and skull base interventions need instant access to verified credentials (DNB VMMC New Delhi, 3-yr Neurosurgery training) and clear scheduling between hospital OPD and private clinic hours.",
    solution:
      "Developed a high-authority medical authority platform showcasing multi-center OPD timetables, verifiable printed clinic brochures, skull base operative philosophy, and immediate emergency contact channels.",
    features: [
      "Dual-center OPD scheduling (SUM Ultimate Medicare & Ghatikia Super-Speciality Clinic)",
      "Verified residency credentials (VMMC & Safdarjung Hospital, New Delhi)",
      "Interactive digital patient education brochure & surgical treatment guides",
      "Instant 1-tap emergency telephonic triage & WhatsApp consultation booking",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Medical Authority Schema", "Vercel"],
  },
  {
    id: "flexisuite-custom-erp",
    title: "FlexiSuite — Custom Enterprise ERP & Operations Software",
    client: "Eastern Manufacturing & Logistics Consortium",
    location: "Bhubaneswar, Odisha",
    status: "Live Production",
    year: "2026",
    category: "custom-software",
    categoryLabel: "Customized Software",
    secondaryCategory: "systems",
    image: "/images/services/web-applications.webp",
    imageAlt: "FlexiSuite customized enterprise software and operations ERP dashboard",
    liveUrl: "https://forecastearthings.com",
    liveUrlLabel: "Explore Case Study",
    summary:
      "Fully customized business operations software built to replace 5 disconnected tools. Unifies multi-depot stock inventory, automated GST e-way billing, field executive job dispatch, and executive financial KPI dashboards.",
    outcomeMetric: "85% Less Overhead",
    metricDescription: "Manual data entry hours eliminated across 4 branches.",
    challenge:
      "The client was struggling with off-the-shelf software limitations, generic forms that did not match their multi-branch supply workflows, and expensive monthly per-user licensing fees.",
    solution:
      "Jovix engineered a bespoke web-accessible ERP system tailored 100% to their team hierarchy, custom quotation formulas, automated PDF delivery to customers, and barcode dispatch verification.",
    features: [
      "Tailor-made multi-warehouse stock reservation & batch tracking",
      "Automated GST e-invoicing, digital stamps & UPI QR codes",
      "Granular role-based access control for branch managers and billing clerks",
      "Executive real-time margin analytics & WhatsApp dispatch alerts",
    ],
    techStack: ["Next.js 16", "React 19", "PostgreSQL", "Node.js", "Tailwind CSS"],
  },
  {
    id: "forecast-earthing",
    title: "Forecast Earthing — Industrial Manufacturing & Specification Platform",
    client: "Forecast Earthings Pvt. Ltd.",
    location: "Bhubaneswar, Odisha",
    status: "Live Production",
    year: "2026",
    category: "websites",
    categoryLabel: "Industrial & Manufacturing",
    secondaryCategory: "websites",
    image: "/images/portfolio-forecast-earthing.webp",
    imageAlt: "Forecast Earthing industrial grounding and safety forecasting software",
    liveUrl: "https://forecastearthings.com",
    liveUrlLabel: "Visit Live Website",
    summary:
      "Full digital infrastructure and B2B catalog for one of Eastern India's leading manufacturers of electrical grounding, earthing electrodes, and lightning protection systems.",
    outcomeMetric: "3.4x B2B Lead Volume",
    metricDescription: "Surge in qualified industrial quotation requests across India.",
    challenge:
      "Industrial contractors and electrical engineers struggled to calculate exact grounding material requirements and ground resistance tolerances, causing high inquiry drop-offs.",
    solution:
      "Engineered an interactive engineering specification portal with automated soil resistivity formulas, product datasheets, and direct quote routing.",
    features: [
      "Interactive grounding requirement and electrode specification calculator",
      "Comprehensive B2B product catalog with downloadable technical datasheets",
      "High-contrast industrial UI with rapid mobile page loading",
      "Integrated inquiry pipeline dispatching directly to sales engineers",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "FormEngine", "Vercel"],
  },
  {
    id: "the-solarplate",
    title: "A & P Energy Sphere — Solar Energy Solutions Platform",
    client: "A & P Energy & Project Sphere Private Limited",
    location: "Bhubaneswar, Odisha",
    status: "Live Production",
    year: "2026",
    category: "systems",
    categoryLabel: "CleanTech & Software",
    secondaryCategory: "websites",
    image: "/images/portfolio-the-solarplate.webp",
    imageAlt: "A & P Energy & Project Sphere solar energy solutions platform",
    liveUrl: "https://ap-energy-project-sphere.jspbp2005.workers.dev/",
    liveUrlLabel: "Visit Live Website",
    summary:
      "CleanTech calculation and client acquisition web platform that computes rooftop solar capacity, estimated 25-year bill savings, and generates instant proposals.",
    outcomeMetric: "+210% Inquiries",
    metricDescription: "High-ticket commercial & residential solar project proposals generated.",
    challenge:
      "Prospective solar buyers found complex payback math confusing, slowing down sales cycles and requiring manual on-site quotation drafting.",
    solution:
      "Built an intuitive visual solar ROI calculator showing financial savings, carbon offset metrics, and automated instant PDF quote delivery.",
    features: [
      "Dynamic solar capacity & payback ROI computation engine",
      "Instant customized PDF project estimate generator",
      "Lead scoring and automated solar contractor dispatch",
      "Clean, modern UI/UX with responsive analytics graphs",
    ],
    techStack: ["Next.js", "React", "Chart.js", "Tailwind CSS"],
  },
  {
    id: "dr-sandeep-panigrahi",
    title: "Prof. Dr. Sandeep Kumar Panigrahi — Physician & Academic Profile",
    client: "Prof. Dr. Sandeep Kumar Panigrahi (IMS & SUM Hospital)",
    location: "Bhubaneswar, Odisha",
    status: "Live Production",
    year: "2026",
    category: "websites",
    categoryLabel: "Healthcare & Physician Profile",
    secondaryCategory: "healthcare",
    image: "/images/portfolio-doctor-clinic.webp",
    imageAlt: "Prof. Dr. Sandeep Kumar Panigrahi official academic profile and consultation portal",
    liveUrl: "https://dr-sandeep-panigrahi.jspbp2005.workers.dev/",
    liveUrlLabel: "Visit Live Website",
    summary:
      "Official academic, clinical, and patient consultation digital platform for Prof. Dr. Sandeep Kumar Panigrahi (MBBS, MD, Fellowship in Diabetes - UK), Senior Physician and Professor of Community Medicine at IMS & SUM Hospital, SOA University.",
    outcomeMetric: "+160% Patient Inquiries",
    metricDescription: "Increase in verified patient consultation requests and academic engagement.",
    challenge:
      "Prominent medical professors require high digital credibility, clear distinction between hospital OPD timings and private consultations, and seamless teleconsultation booking for patients across Odisha.",
    solution:
      "Engineered an ultra-fast, credential-verified medical profile with interactive consultation scheduling, clinical research publications, OPD timetable, and direct patient access.",
    features: [
      "Verified medical credentials (MBBS, MD, UK Fellowship) and academic research",
      "Multi-chamber OPD schedule (IMS & SUM Hospital) and teleconsultations",
      "Mobile-optimized responsive design with fast Cloudflare Edge delivery",
      "Doctor schema markup for Google Search authority & local discovery",
    ],
    techStack: ["Next.js", "React", "Cloudflare Workers", "Tailwind CSS", "Medical Schema"],
  },
  {
    id: "the-smile-studio",
    title: "The Smile Studio — Dental Clinic & Patient Care Portal",
    client: "The Smile Studio (Dr. Stiti Pragnya, BDS)",
    location: "Kalinga Vihar, Patrapada, Bhubaneswar",
    status: "Live Production",
    year: "2026",
    category: "websites",
    categoryLabel: "Healthcare & Dental Clinic",
    secondaryCategory: "healthcare",
    image: "/images/portfolio-smile-studio.jpg",
    imageAlt: "The Smile Studio dental clinic and patient appointment booking portal in Bhubaneswar",
    liveUrl: "https://the-smile-studio-zeta.vercel.app",
    liveUrlLabel: "Visit Live Website",
    summary:
      "Modern dental clinic website and patient appointment portal for The Smile Studio, headed by Dr. Stiti Pragnya (BDS, SOA University), located in Kalinga Vihar near Tata Ariana, Bhubaneswar.",
    outcomeMetric: "+190% Appointments",
    metricDescription: "Growth in local dental checkups, cosmetic dentistry, and root canal bookings.",
    challenge:
      "Local dental patients needed clear visibility on specialized treatments (RCT, cosmetic smile design, teeth whitening), clinic hygiene standards, transparent consultation hours, and instant 1-tap WhatsApp booking.",
    solution:
      "Engineered a clean, reassuring healthcare web platform featuring interactive dental treatment breakdowns, clinic hours, patient reviews (4.7★), Google Maps route guidance, and 1-tap WhatsApp appointment scheduling.",
    features: [
      "Interactive dental procedure showcase (RCT, cosmetic smile design, cleaning)",
      "1-Tap direct patient WhatsApp booking with pre-filled appointment slots",
      "Local SEO schema with Google Maps navigation for Patrapada & Kalinga Vihar",
      "Sub-second mobile performance and reassuring patient-centric UI",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "WhatsApp Cloud API", "Vercel"],
  },
  {
    id: "dr-abhishek-anand",
    title: "Dr. Abhishek Anand — Paediatric Surgeon & Urology Specialist",
    client: "Dr. Abhishek Anand (New Life Clinic)",
    location: "Soubhagya Nagar, Bhubaneswar",
    status: "Live Production",
    year: "2026",
    category: "websites",
    categoryLabel: "Healthcare & Paediatric Surgery",
    secondaryCategory: "healthcare",
    image: "/images/portfolio-dr-abhishek-anand.jpg",
    imageAlt: "Dr. Abhishek Anand Paediatric Surgeon at New Life Clinic Bhubaneswar official website",
    imagePosition: "center 18%",
    liveUrl: "https://dr-abhishek-anand.vercel.app/",
    liveUrlLabel: "Visit Live Website",
    summary:
      "Specialist clinical platform and patient education portal for Dr. Abhishek Anand, premier Paediatric Surgeon & Paediatric Urologist practicing at New Life Clinic, Soubhagya Nagar, Bhubaneswar.",
    outcomeMetric: "+175% Family Inquiries",
    metricDescription: "Increase in scheduled pediatric surgery consultations and neonatal care guidance requests.",
    challenge:
      "Parents facing pediatric surgical recommendations need compassionate, clear explanations, reassurance about surgical necessity versus elective scheduling, and a frictionless clinic intake experience.",
    solution:
      "Engineered a reassuring, child-friendly digital portal featuring evidence-based clinical guides for parents, consultation FAQs, verified hospital affiliations, and 1-tap WhatsApp consultation scheduling.",
    features: [
      "Evidence-based pediatric surgery guides for parents & consultation questions",
      "Child-friendly clinic overview & Google Maps navigation for Soubhagya Nagar",
      "1-Click direct WhatsApp appointment request with priority triage",
      "Pediatric surgery & neonatal healthcare SEO schema for Odisha discovery",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "WhatsApp Cloud API", "Vercel"],
  },

  {
    id: "medixcare-clinic-erp",
    title: "MedixCare — Clinic Operations & EHR Management System",
    client: "Regional Diagnostics & Polyclinic",
    location: "Bhubaneswar, Odisha",
    status: "Live Production",
    year: "2026",
    category: "systems",
    categoryLabel: "Clinic ERP & Software",
    secondaryCategory: "custom-software",
    image: "/images/portfolio-clinic-management.webp",
    imageAlt: "Custom Clinic Management System EHR dashboard on screen",
    liveUrl: "https://forecastearthings.com",
    liveUrlLabel: "Explore System Details",
    summary:
      "Custom healthcare ERP software centralizing digital prescriptions, patient Electronic Health Records (EHR), billing with GST, and diagnostic lab test tracking.",
    outcomeMetric: "80% Less Paperwork",
    metricDescription: "Staff administrative hours saved through centralized digital records.",
    challenge:
      "Front-desk staff and doctors were overwhelmed with physical paper charts, lost patient records, and chaotic manual billing queues.",
    solution:
      "Engineered a secure, role-based web-accessible clinic management system with instant patient history lookup, digital Rx printing, and integrated daily revenue audits.",
    features: [
      "Digital prescription creator with drug database shortcuts",
      "Patient health record timeline and attachment storage",
      "GST-compliant billing, receipt printing & cash drawer tracking",
      "Doctor and receptionist role permissions with audit logging",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "autoflow-ai",
    title: "AutoFlow AI — Smart Lead Routing & WhatsApp Automation",
    client: "Multi-Location Enterprise Services",
    location: "India",
    status: "Live Production",
    year: "2026",
    category: "automation",
    categoryLabel: "AI & Workflow Automation",
    secondaryCategory: "automation",
    image: "/images/portfolio-business-automation.webp",
    imageAlt: "Business automation workflow and automated lead routing system",
    liveUrl: "https://forecastearthings.com",
    liveUrlLabel: "View Workflow Demo",
    summary:
      "Automated lead intake and nurturing pipeline that catches leads from Facebook and Google ads, qualifies them with an intelligent WhatsApp bot, and books sales calls.",
    outcomeMetric: "<30s Response Time",
    metricDescription: "Round-the-clock instant client qualification and calendar booking.",
    challenge:
      "Inbound leads from ad campaigns grew cold waiting hours for manual agent replies, resulting in dismal 4% contact rates.",
    solution:
      "Implemented an instant webhook bridge connected to WhatsApp Cloud API and an AI assistant that answers questions in real-time and books qualified calls on agent calendars.",
    features: [
      "24/7 intelligent WhatsApp conversational qualification bot",
      "Direct Google Ads & Meta Ads webhook ingestion",
      "Automated CRM status updates and WhatsApp follow-up drip",
      "Instant notification pings to designated field sales agents",
    ],
    techStack: ["OpenAI API", "WhatsApp Cloud API", "Node.js", "Webhooks"],
  },
  {
    id: "retailvibe-ecommerce",
    title: "RetailVibe — Local Fast E-Commerce Storefront",
    client: "Regional Consumer Goods Retailer",
    location: "Cuttack, Odisha",
    status: "Live Production",
    year: "2026",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Retail",
    secondaryCategory: "ecommerce",
    image: "/images/portfolio-local-ecommerce.webp",
    imageAlt: "Local e-commerce storefront with live inventory sync and payment gateway",
    liveUrl: "https://forecastearthings.com",
    liveUrlLabel: "Explore Storefront",
    summary:
      "High-speed digital storefront built for lightning-fast mobile checkouts, UPI and card payments, real-time warehouse inventory sync, and rider dispatch coordination.",
    outcomeMetric: "+82% Average Order Value",
    metricDescription: "Boost in cart conversion through 1-click UPI and bundle offers.",
    challenge:
      "The client was experiencing 68% cart abandonment on their old, sluggish platform and frequent stock mismatches between physical stores and the website.",
    solution:
      "Built a modern storefront with sub-second page transitions, automated inventory reservation, frictionless UPI QR checkout, and order tracking via WhatsApp.",
    features: [
      "1-click UPI & credit card payment integration (Razorpay)",
      "Real-time multi-branch inventory synchronization",
      "Express mobile checkout with auto address filling",
      "Automated order dispatch & WhatsApp delivery tracking updates",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Razorpay", "Redis"],
  },
  {
    id: "lumina-wealth-portal",
    title: "Lumina Wealth Advisory & Investor Portal",
    client: "Lumina Wealth Management & Advisory",
    location: "India",
    status: "Live Production",
    year: "2026",
    category: "websites",
    categoryLabel: "Fintech & Advisory",
    secondaryCategory: "websites",
    image: "/images/services/web-applications.webp",
    imageAlt: "Lumina wealth management portal and financial investment interface",
    liveUrl: "https://forecastearthings.com",
    liveUrlLabel: "View Case Study",
    summary:
      "High-trust digital experience for high-net-worth investors, featuring interactive financial projection tools, encrypted client onboarding, and thought-leadership publishing.",
    outcomeMetric: "0.5s Page Load Time",
    metricDescription: "Flawless Core Web Vitals rating and 4.5x investor demo requests.",
    challenge:
      "The firm needed an ultra-premium web presence that immediately conveyed authority, institutional security, and high financial acumen to prospective high-ticket clients.",
    solution:
      "Crafted an elegant, dark-accented modern interface with smooth micro-animations, interactive compounding calculators, and a frictionless consultation booking flow.",
    features: [
      "Interactive SIP, CAGR & retirement wealth projection engines",
      "Secure encrypted consultation questionnaire and lead capture",
      "Responsive typography and modern layout designed for high trust",
      "Zero-latency edge deployment for instant worldwide access",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "apex-logistics-erp",
    title: "Apex Operations & Supply Chain Tracker",
    client: "Apex Industrial Supply & Distribution Hub",
    location: "Odisha, India",
    status: "Live Production",
    year: "2026",
    category: "systems",
    categoryLabel: "Operations & ERP",
    secondaryCategory: "custom-software",
    image: "/images/services/website-development.webp",
    imageAlt: "Operations and supply chain ERP dashboard",
    liveUrl: "https://forecastearthings.com",
    liveUrlLabel: "View Case Study",
    summary:
      "Custom business management suite unifying multi-depot inventory, driver route manifests, vendor accounts payable, and executive KPI financial overviews.",
    outcomeMetric: "90% Faster Invoicing",
    metricDescription: "Automated billing dispatch eliminating 15+ hours of manual reconciliation weekly.",
    challenge:
      "Disparate Excel sheets and manual paper invoices across 4 distribution depots were causing delayed billing, inventory leaks, and late supplier reconciliations.",
    solution:
      "Designed and deployed a unified web-based ERP with centralized warehouse tracking, barcode-friendly dispatch registers, and automated PDF invoice dispatch.",
    features: [
      "Live depot stock visibility with low-threshold reorder alerts",
      "Automated PDF invoice generation and vendor ledger sync",
      "Driver delivery manifest generation and mobile signature capture",
      "Executive KPI dashboard tracking daily margin and volume",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
];

export const clientTestimonials = [
  {
    quote:
      "Jovix transformed our entire patient booking process. Before, our reception was overwhelmed with phone calls. Now over 60% of our appointments are booked directly on our new website with zero confusion. Patient feedback has been outstanding.",
    author: "Dr. Alok Mohapatra",
    role: "Director, Multi-Speciality Clinic",
    location: "Bhubaneswar, Odisha",
    highlight: "148% Booking Increase",
  },
  {
    quote:
      "Working with Jovix was refreshing. They understood our industrial technical specifications immediately and built an interactive soil calculator that converted casual site visitors into high-ticket enterprise contracts.",
    author: "Rakesh Verma",
    role: "Managing Director, Forecast Earthing",
    location: "Kolkata, India",
    highlight: "3.4x B2B Lead Growth",
  },
  {
    quote:
      "The custom CRM and operations software Jovix engineered eliminated almost all of our internal paperwork. The team is remarkably fast, communicative, and delivered well ahead of schedule. Highly recommended!",
    author: "Siddharth Patnaik",
    role: "Founder, Renewable Solutions",
    location: "Cuttack, Odisha",
    highlight: "80% Less Paperwork",
  },
];

export const servicesFAQs = [
  {
    question: "What is the typical timeline to deliver a website or custom software system?",
    answer:
      "A high-performance modern business website typically takes 2 to 3 weeks from initial kickoff to final deployment. Custom business management systems (CRM, ERP, Clinic software) typically require 4 to 8 weeks depending on the complexity of workflows, custom integrations, and data migration needs. We work with strict milestone deadlines and provide continuous weekly previews.",
  },
  {
    question: "Can you integrate our new system with our existing tools and WhatsApp?",
    answer:
      "Yes, absolutely. We regularly integrate custom web applications and business systems with WhatsApp Business API, payment gateways (Razorpay, Stripe, UPI), accounting software, Google Sheets, custom databases (PostgreSQL, MySQL), and third-party CRMs. Our solutions are designed to connect effortlessly with your current workflow.",
  },
  {
    question: "Do we own the full source code and intellectual property after delivery?",
    answer:
      "100% yes. Upon project delivery and sign-off, you retain full ownership of all custom code, assets, database schemas, and intellectual property. We do not lock you into proprietary restrictive licenses.",
  },
  {
    question: "Do you provide ongoing support, hosting maintenance, and updates?",
    answer:
      "Yes. Every project includes complimentary post-launch support and warranty. We also offer ongoing maintenance retainers covering cloud hosting management, database backups, security patches, SEO monitoring, and feature updates so you never have to worry about technical upkeep.",
  },
  {
    question: "How do we get started with Jovix for our project?",
    answer:
      "Getting started is simple. Fill out our consultation form below or reach out via phone/WhatsApp (+91 90905 98756). We schedule a quick 20-minute discovery call to understand your business objectives and provide a transparent, fixed-price project proposal within 24 hours.",
  },
];

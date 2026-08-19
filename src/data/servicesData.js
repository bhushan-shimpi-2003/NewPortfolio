export const freelanceServices = [
  {
    id: "mern-saas",
    title: "Full-Stack Web & SaaS Engineering",
    icon: "Globe",
    shortDesc: "Complete web applications, SaaS dashboards, and scalable customer portals built with MERN, Next.js, and Supabase Postgres.",
    deliverables: [
      "Custom responsive frontend in React.js / Next.js",
      "Scalable REST / GraphQL APIs in Node.js & Express",
      "Database schema design (MongoDB / Supabase PostgreSQL)",
      "Secure Auth (JWT, Supabase Auth, OAuth) with RBAC",
      "Indian & Global payment gateways (Razorpay, Cashfree, Stripe)",
      "Automated CI/CD deployment to Vercel / AWS Mumbai (ap-south-1)"
    ],
    idealFor: "Indian startups, founders, and businesses needing a rapid MVP or scalable SaaS platform.",
    deliveryTime: "2 – 4 Weeks",
    startingRate: "₹35,000"
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile Apps (Android & iOS)",
    icon: "Smartphone",
    shortDesc: "High-performance native-feel mobile apps built with React Native and Expo, tailored for Android & iOS with single-codebase cost efficiency.",
    deliverables: [
      "Android APK/AAB & iOS build with 100% UI fidelity",
      "UPI & Payment gateway integration (Razorpay / Cashfree SDKs)",
      "Native device API integration (Camera, Geolocation, Push Alerts)",
      "Offline caching and real-time Supabase sync",
      "Google Play Store & Apple App Store submission support",
      "Over-The-Air (OTA) instantaneous app updates via Expo"
    ],
    idealFor: "Businesses and D2C brands wanting a fast, cost-effective mobile app across India.",
    deliveryTime: "3 – 5 Weeks",
    startingRate: "₹40,000"
  },
  {
    id: "ai-integration",
    title: "AI Integration & Smart Automation",
    icon: "Sparkles",
    shortDesc: "Infuse your apps with AI: LLM assistants, automated resume ATS parsing, intelligent search, and WhatsApp bots.",
    deliverables: [
      "Custom AI prompt engineering & streaming completions",
      "Automated PDF & resume parsing engines with ATS score",
      "Intelligent chatbots and context-aware business copilots",
      "Structured JSON extraction & analytics pipelines",
      "Vector embeddings & semantic database search",
      "Cost-optimized token usage guardrails"
    ],
    idealFor: "EdTech, HRTech, and SaaS platforms looking for an unfair AI advantage.",
    deliveryTime: "2 – 3 Weeks",
    startingRate: "₹25,000"
  },
  {
    id: "enterprise-erp",
    title: "Custom ERPs, School & Clinic Portals",
    icon: "ShieldCheck",
    shortDesc: "Custom administrative back-offices, School ERPs, Clinic EMRs, and multi-tenant management platforms.",
    deliverables: [
      "Multi-role user permissions (Admin, Staff, Student, Doctor, Patient)",
      "Real-time attendance, fee collection, and invoicing modules",
      "Automated WhatsApp / SMS reminders and notification logs",
      "Secure database architecture and automated daily backups",
      "Playwright end-to-end automated test suites",
      "Comprehensive admin analytics and exportable Excel/PDF reports"
    ],
    idealFor: "Schools, Clinics, Institutes, and SMEs streamlining operations across India.",
    deliveryTime: "3 – 6 Weeks",
    startingRate: "₹50,000"
  }
];

export const clientProcessSteps = [
  {
    step: "01",
    title: "Discovery & Scope Blueprint",
    description: "We connect over a 20-min Google Meet or WhatsApp call to understand your requirements. You receive a crystal-clear scope document, fixed milestone pricing in INR (₹), and project timeline within 24 hours.",
    icon: "Compass"
  },
  {
    step: "02",
    title: "Figma Design & Architecture",
    description: "I structure pixel-perfect UI screens and establish database schemas, API contracts, and security rules before writing production code.",
    icon: "Palette"
  },
  {
    step: "03",
    title: "Agile Sprints & Weekly Demos",
    description: "Development in weekly sprints with live staging links on Vercel. You test real progress, give feedback, and stay 100% in the loop via WhatsApp.",
    icon: "Code2"
  },
  {
    step: "04",
    title: "Deployment, QA & Handover",
    description: "Playwright automated test audits, production deployment to Vercel/AWS and Play Store, 100% source code repository handover, and 30 days of free post-launch support.",
    icon: "Rocket"
  }
];

export const estimatorOptions = {
  platforms: [
    { id: "web", name: "Full-Stack Web App (MERN / Next.js)", basePriceINR: 35000, timeWeeks: 3 },
    { id: "mobile", name: "Mobile App (React Native Android & iOS)", basePriceINR: 40000, timeWeeks: 3 },
    { id: "both", name: "Web + Mobile Suite (Unified Backend)", basePriceINR: 65000, timeWeeks: 5 },
    { id: "ai", name: "AI Tool / Smart Automation Service", basePriceINR: 25000, timeWeeks: 2 }
  ],
  features: [
    { id: "auth", name: "User Auth & Multi-Role Permissions (RBAC)", priceINR: 6000, timeDays: 2 },
    { id: "payment", name: "Indian Payment Gateway (Razorpay / UPI / Cashfree)", priceINR: 8000, timeDays: 3 },
    { id: "ai_llm", name: "AI / LLM Integration (Streaming, ATS, Resume Parsing)", priceINR: 10000, timeDays: 4 },
    { id: "dashboard", name: "Admin Dashboard & Real-Time Analytics", priceINR: 8000, timeDays: 3 },
    { id: "chat_notif", name: "Real-Time Chat & WhatsApp / Push Alerts", priceINR: 8000, timeDays: 3 },
    { id: "e2e_test", name: "Playwright Automated Testing Suite", priceINR: 5000, timeDays: 2 }
  ],
  timelines: [
    { id: "standard", name: "Standard Delivery (Recommended)", multiplier: 1.0, label: "Regular agile cadence" },
    { id: "fast", name: "Priority Fast-Track (+20%)", multiplier: 1.2, label: "Dedicated priority sprint" },
    { id: "flexible", name: "Flexible Timeline (-10%)", multiplier: 0.9, label: "Relaxed milestones" }
  ]
};

export const freelanceFaqs = [
  {
    q: "Do I get full ownership of the source code?",
    a: "Yes, 100%. Upon milestone completion and final payment, the complete GitHub repository, intellectual property, and deployment configurations are transferred directly to your organization."
  },
  {
    q: "How do we handle payments in India?",
    a: "We work on structured milestone payments (e.g. 30% upfront on architecture sign-off, 40% on midway demo, 30% on launch). Payments can be made via UPI, Bank NEFT/IMPS, or Razorpay with official milestone invoices."
  },
  {
    q: "Can you build both the Web dashboard and Mobile app together?",
    a: "Yes! Specializing in both MERN and React Native allows us to share data models, backend APIs, and business logic, saving you up to 40% in development cost compared to hiring separate teams."
  },
  {
    q: "What post-launch support is provided?",
    a: "Every project includes 30 days of free post-launch bug fixing, performance monitoring, and handover guidance. Monthly maintenance retainers are also available."
  }
];

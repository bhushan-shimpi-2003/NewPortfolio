export const freelanceServices = [
  {
    id: "mern-saas",
    title: "Full-Stack Web & SaaS Engineering",
    icon: "Globe",
    shortDesc: "End-to-end web apps, SaaS dashboards, and scalable customer portals built with MERN, Next.js, and Postgres.",
    deliverables: [
      "Custom responsive frontend in React.js / Next.js",
      "Scalable REST / GraphQL APIs in Node.js & Express",
      "Database schema design (MongoDB / Supabase / PostgreSQL)",
      "Secure Auth (JWT, OAuth, Supabase Auth) with RBAC",
      "Payment gateway integration (Stripe / Razorpay)",
      "Automated CI/CD deployment to Vercel / AWS"
    ],
    idealFor: "Startups, Founders, and Businesses looking for a production-ready MVP or scalable SaaS platform.",
    deliveryTime: "3 – 6 Weeks",
    startingRate: "$1,200 / ₹60,000"
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile Apps (iOS & Android)",
    icon: "Smartphone",
    shortDesc: "Native-feel mobile apps built with React Native and Expo, sharing a single codebase across iOS and Android.",
    deliverables: [
      "iOS and Android app with 100% UI fidelity",
      "Native device API integration (Camera, Geolocation, Push Notifications)",
      "Offline caching and real-time data sync",
      "API backend integration and auth flows",
      "App Store & Google Play Store submission support",
      "OTA (Over-The-Air) update setup via Expo EAS"
    ],
    idealFor: "Businesses wanting a fast, cost-effective mobile app without hiring separate Swift and Kotlin developers.",
    deliveryTime: "3 – 5 Weeks",
    startingRate: "$1,500 / ₹75,000"
  },
  {
    id: "ai-integration",
    title: "AI Integration & Intelligent Workflows",
    icon: "Sparkles",
    shortDesc: "Infuse your web and mobile applications with AI: LLM assistants, ATS resume scoring, smart search, and automated insights.",
    deliverables: [
      "Custom AI prompt engineering & streaming completions",
      "Automated document & resume parsing engines",
      "Intelligent chatbots and context-aware copilots",
      "Structured JSON extraction & analytics pipelines",
      "Vector embeddings & semantic search setup",
      "Token usage & cost optimization guardrails"
    ],
    idealFor: "Products needing a competitive edge through generative AI and automated smart workflows.",
    deliveryTime: "2 – 4 Weeks",
    startingRate: "$1,000 / ₹50,000"
  },
  {
    id: "enterprise-erp",
    title: "Enterprise Portals & Custom ERPs",
    icon: "ShieldCheck",
    shortDesc: "Custom internal tools, School/Hospital ERPs, multi-tenant dashboards, and administrative back-offices.",
    deliverables: [
      "Multi-role user permissions (Admin, Staff, Manager, Client)",
      "Real-time telemetry and KPI analytics dashboards",
      "Automated invoicing, attendance, and reporting modules",
      "Database migration and legacy system modernization",
      "High-security database backups and access logs",
      "Playwright end-to-end automated test suites"
    ],
    idealFor: "Institutions, Schools, Clinics, and mid-sized enterprises streamlining manual workflows.",
    deliveryTime: "4 – 8 Weeks",
    startingRate: "$1,800 / ₹90,000"
  }
];

export const clientProcessSteps = [
  {
    step: "01",
    title: "Discovery & Scope Blueprint",
    description: "We jump on a 30-min discovery call to understand your business goals, target audience, and feature roadmap. I deliver a transparent technical architecture blueprint, timeline, and fixed price quote.",
    icon: "Compass"
  },
  {
    step: "02",
    title: "Figma UI/UX & Architecture Setup",
    description: "I craft or refine interactive UI mockups and establish the database schemas, API contracts, and security layers before writing a single line of production code.",
    icon: "Palette"
  },
  {
    step: "03",
    title: "Agile Sprint Development & Demos",
    description: "Development in 1-week sprints with staging demo links. You see real progress every few days, give feedback, and stay 100% in control.",
    icon: "Code2"
  },
  {
    step: "04",
    title: "QA, Deployment & Launch",
    description: "Rigorous testing with Playwright E2E suites, performance audits, and smooth deployment to Vercel/AWS and App Stores. Includes 30 days of complimentary post-launch support.",
    icon: "Rocket"
  }
];

export const estimatorOptions = {
  platforms: [
    { id: "web", name: "Full-Stack Web App (MERN / Next.js)", basePrice: 1200, timeWeeks: 3 },
    { id: "mobile", name: "Mobile App (React Native / Expo)", basePrice: 1400, timeWeeks: 3 },
    { id: "both", name: "Web + Mobile Suite (Unified Backend)", basePrice: 2200, timeWeeks: 5 },
    { id: "ai", name: "AI Tool / Smart Automation Service", basePrice: 1000, timeWeeks: 2 }
  ],
  features: [
    { id: "auth", name: "User Auth & Multi-Role Permissions (RBAC)", price: 200, timeDays: 3 },
    { id: "payment", name: "Payment Gateway (Stripe / Razorpay)", price: 250, timeDays: 3 },
    { id: "ai_llm", name: "AI / LLM Integration (Streaming, ATS, etc.)", price: 350, timeDays: 4 },
    { id: "dashboard", name: "Admin Dashboard & Real-Time Analytics", price: 300, timeDays: 4 },
    { id: "chat_notif", name: "Real-Time Chat & Push Notifications", price: 300, timeDays: 4 },
    { id: "e2e_test", name: "Playwright Automated E2E Testing Suite", price: 200, timeDays: 3 }
  ],
  timelines: [
    { id: "standard", name: "Standard (Recommended)", multiplier: 1.0, label: "Regular agile cadence" },
    { id: "fast", name: "Priority Speed (Accelerated)", multiplier: 1.25, label: "Dedicated sprint priority (+25%)" },
    { id: "flexible", name: "Flexible Timeline", multiplier: 0.9, label: "Relaxed milestones (-10%)" }
  ]
};

export const freelanceFaqs = [
  {
    q: "Do I get full ownership of the source code?",
    a: "Yes, 100%. Upon milestone completion and final payment, full intellectual property and code repositories are transferred directly to your GitHub/organization."
  },
  {
    q: "How do we handle payments and milestones?",
    a: "We work on structured milestone payments (e.g. 30% upfront on architecture sign-off, 40% on midway demo, 30% on launch). This keeps both parties aligned and protected."
  },
  {
    q: "Can you build both the Web dashboard and Mobile app together?",
    a: "Absolutely! Since I specialize in both MERN and React Native, we can share data models, backend APIs, and business logic, saving you up to 40% in development time and cost compared to hiring separate teams."
  },
  {
    q: "What happens after the project launches?",
    a: "Every project includes 30 days of free post-launch bug fixing and monitoring. I am also available for ongoing monthly maintenance retainers as your product scales."
  }
];

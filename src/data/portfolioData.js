export const personalInfo = {
  name: "Bhushan Kishor Shimpi",
  title: "Full Stack, React Native & AI Developer",
  tagline: "I build high-performance Web Applications, Cross-Platform Mobile Apps, and AI-driven platforms that turn complex problems into scalable revenue.",
  status: "Available for Q3/Q4 Freelance Projects",
  location: "Pune, Maharashtra, India",
  email: "shimpibhushan2503@gmail.com",
  phone: "+91 70207 10581",
  portfolioUrl: "https://bhushanshimpi.vercel.app",
  github: "https://github.com/bhushan-shimpi-2003",
  githubUsername: "bhushan-shimpi-2003",
  linkedin: "https://www.linkedin.com/in/bhushan-shimpi-25634",
  linkedinUsername: "bhushan-shimpi25634",
  bio: "Results-driven Full Stack & Mobile Engineer with deep expertise across the MERN Stack, React Native, Next.js, and modern AI integrations. Proven track record of building production AI mock interview platforms, enterprise School ERPs, campus placement ecosystems, and clinic management software. MCA graduate with a 9.16 CGPA, dedicated to writing clean, maintainable code with fast delivery cycles.",
  metrics: [
    { label: "MCA Academic CGPA", value: "9.16 / 10", description: "Top percentile in Computer Applications" },
    { label: "Production Platforms Built", value: "5+", description: "From initial concept to deployment" },
    { label: "Tech Stack Competencies", value: "15+", description: "MERN, React Native, Supabase, AI APIs" },
    { label: "Client Satisfaction", value: "100%", description: "Fast communication & agile sprint deliveries" },
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Frontend & UI Engineering",
      icon: "Layout",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: "Expert", experience: "2+ yrs" },
        { name: "Next.js", level: "Advanced", experience: "1.5+ yrs" },
        { name: "TypeScript", level: "Advanced", experience: "1.5+ yrs" },
        { name: "JavaScript (ES6+)", level: "Expert", experience: "3+ yrs" },
        { name: "Tailwind CSS", level: "Expert", experience: "2+ yrs" },
        { name: "HTML5 / Modern CSS", level: "Expert", experience: "3+ yrs" },
        { name: "Responsive & A11y UI", level: "Expert", experience: "2+ yrs" }
      ]
    },
    {
      name: "Mobile App Development",
      icon: "Smartphone",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "React Native", level: "Expert", experience: "2+ yrs" },
        { name: "Expo Ecosystem", level: "Expert", experience: "2+ yrs" },
        { name: "Cross-Platform iOS & Android", level: "Advanced", experience: "2+ yrs" },
        { name: "Native Device APIs", level: "Advanced", experience: "1.5+ yrs" },
        { name: "Offline Sync & Caching", level: "Advanced", experience: "1+ yrs" }
      ]
    },
    {
      name: "Backend, APIs & Architecture",
      icon: "Server",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: "Expert", experience: "2+ yrs" },
        { name: "Express.js", level: "Expert", experience: "2+ yrs" },
        { name: "RESTful API Architecture", level: "Expert", experience: "2+ yrs" },
        { name: "JWT & OAuth 2.0 Auth", level: "Expert", experience: "2+ yrs" },
        { name: "Role-Based Access (RBAC)", level: "Expert", experience: "2+ yrs" },
        { name: "Microservices & Webhooks", level: "Advanced", experience: "1+ yrs" }
      ]
    },
    {
      name: "Databases & Cloud Storage",
      icon: "Database",
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "MongoDB & Mongoose", level: "Expert", experience: "2+ yrs" },
        { name: "PostgreSQL", level: "Advanced", experience: "1.5+ yrs" },
        { name: "Supabase (Postgres/Auth/Storage)", level: "Expert", experience: "2+ yrs" },
        { name: "MySQL", level: "Advanced", experience: "2+ yrs" },
        { name: "Database Indexing & Optimization", level: "Advanced", experience: "1.5+ yrs" }
      ]
    },
    {
      name: "AI & Smart Automations",
      icon: "Cpu",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "AI/LLM API Integration", level: "Advanced", experience: "1+ yrs" },
        { name: "Automated Resume ATS Scoring", level: "Expert", experience: "1+ yrs" },
        { name: "Real-time AI Mock Feedback", level: "Advanced", experience: "1+ yrs" },
        { name: "Structured JSON Output Generation", level: "Expert", experience: "1+ yrs" }
      ]
    },
    {
      name: "DevOps, QA & Tools",
      icon: "Wrench",
      color: "from-indigo-500 to-cyan-500",
      skills: [
        { name: "Docker & Containerization", level: "Intermediate", experience: "1+ yrs" },
        { name: "AWS Cloud Basics", level: "Intermediate", experience: "1+ yrs" },
        { name: "CI/CD Pipelines", level: "Advanced", experience: "1+ yrs" },
        { name: "Playwright E2E Testing", level: "Advanced", experience: "1+ yrs" },
        { name: "Git & GitHub Workflows", level: "Expert", experience: "3+ yrs" },
        { name: "Postman API Automation", level: "Expert", experience: "2+ yrs" },
        { name: "Vercel & Render Deployment", level: "Expert", experience: "2+ yrs" },
        { name: "Figma to Pixel-Perfect Code", level: "Expert", experience: "2+ yrs" }
      ]
    }
  ]
};

export const projectsData = [
  {
    slug: "talentiq",
    title: "TalentIQ",
    tagline: "AI-Powered Real-Time Interview Simulation & ATS Analytics Platform",
    category: "AI & Full-Stack Web + Mobile",
    featured: true,
    badge: "AI Application",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://bhushanshimpi.vercel.app",
    githubUrl: "https://github.com/bhushan-shimpi-2003",
    metrics: [
      { label: "ATS Accuracy", value: "98%" },
      { label: "Feedback Latency", value: "< 1.2s" },
      { label: "User Roles", value: "Candidate & Admin" }
    ],
    overview: "TalentIQ is an enterprise-grade AI mock interview system designed to train technical and behavioral candidates with instantaneous constructive critiques, tone analysis, and deep resume ATS compatibility parsing.",
    problem: "Candidates struggle with realistic interview preparation, high recruitment costs for mock evaluations, and lack actionable data on why resumes fail automated ATS screenings.",
    solution: "Built a reactive web dashboard in React.js and a companion mobile app in React Native backed by high-speed Node/Express micro-endpoints, Supabase PostgreSQL, and modern AI language model APIs that stream real-time evaluations and generate customized improvement roadmaps.",
    architecture: [
      "Frontend: React.js SPA + React Native Expo Mobile App with shared state and theme tokens.",
      "Backend: Node.js & Express REST micro-services implementing token-bucket rate limiting.",
      "Database & Auth: Supabase (PostgreSQL) with Row-Level Security (RLS) and JWT auth.",
      "AI Pipeline: Intelligent prompt engineering pipelines extracting resume keywords against JD requirements."
    ],
    techStack: ["React.js", "React Native", "Node.js", "Express.js", "Supabase", "PostgreSQL", "AI APIs", "CI/CD", "Tailwind CSS"],
    features: [
      "Real-time AI voice & text simulated technical & behavioral interviews",
      "Automated PDF resume parser with ATS compatibility score & keyword match breakdown",
      "Secure Role-Based Access Control (RBAC) with Supabase Auth & encrypted sessions",
      "Interactive candidate performance analytics and progress trajectory charts",
      "Full web & mobile cross-platform feature parity"
    ]
  },
  {
    slug: "fresherx",
    title: "FresherX",
    tagline: "Next-Gen Multi-Role Campus Recruitment & Placement Orchestration Engine",
    category: "Enterprise Web & Mobile SaaS",
    featured: true,
    badge: "Enterprise SaaS",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://bhushanshimpi.vercel.app",
    githubUrl: "https://github.com/bhushan-shimpi-2003",
    metrics: [
      { label: "Supported Roles", value: "4 Distinct Portals" },
      { label: "Workflow Automation", value: "100% Digital" },
      { label: "Notification Delay", value: "Real-time" }
    ],
    overview: "A comprehensive university placement automation ecosystem connecting Students, College Placement Officers, Corporate HR Recruiters, and System Admins in a unified real-time workflow.",
    problem: "College placement drives suffer from disjointed spreadsheets, delayed email loops, lost student eligibility records, and manual interview scheduling bottlenecks.",
    solution: "Engineered a high-performance Next.js & React ecosystem with Supabase backend featuring automated eligibility filtering, instant push notifications, multi-stage candidate pipelines, and digital offer letter release.",
    architecture: [
      "Frontend: Next.js + React.js with SSR for speed and SEO, plus React Native mobile app for live student alerts.",
      "Security: 4-tier Role-Based Access Control (RBAC) with Supabase Auth policies.",
      "Database: Relational PostgreSQL schema tracking student academic records, verification tiers, and drive stages.",
      "Real-time Engine: Supabase Realtime Channels pushing instant shortlist and interview schedule alerts."
    ],
    techStack: ["Next.js", "React.js", "React Native", "Node.js", "Express.js", "PostgreSQL", "Supabase", "CI/CD"],
    features: [
      "4 Dedicated Portals: Student Dashboard, HR Recruiter Panel, Placement Officer HUD, Superadmin",
      "End-to-end recruitment drive management with customizable hiring round stages",
      "Automated CGPA & skill prerequisite verification for candidate filtering",
      "Real-time status tracking, instant interview invites, and offer generation",
      "Exportable analytics and placement drive KPI reports"
    ]
  },
  {
    slug: "codecure-academy",
    title: "CodeCure Academy",
    tagline: "Full-Stack EdTech Learning Management & Interactive Video Quiz Platform",
    category: "EdTech Web & Mobile",
    featured: true,
    badge: "EdTech Platform",
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://bhushanshimpi.vercel.app",
    githubUrl: "https://github.com/bhushan-shimpi-2003",
    metrics: [
      { label: "Feature Parity", value: "100% Web/Mobile" },
      { label: "Quiz Validation", value: "Instant" },
      { label: "Video Delivery", value: "Adaptive" }
    ],
    overview: "An immersive educational hub featuring modular video courses, interactive knowledge checks, student progress telemetry, and certificate generation.",
    problem: "Traditional LMS solutions lack mobile responsiveness, fail to maintain student engagement during asynchronous study, and make tracking granular course completion difficult.",
    solution: "Constructed a seamless MERN web portal and React Native Expo mobile application with synchronized course progression, timed interactive quizzes, secure user onboarding, and progress analytics.",
    architecture: [
      "Frontend: React.js with Tailwind CSS + React Native Expo app with offline caching.",
      "Auth: Secure registration workflows with email verification, password reset, and JWT tokens.",
      "Database: PostgreSQL managed via Supabase with optimized queries for course hierarchies and quiz results.",
      "Analytics: Custom telemetry engine calculating completion percentages and quiz mastery score."
    ],
    techStack: ["React.js", "React Native", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    features: [
      "Curated course catalogs with video lecture streaming and chapter navigation",
      "Time-bound interactive quizzes with immediate score calculation and review",
      "Student progress dashboard tracking learning streaks and completion metrics",
      "Cross-platform synchronization between web browser and mobile device",
      "Automated completion certification"
    ]
  },
  {
    slug: "dentacare-pro",
    title: "DentaCare Pro",
    tagline: "Modern Healthcare Clinic Management & Digital Medical Records System",
    category: "Healthcare SaaS",
    featured: false,
    badge: "Healthcare SaaS",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://bhushanshimpi.vercel.app",
    githubUrl: "https://github.com/bhushan-shimpi-2003",
    metrics: [
      { label: "Booking Speed", value: "< 30 sec" },
      { label: "Record Security", value: "Encrypted" },
      { label: "Appointment Reminders", value: "Automated" }
    ],
    overview: "A streamlined digital clinic operations platform for dental practitioners, automating patient scheduling, electronic medical records (EMR), and diagnostic histories.",
    problem: "Clinics face high patient no-show rates, paper record vulnerabilities, and tedious manual scheduling workflows.",
    solution: "Developed an intuitive clinic cockpit in React and Node.js with digital patient charts, treatment timeline tracking, automated appointment reminders, and clinic revenue dashboards.",
    architecture: [
      "Frontend: Responsive React.js single-page application with accessible UI components.",
      "Backend: Node.js / Express REST API with input validation middleware.",
      "Database: Supabase PostgreSQL with relational tables for doctors, patients, appointments, and prescriptions."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Intuitive calendar appointment booking with slot collision prevention",
      "Digital patient histories, dental treatment charts, and prescription generator",
      "Admin analytics panel tracking clinic revenue, footfall, and doctor schedules",
      "Automated email/SMS appointment reminders and notification logs"
    ]
  }
];

export const experienceData = [
  {
    role: "Software Engineer",
    company: "QLOAX LLP",
    location: "Pune, Maharashtra",
    type: "Full-Time",
    period: "June 2026 â€“ Present",
    highlights: [
      "Develop and maintain scalable web and mobile apps using React.js, Node.js, Express.js, MongoDB, and React Native, deploying via automated CI/CD pipelines.",
      "Design and integrate robust RESTful APIs for seamless frontend-backend communication and third-party SaaS integrations.",
      "Optimize web application performance and mobile user experience through code refactoring, image optimization, and caching strategies.",
      "Collaborate in cross-functional teams in high-velocity Agile sprints to deliver production-ready software."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "QLOAX LLP",
    location: "Pune, Maharashtra",
    type: "Internship",
    period: "Dec 2025 â€“ May 2026",
    highlights: [
      "Developed enterprise School ERP modules for student records, attendance tracking, fee management, and performance reporting using React.js and Tailwind CSS.",
      "Built backend RESTful APIs and business logic using Node.js and Express.js with robust schema validation.",
      "Integrated JWT authentication and Supabase database operations for secure session management and role-based permissions.",
      "Collaborated with a team of 5+ developers to deliver educational software solutions within tight deadlines."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Echo Lily Entertainment Pvt. Ltd.",
    location: "Remote",
    type: "Internship",
    period: "Jan 2025 â€“ Nov 2025",
    highlights: [
      "Built responsive, high-converting business websites using HTML5, CSS3, JavaScript, and modern frontend frameworks.",
      "Translated Figma design mockups into pixel-perfect, mobile-responsive web pages adhering to modern SEO best practices.",
      "Optimized site performance, asset delivery, and Core Web Vitals to elevate engagement and search rankings."
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Computer Applications & Software Engineering",
    institution: "Indira College of Engineering & Management",
    location: "Pune, Maharashtra",
    period: "2024 â€“ 2026",
    grade: "CGPA: 9.16 / 10",
    badge: "Post Graduation",
    details: "Specialized in Advanced Full-Stack Architecture, Distributed Systems, Cloud Computing, Database Management, and Mobile Application Development."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Computer Applications",
    institution: "North Maharashtra University",
    location: "Maharashtra, India",
    period: "2021 â€“ 2024",
    grade: "CGPA: 9.21 / 10",
    badge: "Graduation",
    details: "Foundational mastery in Data Structures, Object-Oriented Programming (Java/C++), SQL Databases, and Web Development Principles."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    specialization: "Science & Mathematics",
    institution: "Maharashtra State Board",
    location: "Maharashtra, India",
    period: "2019 â€“ 2021",
    grade: "Percentage: 84.40%",
    badge: "Higher Secondary"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    specialization: "General Education",
    institution: "NMV School, Chunchale",
    location: "Maharashtra, India",
    period: "June 2018 â€“ Mar 2019",
    grade: "Percentage: 76.60%",
    badge: "Secondary School"
  }
];

export const certificationsData = [
  {
    name: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    skills: ["React.js", "State Management", "Component Lifecycle", "Performance"],
    verified: true
  },
  {
    name: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "API Design"],
    verified: true
  },
  {
    name: "Java (Basic) Certificate",
    issuer: "HackerRank",
    skills: ["OOP Concepts", "Data Structures", "Exception Handling"],
    verified: true
  },
  {
    name: "UI/UX Design Fundamentals",
    issuer: "Design Certification",
    skills: ["Figma", "User Flows", "Wireframing", "Design Systems"],
    verified: true
  }
];

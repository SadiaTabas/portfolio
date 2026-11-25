export interface ResponsibilityCategory {
  id: string;
  title: string;
  sourceCV: string;
  description: string;
  items: string[];
}

export interface ClientPlatform {
  id: string;
  name: string;
  category: string;
  role: string;
  techStack: string[];
  description: string;
  keyContributions: string[];
  liveUrl?: string;
  portalUrl?: string;
}

export const internshipInfo = {
  company: "Dcastalia Limited (Webcare Studio)",
  location: "Dhaka, Bangladesh",
  primaryTitle: "Web Development Intern",
  secondaryTitle: "Software Development & Quality Assurance",
  periodDisplay: "September 2026 – Present",
  statusNote: "Web Development Intern at Dcastalia Limited (September 2026 – Present).",
  scopeSummary:
    "Engineered full-stack features, Laravel CMS order/delivery workflows, and responsive Next.js/React/TypeScript interfaces across 7+ production client platforms (Akhter Properties, Rock Energy, Concord Ready Mix, ACE Advisory, SD Inventory System, and Solution 360)."
};

export const responsibilityCategories: ResponsibilityCategory[] = [
  {
    id: "full-stack",
    title: "A. Full-Stack Web Development",
    sourceCV: "Full-Stack & Web Engineering",
    description: "End-to-end feature delivery across production client platforms combining dynamic frontend interfaces and robust backend integration.",
    items: [
      "Developed and enhanced full-stack features across multiple production client platforms.",
      "Built responsive Next.js and React.js interfaces with null-safe data handling and error boundaries.",
      "Developed and enhanced Laravel CMS workflows for content and business management.",
      "Integrated RESTful APIs connecting client-facing frontend applications with server resources.",
      "Implemented dynamic content hydration and asynchronous data handling across product catalogs.",
      "Improved application rendering and resolved complex frontend state and rendering bottlenecks."
    ]
  },
  {
    id: "backend",
    title: "B. Backend Development",
    sourceCV: "Backend Architecture & APIs",
    description: "Engineered scalable server-side logic, order workflows, and database interactions across multiple technologies.",
    items: [
      "Developed Laravel CMS workflows for e-commerce platforms handling order tracking and delivery statuses.",
      "Worked with PHP, Laravel, Node.js, NestJS, and ASP.NET Core for diverse production services.",
      "Integrated frontend applications with backend RESTful APIs using standard HTTP specifications.",
      "Implemented authentication, session handling, and role-based access control (RBAC) workflows.",
      "Engineered relational database operations and schema structures in MySQL, PostgreSQL, and SQL Server."
    ]
  },
  {
    id: "sqa",
    title: "C. Software Quality Assurance",
    sourceCV: "Software Quality Assurance & Testing",
    description: "Comprehensive software verification, regression testing, automated UI validation, and security auditing.",
    items: [
      "Executed end-to-end functional and regression testing across 7+ live production platforms.",
      "Performed UI/UX responsiveness and cross-browser testing across multiple devices and viewport resolutions.",
      "Conducted API testing using Postman and Swagger, validating HTTP status codes, request DTOs, and error handling.",
      "Performed UI test automation using Selenium IDE to verify booking and administrative workflows.",
      "Identified, documented, and investigated application defects across development cycles.",
      "Conducted security vulnerability scanning using OWASP ZAP to harden web endpoints.",
      "Performed accessibility and performance audits using Google Lighthouse to satisfy WCAG and ARIA guidelines.",
      "Validated technical SEO structures, meta tags, and JSON-LD structured data."
    ]
  },
  {
    id: "seo-performance",
    title: "D. Technical SEO & Performance",
    sourceCV: "Technical SEO & Performance",
    description: "Search engine visibility engineering, structured data compliance, and performance remediation.",
    items: [
      "Implemented dynamic XML sitemaps for multi-level client website hierarchies.",
      "Configured robots.txt and AI crawler access policies (llms.txt) for search crawler indexing.",
      "Implemented canonical URL tags and JSON-LD structured schema markup (verified via Schema Markup Validator).",
      "Integrated Google Analytics 4 (GA4) and Google Search Console (GSC) for performance telemetry.",
      "Conducted automated technical SEO crawls using Screaming Frog SEO Spider.",
      "Resolved ARIA attribute mismatches, semantic H1-H3 heading hierarchies, and Next.js SSR hydration mismatches."
    ]
  },
  {
    id: "deployment",
    title: "E. Deployment & Collaboration",
    sourceCV: "DevOps & CI/CD Pipelines",
    description: "Modern DevOps workflows, continuous integration, and version control collaboration.",
    items: [
      "Managed Git and GitLab version control across multiple client feature branches.",
      "Created structured Merge Requests (MRs) with code reviews and conflict resolutions.",
      "Configured and maintained GitLab CI/CD (.gitlab-ci.yml) pipeline builds.",
      "Managed Vercel deployment workflows with preview branch deployments and production releases.",
      "Performed security hardening and user behavioral analytics monitoring with Microsoft Clarity."
    ]
  }
];

export const clientPlatforms: ClientPlatform[] = [
  {
    id: "akhter-properties",
    name: "Akhter Properties Ltd.",
    category: "Corporate Real Estate Platform",
    role: "Full-Stack & SEO Engineer",
    techStack: ["Next.js", "React.js", "Laravel CMS", "Lighthouse", "Screaming Frog", "Schema Validator"],
    description:
      "A high-profile corporate real estate portal featuring interactive property listings, dynamic content feeds, and comprehensive technical SEO architecture.",
    keyContributions: [
      "Implemented technical SEO features: dynamic XML sitemaps, robots.txt, llms.txt, canonical configurations, and JSON-LD schema.",
      "Resolved accessibility and ARIA issues, Next.js hydration runtime errors, and cache revalidation.",
      "Implemented interactive vector maps with offline tile support and responsive property inquiry forms.",
      "Conducted technical audits using Lighthouse, Screaming Frog, and Schema Validator."
    ],
    liveUrl: "https://akhterproperties.com"
  },
  {
    id: "rock-energy",
    name: "Rock Energy Ltd.",
    category: "Corporate Portal & E-Commerce Platform",
    role: "Full-Stack Web Developer",
    techStack: ["Next.js", "React.js", "Laravel", "PHP", "MySQL", "REST APIs", "GitLab CI/CD", "OWASP ZAP"],
    description:
      "A combined corporate portal and commercial e-commerce platform for energy products with live catalog rendering and order lifecycle management.",
    keyContributions: [
      "Developed and enhanced Laravel CMS workflows for order management, delivery tracking, customer profiles, and order history.",
      "Implemented Next.js API integrations with null-safe data handling, form validation, and asynchronous catalog rendering.",
      "Resolved SSR hydration errors, accessibility issues, and UI/UX inconsistencies across storefront pages.",
      "Managed GitLab CI/CD pipelines, Vercel deployments, and application security testing using OWASP ZAP."
    ],
    liveUrl: "https://rockenergybd.com",
    portalUrl: "https://portal.rockenergybd.com"
  },
  {
    id: "concord-ready-mix",
    name: "Concord Ready Mix & Concrete Products",
    category: "Corporate Website & API Integrations",
    role: "Frontend & Analytics Developer",
    techStack: ["Next.js", "React.js", "REST APIs", "JSON-LD Schema", "GA4", "Google Search Console"],
    description:
      "Corporate web presence for one of Bangladesh's premier building material manufacturers, featuring dynamic product specifications and search performance tracking.",
    keyContributions: [
      "Developed API-driven website functionality and implemented dynamic metadata and XML sitemaps.",
      "Implemented canonical URLs and JSON-LD structured data for search engine rich snippets.",
      "Integrated Google Analytics 4 (GA4) and Google Search Console (GSC) for web analytics.",
      "Resolved responsive navigation and UI/UX issues for consistent mobile and desktop viewing."
    ],
    liveUrl: "https://concordreadymix.com"
  },
  {
    id: "ace-advisory",
    name: "ACE Advisory",
    category: "Corporate & Regulatory Portal",
    role: "Frontend Engineer",
    techStack: ["Next.js", "React.js", "JavaScript", "Responsive Design"],
    description:
      "A corporate regulatory compliance and corporate advisory platform serving international businesses and corporate clients.",
    keyContributions: [
      "Resolved regulatory date-filtering issues and sticky navigation tab overlaps to improve usability.",
      "Tested and refined responsive layouts across various screen resolutions and browsers.",
      "Enhanced user experience with interactive regulatory publication schedules."
    ],
    liveUrl: "https://aceadvisory.biz"
  },
  {
    id: "sd-inventory",
    name: "SD Inventory System",
    category: "Inventory & Logistics Application",
    role: "Full-Stack Laravel Developer",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Excel Integration"],
    description:
      "An internal production platform for inventory, orders, customer accounts, and logistics management with bulk spreadsheet synchronization.",
    keyContributions: [
      "Built modules for product CRUD, category assignment, stock tracking, and Excel bulk importing.",
      "Engineered order management workflows including payment records, outstanding balance calculation, and rider assignment.",
      "Designed administrative dashboard with live KPI counters, pending orders, and low-stock alerts."
    ]
  },
  {
    id: "solution-360",
    name: "Solution 360",
    category: "Client Production Platform",
    role: "Software Quality Assurance & Testing",
    techStack: ["Manual Testing", "Cross-Browser", "Postman", "Lighthouse", "Accessibility Auditing"],
    description:
      "Production client platform audited for functional compliance, responsive layout integrity, and cross-browser consistency.",
    keyContributions: [
      "Executed end-to-end regression and functional test cases across key business flows.",
      "Validated form inputs, edge-case handling, and API responses using Postman.",
      "Audited accessibility benchmarks and layout responsiveness across viewport breakpoints."
    ]
  }
];

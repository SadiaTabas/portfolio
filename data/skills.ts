export interface SkillCategory {
  id: string;
  category: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    tags?: string[];
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend Development",
    badge: "User Interface & Experience",
    description: "Modern, high-performance web interfaces with server-side rendering, responsive design, and accessible markup.",
    skills: [
      { name: "Next.js", highlight: true, tags: ["App Router", "SSR", "CSR", "ISR"] },
      { name: "React.js", highlight: true, tags: ["Hooks", "Context", "Component Architecture"] },
      { name: "TypeScript", highlight: true, tags: ["Type Safety", "Interfaces", "Generics"] },
      { name: "JavaScript (ES6+)", highlight: true, tags: ["Async/Await", "DOM", "Fetch API"] },
      { name: "Tailwind CSS", highlight: true, tags: ["Utility-First", "Responsive Layouts"] },
      { name: "Bootstrap 5", tags: ["Grid System", "Components"] },
      { name: "HTML5", tags: ["Semantic Elements", "Web APIs"] },
      { name: "CSS3", tags: ["Flexbox", "Grid", "Animations"] },
      { name: "Responsive Web Design", tags: ["Mobile-First", "Cross-Device"] },
      { name: "SSR & CSR Hybrid", tags: ["Hydration", "Performance"] }
    ]
  },
  {
    id: "backend",
    category: "Backend Development",
    badge: "APIs & Core Architecture",
    description: "Scalable backend services, modular API design, authentication workflows, and server-side data pipelines.",
    skills: [
      { name: "PHP", highlight: true, tags: ["Object-Oriented", "MVC Pattern"] },
      { name: "Laravel", highlight: true, tags: ["Eloquent ORM", "CMS Workflows", "Artisan"] },
      { name: "Node.js", highlight: true, tags: ["Event Loop", "Express", "npm"] },
      { name: "NestJS", highlight: true, tags: ["Controllers", "Providers", "DTOs"] },
      { name: "ASP.NET Core MVC", highlight: true, tags: ["Controllers", "Razor", "Filters"] },
      { name: "ASP.NET Core Web API", highlight: true, tags: ["Dependency Injection", "Repository"] },
      { name: "RESTful APIs", highlight: true, tags: ["HTTP Verbs", "Status Codes", "JSON"] },
      { name: "JWT Authentication", highlight: true, tags: ["Bearer Tokens", "Session Control"] },
      { name: "BCrypt Password Hashing", tags: ["Salting", "Crypto Standards"] },
      { name: "Role-Based Access Control (RBAC)", tags: ["Route Guards", "Permissions"] },
      { name: "CMS/CRM Integration", tags: ["Headless CMS", "Data Sync"] },
      { name: "Repository Pattern", tags: ["Decoupled Design", "Unit of Work"] }
    ]
  },
  {
    id: "databases",
    category: "Database Management",
    badge: "Relational Modeling & Storage",
    description: "Relational schema engineering, data integrity enforcement, normalized tables, and query optimization.",
    skills: [
      { name: "MySQL", highlight: true, tags: ["Transactions", "Indexes", "Foreign Keys"] },
      { name: "PostgreSQL", highlight: true, tags: ["Relational Mapping", "Constraints", "pgAdmin"] },
      { name: "Microsoft SQL Server", highlight: true, tags: ["T-SQL", "Stored Procedures", "Normalization"] },
      { name: "Relational Database Design", highlight: true, tags: ["Entity-Relationship", "Constraints"] },
      { name: "Database Normalization", tags: ["1NF to 3NF", "Integrity Rules"] }
    ]
  },
  {
    id: "testing-qa",
    category: "Software Quality Assurance",
    badge: "Defect Verification & Testing",
    description: "Rigorous quality processes, functional test matrixes, automated test scripts, and regression verification.",
    skills: [
      { name: "Manual Testing", highlight: true, tags: ["Exploratory", "Checklists"] },
      { name: "Test Case Design", highlight: true, tags: ["Equivalence Partitioning", "Boundary Value"] },
      { name: "Test Plan & Bug Reporting", highlight: true, tags: ["Defect Lifecycle", "Severity/Priority"] },
      { name: "Functional Testing", tags: ["User Flows", "Business Logic"] },
      { name: "Regression Testing", tags: ["Release Verification", "Defect Retesting"] },
      { name: "Smoke & Sanity Testing", tags: ["Build Verification"] },
      { name: "Integration Testing", tags: ["Module Contracts", "Data Ingestion"] },
      { name: "API Testing (Postman & Swagger)", highlight: true, tags: ["DTO Validation", "HTTP Response"] },
      { name: "UI Automation (Selenium IDE)", highlight: true, tags: ["Automated Workflows", "Assertions"] },
      { name: "Cross-Browser Testing", tags: ["Chrome", "Firefox", "Safari", "Edge"] },
      { name: "SDLC & STLC Methodologies", tags: ["Agile", "Scrum", "V-Model"] }
    ]
  },
  {
    id: "security-performance-seo",
    category: "Security, Performance & SEO",
    badge: "Auditing & Compliance",
    description: "Application security hardening, search discovery architecture, WCAG accessibility, and web vital tuning.",
    skills: [
      { name: "OWASP ZAP", highlight: true, tags: ["Vulnerability Scanning", "Security Auditing"] },
      { name: "Google Lighthouse", highlight: true, tags: ["Performance", "Accessibility", "Best Practices"] },
      { name: "Accessibility / WCAG / ARIA", highlight: true, tags: ["Screen Readers", "Keyboard Nav", "Contrast"] },
      { name: "Technical SEO", highlight: true, tags: ["Metadata", "Canonical Tags", "Indexing"] },
      { name: "JSON-LD Structured Data", highlight: true, tags: ["Schema.org", "Rich Snippets"] },
      { name: "XML Sitemaps & robots.txt", tags: ["Crawler Directives", "Indexing Paths"] },
      { name: "llms.txt AI Crawler Specs", tags: ["AI Agent Discovery"] },
      { name: "Screaming Frog SEO Spider", tags: ["Site Crawling", "Broken Links", "Redirects"] },
      { name: "Schema Markup Validator", tags: ["Google Rich Results"] }
    ]
  },
  {
    id: "tools",
    category: "Development & Testing Tools",
    badge: "Ecosystem & Tooling",
    description: "Developer tooling, CI/CD automation, cloud deployment platforms, and collaborative environments.",
    skills: [
      { name: "Git", highlight: true, tags: ["Branching", "Rebase", "Merge"] },
      { name: "GitHub", highlight: true, tags: ["Pull Requests", "Repositories"] },
      { name: "GitLab & GitLab CI/CD", highlight: true, tags: [".gitlab-ci.yml", "Pipelines"] },
      { name: "Vercel", highlight: true, tags: ["Edge Deployments", "Preview Branches"] },
      { name: "Postman", highlight: true, tags: ["API Collections", "Environments"] },
      { name: "Swagger / OpenAPI", highlight: true, tags: ["API Docs", "Interactive Testing"] },
      { name: "Selenium IDE", highlight: true, tags: ["Test Recording", "Automated Runs"] },
      { name: "Google Analytics 4 (GA4)", tags: ["Event Tracking", "User Analytics"] },
      { name: "Google Search Console", tags: ["Search Performance", "Indexing"] },
      { name: "Microsoft Clarity", tags: ["Session Replay", "Heatmaps"] },
      { name: "Chrome DevTools", tags: ["Console", "Network", "Profiler"] },
      { name: "Trello & Figma", tags: ["Sprint Planning", "UI Design Mockups"] },
      { name: "Visual Studio Code & Visual Studio", tags: ["Extensions", "Debugging"] }
    ]
  }
];

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Full-Stack Development" | "Backend Development" | "Web Applications" | "Software Testing";
  allCategories: string[];
  primarySource: string;
  technologies: string[];
  description: string;
  longDescription: string;
  features: string[];
  architectureHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  isClientProject: boolean;
  imagePlaceholderText: string;
}

export const projectCategories = [
  "All Projects",
  "Full-Stack Development",
  "Backend Development",
  "Web Applications",
  "Software Testing"
] as const;

export const projectsData: Project[] = [
  {
    id: "dhaka-metro-rail",
    number: "01",
    title: "Dhaka Metro Rail Ticketing System",
    subtitle: "Role-Based Web Ticketing, Distance Pricing & Automated SQA Testing",
    category: "Web Applications",
    allCategories: ["Web Applications", "Backend Development", "Software Testing", "Full-Stack Development"],
    primarySource: "Backend CV, Web Developer CV & SQT CV",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Selenium IDE", "Vercel"],
    description: "A web-based metro rail ticketing application implementing MVC architecture, route distance-based fare calculation, ticket reservation, and automated testing.",
    longDescription:
      "Developed a role-based web-based ticket management system using PHP and MySQL with Passenger, Staff, and Admin workflows. Performed manual functional testing and UI automation testing using Selenium IDE to validate authentication, profile management, ticket booking, payment, admin, and staff workflows. Designed and executed functional test cases and verified application behavior through expected and actual results, including database verification using phpMyAdmin. Documented the testing activities in a formal Software Test Plan, covering test cases, testing approach, pass/fail criteria, test deliverables, testing schedule, and risk management.",
    features: [
      "Developed a role-based web-based ticket management system using PHP and MySQL with Passenger, Staff, and Admin workflows",
      "Performed manual functional testing and UI automation testing using Selenium IDE to validate authentication, profile management, ticket booking, payment, admin, and staff workflows",
      "Designed and executed functional test cases and verified application behavior through expected and actual results, including database verification using phpMyAdmin",
      "Documented testing activities in a formal Software Test Plan covering test cases, testing approach, pass/fail criteria, deliverables, and risk management",
      "Route and fare management with dynamic distance-based pricing rules and transactional ticket issuance",
      "Live deployment on Vercel with responsive cross-browser optimization"
    ],
    architectureHighlights: [
      "Role-Based Access Control (RBAC) across Passengers, Staff, and Administrators",
      "Comprehensive SQA Test Plan & Automated Selenium IDE Regression Suite",
      "Relational MySQL Schema with Transactional Integrity verified via phpMyAdmin",
      "Live Vercel Deployment with Fast Booking Flows (https://metro-rail-dhaka.vercel.app)"
    ],
    githubUrl: "https://github.com/SadiaTabas/Dhaka-Metro-Rail",
    liveUrl: "https://metro-rail-dhaka.vercel.app",
    isClientProject: false,
    imagePlaceholderText: "Dhaka Metro Rail Ticketing UI"
  },
  {
    id: "sd-inventory-system",
    number: "02",
    title: "SD Inventory Management System",
    subtitle: "Enterprise Inventory, Order Processing & Delivery Logistics Platform",
    category: "Full-Stack Development",
    allCategories: ["Full-Stack Development", "Backend Development", "Web Applications"],
    primarySource: "Backend CV",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Excel Integration", "Vercel"],
    description: "A comprehensive web-based inventory management application designed to manage products, categories, stock levels, customer orders, and administrative logistics.",
    longDescription:
      "Engineered with Laravel and a normalized MySQL database, this system automates end-to-end retail warehouse management. It features product catalog categorization, dynamic stock replenishment counters, bulk product spreadsheet importing via Excel, an automated order delivery dispatcher for couriers/riders, and an analytical dashboard for management. Deployed live with real-time operations.",
    features: [
      "Product & Category CRUD with dynamic image uploads and SKU tracking",
      "Real-time inventory tracking with low-stock threshold alerts",
      "Excel spreadsheet bulk product import for automated stock population",
      "Order management with customer profile lookup and status pipelines",
      "Financial ledger with payment recording and outstanding balance tracking",
      "Rider dispatch and delivery status tracking (Dispatched, Delivered, Returned)",
      "Administrative executive dashboard displaying key business performance metrics"
    ],
    architectureHighlights: [
      "MVC Architecture with Laravel Service & Repository Patterns",
      "Relational MySQL Schema with Foreign Key Constraints & Cascading",
      "Asynchronous Data Ingestion via Maatwebsite Excel Parser",
      "Live Deployment on Vercel: https://sd-inventory.vercel.app/"
    ],
    githubUrl: "https://github.com/SadiaTabas/SD-Inventory-System",
    liveUrl: "https://sd-inventory.vercel.app/",
    isClientProject: false,
    imagePlaceholderText: "SD Inventory System Dashboard"
  },
  {
    id: "medicore-hospital",
    number: "03",
    title: "MediCore Hospital Management: Doctor Module",
    subtitle: "Doctor Administration, Secure RBAC Authentication & Appointment Scheduler",
    category: "Backend Development",
    allCategories: ["Backend Development", "Full-Stack Development", "Software Testing"],
    primarySource: "Backend CV, Web Developer CV & SQT CV",
    technologies: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "Next.js", "React.js", "Tailwind CSS", "Axios", "Postman"],
    description: "A healthcare module focused on doctor registration, token authentication, professional profile administration, and doctor-patient appointment scheduling.",
    longDescription:
      "Architected using NestJS modular controllers, services, and DTOs with PostgreSQL database mapping. Implemented strict authentication with JWT and BCrypt hashing, protected API route guards, doctor-to-profile one-to-one mapping, appointment scheduling logic, and full frontend integration in Next.js/React. Thoroughly tested using Postman for API contracts and edge cases.",
    features: [
      "Modular backend architecture with NestJS Controllers, Providers, and DTOs",
      "Doctor registration and secure JWT authentication with BCrypt password hashing",
      "Token-based session management with NestJS Route Guards for protected endpoints",
      "Doctor profile management with one-to-one relational mapping in PostgreSQL",
      "Doctor-patient appointment scheduling, consultation status, and calendar tracking",
      "Next.js App Router frontend utilizing SSR and CSR with Axios HTTP interceptors",
      "Postman test collection validating HTTP codes, DTO schemas, and negative scenarios"
    ],
    architectureHighlights: [
      "Layered NestJS Architecture (Controller -> Service -> Repository)",
      "PostgreSQL Relational Schema with Constraints and Date-Range Checking",
      "Stateless JWT Bearer Authentication with Payload Validation",
      "End-to-End Type Safety with TypeScript Interfaces across Backend and Frontend"
    ],
    githubUrl: "https://github.com/SadiaTabas/Medicore_Hospital_Management",
    isClientProject: false,
    imagePlaceholderText: "MediCore Doctor Module Portal"
  },
  {
    id: "restaurant-management",
    number: "04",
    title: "Restaurant Management System",
    subtitle: "Enterprise Full-Stack Restaurant Ordering, Table Reservation & Billing",
    category: "Full-Stack Development",
    allCategories: ["Full-Stack Development", "Backend Development", "Web Applications", "Software Testing"],
    primarySource: "Backend CV, Web Developer CV & SQT CV",
    technologies: ["ASP.NET Core MVC", "ASP.NET Core Web API", "C#", "SQL Server", "Swagger", "Bootstrap 5", "Razor Pages"],
    description: "A full-stack enterprise restaurant management application with customer ordering, table reservations, staff workflows, and administrative operations.",
    longDescription:
      "Built with ASP.NET Core MVC and Web API using C# and Microsoft SQL Server. Utilizes Dependency Injection and the Repository Pattern for decoupled data access. Features customer table-side menu ordering, dynamic cart calculations, table reservation management, kitchen order processing, and administrative reporting documented and validated via Swagger UI.",
    features: [
      "Role-Based Access Control (RBAC) across Customers, Staff, and Administrators",
      "Customer module with digital menu browsing, item filtering, and cart calculations",
      "Table reservation system with timeslot validation and seating allocation",
      "Live order processing with payment status tracking and kitchen receipt generation",
      "Admin dashboard for menu items, category management, and customer feedback",
      "ASP.NET Core Web APIs with Repository Pattern and Dependency Injection",
      "Swagger UI interactive documentation and API endpoint testing"
    ],
    architectureHighlights: [
      "ASP.NET Core MVC & Web API dual architecture for web and programmatic access",
      "Repository Pattern & Unit of Work with Entity Framework Core / ADO.NET",
      "Microsoft SQL Server Normalized Schema (3NF) for Orders, Tables, and Menus",
      "Responsive Bootstrap 5 UI bound seamlessly with Razor View Engine"
    ],
    githubUrl: "https://github.com/SadiaTabas/Restaurant-Management-System",
    isClientProject: false,
    imagePlaceholderText: "Restaurant Management System UI"
  },
  {
    id: "donation-management",
    number: "05",
    title: "Donation Management System",
    subtitle: "Non-Profit Donor Tracking, Campaign Allocation & Audit Verification",
    category: "Software Testing",
    allCategories: ["Software Testing", "Backend Development"],
    primarySource: "SQT CV",
    technologies: ["C#", "Microsoft SQL Server", "Manual Testing", "Test Case Design", "Boundary-Value Testing"],
    description: "A donation management and charity platform supporting donors, volunteers, administrators, and campaign financial tracking.",
    longDescription:
      "Developed in C# and Microsoft SQL Server to manage humanitarian campaigns, voluntary contributions, and sector distributions (Zakat, Education, Healthcare). Quality assured through structured test plans, boundary-value analysis, and database query synchronization to verify that financial ledgers remain accurate and tamper-proof.",
    features: [
      "Role-based permissions isolating Donors, Volunteers, and Campaign Administrators",
      "Campaign-based donations with dedicated sector allocation (Zakat, Healthcare, Education)",
      "Secure payment tracking and donor contribution history ledger",
      "Volunteer coordination module for campaign assignments and field logistics",
      "Admin monitoring dashboard with real-time donation volume metrics",
      "Executed comprehensive boundary-value and equivalence-partitioning test cases",
      "Verified real-time database synchronization and reporting query accuracy in SQL Server"
    ],
    architectureHighlights: [
      "Normalized SQL Server Database Schema for Auditable Financial Contributions",
      "Strict Transaction Boundaries (ACID) for Ledger Integrity",
      "Comprehensive SQA Test Matrix for Permission Boundary Enforcement",
      "Optimized Aggregate Queries for High-Performance Dashboard Reporting"
    ],
    githubUrl: "https://github.com/SadiaTabas/DonationManagementSystem",
    isClientProject: false,
    imagePlaceholderText: "Donation System Architecture & QA"
  },
  {
    id: "safeher-safety-app",
    number: "06",
    title: "SafeHer – Women’s Safety Mobile Application",
    subtitle: "Emergency Response, Agile Scrum Workflow & SQA Test Suite",
    category: "Software Testing",
    allCategories: ["Software Testing", "Web Applications"],
    primarySource: "Projects Portfolio & SQA CV",
    technologies: ["Figma", "Trello", "Scrum", "Requirements", "Testing"],
    description: "A women's safety mobile application designed to support emergency response, SOS alerts, incident reporting, and real-time safety assistance.",
    longDescription:
      "Designed a mobile application UI in Figma for emergency safety and incident reporting. Applied Scrum methodology using Trello for backlog management and sprint planning, and designed interactive prototypes in Figma. Prepared test scenarios and test cases, performed functional testing, documented defects, and validated core features for usability and reliability. Documented functional and non-functional requirements to ensure clear system specifications.",
    features: [
      "Designed mobile application UI in Figma for emergency safety, SOS alert activation, and incident reporting",
      "Applied Scrum methodology using Trello for backlog management, user stories, and sprint planning",
      "Interactive prototypes crafted in Figma with intuitive emergency workflows and safe-zone mapping",
      "Prepared comprehensive test scenarios and test cases, performing functional and usability testing",
      "Documented and tracked defects to validate core safety features under critical simulated conditions",
      "Authored functional and non-functional requirements specifications ensuring structured system design"
    ],
    architectureHighlights: [
      "Interactive High-Fidelity Figma Prototype & Component Design System",
      "Agile Scrum Framework with Trello Sprint Backlog Organization",
      "Formal Requirement Specification (SRS) & SQA Test Case Documentation",
      "Emergency Flow Optimization for High-Stress User Interactions"
    ],
    githubUrl: "https://github.com/SadiaTabas/SafeHer-A-Women-s-Safety-Application",
    figmaUrl: "https://www.figma.com/design/7qQVsxRFS8MJngpcYm92G0/SafeHer--Community-?node-id=0-1&t=izOISIKPUTujEJ2x-0",
    isClientProject: false,
    imagePlaceholderText: "SafeHer Women Safety UI & Figma"
  },
  {
    id: "travelgo-travel-system",
    number: "07",
    title: "TravelGo – Travel Management System",
    subtitle: "Desktop Travel Planning, Multi-Modal Transport & Booking Engine",
    category: "Web Applications",
    allCategories: ["Web Applications", "Backend Development"],
    primarySource: "Academic & Software Projects",
    technologies: ["Java", "GUI", "Apache (XAMPP)"],
    description: "A GUI-based travel management system developed using Java to simplify trip planning with transport selection and hotel reservations.",
    longDescription:
      "Developed a GUI-based travel management system using Java to simplify trip planning with destination selection. Implemented transport options (bus, train, flight), hotel booking functionality with integrated payment calculation, and travel report generation. Designed an interactive desktop interface ensuring smooth navigation, structured booking data management, and user-friendly experience.",
    features: [
      "Developed a GUI-based travel management application using Java with custom desktop components",
      "Comprehensive trip planning module featuring dynamic destination and route selection",
      "Multi-modal transport booking workflows supporting bus, train, and flight options",
      "Hotel booking functionality with automated cost calculation and receipt generation",
      "Data persistence and transaction management supported via Apache (XAMPP) / database integration",
      "Streamlined desktop user experience with responsive navigation and booking validation"
    ],
    architectureHighlights: [
      "Modular Java GUI Architecture with Event-Driven Programming",
      "Relational Data Persistence via Apache / MySQL Database Connection",
      "Automated Itinerary and Booking Calculation Logic",
      "Clear Separation of Presentation Interface and Business Logic"
    ],
    githubUrl: "https://github.com/SadiaTabas/TravelGo",
    isClientProject: false,
    imagePlaceholderText: "TravelGo Travel Management UI"
  },
  {
    id: "akhter-properties",
    number: "08",
    title: "Akhter Properties Ltd.",
    subtitle: "Corporate Real Estate Platform with Dynamic SEO & Offline Map Support",
    category: "Full-Stack Development",
    allCategories: ["Full-Stack Development", "Web Applications", "Software Testing"],
    primarySource: "Web Developer CV",
    technologies: ["Next.js", "React.js", "Laravel CMS", "Lighthouse", "Screaming Frog", "Schema Validator"],
    description: "A premier corporate real estate platform featuring interactive property discovery, technical SEO features, and accessibility compliance.",
    longDescription:
      "Delivered for one of Bangladesh's distinguished property developers during internship at Dcastalia. Engineered technical SEO capabilities including dynamic XML sitemaps, robots.txt, llms.txt, and JSON-LD schema. Resolved Next.js SSR hydration bugs, implemented interactive vector maps with offline tile support, and validated performance through Lighthouse and Screaming Frog.",
    features: [
      "Dynamic XML sitemap generator supporting deep nested property listings",
      "Configured robots.txt and llms.txt crawler permissions for search engines and AI agents",
      "Canonical URL handling and JSON-LD structured data for rich search snippets",
      "Interactive vector maps with offline tile caching and custom property pins",
      "Responsive property inquiry forms with client-side validation and toast notifications",
      "Remediated ARIA accessibility tags and semantic heading structures (WCAG standard)",
      "Lighthouse and Screaming Frog audit verification for top-tier SEO rankings"
    ],
    architectureHighlights: [
      "Decoupled Architecture: Laravel Headless CMS Backend + Next.js Frontend",
      "Next.js Incremental Static Regeneration (ISR) with Cache Revalidation",
      "JSON-LD Real Estate Schema verified with Schema Markup Validator",
      "Lighthouse Accessibility Optimization achieving high performance marks"
    ],
    liveUrl: "https://akhterproperties.com",
    isClientProject: true,
    imagePlaceholderText: "Akhter Properties Live Platform"
  },
  {
    id: "rock-energy",
    number: "09",
    title: "Rock Energy Ltd.",
    subtitle: "Corporate Portal & Commercial E-Commerce Platform",
    category: "Full-Stack Development",
    allCategories: ["Full-Stack Development", "Backend Development", "Web Applications"],
    primarySource: "Web Developer CV",
    technologies: ["Next.js", "React.js", "Laravel", "PHP", "MySQL", "REST APIs", "GitLab CI/CD", "OWASP ZAP"],
    description: "A high-traffic corporate portal and e-commerce platform for industrial and commercial energy products with automated order pipelines.",
    longDescription:
      "Created during internship at Dcastalia to unite corporate identity with online ordering. Developed Laravel CMS workflows for order management, customer profiles, and delivery status tracking. Integrated Next.js APIs with null-safe data handling, fixed React SSR hydration errors, configured GitLab CI/CD, and executed OWASP ZAP security testing.",
    features: [
      "Laravel CMS order processing pipeline with delivery status transitions",
      "Customer authentication, account history, and invoice records",
      "Next.js API integration with null-safe fallbacks for product catalogs",
      "Resolved complex SSR hydration mismatches across dynamic storefront widgets",
      "OWASP ZAP vulnerability scanning and security hardening",
      "GitLab CI/CD pipelines (.gitlab-ci.yml) and automated Vercel production deployments",
      "Accessibility remediation across interactive product specification tables"
    ],
    architectureHighlights: [
      "Full-Stack Next.js App Router + Laravel REST API Architecture",
      "Automated GitLab CI/CD Pipeline with Automated Linting and Build Steps",
      "Security Audited via OWASP ZAP Vulnerability Scanning",
      "Optimized Product Catalog Async Data Fetching with Skeleton Placeholders"
    ],
    liveUrl: "https://rockenergybd.com",
    isClientProject: true,
    imagePlaceholderText: "Rock Energy E-Commerce & Portal"
  },
  {
    id: "concord-ready-mix",
    number: "10",
    title: "Concord Ready Mix & Concrete Products",
    subtitle: "Enterprise Concrete Solutions Website, REST Integrations & Telemetry",
    category: "Web Applications",
    allCategories: ["Web Applications", "Full-Stack Development"],
    primarySource: "Web Developer CV",
    technologies: ["Next.js", "React.js", "REST APIs", "JSON-LD Schema", "GA4", "Google Search Console"],
    description: "Corporate website for a premier industrial concrete manufacturer featuring API-driven specifications and search analytics integration.",
    longDescription:
      "Delivered API-driven content workflows and technical SEO for Concord Ready Mix at Dcastalia. Integrated Next.js with REST APIs, implemented dynamic meta tags, canonical URLs, and JSON-LD schema. Integrated Google Analytics 4 (GA4) and Google Search Console (GSC) for live search performance monitoring.",
    features: [
      "API-driven product catalog with technical concrete grade specifications",
      "Dynamic Next.js generateMetadata implementation with canonical URL binding",
      "JSON-LD Schema for industrial organization and concrete products",
      "Google Analytics 4 (GA4) custom event tracking integration",
      "Google Search Console sitemap indexing verification",
      "Resolved responsive navigation breakpoints for mobile and tablet devices"
    ],
    architectureHighlights: [
      "Next.js App Router with Server-Side Rendering (SSR) for Instant Discovery",
      "JSON-LD Structured Data Schema for Industrial Manufacturing",
      "Telemetry Pipelines linking GA4 and Google Search Console",
      "Mobile-First Responsive Layout with Cross-Browser Compatibility"
    ],
    liveUrl: "https://concordreadymix.com",
    isClientProject: true,
    imagePlaceholderText: "Concord Ready Mix Website"
  },
  {
    id: "ace-advisory",
    number: "11",
    title: "ACE Advisory",
    subtitle: "Corporate Regulatory Portal & Business Compliance Interface",
    category: "Web Applications",
    allCategories: ["Web Applications", "Software Testing"],
    primarySource: "Web Developer CV",
    technologies: ["Next.js", "React.js", "JavaScript", "Responsive UI", "Cross-Browser Testing"],
    description: "A corporate and regulatory advisory portal providing legal updates, tax compliance bulletins, and advisory services.",
    longDescription:
      "Refined frontend usability and resolved critical functional defects for ACE Advisory during Dcastalia internship. Fixed complex regulatory date-filtering logic, resolved sticky navigation tab overlaps, and conducted comprehensive cross-browser and mobile responsive testing.",
    features: [
      "Resolved regulatory calendar date-filtering bugs for compliance archives",
      "Fixed sticky navigation tab overlap issues across mobile viewports",
      "Conducted cross-browser rendering tests across Chrome, Firefox, Safari, and Edge",
      "Refined layout typography and reading contrast for corporate reports"
    ],
    architectureHighlights: [
      "Next.js / React Client-Side Component Architecture",
      "Sticky Tab Navigation with Dynamic Viewport Offset Compensation",
      "Cross-Browser Responsive Layout Verification",
      "Optimized Mobile Reading UX for Regulatory Documents"
    ],
    liveUrl: "https://aceadvisory.biz",
    isClientProject: true,
    imagePlaceholderText: "ACE Advisory Regulatory Portal"
  },
  {
    id: "solution-360",
    number: "12",
    title: "Solution 360",
    subtitle: "Client Platform Production Testing & Quality Assurance Verification",
    category: "Software Testing",
    allCategories: ["Software Testing"],
    primarySource: "SQT CV",
    technologies: ["Postman", "Lighthouse", "OWASP ZAP", "Cross-Browser Testing", "Microsoft Clarity"],
    description: "Client platform production testing, SQA validation, accessibility remediation, and user experience telemetry.",
    longDescription:
      "As recorded in the SQT CV, Solution 360 was one of the production client platforms audited for quality, security, and usability. Validated form workflows, verified REST API integrations with Postman, conducted accessibility reviews via Lighthouse, and monitored user session telemetry with Microsoft Clarity.",
    features: [
      "Comprehensive manual functional and regression testing across key user journeys",
      "RESTful API contract validation using Postman collection runner",
      "Lighthouse accessibility and performance audits ensuring WCAG compliance",
      "Form validation testing covering boundary and negative input scenarios",
      "Microsoft Clarity behavioral analytics tracking for UI friction points"
    ],
    architectureHighlights: [
      "Structured SQA Test Case Matrix & Bug Verification",
      "Postman Automated API Verification Suites",
      "Lighthouse Accessibility & WCAG Performance Auditing",
      "User Session Telemetry Analysis via Microsoft Clarity"
    ],
    isClientProject: true,
    imagePlaceholderText: "Solution 360 QA Audit Suite"
  }
];

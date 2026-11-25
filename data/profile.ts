export interface CVDiscrepancyFlag {
  field: string;
  options: { label: string; value: string; source: string }[];
  currentSelected: string;
  note: string;
}

export const cvDiscrepancies: CVDiscrepancyFlag[] = [
  {
    field: "CGPA",
    options: [
      { label: "CGPA 3.97 / 4.00", value: "3.97", source: "Official Academic Record" }
    ],
    currentSelected: "3.97",
    note: "Official Academic Standing: CGPA 3.97 / 4.00 at AIUB."
  },
  {
    field: "Internship Title",
    options: [
      { label: "Web Development Intern", value: "Web Development Intern", source: "Web Developer CV & Backend CV" },
      { label: "Software Development & Quality Assurance Intern", value: "Software Development & Quality Assurance Intern", source: "SQT CV" }
    ],
    currentSelected: "Web Development Intern",
    note: "Source documents reflect dual competencies in full-stack engineering and software quality assurance."
  },
  {
    field: "Internship Date Range",
    options: [
      { label: "September 2026 – November 2026", value: "Sep 2026 – Nov 2026", source: "Web Developer CV" },
      { label: "September 2026 – December 2026", value: "Sep 2026 – Dec 2026", source: "Backend CV" }
    ],
    currentSelected: "September 2026 – December 2026",
    note: "Engaged in production client engineering at Dcastalia Limited."
  }
];

export const profileData = {
  name: "Tabassum Aktar Sadia",
  monogram: "TS",
  primaryTitle: "FULL-STACK WEB DEVELOPER | BANGLADESH",
  subTitles: [
    "Full-Stack Web Developer",
    "Backend Developer",
    "Software Quality Assurance"
  ],
  heroTagline: "FULL-STACK WEB DEVELOPER | BANGLADESH",
  heroHeading: {
    line1: "BUILDING DIGITAL",
    line2: "EXPERIENCES",
    line3: "THAT WORK.",
    highlightWord: "THAT"
  },
  heroIntro:
    "I'm a Computer Science and Engineering professional with hands-on experience in full-stack web development, backend engineering, API development, and software quality assurance. I enjoy building reliable applications, solving technical challenges, and delivering better digital experiences.",
  heroSupportingDescription:
    "I build responsive web applications, reliable backend services, and thoughtful digital experiences through clean code, scalable architecture, and user-focused development.",
  aboutIntro:
    "I'm Tabassum Aktar Sadia, a Computer Science and Engineering graduate/student from American International University-Bangladesh (AIUB). My experience spans full-stack web application development, backend services, RESTful API engineering, relational database management, and software quality assurance.\n\nThrough my internship at Dcastalia Limited (Webcare Studio), I gained practical experience working with production client platforms, developing application features, integrating APIs, performing software testing, resolving technical issues, and improving application quality.\n\nI enjoy understanding how systems work internally while also ensuring that the final product is reliable, secure, accessible, and user-friendly.",
  highlights: [
    { label: "Client Platforms", value: "7+", description: "Production repositories & platforms delivered at Dcastalia" },
    { label: "Core Competency", value: "Full-Stack", description: "Modern React/Next.js frontend & Laravel/Node/Nest/ASP.NET backend" },
    { label: "Academic Standing", value: "3.97/4.00", description: "Dean's Honorable Mention for Academic Excellence" }
  ],
  capabilityAreas: [
    {
      title: "Full-Stack Development",
      description: "Building responsive frontend interfaces in Next.js and React, integrating seamless API communication, SSR/CSR architectures, and robust client workflows.",
      icon: "Layers"
    },
    {
      title: "Backend Engineering",
      description: "Designing RESTful APIs, modular architectures, JWT authentication, BCrypt hashing, and optimized relational schemas across PostgreSQL, MySQL, and SQL Server.",
      icon: "Server"
    },
    {
      title: "Software Quality Assurance",
      description: "Rigorous functional, regression, API testing (Postman, Swagger), UI automation (Selenium IDE), security scans (OWASP ZAP), and Lighthouse accessibility audits.",
      icon: "ShieldCheck"
    }
  ],
  whatIEnjoy: [
    "Scalable web applications with clean, maintainable architecture",
    "Backend architecture, RESTful API design, and microservices",
    "Database design, relational schema normalization, and query optimization",
    "Application security, token-based authentication, and role-based access control",
    "Comprehensive software testing, debugging, and regression verification",
    "Performance tuning, WCAG accessibility, and technical SEO compliance"
  ],
  portraitImage: "/images/sadia-portrait-new.jpg",
  profileImage: "/images/sadia-portrait-new.jpg",
  campusImage: "/images/sadia-campus.jpg",
  deansCertificateImage: "/images/deans-honorable.jpeg",
  contact: {
    email: "tabassum.aktar24@gmail.com",
    phone: "+880 1632798502",
    location: "Dhaka, Bangladesh",
    github: "https://github.com/SadiaTabas",
    linkedin: "https://www.linkedin.com/in/tabassum-aktar-sadia20044/"
  },
  cvDownloads: [
    {
      title: "Backend Development CV",
      description: "API architecture, NestJS, ASP.NET Core, database design, and authentication workflows.",
      path: "/cv/Tabassum_Aktar_Sadia_Backend_CV.pdf",
      fileName: "Tabassum_Aktar_Sadia_Backend_CV.pdf",
      isPrimary: true,
      tag: "Official Resume"
    }
  ]
};

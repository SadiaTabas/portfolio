import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import DiscrepancyNotice from "@/components/ui/DiscrepancyNotice";

export const metadata: Metadata = {
  metadataBase: new URL("https://tabassum-aktar-sadia.dev"),
  title: "Tabassum Aktar Sadia | Full-Stack Web Developer & Software Engineer",
  description:
    "Portfolio of Tabassum Aktar Sadia, Computer Science & Engineering professional from AIUB with hands-on production experience in Next.js, React, Laravel, NestJS, ASP.NET Core, and Software Quality Assurance.",
  keywords: [
    "Tabassum Aktar Sadia",
    "Full-Stack Web Developer",
    "Backend Developer",
    "Software Quality Assurance",
    "Next.js Developer",
    "Laravel Developer",
    "NestJS",
    "ASP.NET Core",
    "Dhaka Bangladesh Developer",
    "AIUB"
  ],
  authors: [{ name: "Tabassum Aktar Sadia", url: "https://github.com/SadiaTabas" }],
  creator: "Tabassum Aktar Sadia",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tabassum-aktar-sadia.dev",
    title: "Tabassum Aktar Sadia | Full-Stack Web Developer & Software Engineer",
    description:
      "Modern editorial developer portfolio presenting production client platforms, engineering projects, technical skills, and software quality assurance experience.",
    siteName: "Tabassum Aktar Sadia Portfolio",
    images: [
      {
        url: "/images/sadia-portrait-cutout.png",
        width: 1200,
        height: 630,
        alt: "Tabassum Aktar Sadia - Full-Stack Web Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabassum Aktar Sadia | Full-Stack Web Developer",
    description:
      "Computer Science & Engineering student at AIUB with hands-on industry experience across 7+ production platforms.",
    images: ["/images/sadia-portrait-cutout.png"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tabassum Aktar Sadia",
  jobTitle: "Full-Stack Web Developer & Software Quality Assurance Engineer",
  url: "https://github.com/SadiaTabas",
  image: "https://tabassum-aktar-sadia.dev/images/sadia-portrait-cutout.png",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "American International University-Bangladesh"
  },
  sameAs: [
    "https://github.com/SadiaTabas",
    "https://www.linkedin.com/in/tabassum-aktar-sadia20044/"
  ],
  knowsAbout: [
    "Web Development",
    "Next.js",
    "React.js",
    "Laravel",
    "Node.js",
    "NestJS",
    "ASP.NET Core",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Software Quality Assurance",
    "Selenium IDE",
    "OWASP ZAP",
    "Technical SEO"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F3EEEA] text-[#171717] flex flex-col font-sans selection:bg-[#FF8500] selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20 sm:pt-24">{children}</main>
        <DiscrepancyNotice />
        <Footer />
      </body>
    </html>
  );
}

export interface EducationRecord {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  timeline: string;
  score: string;
  scoreLabel: string;
  status: string;
  coursework?: string[];
  notes?: string;
}

export interface AcademicAchievement {
  id: string;
  title: string;
  organization: string;
  timeline: string;
  description: string;
  verifiedAssetPath?: string;
}

export const educationData: EducationRecord[] = [
  {
    id: "bsc-cse",
    degree: "BSc in Computer Science and Engineering",
    field: "Computer Science and Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    timeline: "June 2023 – Expected December 2026",
    score: "3.97 / 4.00",
    scoreLabel: "CGPA",
    status: "Final Semester",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Software Engineering & SDLC",
      "Web Technologies & Frameworks",
      "Computer Networks & Security",
      "Software Testing & Quality Assurance"
    ],
    notes: "Consistently top-ranked student in the Department of Computer Science and Engineering with an outstanding CGPA of 3.97 / 4.00."
  },
  {
    id: "hsc-science",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Dhaka Cantonment Girl's Public School and College",
    location: "Dhaka, Bangladesh",
    timeline: "2019 – 2021",
    score: "5.00 / 5.00",
    scoreLabel: "GPA",
    status: "Completed with Distinction",
    notes: "Achieved the highest academic distinction (Golden GPA 5.00) in the National Board Examination."
  },
  {
    id: "ssc-science",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Banani Bidyaniketan School and College",
    location: "Dhaka, Bangladesh",
    timeline: "2017 – 2019",
    score: "5.00 / 5.00",
    scoreLabel: "GPA",
    status: "Completed with Distinction",
    notes: "Achieved perfect GPA 5.00 with academic honors."
  }
];

export const achievementsData: AcademicAchievement[] = [
  {
    id: "deans-honorable",
    title: "Dean's Honorable Mention for Academic Excellence",
    organization: "American International University-Bangladesh (AIUB)",
    timeline: "Academic Award",
    description:
      "Awarded in formal recognition of outstanding scholastic achievement, exceptional semester GPA performance, and sustained academic dedication within the Department of Computer Science and Engineering.",
    verifiedAssetPath: "/images/deans-honorable.jpeg"
  },
  {
    id: "govt-scholarship",
    title: "Government Scholarship Awardee",
    organization: "Ministry of Education, Bangladesh",
    timeline: "Merit Distinction",
    description:
      "Selected as a talent-pool scholarship recipient based on high-ranking standardized academic performance in secondary school examinations."
  }
];

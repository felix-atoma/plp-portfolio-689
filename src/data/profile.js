// Portfolio content, taken from Felix Atoma's CV (public/Felix_Atoma_CV.pdf)

export const CV_URL = "/Felix_Atoma_CV.pdf";

export const contact = {
  location: "Accra, Ghana",
  phone: "+233 24 417 3068",
  phoneHref: "tel:+233244173068",
  email: "felixatoma2@gmail.com",
  linkedin: "https://linkedin.com/in/felix-atoma-714abb269",
  whatsapp: "https://wa.me/233244173068",
};

export const summary =
  "Bilingual software developer and French–English translator, a native French speaker fluent in English. I build and deploy secure full-stack web applications with Node.js, NestJS, React, Python and SQL, and I created NovaBulletin, a live school management platform.";

export const technicalSkills = [
  { group: "Development", items: ["JavaScript", "React", "Node.js / Express", "NestJS", "Python", "SQL / MongoDB", "HTML / CSS", "REST APIs"] },
  { group: "Platforms & tools", items: ["Git / GitHub", "Render / Vercel", "Firebase", "WordPress"] },
  { group: "Translation & office", items: ["SDL Trados", "MemoQ", "Microsoft Office", "Google Workspace"] },
];

export const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const competencies = [
  "Full-stack development",
  "Secure data handling",
  "Translation",
  "Technical documentation",
  "Confidentiality & discretion",
  "Problem solving",
  "Attention to detail",
  "Cross-cultural communication",
];

export const experience = [
  {
    role: "Founder & Lead Developer",
    org: "NovaBulletin (school management platform)",
    period: "Ongoing",
    points: [
      "Designed, built and deployed a full-stack platform managing student records, grades, report cards, attendance, fees and parent communication.",
      "Developed the NestJS back end and REST API; deployed to the cloud (Render, Vercel) with role-based access for five user types.",
      "Implemented security features including QR-code verification of report cards against forgery, one-time-code login and controlled access to sensitive data.",
    ],
  },
  {
    role: "IT Facilitator",
    org: "NSPS Capacity-Building Programme (NASPA / Zeus Atlas Limited)",
    period: "Feb – Jul 2026",
    points: ["Taught coding and IT essentials to national service personnel; prepared lessons, exercises and assessments."],
  },
  {
    role: "French–English Translator",
    org: "University of Ghana Translation Bureau",
    period: "Aug 2025 – Present",
    points: ["Translate administrative, academic and technical documents with strict accuracy and confidentiality."],
  },
  {
    role: "Freelance Web Developer",
    org: "Accra",
    period: "Ongoing",
    points: ["Build websites and web applications for businesses, including e-commerce, legal services and multi-service companies."],
  },
  {
    role: "Senior French & English Educator / Academic Coordinator",
    org: "Liberty Lyceum, Accra",
    period: "Sept 2025 – Present",
    points: ["Manage student records, timetables and official correspondence; liaise with staff and parents in French and English."],
  },
  {
    role: "Software Developer (Internship)",
    org: "Corextreme, Douala, Cameroon",
    period: "Jun – Aug 2024",
    points: ["Built office management tools and maintained technical documentation in a bilingual French–English environment."],
  },
  {
    role: "Educator & Curriculum Coordinator",
    org: "John Taylor Memorial School, Accra",
    period: "2021 – 2024",
    points: ["Designed documentation systems for academic records and administered a tech-enhanced curriculum environment."],
  },
  {
    role: "National Examination Grader",
    org: "Office du Baccalauréat",
    period: "4 years",
    points: ["Handled confidential national examination scripts under strict security, quality and consistency standards."],
  },
];

export const education = [
  { title: "Software Engineering Programme: Python, SQL, Full-Stack Web Development (MERN)", org: "Power Learn Project", year: "2025" },
  { title: "Junior Web Developer Programme", org: "Generation Ghana & MEST Africa, Mastercard Foundation GROW project", year: "2024" },
  { title: "First Degree (BA) in English", org: "Université de Lomé", year: "2012" },
  { title: "Soft Skills Certification", org: "M-FIT Program (Jobberman Ghana & GIZ)", year: "" },
];

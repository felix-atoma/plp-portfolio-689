// Portfolio content, taken from Felix Atoma's CV (public/Felix_Atoma_CV.pdf).
// Text that changes with the language is an { en, fr } pair, read with tr() from useLanguage().

export const CV_URL = "/Felix_Atoma_CV.pdf";

export const contact = {
  location: "Accra, Ghana",
  phone: "+233 24 417 3068",
  phoneHref: "tel:+233244173068",
  email: "felixatoma2@gmail.com",
  linkedin: "https://linkedin.com/in/felix-atoma-714abb269",
  whatsapp: "https://wa.me/233244173068",
  facebook: "https://www.facebook.com/felix.atoma.1",
};

export const technicalSkills = [
  {
    group: { en: "Development", fr: "Développement" },
    items: ["JavaScript", "React", "Node.js / Express", "NestJS", "Python", "SQL / MongoDB", "HTML / CSS", "REST APIs"],
  },
  {
    group: { en: "Platforms & tools", fr: "Plateformes & outils" },
    items: ["Git / GitHub", "Render / Vercel", "Firebase", "WordPress"],
  },
  {
    group: { en: "Translation & office", fr: "Traduction & bureautique" },
    items: ["SDL Trados", "MemoQ", "Microsoft Office", "Google Workspace"],
  },
];

export const languages = [
  { name: { en: "French", fr: "Français" }, level: { en: "Native", fr: "Langue maternelle" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "Fluent", fr: "Courant" } },
];

export const competencies = [
  { en: "Full-stack development", fr: "Développement full-stack" },
  { en: "Secure data handling", fr: "Gestion sécurisée des données" },
  { en: "Translation", fr: "Traduction" },
  { en: "Technical documentation", fr: "Documentation technique" },
  { en: "Confidentiality & discretion", fr: "Confidentialité & discrétion" },
  { en: "Problem solving", fr: "Résolution de problèmes" },
  { en: "Attention to detail", fr: "Souci du détail" },
  { en: "Cross-cultural communication", fr: "Communication interculturelle" },
];

export const experience = [
  {
    role: { en: "Founder & Lead Developer", fr: "Fondateur & développeur principal" },
    org: { en: "NovaBulletin (school management platform)", fr: "NovaBulletin (plateforme de gestion scolaire)" },
    period: { en: "Ongoing", fr: "En cours" },
    points: [
      {
        en: "Designed, built and deployed a full-stack platform managing student records, grades, report cards, attendance, fees and parent communication.",
        fr: "Conception, développement et déploiement d'une plateforme full-stack gérant les dossiers des élèves, les notes, les bulletins, les présences, les frais de scolarité et la communication avec les parents.",
      },
      {
        en: "Developed the NestJS back end and REST API; deployed to the cloud (Render, Vercel) with role-based access for five user types.",
        fr: "Développement du back-end NestJS et de l'API REST ; déploiement dans le cloud (Render, Vercel) avec un accès par rôle pour cinq types d'utilisateurs.",
      },
      {
        en: "Implemented security features including QR-code verification of report cards against forgery, one-time-code login and controlled access to sensitive data.",
        fr: "Mise en place de fonctions de sécurité : vérification des bulletins par QR code contre la falsification, connexion par code à usage unique et accès contrôlé aux données sensibles.",
      },
    ],
  },
  {
    role: { en: "IT Facilitator", fr: "Formateur en informatique" },
    org: { en: "NSPS Capacity-Building Programme (NASPA / Zeus Atlas Limited)", fr: "Programme de renforcement des capacités NSPS (NASPA / Zeus Atlas Limited)" },
    period: { en: "Feb – Jul 2026", fr: "Févr. – juil. 2026" },
    points: [
      {
        en: "Taught coding and IT essentials to national service personnel; prepared lessons, exercises and assessments.",
        fr: "Enseignement de la programmation et des bases de l'informatique au personnel du service national ; préparation des cours, exercices et évaluations.",
      },
    ],
  },
  {
    role: { en: "French–English Translator", fr: "Traducteur français–anglais" },
    org: { en: "University of Ghana Translation Bureau", fr: "Bureau de traduction de l'Université du Ghana" },
    period: { en: "Aug 2025 – Present", fr: "Août 2025 – aujourd'hui" },
    points: [
      {
        en: "Translate administrative, academic and technical documents with strict accuracy and confidentiality.",
        fr: "Traduction de documents administratifs, académiques et techniques avec une exactitude et une confidentialité rigoureuses.",
      },
    ],
  },
  {
    role: { en: "Freelance Web Developer", fr: "Développeur web freelance" },
    org: { en: "Accra", fr: "Accra" },
    period: { en: "Ongoing", fr: "En cours" },
    points: [
      {
        en: "Build websites and web applications for businesses, including e-commerce, legal services and multi-service companies.",
        fr: "Création de sites et d'applications web pour des entreprises : e-commerce, services juridiques et sociétés multiservices.",
      },
    ],
  },
  {
    role: { en: "Senior Educator, Head of English Department", fr: "Enseignant principal, chef du département d'anglais" },
    org: { en: "Collège St Pierre Claver", fr: "Collège St Pierre Claver" },
    period: { en: "Oct 2012 – Present", fr: "Oct. 2012 – aujourd'hui" },
    points: [
      {
        en: "Lead the English department and teach English.",
        fr: "Direction du département d'anglais et enseignement de l'anglais.",
      },
    ],
  },
  {
    role: { en: "Software Developer (Internship)", fr: "Développeur logiciel (stage)" },
    org: { en: "Corextreme, Douala, Cameroon", fr: "Corextreme, Douala, Cameroun" },
    period: { en: "Jun – Aug 2024", fr: "Juin – août 2024" },
    points: [
      {
        en: "Built office management tools and maintained technical documentation in a bilingual French–English environment.",
        fr: "Développement d'outils de gestion de bureau et tenue de la documentation technique dans un environnement bilingue français–anglais.",
      },
    ],
  },
  {
    role: { en: "Educator & Curriculum Coordinator", fr: "Enseignant & coordinateur des programmes" },
    org: { en: "John Taylor Memorial School, Accra", fr: "John Taylor Memorial School, Accra" },
    period: { en: "2021 – 2024", fr: "2021 – 2024" },
    points: [
      {
        en: "Designed documentation systems for academic records and administered a tech-enhanced curriculum environment.",
        fr: "Conception de systèmes de documentation pour les dossiers scolaires et gestion d'un environnement pédagogique enrichi par le numérique.",
      },
    ],
  },
  {
    role: { en: "National Examination Grader", fr: "Correcteur d'examens nationaux" },
    org: { en: "Office du Baccalauréat", fr: "Office du Baccalauréat" },
    period: { en: "4 years", fr: "4 ans" },
    points: [
      {
        en: "Handled confidential national examination scripts under strict security, quality and consistency standards.",
        fr: "Traitement de copies d'examens nationaux confidentielles selon des normes strictes de sécurité, de qualité et de cohérence.",
      },
    ],
  },
];

export const education = [
  {
    title: {
      en: "Software Engineering Programme: Python, SQL, Full-Stack Web Development (MERN)",
      fr: "Programme d'ingénierie logicielle : Python, SQL, développement web full-stack (MERN)",
    },
    org: { en: "Power Learn Project", fr: "Power Learn Project" },
    year: "2025",
  },
  {
    title: { en: "Junior Web Developer Programme", fr: "Programme Développeur web junior" },
    org: {
      en: "Generation Ghana & MEST Africa, Mastercard Foundation GROW project",
      fr: "Generation Ghana & MEST Africa, projet GROW de la Fondation Mastercard",
    },
    year: "2024",
  },
  {
    title: { en: "First Degree (BA) in English", fr: "Licence d'anglais" },
    org: { en: "Université de Lomé", fr: "Université de Lomé" },
    year: "2012",
  },
  {
    title: { en: "Soft Skills Certification", fr: "Certification en compétences comportementales" },
    org: { en: "M-FIT Program (Jobberman Ghana & GIZ)", fr: "Programme M-FIT (Jobberman Ghana & GIZ)" },
    year: "",
  },
];

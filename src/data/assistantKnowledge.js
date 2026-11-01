// Everything the portfolio assistant knows. Facts come from Felix's CV (src/data/profile.js)
// and NovaBulletin's own website. Each topic has:
//   keywords  matched against the visitor's question (accents and case are ignored;
//             one-word keywords also match longer words that start with them)
//   requires  optional: the topic only counts if one of these words is also present
//   weight    optional score multiplier (low for small talk, so real questions win)
//   answer    { en, fr }
//   actions   buttons under the answer: { to } site page, { href } external link, download
//   next      topic ids offered as follow-up suggestions
import { CV_URL, contact } from "./profile";
import { NOVABULLETIN_URL } from "./links";

const A = {
  contact: { label: { en: "Contact page", fr: "Page contact" }, to: "/contact" },
  services: { label: { en: "See services", fr: "Voir les services" }, to: "/services" },
  work: { label: { en: "Work & experience", fr: "Réalisations & parcours" }, to: "/work" },
  cv: { label: { en: "Download CV (PDF)", fr: "Télécharger le CV (PDF)" }, href: CV_URL, download: true },
  nova: { label: { en: "Open NovaBulletin", fr: "Ouvrir NovaBulletin" }, href: NOVABULLETIN_URL },
  email: { label: { en: "Send an email", fr: "Envoyer un e-mail" }, href: `mailto:${contact.email}` },
  whatsapp: { label: { en: "WhatsApp", fr: "WhatsApp" }, href: contact.whatsapp },
  call: { label: { en: "Call", fr: "Appeler" }, href: contact.phoneHref },
  linkedin: { label: { en: "LinkedIn", fr: "LinkedIn" }, href: contact.linkedin },
  facebook: { label: { en: "Facebook", fr: "Facebook" }, href: contact.facebook },
};

export const topics = [
  // ---------- Small talk ----------
  {
    id: "greeting",
    weight: 0.5,
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "bonjour", "salut", "bonsoir", "coucou"],
    answer: {
      en: "Hello! 👋 Nice to meet you. What would you like to know about Felix?",
      fr: "Bonjour ! 👋 Ravi de vous rencontrer. Que souhaitez-vous savoir sur Felix ?",
    },
    next: ["about", "novabulletin", "skills", "hire"],
  },
  {
    id: "howAreYou",
    weight: 0.8,
    keywords: ["how are you", "how's it going", "how is it going", "ca va", "comment vas", "comment allez"],
    answer: {
      en: "I'm doing great, thanks for asking! 😊 How can I help you today?",
      fr: "Je vais très bien, merci ! 😊 Comment puis-je vous aider aujourd'hui ?",
    },
    next: ["about", "novabulletin", "services"],
  },
  {
    id: "botIdentity",
    keywords: ["are you a bot", "are you human", "are you real", "who are you", "what are you", "es-tu un robot", "etes-vous un robot", "qui es-tu", "qui etes-vous", "es tu humain"],
    answer: {
      en: "I'm a small assistant built into Felix's portfolio. I answer from his CV and his NovaBulletin project. For anything I can't answer, you can reach Felix directly.",
      fr: "Je suis un petit assistant intégré au portfolio de Felix. Je réponds à partir de son CV et de son projet NovaBulletin. Pour tout ce que je ne sais pas, vous pouvez contacter Felix directement.",
    },
    actions: [A.contact],
    next: ["about", "help"],
  },
  {
    id: "thanks",
    weight: 0.6,
    keywords: ["thank", "thanks", "thx", "merci"],
    answer: {
      en: "You're very welcome! Is there anything else you'd like to know?",
      fr: "Avec plaisir ! Souhaitez-vous savoir autre chose ?",
    },
    next: ["hire", "cv", "contact"],
  },
  {
    id: "goodbye",
    weight: 0.6,
    keywords: ["bye", "goodbye", "see you", "have a nice", "au revoir", "bonne journee", "bonne soiree", "a bientot", "a plus"],
    answer: {
      en: "It was lovely chatting with you! Have a wonderful day, and feel free to come back anytime. 🌞",
      fr: "Ravi d'avoir échangé avec vous ! Excellente journée, et revenez quand vous voulez. 🌞",
    },
  },
  {
    id: "help",
    weight: 0.7,
    keywords: ["help", "assist", "what can you do", "what can i ask", "aide", "aider", "que peux-tu", "que pouvez-vous"],
    answer: {
      en: "I can tell you about Felix's skills, NovaBulletin, his work experience, translation services, education, rates and how to contact him. Pick a topic below or type your question.",
      fr: "Je peux vous parler des compétences de Felix, de NovaBulletin, de son parcours, de ses services de traduction, de sa formation, de ses tarifs et de la façon de le contacter. Choisissez un sujet ci-dessous ou posez votre question.",
    },
    next: ["about", "skills", "novabulletin", "translation", "hire", "contact"],
  },

  // ---------- About Felix ----------
  {
    id: "about",
    weight: 0.8,
    keywords: ["who is", "about felix", "about him", "tell me about", "introduce", "background", "qui est", "presente", "parle-moi de", "parlez-moi de", "a propos"],
    answer: {
      en: "Felix Atoma is a bilingual software developer and French–English translator based in Accra, Ghana. He's a native French speaker, fluent in English, and the founder and lead developer of NovaBulletin, a live school management platform. He brings over 12 years of professional experience across software, translation and education.",
      fr: "Felix Atoma est développeur logiciel bilingue et traducteur français–anglais, basé à Accra, au Ghana. Le français est sa langue maternelle et il parle couramment l'anglais. Il est le fondateur et développeur principal de NovaBulletin, une plateforme de gestion scolaire en ligne, et cumule plus de 12 ans d'expérience professionnelle entre logiciel, traduction et enseignement.",
    },
    actions: [A.work, A.cv],
    next: ["skills", "novabulletin", "experience", "languages"],
  },
  {
    id: "yearsExperience",
    keywords: ["how many years", "how long has he", "years of experience", "how experienced", "combien d'annees", "combien d'ans", "annees d'experience"],
    answer: {
      en: "Felix has over 12 years of professional experience, spanning software development, French–English translation, teaching and academic coordination.",
      fr: "Felix a plus de 12 ans d'expérience professionnelle, entre développement logiciel, traduction français–anglais, enseignement et coordination pédagogique.",
    },
    next: ["experience", "skills"],
  },
  {
    id: "location",
    weight: 0.9,
    keywords: ["where", "location", "located", "based", "live", "country", "city", "accra", "ghana", "togo", "ou est", "ou habite", "ou vit", "ville", "pays", "base"],
    answer: {
      en: "Felix is based in Accra, Ghana. He studied at the Université de Lomé in Togo and works in both English and French.",
      fr: "Felix est basé à Accra, au Ghana. Il a étudié à l'Université de Lomé, au Togo, et travaille en français comme en anglais.",
    },
    next: ["contact", "languages"],
  },
  {
    id: "strengths",
    keywords: ["strength", "quality", "qualities", "soft skill", "key competenc", "why should", "why hire", "point fort", "competences cles", "qualite", "pourquoi"],
    answer: {
      en: "Felix's key competencies: full-stack development, secure data handling, translation, technical documentation, confidentiality and discretion, problem solving, attention to detail and cross-cultural communication. Years of handling confidential exam scripts and documents shaped how carefully he treats data.",
      fr: "Les compétences clés de Felix : développement full-stack, gestion sécurisée des données, traduction, documentation technique, confidentialité et discrétion, résolution de problèmes, souci du détail et communication interculturelle. Des années de traitement de copies d'examens et de documents confidentiels ont forgé sa rigueur avec les données.",
    },
    next: ["security", "hire", "experience"],
  },

  // ---------- Skills ----------
  {
    id: "skills",
    keywords: ["skill", "tech", "stack", "technolog", "tools", "programming", "languages does he code", "what does he use", "competence", "outil", "programmation"],
    answer: {
      en: "Felix builds secure full-stack web apps. Development: JavaScript, React, Node.js / Express, NestJS, Python, SQL / MongoDB, HTML / CSS and REST APIs. Platforms: Git / GitHub, Render / Vercel, Firebase and WordPress. Translation & office: SDL Trados, MemoQ, Microsoft Office and Google Workspace.",
      fr: "Felix crée des applications web full-stack sécurisées. Développement : JavaScript, React, Node.js / Express, NestJS, Python, SQL / MongoDB, HTML / CSS et API REST. Plateformes : Git / GitHub, Render / Vercel, Firebase et WordPress. Traduction & bureautique : SDL Trados, MemoQ, Microsoft Office et Google Workspace.",
    },
    next: ["frontend", "backend", "deployment", "security"],
  },
  {
    id: "frontend",
    keywords: ["react", "frontend", "front-end", "front end", "javascript", "html", "css", "ui", "interface", "user interface"],
    answer: {
      en: "On the front end Felix works with React, JavaScript, HTML and CSS. NovaBulletin's web app and this portfolio are both built with React.",
      fr: "Côté front-end, Felix travaille avec React, JavaScript, HTML et CSS. L'application web de NovaBulletin et ce portfolio sont tous deux construits avec React.",
    },
    next: ["backend", "thisSite", "novabulletin"],
  },
  {
    id: "backend",
    keywords: ["backend", "back-end", "back end", "server", "node", "nestjs", "nest", "express", "api", "rest", "database", "sql", "mongo", "python", "base de donnees", "serveur"],
    answer: {
      en: "On the back end Felix uses Node.js with Express and NestJS, Python, SQL and MongoDB, and designs REST APIs. He built NovaBulletin's back end and REST API with NestJS, including role-based access for five user types.",
      fr: "Côté back-end, Felix utilise Node.js avec Express et NestJS, Python, SQL et MongoDB, et conçoit des API REST. Il a développé le back-end et l'API REST de NovaBulletin avec NestJS, avec un accès par rôle pour cinq types d'utilisateurs.",
    },
    next: ["deployment", "security", "novabulletinTech"],
  },
  {
    id: "deployment",
    keywords: ["deploy", "hosting", "host", "cloud", "vercel", "render", "firebase", "git", "github", "devops", "deploiement", "hebergement"],
    answer: {
      en: "Felix deploys to the cloud with Render and Vercel, uses Firebase, and manages code with Git and GitHub. NovaBulletin runs on Render and Vercel, and this portfolio is hosted on Vercel.",
      fr: "Felix déploie dans le cloud avec Render et Vercel, utilise Firebase et gère son code avec Git et GitHub. NovaBulletin tourne sur Render et Vercel, et ce portfolio est hébergé sur Vercel.",
    },
    next: ["backend", "security"],
  },
  {
    id: "security",
    keywords: ["security", "secure", "auth", "authentication", "login", "otp", "one-time", "qr", "forgery", "fraud", "data protection", "privacy", "confidential", "securite", "securise", "falsification", "confidentialite", "donnees sensibles"],
    answer: {
      en: "Security is central to Felix's work. In NovaBulletin he implemented QR-code verification of report cards against forgery, one-time-code login, role-based access and controlled access to sensitive data. His translation and exam-grading work also involves strict confidentiality.",
      fr: "La sécurité est au cœur du travail de Felix. Dans NovaBulletin, il a mis en place la vérification des bulletins par QR code contre la falsification, la connexion par code à usage unique, l'accès par rôle et un accès contrôlé aux données sensibles. Ses missions de traduction et de correction d'examens exigent aussi une stricte confidentialité.",
    },
    next: ["novabulletin", "backend"],
  },
  {
    id: "wordpress",
    keywords: ["wordpress", "cms", "wix", "site vitrine"],
    answer: {
      en: "Yes, Felix works with WordPress as well as custom React and Node.js builds, so he can recommend whichever fits your website best.",
      fr: "Oui, Felix travaille avec WordPress ainsi qu'avec des développements sur mesure en React et Node.js, et peut vous conseiller la solution la plus adaptée à votre site.",
    },
    actions: [A.services],
    next: ["freelance", "pricing"],
  },

  // ---------- NovaBulletin ----------
  {
    id: "novabulletin",
    keywords: ["novabulletin", "nova", "project", "built", "portfolio project", "app he made", "projet", "realisation", "cree", "application"],
    answer: {
      en: "NovaBulletin is the school management platform Felix founded and builds as lead developer. It manages student records, grades, report cards, attendance, fees and parent communication. Averages are calculated automatically, report cards are generated as PDFs in one click, and parents are notified by WhatsApp and SMS.",
      fr: "NovaBulletin est la plateforme de gestion scolaire que Felix a fondée et qu'il développe en tant que développeur principal. Elle gère les dossiers des élèves, les notes, les bulletins, les présences, les frais de scolarité et la communication avec les parents. Les moyennes sont calculées automatiquement, les bulletins générés en PDF en un clic, et les parents prévenus par WhatsApp et SMS.",
    },
    actions: [A.nova],
    next: ["novabulletinFeatures", "novabulletinTech", "novabulletinSchools"],
  },
  {
    id: "novabulletinFeatures",
    keywords: ["feature", "function", "what can it do", "report card", "bulletin", "grade", "average", "attendance", "fees", "parents", "whatsapp alert", "lms", "homework", "quiz", "library", "fonctionnalit", "notes", "moyenne", "presence", "frais", "devoir", "bibliotheque"],
    answer: {
      en: "NovaBulletin's main features: automatic grade averages; PDF report cards with the school's logo; report cards sent to parents on WhatsApp; fee management; dashboards for admins, teachers, parents, students and the bursar; mobile grade sheets for teachers; a built-in LMS with courses, homework and online quizzes; digitized school registers; CSV import/export; real-time statistics; attendance, health, library and inventory; plus Android and iOS apps.",
      fr: "Principales fonctionnalités de NovaBulletin : calcul automatique des moyennes ; bulletins PDF avec le logo de l'école ; envoi des bulletins aux parents sur WhatsApp ; gestion des frais de scolarité ; tableaux de bord pour l'administration, les enseignants, les parents, les élèves et l'économe ; fiches de notes mobiles pour les enseignants ; plateforme de cours intégrée (cours, devoirs, quiz en ligne) ; registres scolaires numérisés ; import/export CSV ; statistiques en temps réel ; présences, santé, bibliothèque et inventaire ; et applications Android et iOS.",
    },
    actions: [A.nova],
    next: ["novabulletinTech", "novabulletinSchools", "security"],
  },
  {
    id: "novabulletinTech",
    requires: ["novabulletin", "nova", "it", "platform", "plateforme", "app"],
    keywords: ["built with", "stack", "tech", "how was it built", "how is it built", "architecture", "nestjs", "backend", "construit", "technologie"],
    answer: {
      en: "NovaBulletin has a NestJS back end with a REST API and a React web front end, deployed on Render and Vercel. Access is role-based for five user types, with QR-code verification of report cards and one-time-code login.",
      fr: "NovaBulletin repose sur un back-end NestJS avec une API REST et un front-end web en React, déployés sur Render et Vercel. L'accès est géré par rôle pour cinq types d'utilisateurs, avec vérification des bulletins par QR code et connexion par code à usage unique.",
    },
    next: ["security", "novabulletinFeatures"],
  },
  {
    id: "novabulletinSchools",
    keywords: ["my school", "our school", "for schools", "use it", "sign up", "register", "try", "demo", "trial", "subscribe", "countries", "mon ecole", "notre ecole", "inscri", "essai", "essayer", "demonstration", "abonnement"],
    answer: {
      en: "NovaBulletin is designed for schools in West Africa, in French and English, and is available on the web, Android and iOS. Visit the site to see how it works, check the plans and start a trial, or contact Felix to discuss your school's needs.",
      fr: "NovaBulletin est conçu pour les écoles d'Afrique de l'Ouest, en français et en anglais, et disponible sur le web, Android et iOS. Visitez le site pour voir son fonctionnement, consulter les offres et démarrer un essai, ou contactez Felix pour parler des besoins de votre école.",
    },
    actions: [A.nova, A.contact],
    next: ["novabulletinFeatures", "contact"],
  },
  {
    id: "otherProjects",
    keywords: ["other project", "more project", "another project", "other work", "autres projets", "autre projet"],
    answer: {
      en: "NovaBulletin is Felix's featured project. As a freelance web developer he also builds websites and web apps for businesses, including e-commerce, legal services and multi-service companies.",
      fr: "NovaBulletin est le projet phare de Felix. En tant que développeur web freelance, il crée aussi des sites et applications web pour des entreprises : e-commerce, services juridiques et sociétés multiservices.",
    },
    actions: [A.work],
    next: ["freelance", "novabulletin"],
  },

  // ---------- Experience ----------
  {
    id: "experience",
    keywords: ["experience", "work history", "career", "job", "jobs", "worked", "employment", "roles", "parcours", "carriere", "poste", "emploi", "travaille"],
    answer: {
      en: "Felix's experience: Founder & Lead Developer of NovaBulletin; French–English Translator at the University of Ghana Translation Bureau (since Aug 2025); Senior French & English Educator / Academic Coordinator at Liberty Lyceum (since Sept 2025); Freelance Web Developer; IT Facilitator on the NSPS programme (Feb – Jul 2026); Software Developer intern at Corextreme, Cameroon (2024); Educator & Curriculum Coordinator at John Taylor Memorial School (2021 – 2024); and 4 years as a National Examination Grader.",
      fr: "Parcours de Felix : fondateur et développeur principal de NovaBulletin ; traducteur français–anglais au Bureau de traduction de l'Université du Ghana (depuis août 2025) ; enseignant principal de français et d'anglais / coordinateur pédagogique au Liberty Lyceum (depuis sept. 2025) ; développeur web freelance ; formateur en informatique sur le programme NSPS (févr. – juil. 2026) ; stagiaire développeur chez Corextreme, au Cameroun (2024) ; enseignant et coordinateur des programmes à la John Taylor Memorial School (2021 – 2024) ; et 4 ans comme correcteur d'examens nationaux.",
    },
    actions: [A.work, A.cv],
    next: ["translatorJob", "teaching", "internship"],
  },
  {
    id: "translatorJob",
    keywords: ["university of ghana", "translation bureau", "bureau de traduction", "universite du ghana"],
    answer: {
      en: "Since August 2025 Felix has been a French–English Translator at the University of Ghana Translation Bureau, translating administrative, academic and technical documents with strict accuracy and confidentiality.",
      fr: "Depuis août 2025, Felix est traducteur français–anglais au Bureau de traduction de l'Université du Ghana, où il traduit des documents administratifs, académiques et techniques avec exactitude et confidentialité.",
    },
    next: ["translation", "translationTools"],
  },
  {
    id: "teaching",
    keywords: ["teach", "taught", "teacher", "educator", "tutor", "trainer", "training", "liberty lyceum", "john taylor", "nsps", "facilitator", "enseign", "professeur", "formateur", "cours"],
    answer: {
      en: "Felix has a strong teaching background: Senior French & English Educator and Academic Coordinator at Liberty Lyceum (since Sept 2025), IT Facilitator teaching coding and IT essentials to national service personnel on the NSPS programme (Feb – Jul 2026), and Educator & Curriculum Coordinator at John Taylor Memorial School (2021 – 2024). He can run coding and IT training in English or French.",
      fr: "Felix a une solide expérience d'enseignement : enseignant principal de français et d'anglais et coordinateur pédagogique au Liberty Lyceum (depuis sept. 2025), formateur en programmation et informatique pour le personnel du service national sur le programme NSPS (févr. – juil. 2026), et enseignant et coordinateur des programmes à la John Taylor Memorial School (2021 – 2024). Il peut animer des formations en programmation et en informatique, en français ou en anglais.",
    },
    actions: [A.services],
    next: ["experience", "services"],
  },
  {
    id: "internship",
    keywords: ["corextreme", "cameroon", "cameroun", "douala", "internship", "intern", "stage", "stagiaire"],
    answer: {
      en: "From June to August 2024 Felix was a Software Developer intern at Corextreme in Douala, Cameroon, where he built office management tools and maintained technical documentation in a bilingual French–English environment.",
      fr: "De juin à août 2024, Felix a été développeur logiciel stagiaire chez Corextreme à Douala, au Cameroun : il a développé des outils de gestion de bureau et tenu la documentation technique dans un environnement bilingue français–anglais.",
    },
    next: ["experience", "skills"],
  },
  {
    id: "examGrader",
    keywords: ["exam", "grader", "examiner", "baccalaureat", "bac", "correcteur", "correction", "examen"],
    answer: {
      en: "For 4 years Felix was a National Examination Grader for the Office du Baccalauréat, handling confidential exam scripts under strict security, quality and consistency standards.",
      fr: "Pendant 4 ans, Felix a été correcteur d'examens nationaux pour l'Office du Baccalauréat, traitant des copies confidentielles selon des normes strictes de sécurité, de qualité et de cohérence.",
    },
    next: ["strengths", "experience"],
  },
  {
    id: "freelance",
    keywords: ["freelance", "website for", "business website", "e-commerce", "ecommerce", "online store", "shop", "legal", "landing page", "site web", "site internet", "boutique", "entreprise"],
    answer: {
      en: "As a freelance web developer in Accra, Felix builds websites and web applications for businesses, including e-commerce stores, legal services firms and multi-service companies.",
      fr: "En tant que développeur web freelance à Accra, Felix crée des sites et applications web pour les entreprises : boutiques en ligne, cabinets de services juridiques et sociétés multiservices.",
    },
    actions: [A.services, A.contact],
    next: ["pricing", "timeline", "hire"],
  },

  // ---------- Languages & translation ----------
  {
    id: "languages",
    weight: 0.9,
    keywords: ["language", "speak", "french", "english", "bilingual", "native", "fluent", "langue", "parle", "francais", "anglais", "bilingue"],
    answer: {
      en: "Felix is a native French speaker and fluent in English, with a BA in English from Université de Lomé. He works, writes code and communicates comfortably in both languages.",
      fr: "Le français est la langue maternelle de Felix et il parle couramment l'anglais ; il est titulaire d'une licence d'anglais de l'Université de Lomé. Il travaille, code et communique aisément dans les deux langues.",
    },
    next: ["translation", "education"],
  },
  {
    id: "translation",
    keywords: ["translat", "translator", "interpret", "traduct", "tradui", "traducteur", "document"],
    answer: {
      en: "Felix offers French–English translation of administrative, academic and technical documents, with strict accuracy and confidentiality. He works as a translator at the University of Ghana Translation Bureau and uses professional tools such as SDL Trados and MemoQ.",
      fr: "Felix propose la traduction français–anglais de documents administratifs, académiques et techniques, avec exactitude et confidentialité. Il est traducteur au Bureau de traduction de l'Université du Ghana et utilise des outils professionnels comme SDL Trados et MemoQ.",
    },
    actions: [A.services, A.contact],
    next: ["translationTools", "pricing", "languages"],
  },
  {
    id: "translationTools",
    keywords: ["trados", "memoq", "cat tool", "translation memory", "memoire de traduction", "outil de traduction"],
    answer: {
      en: "Felix uses SDL Trados and MemoQ, the industry-standard translation memory tools, which keep terminology consistent across long and technical documents.",
      fr: "Felix utilise SDL Trados et MemoQ, les outils de mémoire de traduction de référence, qui garantissent une terminologie cohérente sur les documents longs et techniques.",
    },
    next: ["translation", "pricing"],
  },

  // ---------- Education ----------
  {
    id: "education",
    keywords: ["education", "degree", "study", "studied", "school did", "university", "certificat", "certification", "diploma", "qualification", "bootcamp", "formation", "diplome", "etudes", "licence", "universite"],
    answer: {
      en: "Felix's education: Software Engineering Programme (Python, SQL, full-stack MERN) at Power Learn Project, 2025; Junior Web Developer Programme with Generation Ghana & MEST Africa (Mastercard Foundation GROW project), 2024; BA in English, Université de Lomé, 2012; and a Soft Skills Certification from the M-FIT Program (Jobberman Ghana & GIZ).",
      fr: "Formation de Felix : programme d'ingénierie logicielle (Python, SQL, full-stack MERN) chez Power Learn Project, 2025 ; programme Développeur web junior avec Generation Ghana & MEST Africa (projet GROW de la Fondation Mastercard), 2024 ; licence d'anglais, Université de Lomé, 2012 ; et une certification en compétences comportementales du programme M-FIT (Jobberman Ghana & GIZ).",
    },
    actions: [A.cv],
    next: ["experience", "skills"],
  },

  // ---------- Working together ----------
  {
    id: "services",
    keywords: ["service", "offer", "what does he do", "what can he do", "propose", "offre", "que fait"],
    answer: {
      en: "Felix offers: full-stack web applications, business websites, school management with NovaBulletin, French–English translation, technical translation and documentation, and coding & IT training, all in English or French.",
      fr: "Felix propose : applications web full-stack, sites web d'entreprise, gestion scolaire avec NovaBulletin, traduction français–anglais, traduction technique et documentation, et formation en programmation et informatique, en français ou en anglais.",
    },
    actions: [A.services],
    next: ["pricing", "hire", "freelance"],
  },
  {
    id: "hire",
    keywords: ["hire", "hiring", "work with", "collaborate", "recruit", "job offer", "available", "availability", "opportunity", "freelance project", "engager", "embaucher", "recruter", "disponib", "collaborer", "travailler avec", "opportunite"],
    answer: {
      en: "Great! The best way to discuss a project, a role or a collaboration with Felix is the contact form, email or WhatsApp. Include a short description of what you need, in English or French.",
      fr: "Super ! Le meilleur moyen de parler d'un projet, d'un poste ou d'une collaboration avec Felix est le formulaire de contact, l'e-mail ou WhatsApp. Décrivez brièvement votre besoin, en français ou en anglais.",
    },
    actions: [A.contact, A.email, A.whatsapp],
    next: ["pricing", "timeline", "cv"],
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "rate", "rates", "charge", "budget", "quote", "how much", "fee for", "tarif", "prix", "cout", "devis", "combien"],
    answer: {
      en: "Rates depend on the project: its scope, features and deadline for development work, and the length and subject of the documents for translation. Send Felix a short description through the contact page and he'll prepare a quote.",
      fr: "Les tarifs dépendent du projet : périmètre, fonctionnalités et délais pour le développement ; longueur et sujet des documents pour la traduction. Envoyez une brève description à Felix via la page contact et il vous préparera un devis.",
    },
    actions: [A.contact],
    next: ["timeline", "services"],
  },
  {
    id: "timeline",
    keywords: ["how long", "deadline", "turnaround", "timeline", "duration", "when can", "how fast", "delai", "duree", "combien de temps", "quand"],
    answer: {
      en: "Timelines depend on the size of the project or document. Share your deadline when you get in touch and Felix will tell you what's realistic.",
      fr: "Les délais dépendent de la taille du projet ou du document. Indiquez votre échéance en prenant contact, et Felix vous dira ce qui est réaliste.",
    },
    actions: [A.contact],
    next: ["pricing", "hire"],
  },

  // ---------- CV & contact ----------
  {
    id: "cv",
    keywords: ["cv", "resume", "curriculum", "download"],
    answer: {
      en: "Here's Felix's CV, ready to download as a PDF.",
      fr: "Voici le CV de Felix, prêt à télécharger en PDF.",
    },
    actions: [A.cv],
    next: ["experience", "education", "contact"],
  },
  {
    id: "contact",
    keywords: ["contact", "reach", "get in touch", "message him", "talk to", "joindre", "contacter", "ecrire"],
    answer: {
      en: `You can reach Felix by email at ${contact.email}, by phone or WhatsApp on ${contact.phone}, on LinkedIn, or through the contact form.`,
      fr: `Vous pouvez joindre Felix par e-mail à ${contact.email}, par téléphone ou WhatsApp au ${contact.phone}, sur LinkedIn, ou via le formulaire de contact.`,
    },
    actions: [A.contact, A.email, A.whatsapp, A.linkedin],
    next: ["hire", "social"],
  },
  {
    id: "email",
    keywords: ["email", "e-mail", "mail", "courriel"],
    answer: {
      en: `Felix's email address is ${contact.email}.`,
      fr: `L'adresse e-mail de Felix est ${contact.email}.`,
    },
    actions: [A.email],
    next: ["phone", "contact"],
  },
  {
    id: "phone",
    keywords: ["phone", "call", "number", "whatsapp", "telephone", "appeler", "numero"],
    answer: {
      en: `You can call or WhatsApp Felix on ${contact.phone}.`,
      fr: `Vous pouvez appeler Felix ou lui écrire sur WhatsApp au ${contact.phone}.`,
    },
    actions: [A.call, A.whatsapp],
    next: ["email", "contact"],
  },
  {
    id: "social",
    keywords: ["linkedin", "facebook", "social", "social media", "reseaux", "reseau social"],
    answer: {
      en: "You can follow Felix on LinkedIn and Facebook.",
      fr: "Vous pouvez suivre Felix sur LinkedIn et Facebook.",
    },
    actions: [A.linkedin, A.facebook],
    next: ["contact"],
  },

  // ---------- This website ----------
  {
    id: "thisSite",
    keywords: ["this site", "this website", "this portfolio", "your site", "built this", "made this", "ce site", "ce portfolio"],
    answer: {
      en: "This portfolio is built by Felix with React, Vite and Tailwind CSS, uses Framer Motion for animations, and is hosted on Vercel. It's fully bilingual, and so am I!",
      fr: "Ce portfolio a été réalisé par Felix avec React, Vite et Tailwind CSS, utilise Framer Motion pour les animations et est hébergé sur Vercel. Il est entièrement bilingue, et moi aussi !",
    },
    next: ["frontend", "skills"],
  },
];

// Labels for the suggestion buttons, phrased as questions
export const suggestions = {
  about: { en: "Who is Felix?", fr: "Qui est Felix ?" },
  skills: { en: "What are his skills?", fr: "Quelles sont ses compétences ?" },
  frontend: { en: "Front-end skills", fr: "Compétences front-end" },
  backend: { en: "Back-end skills", fr: "Compétences back-end" },
  deployment: { en: "How does he deploy?", fr: "Comment déploie-t-il ?" },
  security: { en: "Security work", fr: "Travail sur la sécurité" },
  novabulletin: { en: "What is NovaBulletin?", fr: "Qu'est-ce que NovaBulletin ?" },
  novabulletinFeatures: { en: "NovaBulletin features", fr: "Fonctionnalités de NovaBulletin" },
  novabulletinTech: { en: "How is it built?", fr: "Comment est-il construit ?" },
  novabulletinSchools: { en: "Use it at my school", fr: "L'utiliser dans mon école" },
  experience: { en: "Work experience", fr: "Parcours professionnel" },
  translatorJob: { en: "Translation work", fr: "Travail de traduction" },
  teaching: { en: "Teaching experience", fr: "Expérience d'enseignement" },
  internship: { en: "Internship in Cameroon", fr: "Stage au Cameroun" },
  languages: { en: "Languages he speaks", fr: "Langues parlées" },
  translation: { en: "Translation services", fr: "Services de traduction" },
  translationTools: { en: "Translation tools", fr: "Outils de traduction" },
  education: { en: "Education", fr: "Formation" },
  strengths: { en: "His strengths", fr: "Ses points forts" },
  services: { en: "Services offered", fr: "Services proposés" },
  freelance: { en: "Website for my business", fr: "Un site pour mon entreprise" },
  hire: { en: "Work with Felix", fr: "Travailler avec Felix" },
  pricing: { en: "Rates & quotes", fr: "Tarifs & devis" },
  timeline: { en: "Timelines", fr: "Délais" },
  cv: { en: "Download his CV", fr: "Télécharger son CV" },
  contact: { en: "How to contact him", fr: "Comment le contacter" },
  phone: { en: "Phone / WhatsApp", fr: "Téléphone / WhatsApp" },
  email: { en: "Email address", fr: "Adresse e-mail" },
  social: { en: "Social media", fr: "Réseaux sociaux" },
  thisSite: { en: "How was this site built?", fr: "Comment ce site a-t-il été créé ?" },
  help: { en: "What can I ask?", fr: "Que puis-je demander ?" },
};

export const starterSuggestions = ["about", "novabulletin", "skills", "experience", "translation", "hire"];

export const fallback = {
  answer: {
    en: "Hmm, I'm not sure I understood that. Here are some things I can tell you about, or you can contact Felix directly.",
    fr: "Hmm, je ne suis pas sûr d'avoir compris. Voici quelques sujets que je connais, ou vous pouvez contacter Felix directement.",
  },
  actions: [A.contact],
  next: ["about", "skills", "novabulletin", "experience", "pricing", "help"],
};

export const welcome = {
  en: "Hi there! 👋 I'm Felix's portfolio assistant. Ask me anything about his skills, NovaBulletin, his experience, translation services or how to work with him, or tap a suggestion below.",
  fr: "Bonjour ! 👋 Je suis l'assistant du portfolio de Felix. Posez-moi vos questions sur ses compétences, NovaBulletin, son parcours, ses services de traduction ou la façon de travailler avec lui, ou choisissez une suggestion ci-dessous.",
};

export const welcomeBack = {
  en: "Hi again! 👋 What would you like to know about Felix?",
  fr: "Re-bonjour ! 👋 Que souhaitez-vous savoir sur Felix ?",
};

// ---------- Matching ----------
const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9' -]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const prepared = topics.map((topic) => ({
  ...topic,
  normKeywords: topic.keywords.map(normalize),
  normRequires: topic.requires?.map(normalize),
}));

const keywordHits = (keyword, text, tokens) => {
  if (keyword.includes(" ") || keyword.includes("-") || keyword.includes("'")) return text.includes(keyword);
  // short keywords must match a whole word ("hi" must not match "this"); longer ones also match as a stem
  return keyword.length < 4 ? tokens.includes(keyword) : tokens.some((t) => t.startsWith(keyword));
};

// Returns the id of the best-matching topic, or null
export const matchTopic = (question) => {
  const text = normalize(question);
  const tokens = text.split(" ");
  let best = null;
  let bestScore = 0;

  for (const topic of prepared) {
    if (topic.normRequires && !topic.normRequires.some((word) => keywordHits(word, text, tokens))) continue;
    let score = 0;
    for (const keyword of topic.normKeywords) {
      if (keywordHits(keyword, text, tokens)) score += keyword.includes(" ") ? 2 : 1;
    }
    score *= topic.weight ?? 1;
    if (topic.requires && score > 0) score += 0.5; // a satisfied "requires" makes this the more specific topic
    if (score > bestScore) {
      best = topic.id;
      bestScore = score;
    }
  }
  return best;
};

export const getTopic = (id) => topics.find((topic) => topic.id === id);

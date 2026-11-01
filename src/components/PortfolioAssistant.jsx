import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaTimes, FaUndo } from "react-icons/fa";
import { NOVABULLETIN_URL } from "../data/links";
import { CV_URL } from "../data/profile";
import Monogram from "./Monogram";
import { useLanguage } from "../i18n/LanguageContext";

const assistantResponses = {
  welcome: {
    en: "Hi there! 👋 I'm Felix’s portfolio assistant. Ask me anything about his skills, NovaBulletin, his experience, or how to get in touch.",
    fr: "Bonjour ! 👋 Je suis l'assistant du portfolio de Felix. Posez-moi vos questions sur ses compétences, NovaBulletin, son parcours ou la façon de le contacter.",
  },
  welcomeBack: {
    en: "Hi again! 👋 I’m Felix’s assistant. Feel free to ask anything about his work or contact details.",
    fr: "Re-bonjour ! 👋 Je suis l'assistant de Felix. N'hésitez pas à me poser vos questions sur son travail ou ses coordonnées.",
  },
  skills: {
    en: "Absolutely! Felix builds secure full-stack web apps with JavaScript, React, Node.js / Express, NestJS, Python, SQL / MongoDB and REST APIs, and deploys them with Git, Render, Vercel and Firebase. He also works with WordPress, SDL Trados and MemoQ.",
    fr: "Bien sûr ! Felix crée des applications web full-stack sécurisées avec JavaScript, React, Node.js / Express, NestJS, Python, SQL / MongoDB et des API REST, et les déploie avec Git, Render, Vercel et Firebase. Il utilise aussi WordPress, SDL Trados et MemoQ.",
  },
  experience: {
    en: "Of course! Felix is the founder and lead developer of NovaBulletin, a French–English translator at the University of Ghana Translation Bureau, a freelance web developer, and a senior French & English educator at Liberty Lyceum. He also taught coding as an IT Facilitator on the NSPS programme and interned as a software developer at Corextreme in Cameroon. That's over 12 years of professional experience.",
    fr: "Bien sûr ! Felix est fondateur et développeur principal de NovaBulletin, traducteur français–anglais au Bureau de traduction de l'Université du Ghana, développeur web freelance et enseignant principal de français et d'anglais au Liberty Lyceum. Il a aussi enseigné la programmation comme formateur sur le programme NSPS et a fait un stage de développeur chez Corextreme au Cameroun. Cela fait plus de 12 ans d'expérience professionnelle.",
  },
  projects: {
    en: "Glad you asked! Felix founded and builds NovaBulletin, a live school management platform: student records, grades, PDF report cards, attendance, fees and WhatsApp/SMS alerts to parents, with QR-code verification of report cards and one-time-code login.",
    fr: "Bonne question ! Felix a fondé et développe NovaBulletin, une plateforme de gestion scolaire en ligne : dossiers des élèves, notes, bulletins PDF, présences, frais de scolarité et alertes WhatsApp/SMS aux parents, avec vérification des bulletins par QR code et connexion par code à usage unique.",
  },
  languages: {
    en: "Felix is a native French speaker and fluent in English, with a BA in English from Université de Lomé. He translates administrative, academic and technical documents at the University of Ghana Translation Bureau.",
    fr: "Le français est la langue maternelle de Felix et il parle couramment l'anglais ; il est titulaire d'une licence d'anglais de l'Université de Lomé. Il traduit des documents administratifs, académiques et techniques au Bureau de traduction de l'Université du Ghana.",
  },
  education: {
    en: "Felix completed the Software Engineering Programme at Power Learn Project (2025), the Junior Web Developer Programme with Generation Ghana & MEST Africa (2024), and a BA in English at Université de Lomé (2012).",
    fr: "Felix a suivi le programme d'ingénierie logicielle de Power Learn Project (2025), le programme Développeur web junior de Generation Ghana & MEST Africa (2024) et a obtenu une licence d'anglais à l'Université de Lomé (2012).",
  },
  cv: {
    en: "Here's Felix's CV, ready to download.",
    fr: "Voici le CV de Felix, prêt à télécharger.",
  },
  contact: {
    en: "Sure! You can email him directly at felixatoma2@gmail.com, call +233 24 417 3068, or connect on LinkedIn at linkedin.com/in/felix-atoma-714abb269. He’s always happy to hear from you!",
    fr: "Bien sûr ! Vous pouvez lui écrire à felixatoma2@gmail.com, l'appeler au +233 24 417 3068 ou le retrouver sur LinkedIn : linkedin.com/in/felix-atoma-714abb269. Il sera ravi d'avoir de vos nouvelles !",
  },
  help: {
    en: "I'm here to assist! Ask me about Felix’s skills, experience, NovaBulletin, translation work, or how to contact him.",
    fr: "Je suis là pour vous aider ! Posez-moi vos questions sur les compétences de Felix, son parcours, NovaBulletin, ses traductions ou la façon de le contacter.",
  },
  greeting: {
    en: "I’m doing great, thanks for asking! 😊 How can I assist you today?",
    fr: "Je vais très bien, merci ! 😊 Comment puis-je vous aider aujourd'hui ?",
  },
  thanks: {
    en: "You’re very welcome! Let me know if there’s anything else I can do for you.",
    fr: "Avec plaisir ! N'hésitez pas si je peux faire autre chose pour vous.",
  },
  goodbye: {
    en: "It was lovely chatting with you! Have a wonderful day and feel free to return anytime. 🌞",
    fr: "Ravi d'avoir échangé avec vous ! Excellente journée et revenez quand vous voulez. 🌞",
  },
  default: {
    en: "Hmm, I’m not totally sure about that, but you can ask me things like: 'What are his skills?', 'What has he built?', 'Does he translate?' or 'Can I see his CV?' 😊",
    fr: "Hmm, je ne suis pas sûr de comprendre, mais vous pouvez me demander par exemple : « Quelles sont ses compétences ? », « Qu'a-t-il créé ? », « Fait-il des traductions ? » ou « Puis-je voir son CV ? » 😊",
  },
};

const assistantLinks = {
  projects: { href: NOVABULLETIN_URL, label: { en: "Try NovaBulletin live", fr: "Essayer NovaBulletin en ligne" } },
  cv: { href: CV_URL, label: { en: "Download CV (PDF)", fr: "Télécharger le CV (PDF)" }, download: true },
};

// Keywords in English and French; the first group that matches wins
const intents = [
  ["cv", ["cv", "resume", "résumé", "curriculum"]],
  ["skills", ["skill", "tech", "stack", "compétence", "competence", "technolog"]],
  ["experience", ["experience", "expérience", "work", "job", "travail", "poste", "parcours"]],
  ["projects", ["project", "projet", "built", "créé", "cree", "réalis", "novabulletin"]],
  ["languages", ["translat", "traduct", "traduis", "french", "français", "francais", "language", "langue"]],
  ["education", ["educat", "degree", "study", "train", "formation", "diplôme", "diplome", "études", "etudes", "licence"]],
  ["contact", ["contact", "email", "e-mail", "mail", "reach", "joindre", "téléphone", "telephone", "appeler"]],
  ["thanks", ["thank", "merci"]],
  ["goodbye", ["bye", "have a nice", "au revoir", "bonne journée", "bonne journee", "à bientôt", "a bientot"]],
  ["greeting", ["how are you", "how's it going", "ça va", "ca va", "comment vas", "comment allez"]],
  ["help", ["help", "assist", "aide", "aider"]],
];

const matchIntent = (text) => {
  const input = text.toLowerCase();
  const found = intents.find(([, words]) => words.some((word) => input.includes(word)));
  return found ? found[0] : "default";
};

const ui = {
  chat: { en: "Chat", fr: "Discuter" },
  title: { en: "👋 Chat with Felix’s assistant", fr: "👋 Discuter avec l'assistant de Felix" },
  close: { en: "Close chat", fr: "Fermer la discussion" },
  typing: { en: "Typing...", fr: "En train d'écrire..." },
  placeholder: { en: "Ask anything...", fr: "Posez votre question..." },
  send: { en: "Send", fr: "Envoyer" },
  reset: { en: "Reset", fr: "Recommencer" },
};

export default function PortfolioAssistant() {
  const { tr } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  // Assistant messages store a response key so they follow the current language
  const [messages, setMessages] = useState([{ from: "assistant", key: "welcome" }]);
  const [typing, setTyping] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const matched = matchIntent(userInput);

    const userMessage = { from: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "assistant", key: matched }]);
      setTyping(false);
    }, 1500);
  };

  const handleReset = () => {
    setMessages([{ from: "assistant", key: "welcomeBack" }]);
    setTyping(false);
    setUserInput("");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen ? (
        <motion.button
          className="bg-brand hover:bg-charcoal text-charcoal hover:text-white px-4 py-2 text-sm font-semibold shadow-lg flex items-center gap-2"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
        >
          <FaRobot />
          {tr(ui.chat)}
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-2xl p-4 w-80 max-w-[calc(100vw-3rem)] text-sm border-t-4 border-brand flex flex-col"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold text-charcoal">{tr(ui.title)}</h4>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-charcoal" aria-label={tr(ui.close)}>
              <FaTimes />
            </button>
          </div>

          <div className="overflow-y-auto max-h-64 mb-3 pr-1 space-y-3">
            {messages.map((msg, idx) => {
              const link = msg.from === "assistant" ? assistantLinks[msg.key] : null;
              return (
                <div key={idx} className={`flex items-start gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.from === "assistant" && (
                    <Monogram className="h-6 w-6 text-[0.55rem]" />
                  )}
                  <div
                    className={`px-3 py-2 rounded-lg text-sm max-w-[85%] ${
                      msg.from === "assistant"
                        ? "bg-surface text-charcoal"
                        : "bg-brand text-charcoal"
                    }`}
                  >
                    {msg.from === "assistant" ? tr(assistantResponses[msg.key]) : msg.text}
                    {link && (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={link.download || undefined}
                        className="mt-2 block font-semibold text-brand-deep underline hover:text-charcoal"
                      >
                        {tr(link.label)} →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
            {typing && (
              <div className="flex items-center gap-2">
                <Monogram className="h-6 w-6 text-[0.55rem]" />
                <span className="italic text-brand-deep">{tr(ui.typing)}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-auto">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={tr(ui.placeholder)}
              className="flex-1 min-w-0 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="bg-brand hover:bg-charcoal text-charcoal hover:text-white px-3 py-1 text-sm font-medium"
            >
              {tr(ui.send)}
            </button>
          </form>

          <button onClick={handleReset} className="text-xs text-muted hover:text-charcoal hover:underline flex items-center gap-1 mt-2">
            <FaUndo /> {tr(ui.reset)}
          </button>
        </motion.div>
      )}
    </div>
  );
}

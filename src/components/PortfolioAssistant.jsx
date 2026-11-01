import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaTimes, FaUndo } from "react-icons/fa";
import { NOVABULLETIN_URL } from "../data/links";
import { CV_URL } from "../data/profile";
import Monogram from "./Monogram";

const assistantResponses = {
  skills: "Absolutely! Felix builds secure full-stack web apps with JavaScript, React, Node.js / Express, NestJS, Python, SQL / MongoDB and REST APIs, and deploys them with Git, Render, Vercel and Firebase. He also works with WordPress, SDL Trados and MemoQ.",
  experience: "Of course! Felix is the founder and lead developer of NovaBulletin, a French–English translator at the University of Ghana Translation Bureau, a freelance web developer, and a senior French & English educator at Liberty Lyceum. He also taught coding as an IT Facilitator on the NSPS programme and interned as a software developer at Corextreme in Cameroon. That's over 12 years of professional experience.",
  projects: "Glad you asked! Felix founded and builds NovaBulletin, a live school management platform: student records, grades, PDF report cards, attendance, fees and WhatsApp/SMS alerts to parents, with QR-code verification of report cards and one-time-code login.",
  languages: "Felix is a native French speaker and fluent in English, with a BA in English from Université de Lomé. He translates administrative, academic and technical documents at the University of Ghana Translation Bureau.",
  education: "Felix completed the Software Engineering Programme at Power Learn Project (2025), the Junior Web Developer Programme with Generation Ghana & MEST Africa (2024), and a BA in English at Université de Lomé (2012).",
  cv: "Here's Felix's CV, ready to download.",
  contact: "Sure! You can email him directly at felixatoma2@gmail.com, call +233 24 417 3068, or connect on LinkedIn at linkedin.com/in/felix-atoma-714abb269. He’s always happy to hear from you!",
  help: "I'm here to assist! Ask me about Felix’s skills, experience, NovaBulletin, translation work, or how to contact him.",
  greeting: "I’m doing great, thanks for asking! 😊 How can I assist you today?",
  thanks: "You’re very welcome! Let me know if there’s anything else I can do for you.",
  goodbye: "It was lovely chatting with you! Have a wonderful day and feel free to return anytime. 🌞",
  default: "Hmm, I’m not totally sure about that, but you can ask me things like: 'What are his skills?', 'What has he built?', 'Does he translate?' or 'Can I see his CV?' 😊"
};

const assistantLinks = {
  projects: { href: NOVABULLETIN_URL, label: "Try NovaBulletin live" },
  cv: { href: CV_URL, label: "Download CV (PDF)", download: true },
};

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "assistant",
      text: "Hi there! 👋 I'm Felix’s portfolio assistant. Ask me anything about his skills, NovaBulletin, his experience, or how to get in touch."
    }
  ]);
  const [typing, setTyping] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const input = userInput.toLowerCase();
    let matched = "default";
    if (input.includes("cv") || input.includes("resume") || input.includes("résumé")) matched = "cv";
    else if (input.includes("skill") || input.includes("tech") || input.includes("stack")) matched = "skills";
    else if (input.includes("experience") || input.includes("work") || input.includes("job")) matched = "experience";
    else if (input.includes("project") || input.includes("built") || input.includes("novabulletin")) matched = "projects";
    else if (input.includes("translat") || input.includes("french") || input.includes("language")) matched = "languages";
    else if (input.includes("educat") || input.includes("degree") || input.includes("study") || input.includes("train")) matched = "education";
    else if (input.includes("contact") || input.includes("email") || input.includes("reach")) matched = "contact";
    else if (input.includes("thank")) matched = "thanks";
    else if (input.includes("bye") || input.includes("have a nice")) matched = "goodbye";
    else if (input.includes("how are you") || input.includes("how's it going")) matched = "greeting";
    else if (input.includes("help") || input.includes("assist")) matched = "help";

    const userMessage = { from: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setTyping(true);

    setTimeout(() => {
      const assistantMessage = { from: "assistant", text: assistantResponses[matched], link: assistantLinks[matched] };
      setMessages((prev) => [...prev, assistantMessage]);
      setTyping(false);
    }, 1500);
  };

  const handleReset = () => {
    setMessages([
      {
        from: "assistant",
        text: "Hi again! 👋 I’m Felix’s assistant. Feel free to ask anything about his work or contact details."
      }
    ]);
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
          Chat
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
            <h4 className="font-bold text-charcoal">👋 Chat with Felix’s assistant</h4>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-charcoal">
              <FaTimes />
            </button>
          </div>

          <div className="overflow-y-auto max-h-64 mb-3 pr-1 space-y-3">
            {messages.map((msg, idx) => (
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
                  {msg.text}
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={msg.link.download || undefined}
                      className="mt-2 block font-semibold text-brand-deep underline hover:text-charcoal"
                    >
                      {msg.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-2">
                <Monogram className="h-6 w-6 text-[0.55rem]" />
                <span className="italic text-brand-deep">Typing...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-auto">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="bg-brand hover:bg-charcoal text-charcoal hover:text-white px-3 py-1 text-sm font-medium"
            >
              Send
            </button>
          </form>

          <button onClick={handleReset} className="text-xs text-muted hover:text-charcoal hover:underline flex items-center gap-1 mt-2">
            <FaUndo /> Reset
          </button>
        </motion.div>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaTimes, FaUndo } from "react-icons/fa";
import { NOVABULLETIN_URL } from "../data/links";

const assistantResponses = {
  skills: "Absolutely! Felixio is highly skilled in React, React Native, FlutterFlow, UI/UX Design, Tailwind CSS, and the entire MERN stack. He builds responsive and modern web and mobile apps.",
  experience: "Of course! Felixio has worked with brands like Nashma Agribusiness, United Intellects, and collaborated on projects such as ImmoAsk and Agence Immobilière in Togo. He also has teaching and translation experience.",
  projects: "Glad you asked! Felixio’s featured project is NovaBulletin, a school management platform for West African schools: automatic grade averages, one-click PDF report cards, WhatsApp and SMS alerts to parents, fee management and a built-in LMS.",
  contact: "Sure! You can email him directly at felixatoma2@gmail.com or connect on LinkedIn at linkedin.com/in/felix-atoma-714abb269. He’s always happy to hear from you!",
  help: "I'm here to assist! Ask me about Felixio’s skills, experience, recent projects, or how to contact him.",
  greeting: "I’m doing great, thanks for asking! 😊 How can I assist you today?",
  thanks: "You’re very welcome! Let me know if there’s anything else I can do for you.",
  goodbye: "It was lovely chatting with you! Have a wonderful day and feel free to return anytime. 🌞",
  default: "Hmm, I’m not totally sure about that, but you can ask me things like: 'What are his skills?', 'What projects has he built?', or 'How can I contact him?' 😊"
};

const assistantLinks = {
  projects: { href: NOVABULLETIN_URL, label: "Try NovaBulletin live" },
};

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "assistant",
      text: "Hi there! 👋 I'm Felixio’s portfolio assistant. Ask me anything about his skills, projects, or how to get in touch."
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
    if (input.includes("skill")) matched = "skills";
    else if (input.includes("experience")) matched = "experience";
    else if (input.includes("project")) matched = "projects";
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
        text: "Hi again! 👋 I’m Felixio’s assistant. Feel free to ask anything about his work or contact details."
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
            <h4 className="font-bold text-gray-800">👋 Chat with Felixio</h4>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-charcoal">
              <FaTimes />
            </button>
          </div>

          <div className="overflow-y-auto max-h-64 mb-3 pr-1 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                {msg.from === "assistant" && (
                  <img src="/logo.png" alt="assistant" className="w-6 h-6 rounded-full object-cover" />
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
                <img src="/logo.png" alt="typing..." className="w-6 h-6 rounded-full object-cover" />
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
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRobot, FaTimes, FaUndo, FaArrowRight, FaPaperPlane } from "react-icons/fa";
import Monogram from "./Monogram";
import { useLanguage } from "../i18n/LanguageContext";
import {
  matchTopic,
  getTopic,
  suggestions,
  starterSuggestions,
  fallback,
  welcome,
  welcomeBack,
} from "../data/assistantKnowledge";

const ui = {
  chat: { en: "Ask me", fr: "Une question ?" },
  title: { en: "Felix's assistant", fr: "L'assistant de Felix" },
  subtitle: { en: "Answers about Felix, in English or French", fr: "Réponses sur Felix, en français ou en anglais" },
  close: { en: "Close chat", fr: "Fermer la discussion" },
  typing: { en: "Typing...", fr: "En train d'écrire..." },
  placeholder: { en: "Ask about skills, NovaBulletin, rates...", fr: "Compétences, NovaBulletin, tarifs..." },
  send: { en: "Send", fr: "Envoyer" },
  reset: { en: "Start over", fr: "Recommencer" },
  suggested: { en: "Suggested", fr: "Suggestions" },
};

// Assistant messages store topic ids rather than text, so they re-render in the current language
const assistantMessage = (topicId) => {
  const topic = topicId ? getTopic(topicId) : null;
  return {
    from: "assistant",
    answer: topic ? topic.answer : fallback.answer,
    actions: topic ? topic.actions ?? [] : fallback.actions,
    next: topic ? topic.next ?? [] : fallback.next,
  };
};

const greetingMessage = (text) => ({ from: "assistant", answer: text, actions: [], next: starterSuggestions });

export default function PortfolioAssistant() {
  const { tr } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [greetingMessage(welcome)]);
  const [typing, setTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const scrollRef = useRef(null);
  const timerRef = useRef(null);

  // Pop open on its own on larger screens only; on phones it would cover the page
  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  // Keep the newest message in view
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, isOpen]);

  const reply = (userText, topicId) => {
    if (typing) return;
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setUserInput("");
    setTyping(true);

    const response = assistantMessage(topicId);
    // Longer answers take a little longer to "type"
    const delay = Math.min(600 + tr(response.answer).length * 4, 1800);
    timerRef.current = setTimeout(() => {
      setMessages((prev) => [...prev, response]);
      setTyping(false);
    }, delay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = userInput.trim();
    if (!text) return;
    reply(text, matchTopic(text));
  };

  const handleSuggestion = (topicId) => reply(tr(suggestions[topicId]), topicId);

  const handleReset = () => {
    clearTimeout(timerRef.current);
    setMessages([greetingMessage(welcomeBack)]);
    setTyping(false);
    setUserInput("");
  };

  const lastIndex = messages.length - 1;

  const actionClass =
    "inline-flex items-center gap-1.5 border border-brand bg-white px-2.5 py-1 text-xs font-semibold text-charcoal transition hover:bg-brand";

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen ? (
        <motion.button
          className="bg-brand hover:bg-charcoal text-charcoal hover:text-white px-4 py-2.5 text-sm font-semibold shadow-lg flex items-center gap-2"
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
          transition={{ duration: 0.3 }}
          className="flex w-[22rem] max-w-[calc(100vw-3rem)] flex-col border-t-4 border-brand bg-white text-sm shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-divider px-4 py-3">
            <Monogram className="h-9 w-9 text-xs" />
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-charcoal">{tr(ui.title)}</h4>
              <p className="truncate text-xs text-muted">{tr(ui.subtitle)}</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 text-muted hover:text-charcoal" aria-label={tr(ui.close)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="max-h-[min(24rem,55vh)] space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((msg, idx) =>
              msg.from === "user" ? (
                <div key={idx} className="flex justify-end">
                  <div className="max-w-[85%] bg-brand px-3 py-2 text-charcoal">{msg.text}</div>
                </div>
              ) : (
                <div key={idx} className="flex items-start gap-2">
                  <Monogram className="mt-0.5 h-6 w-6 text-[0.55rem]" />
                  <div className="max-w-[88%] space-y-2">
                    <div className="bg-surface px-3 py-2 leading-relaxed text-charcoal">{tr(msg.answer)}</div>

                    {msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {msg.actions.map((action) =>
                          action.to ? (
                            <Link key={action.to} to={action.to} className={actionClass}>
                              {tr(action.label)} <FaArrowRight className="text-[0.6rem]" />
                            </Link>
                          ) : (
                            <a
                              key={action.href}
                              href={action.href}
                              target={action.download || action.href.startsWith("mailto") || action.href.startsWith("tel") ? undefined : "_blank"}
                              rel="noopener noreferrer"
                              download={action.download || undefined}
                              className={actionClass}
                            >
                              {tr(action.label)} <FaArrowRight className="text-[0.6rem]" />
                            </a>
                          )
                        )}
                      </div>
                    )}

                    {/* Suggestions only under the latest answer */}
                    {idx === lastIndex && !typing && msg.next.length > 0 && (
                      <div>
                        <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted">
                          {tr(ui.suggested)}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.next.map((id) => (
                            <button
                              key={id}
                              onClick={() => handleSuggestion(id)}
                              className="border border-divider bg-white px-2.5 py-1 text-xs text-charcoal transition hover:border-brand hover:text-brand-deep"
                            >
                              {tr(suggestions[id])}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}

            {typing && (
              <div className="flex items-center gap-2">
                <Monogram className="h-6 w-6 text-[0.55rem]" />
                <span className="flex gap-1 bg-surface px-3 py-2.5" aria-label={tr(ui.typing)}>
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-1.5 w-1.5 rounded-full bg-brand-deep"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1, delay: dot * 0.2 }}
                    />
                  ))}
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-divider px-4 py-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={tr(ui.placeholder)}
              aria-label={tr(ui.placeholder)}
              className="field min-w-0 flex-1 py-2"
            />
            <button
              type="submit"
              disabled={typing || !userInput.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand text-charcoal transition hover:bg-charcoal hover:text-white disabled:opacity-50"
              aria-label={tr(ui.send)}
            >
              <FaPaperPlane />
            </button>
          </form>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 self-start px-4 pb-3 text-xs text-muted hover:text-charcoal hover:underline"
          >
            <FaUndo /> {tr(ui.reset)}
          </button>
        </motion.div>
      )}
    </div>
  );
}

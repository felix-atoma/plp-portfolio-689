import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Monogram from "./Monogram";
import { CV_URL, contact } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

const links = [
  { name: { en: "Home", fr: "Accueil" }, path: "/" },
  { name: { en: "Work", fr: "Réalisations" }, path: "/work" },
  { name: { en: "Services", fr: "Services" }, path: "/services" },
  { name: { en: "Contact", fr: "Contact" }, path: "/contact" },
];

const socials = [
  { icon: <FaFacebookF />, href: contact.facebook, label: "Facebook" },
  { icon: <FaLinkedinIn />, href: contact.linkedin, label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: contact.whatsapp, label: "WhatsApp" },
];

const copy = {
  blurb: {
    en: "Bilingual software developer and French–English translator in Accra, building secure web applications for schools and businesses. Founder of NovaBulletin.",
    fr: "Développeur logiciel bilingue et traducteur français–anglais à Accra. Je crée des applications web sécurisées pour les écoles et les entreprises. Fondateur de NovaBulletin.",
  },
  talk: { en: "Let's Talk", fr: "Discutons" },
  cv: { en: "Download CV", fr: "Télécharger le CV" },
  quickLinks: { en: "Quick links", fr: "Liens rapides" },
  getInTouch: { en: "Get in touch", fr: "Me contacter" },
  rights: {
    en: "All rights reserved. Design inspired by Industry by Colorlib.",
    fr: "Tous droits réservés. Design inspiré du thème Industry de Colorlib.",
  },
  toTop: { en: "Scroll to top", fr: "Retour en haut" },
};

const Footer = () => {
  const { tr } = useLanguage();

  return (
    <footer id="footer" className="bg-dark text-on-dark">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Monogram />
            <span className="text-xl font-bold text-white">Felix Atoma</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{tr(copy.blurb)}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-brand">
              {tr(copy.talk)}
            </Link>
            <a href={CV_URL} download className="btn-outline-light">
              {tr(copy.cv)}
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{tr(copy.quickLinks)}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map(({ name, path }) => (
              <li key={path}>
                <Link to={path} className="transition hover:text-brand">
                  {tr(name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{tr(copy.getInTouch)}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-brand" /> {contact.location}
            </li>
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-3 transition hover:text-brand">
                <FaPhoneAlt className="text-brand" /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all transition hover:text-brand">
                <FaEnvelope className="shrink-0 text-brand" /> {contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-brand hover:bg-brand hover:text-charcoal"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="border-t border-white/10">
        <p className="container-x py-6 text-xs">
          &copy; {new Date().getFullYear()} Felix Atoma. {tr(copy.rights)}
        </p>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center bg-brand text-charcoal shadow-lg transition hover:bg-charcoal hover:text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        aria-label={tr(copy.toTop)}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;

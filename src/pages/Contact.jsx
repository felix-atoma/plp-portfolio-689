import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowRight, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { contact } from '../data/profile';
import { useLanguage } from '../i18n/LanguageContext';

const spinnerVariants = {
  animate: { rotate: 360 },
};

const contactDetails = [
  { icon: <FaMapMarkerAlt />, label: { en: 'Location', fr: 'Localisation' }, value: contact.location },
  { icon: <FaEnvelope />, label: { en: 'Email', fr: 'E-mail' }, value: contact.email, href: `mailto:${contact.email}` },
  { icon: <FaPhoneAlt />, label: { en: 'Phone', fr: 'Téléphone' }, value: contact.phone, href: contact.phoneHref },
];

const socials = [
  { icon: <FaFacebookF />, href: contact.facebook, label: 'Facebook' },
  { icon: <FaLinkedinIn />, href: contact.linkedin, label: 'LinkedIn' },
  { icon: <FaWhatsapp />, href: contact.whatsapp, label: 'WhatsApp' },
];

const copy = {
  success: { en: 'Message sent successfully!', fr: 'Message envoyé avec succès !' },
  error: {
    en: 'An error occurred while sending the message. Please try again.',
    fr: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
  },
  eyebrow: { en: "Let's work together", fr: 'Travaillons ensemble' },
  title: { en: "Let's build something great together", fr: 'Construisons quelque chose de grand ensemble' },
  introStart: { en: 'Whether you need a ', fr: "Que vous ayez besoin d'une " },
  introHighlight: {
    en: 'secure web application, a business website, or a French–English translation',
    fr: "application web sécurisée, d'un site d'entreprise ou d'une traduction français–anglais",
  },
  introEnd: { en: ', send me a message in English or in French.', fr: ', écrivez-moi en français ou en anglais.' },
  follow: { en: 'Follow me', fr: 'Me suivre' },
  formTitle: { en: 'Send me a message', fr: 'Envoyez-moi un message' },
  name: { en: 'Your name *', fr: 'Votre nom *' },
  namePh: { en: 'Enter your name', fr: 'Saisissez votre nom' },
  email: { en: 'Email address *', fr: 'Adresse e-mail *' },
  emailPh: { en: 'Enter your email', fr: 'Saisissez votre e-mail' },
  message: { en: 'Project details *', fr: 'Détails du projet *' },
  messagePh: { en: 'Tell me about your project...', fr: 'Parlez-moi de votre projet...' },
  send: { en: 'Send message', fr: 'Envoyer le message' },
};

const Contact = () => {
  const { tr } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, formData);

      if (response.data.success) {
        setSuccessMessage(copy.success);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      setError(copy.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow={{ en: 'Contact', fr: 'Contact' }}
        title={{ en: 'Get in touch', fr: 'Me contacter' }}
        intro={{
          en: "Have a project, a question or an idea? Send me a message and let's build something great together.",
          fr: 'Un projet, une question ou une idée ? Envoyez-moi un message et construisons quelque chose de grand ensemble.',
        }}
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">{tr(copy.eyebrow)}</p>
            <h2 className="section-title">{tr(copy.title)}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {tr(copy.introStart)}
              <span className="font-semibold text-charcoal">{tr(copy.introHighlight)}</span>
              {tr(copy.introEnd)}
            </p>

            <ul className="mt-10 space-y-6">
              {contactDetails.map(({ icon, label, value, href }) => (
                <li key={label.en} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand text-charcoal">{icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{tr(label)}</p>
                    {href ? (
                      <a href={href} className="break-all font-medium text-charcoal transition hover:text-brand-deep">{value}</a>
                    ) : (
                      <p className="font-medium text-charcoal">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{tr(copy.follow)}</p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center border border-divider bg-white text-charcoal transition hover:border-brand hover:bg-brand"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-4 border-brand bg-white p-6 shadow-sm md:p-10">
            <h3 className="text-2xl font-bold text-charcoal">{tr(copy.formTitle)}</h3>

            {successMessage && <p className="mt-4 border-l-4 border-green-600 bg-green-50 px-4 py-3 text-sm text-green-800">{tr(successMessage)}</p>}
            {error && <p className="mt-4 border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800">{tr(error)}</p>}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">{tr(copy.name)}</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={tr(copy.namePh)}
                    className="field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">{tr(copy.email)}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={tr(copy.emailPh)}
                    className="field"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="field-label">{tr(copy.message)}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder={tr(copy.messagePh)}
                  className="field"
                  required
                />
              </div>

              <button type="submit" disabled={loading} className="btn-brand w-full sm:w-auto disabled:opacity-70">
                {loading ? (
                  <motion.div
                    variants={spinnerVariants}
                    animate="animate"
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="h-5 w-5 rounded-full border-4 border-charcoal border-t-transparent"
                  />
                ) : (
                  <>{tr(copy.send)} <FaArrowRight /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const spinnerVariants = {
  animate: { rotate: 360 },
};

const contactDetails = [
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Accra, Ghana' },
  { icon: <FaEnvelope />, label: 'Email', value: 'felixatoma2@gmail.com', href: 'mailto:felixatoma2@gmail.com' },
  { icon: <FaPhoneAlt />, label: 'Phone', value: '+233 24 417 3068', href: 'tel:+233244173068' },
];

const Contact = () => {
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
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      setError('An error occurred while sending the message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Have a project, a question or an idea? Send me a message and let's build something great together."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">Let's work together</p>
            <h2 className="section-title">Let's build something great together</h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              As a Frontend Engineer specializing in <span className="font-semibold text-charcoal">React.js, Next.js, JavaScript, and UI/UX design</span>, I craft seamless and visually appealing digital experiences.
            </p>

            <ul className="mt-10 space-y-6">
              {contactDetails.map(({ icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand text-charcoal">{icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{label}</p>
                    {href ? (
                      <a href={href} className="break-all font-medium text-charcoal transition hover:text-brand-deep">{value}</a>
                    ) : (
                      <p className="font-medium text-charcoal">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t-4 border-brand bg-white p-6 shadow-sm md:p-10">
            <h3 className="text-2xl font-bold text-charcoal">Send me a message</h3>

            {successMessage && <p className="mt-4 border-l-4 border-green-600 bg-green-50 px-4 py-3 text-sm text-green-800">{successMessage}</p>}
            {error && <p className="mt-4 border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">Your name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">Email address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="field"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="field-label">Project details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project..."
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
                  <>Send message <FaArrowRight /></>
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

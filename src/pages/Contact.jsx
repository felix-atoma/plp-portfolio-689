import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, formData);
      console.log("Response:", response);

      if (response.data.success) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Error:", error);
      setError('An error occurred while sending the message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full bg-gray-100 py-16 px-4 md:px-20 min-h-[50vh] flex items-start">
        <div className="max-w-6xl w-full">
          <div className="text-gray-600 text-base md:text-lg">
            <span className="text-orange-500 font-semibold">Home</span> / Contact
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Get in Touch
            <span className="absolute left-0 -bottom-2 w-16 md:w-24 h-1 bg-orange-500"></span>
          </h2>
        </div>
      </section>

      <div className="w-full bg-gray-100 py-12 px-4 md:px-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let's Build Something Great Together!
          </h2>
          <p className="text-gray-700 mt-4 text-base md:text-lg">
            As a Frontend Engineer specializing in <span className="font-semibold text-orange-500">React.js, Next.js, JavaScript, and UI/UX design</span>, I craft seamless and visually appealing digital experiences.
          </p>
          <div className="mt-6 space-y-3 text-base md:text-lg text-gray-800">
            <p><span className="font-semibold text-orange-500">📍 Location:</span> Accra, Ghana</p>
            <p><span className="font-semibold text-orange-500">📧 Email:</span> felixatoma2@gmail.com</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">Send Me a Message</h3>
          
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-base md:text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto flex items-center justify-center text-white text-lg font-semibold px-6 py-3 rounded-md shadow-md bg-orange-500 transition-all duration-500 hover:bg-orange-600"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Sending...
                </>
              ) : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

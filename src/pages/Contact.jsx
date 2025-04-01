const Contact = () => {
    return (
      <>
        {/* Contact Header Section */}
        <section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
          <div className="max-w-6xl w-full">
            {/* Breadcrumb Navigation */}
            <div className="text-gray-600 text-lg">
              <span className="text-orange-500 font-semibold">Home</span> / Contact
            </div>
  
            {/* Page Title */}
            <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
              Get in Touch
              <span className="absolute left-0 -bottom-2 w-24 h-1 bg-orange-500"></span>
            </h2>
          </div>
        </section>
  
        {/* Contact Content */}
        <div className="w-full bg-gray-100 py-16 px-8 md:px-20 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-900">
              Let's Build Something Great Together!
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              As a Frontend Engineer specializing in <span className="font-semibold text-orange-500">React.js, Next.js, JavaScript, and UI/UX design</span>, 
              I craft seamless and visually appealing digital experiences. Whether you need a dynamic web app, a 
              high-performance interface, or an intuitive user experience, I'm here to bring your vision to life.
            </p>
  
            <p className="text-gray-700 mt-4 text-lg">
              If you're looking for a frontend developer who blends functionality with design, feel free to reach out!
            </p>
  
            {/* Contact Details */}
            <div className="mt-6 space-y-4 text-lg text-gray-800">
              <p><span className="font-semibold text-orange-500">📍 Location:</span> Lomé, Togo</p>
              <p><span className="font-semibold text-orange-500">📧 Email:</span> your.email@example.com</p>
              <p><span className="font-semibold text-orange-500">💼 LinkedIn:</span> linkedin.com/in/yourprofile</p>
              <p><span className="font-semibold text-orange-500">🐙 GitHub:</span> github.com/yourusername</p>
            </div>
          </div>
  
          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Send Me a Message</h3>
            <form className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                />
              </div>
  
              {/* Email Field */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                />
              </div>
  
              {/* Message Field */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
                />
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="relative text-white text-xl font-semibold px-8 py-3 rounded-md shadow-md bg-orange-500 overflow-hidden transition-all duration-500 
                  before:absolute before:inset-0 before:bg-orange-600 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;
  
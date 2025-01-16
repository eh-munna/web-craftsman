function Contact() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Information */}
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions or need assistance, feel free to reach out
            to us through the form or via the contact information below.
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-bold text-gray-300">Email:</span>{' '}
              <a
                href="mailto:support@example.com"
                className="text-sky-500 hover:underline"
              >
                support@example.com
              </a>
            </li>
            <li>
              <span className="font-bold text-gray-300">Phone:</span>{' '}
              <a href="tel:+123456789" className="text-sky-500 hover:underline">
                +1 234 567 89
              </a>
            </li>
            <li>
              <span className="font-bold text-gray-300">Address:</span> 123 Tech
              Street, Innovation City, USA
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Send a Message
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-1 p-2 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

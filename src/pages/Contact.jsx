
const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 mt-12 mb-8 md:mt-0" id="contact">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        Have questions or need help? Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

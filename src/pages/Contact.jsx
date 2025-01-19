const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-8 mb-4 md:mb-8 md:mt-0" id="contact">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>
            <p className="text-blue-700 text-center max-w-2xl mb-8">
                Have questions or need help? Fill out the form below, and we’ll get back to you as soon as possible.
            </p>
            <form className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-blue-800">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-blue-800">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-blue-800">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        placeholder="Write your message here..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MainPageNav from "./MainPageNav";
import Footer from "./Footer";

const MainPageContact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "5a362b95-d295-4ea4-a4c7-e7b6e7cd2d4c");

        const saveFormSubmission = async () => {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (!data.success) {
                throw new Error("Form submission failed");
            }
            return data;
        };

        toast.promise(
            saveFormSubmission(),
            {
                loading: "Submitting...",
                success: <b>Submitted successfully!</b>,
                error: <b>Submission failed. Please try again.</b>,
            }
        ).then(() => {
            setFormData({ name: "", email: "", message: "", phone: "" })
            event.target.reset(); // Clear the form after success
        });
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <MainPageNav />
            <div className="flex flex-col min-h-screen bg-black mt-20" id="contact">
                <main className="flex-grow px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center pt-10 text-orange-500">
                        Reach Us
                    </h1>
                    <h1 className="text-3xl font-bold text-center mb-4 pt-6 text-white break-words">
                        Email: 2041011166.ravikumarkushwaha@gmail.com
                    </h1>
                    <p className="text-center text-gray-300 text-lg mb-8">
                        Have questions or need help? Fill out the form below, and we'll get back to you as soon as possible.
                    </p>

                    <Toaster />

                    <form
                        onSubmit={onSubmit}
                        className="contact-form max-w-3xl mx-auto bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg mb-14"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-orange-400 mb-2"
                                >
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-orange-400 mb-2"
                                >
                                    Phone (optional):
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>
                        <div className="form-group mb-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-orange-400 mb-2"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-orange-400 mb-2"
                            >
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Buttons stacked on mobile, side-by-side on larger screens */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4 rounded-md shadow-sm hover:from-orange-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
                            >
                                Send Message
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ name: "", email: "", message: "", phone: "" })}
                                className="w-full bg-gray-700 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </main>

                {/* Footer will now stick to bottom */}
                <footer className="bg-black border-t border-gray-800 text-gray-400 py-6 text-center">
                    © {new Date().getFullYear()} Fitverse. All rights reserved.
                </footer>
            </div>

            <Footer />
        </>
    );
}

export default MainPageContact
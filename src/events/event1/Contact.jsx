import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "c0def3d7-e05c-43ad-a34b-d0dddfe618b2");

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
  <div
    className="contact-page mt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black"
    id="contact"
  >
    <h1 className="text-4xl font-bold text-center mb-4 pt-10 text-orange-500">
      Reach to Us
    </h1>
    <p className="text-center text-gray-300 text-lg mb-8">
      Have questions or need help? Fill out the form below, and we'll get back to you as soon as possible.
    </p>
    <Toaster />
    <form
      onSubmit={onSubmit}
      className="contact-form max-w-4xl mx-auto bg-gray-950 p-8 rounded-2xl shadow-lg mb-14 border border-gray-800"
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
          className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4 rounded-md shadow-lg hover:from-orange-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
        >
          Send Message
        </button>
        <button
          type="button"
          onClick={() =>
            setFormData({ name: "", email: "", message: "", phone: "" })
          }
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ml-4"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</>

    );
};

export default Contact;

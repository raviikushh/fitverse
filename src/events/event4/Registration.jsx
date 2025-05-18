import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MainPageNav from "../../pages/MainPageNav";
import Footer from "../../pages/Footer";
import RazorpayPaymentForm from "./RazorpayPaymentForm";

const Registration = () => {

  const [isOtherAddress, setIsOtherAddress] = useState(false);
  const [address, setAddress] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "c0def3d7-e05c-43ad-a34b-d0dddfe618b2");  // Replace with your access key -- 5a362b95-d295-4ea4-a4c7-e7b6e7cd2d4c

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
            setFormData({ name: "", email: "", address: "", phone: "" })
            event.target.reset(); // Clear the form after success
        });
    };

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        address: "",
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
    <div className="bg-gradient-to-r from-green-100 to-green-100 min-h-screen flex flex-col mt-10">
    <MainPageNav />
    <div className="contact-page mt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-200/80 to-green-100" id="contact">
    <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                    Walkathon Registration
                </h1>
        {/* <p className="text-center text-green-700 text-lg mb-8">
            Have questions or need help? Fill out the form below, and we'll get back to you as soon as possible.
        </p> */}
        <Toaster />
        <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto" onSubmit={onSubmit}>
                   
                   
                    {/* Contact No */}
                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">
                            Whatsapp No:
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            required
                            className="w-full border border-green-300 rounded-md p-2"
                        />
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full border border-green-300 rounded-md p-2"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Age */}
                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">Age:</label>
                        <input
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            type="number"
                            required
                            className="w-full border border-green-300 rounded-md p-2"
                        />
                    </div>

                   
                    
                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">Address:</label>
                        <select
                            className="w-full border border-green-300 rounded-md p-2"
                            value={address}
                            name="address"
                            onChange={(e) => {
                                setIsOtherAddress(e.target.value === "Others");
                                setAddress(e.target.value);
                            }}
                        >
                            <option value="Bistupur">Bistupur</option>
                            <option value="Kadma">Kadma</option>
                            <option value="Sakchi">Sakchi</option>
                            <option value="Sonari">Sonari</option>
                            <option value="Telco">Telco</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    {isOtherAddress && (
                        <div className="mb-4">
                            <label className="block text-green-700 font-medium mb-2">
                                Specify Address:
                            </label>
                            <input
                                id="address"
                                name="address"
                                // value={address}
                                onChange={(e) => { setAddress(e.target.value) }}
                                type="text"
                                required
                                placeholder="Enter short address"
                                className="w-full border border-green-300 rounded-md p-2"
                            />
                        </div>
                    )}

                    {/* /* Fee */}
                    <div className="mb-6">
                        <label className="block text-green-700 font-medium mb-2">Amount:</label>
                        <input
                            type="text"
                            id="fees"
                            name="fees"
                            value= "₹99+2% payment gateway charges"
                            readOnly
                            className="w-full border border-green-300 rounded-md p-2 font-semibold text-cyan-500"
                        />
                    </div>
                  
                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full  text-white py-2 px-4 rounded-md shadow-sm hover:from-green-700 hover:to-green-600 focus:outline-none "
                    //    onClick={paymentHandler}
                    >
                        <RazorpayPaymentForm />
                    </button>
                    
                    
                </form>
    </div>
</div>
    <Footer />
    </>
  )
}

export default Registration
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";

const Register = () => {
    const [isOtherAddress, setIsOtherAddress] = useState(false);
    const [category, setCategory] = useState("others");
    const [race, setRace] = useState("Elite");
    const [fee, setFee] = useState(500);

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setFee(selectedCategory === "student" ? 250 : 500);
    };


    // WEB 3 forms
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
        Race_category: { race },
        name: "",
        email: "",
        age: "",
        phone: "",
        address: "",
        category: { category },
        Emergency_contact: "",
        Blood_Group: "",
        T_shirt_size: "",
        fees: {fee}
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
            <Navbar />
        <div className="registration-page bg-green-100 p-8 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                Cycling Event Registration
            </h1>
            <Toaster />
            <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto" onSubmit={onSubmit}>
                {/* Race Category */}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">
                        Select Race Category:
                    </label>
                    <select
                        id="Race_category"
                        name="Race_category"
                        value={race}
                        onChange={(e) => setRace(e.target.value)}
                        className="w-full border border-green-300 rounded-md p-2"
                    >
                        <option value="21KM ₹500">Elite - 21KM ₹500</option>
                        <option value="10KM ₹500">Amateur - 10KM ₹500</option>
                        <option value="5KM ₹500">Fun Ride - 5KM ₹500</option>
                    </select>
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

                {/* Contact No */}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">
                        Contact No:
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
                {/* Email*/}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        required
                        className="w-full border border-green-300 rounded-md p-2"
                    />
                </div>

                {/* Address */}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">Address:</label>
                    <select
                        className="w-full border border-green-300 rounded-md p-2"
                        onChange={(e) => setIsOtherAddress(e.target.value === "Others")}
                    >
                        <option value="Kadma">Kadma</option>
                        <option value="Sakchi">Sakchi</option>
                        <option value="Sonari">Sonari</option>
                        <option value="Telco">Telco</option>
                        <option value="Bistupur">Bistupur</option>
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
                            value={formData.address}
                            onChange={handleChange}
                            type="text"
                            required
                            className="w-full border border-green-300 rounded-md p-2"
                        />
                    </div>
                )}

                {/* Category */}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">
                        Category:
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full border border-green-300 rounded-md p-2"
                    >
                        <option value="student">Student (₹250)</option>
                        <option value="others">Others (₹500)</option>
                    </select>
                </div>

                {/* Emergency No */}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">
                        Emergency Contact No:
                    </label>
                    <input
                        id="Emergency_contact"
                        name="Emergency_contact"
                        value={formData.Emergency_contact}
                        onChange={handleChange}
                        type="tel"
                        required
                        className="w-full border border-green-300 rounded-md p-2"
                    />
                </div>

                {/* Blood Group */}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">
                        Blood Group:
                    </label>
                    <input
                        id="Blood_Group"
                        name="Blood_Group"
                        value={formData.Blood_Group}
                        onChange={handleChange}
                        type="text"
                        required
                        className="w-full border border-green-300 rounded-md p-2"
                    />
                </div>

                {/* T-Shirt Size */}
                <div className="mb-4">
                    <label className="block text-green-700 font-medium mb-2">
                        T-Shirt Size:
                    </label>
                    <select className="w-full border border-green-300 rounded-md p-2"
                        id="T_shirt_size"
                        name="T_shirt_size"
                        value={formData.T_shirt_size}
                        onChange={handleChange}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>

                {/* /* Fee */}
                <div className="mb-6">
                    <label className="block text-green-700 font-medium mb-2">Fee:</label>
                    <input
                        type="text"
                        id="fees"
                        name="fees"
                        value={fee}
                        readOnly
                        className="w-full border border-green-300 rounded-md p-2 font-bold text-green-800"
                    />
                </div>

                {/* Disclaimer */}
                <div className="mb-6">
                    <p className="text-sm text-green-600">
                        Disclaimer: All information provided is confidential and will be
                        used for the event only.
                    </p>
                    <p className="text-sm text-orange-600">* make sure you don't have any chronic disease</p>
                    <p className="text-sm text-red-600">* No cancellation allowed and it's non-refundable</p>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                >
                    Register
                </button>
            </form>
        </div>
        </>
    );
};

export default Register;

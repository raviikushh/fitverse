import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import MainPageNav from "../MainPageNav";
import { useLocation } from "react-router-dom";
import RazorpayPaymentForm from "./RazorPaymentForm";
import Razor10 from "./Razor10";
import { useNavigate } from "react-router-dom";


const Register5 = () => {
    const location = useLocation();
    const passedCategory = location.state?.category || "10KM ₹399";
    const [race, setRace] = useState(passedCategory);
    const [showPaymentModal5, setShowPaymentModal5] = useState(false);
    const [showPaymentModal10, setShowPaymentModal10] = useState(false);
    const navigate = useNavigate();


    const [isOtherAddress, setIsOtherAddress] = useState(false);
    const [category, setCategory] = useState("");
    const [fee, setFee] = useState("₹399");
    const [address, setAddress] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        Emergency_contact: "",
        Blood_Group: "",
        T_shirt_size: "",
    });

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (race === '10KM ₹399') {
            setFee("₹399");
        } else if (race === '5KM ₹299') {
            setFee("₹299");
        }
    }, [race]);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formSubmitData = new FormData(event.target);
        formSubmitData.append("access_key", "5a362b95-d295-4ea4-a4c7-e7b6e7cd2d4c");  // Replace with your access key -- 5a362b95-d295-4ea4-a4c7-e7b6e7cd2d4c
        formSubmitData.append("Race_category", race);
        formSubmitData.append("fees", fee);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formSubmitData,
            });
            const data = await response.json();
            if (data.success) {
                toast.success("Registration successful! Email sent.");
                event.target.reset();
                if(race === '10KM ₹399'){
                    setShowPaymentModal10(true);
                }
                else if(race === '5KM ₹299'){
                    setShowPaymentModal5(true);
                }
                
            } else {
                toast.error("Email submission failed. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred during submission.");
        }



    };



    return (
        <>
            <MainPageNav />
            <div className="registration-page bg-green-100 p-8 min-h-screen mt-16">
                <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                    Running Event Registration
                </h1>
                <Toaster />
                <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto" onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">
                            Select Category:
                        </label>
                        <select
                            id="Race_category"
                            name="Race_category"
                            value={race}
                            onChange={(e) => setRace(e.target.value)}
                            className="w-full border border-green-300 rounded-md p-2"
                        >
                            <option value="10KM ₹399">10KM ₹399</option>
                            <option value="5KM ₹299">5KM ₹299</option>
                        </select>
                    </div>

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

                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">Age:</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            required
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full border border-green-300 rounded-md p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">Contact No:</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-green-300 rounded-md p-2"
                        />
                    </div>

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
                                type="text"
                                required
                                placeholder="Enter short address"
                                className="w-full border border-green-300 rounded-md p-2"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">T-Shirt Size:</label>
                        <select
                            className="w-full border border-green-300 rounded-md p-2"
                            id="T_shirt_size"
                            name="T_shirt_size"
                            value={formData.T_shirt_size}
                            onChange={handleChange}
                        >
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>

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

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-4 rounded-md shadow-sm hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    >
                        Register
                    </button>
                </form>


                {/* For 5KM */}
                {showPaymentModal5 && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg text-center relative">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Proceed to Payment</h2>
                            <p className="text-gray-600 mb-6">Click the button below to complete your payment.</p>

                            <button
                                
                                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                               <RazorpayPaymentForm/>
                            </button>

                            <button
                                onClick={() => setShowPaymentModal5(false)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}


                {/* 10KM */}
                {showPaymentModal10 && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg text-center relative">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800">Proceed to Payment</h2>
                            <p className="text-gray-600 mb-6">Click the button below to complete your payment.</p>

                            <button
                                
                                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                               <Razor10/>
                            </button>

                            <button
                                onClick={() => setShowPaymentModal10(false)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default Register5;

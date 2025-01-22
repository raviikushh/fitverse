import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Register = () => {

    const location = useLocation();
    const passedCategory = location.state?.category || "21KM ₹500"; // Default to "21KM ₹500" if nothing is passed
    const [race, setRace] = useState(passedCategory);


    const [isOtherAddress, setIsOtherAddress] = useState(false);
    const [category, setCategory] = useState("");
    // const [race, setRace] = useState("Elite");
    const [fee, setFee] = useState(500);
    const [address, setAddress] = useState('');

    // const [paymentId, setPaymentId] = useState();
    const [formData, setFormData] = useState({
        Race_category: { race },
        name: "",
        email: "",
        age: "",
        phone: "",
        address: { address },
        category: { category },
        Emergency_contact: "",
        Blood_Group: "",
        T_shirt_size: "",
        fees: { fee },
        Payment_Id: ""
    });

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setFee(selectedCategory === "student" ? 250 : 500);
    };

    // console.log(formData.name);

    const onSubmit = async (event) => {
        event.preventDefault();


        //   Razorpay
        const amount = fee * 100;
        const currency = "INR";

        // Show loading toast
        const loadingToastId = toast.loading("Processing payment...");

        const response = await fetch("https://cyclothon.onrender.com/order", {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });

        // Dismiss loading toast
        toast.dismiss(loadingToastId);
        const order = await response.json();
        // console.log(order);
        const formData = new FormData(event.target);
        var options = {
            "key": "rzp_live_B9n1PDzQiKCbp1", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "Active Forever", //your business name
            "image": "https://example.com/your_logo",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response) {
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
                // setPaymentId(response.razorpay_payment_id);

                // formData.Payment_Id = response.razorpay_payment_id;
                // formData.append("Payment_Id", paymentId);

                const validateRes = await fetch("https://cyclothon.onrender.com/order/validate", {
                    method: "POST",
                    body: JSON.stringify(response),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const jsonRes = await validateRes.json();
                // console.log(jsonRes);

                if (jsonRes.msg == 'success') {
                    // Add Payment ID to formData for Web3Forms submission
                    formData.append("Payment_Id", response.razorpay_payment_id);
                    formData.append("access_key", "c0def3d7-e05c-43ad-a34b-d0dddfe618b2");   //c0def3d7-e05c-43ad-a34b-d0dddfe618b2
                                                        //5a362b95-d295-4ea4-a4c7-e7b6e7cd2d4c  -- my testing
                    try {
                        const web3Response = await fetch("https://api.web3forms.com/submit", {
                            method: "POST",
                            body: formData,
                        });

                        const web3Data = await web3Response.json();

                        if (web3Data.success) {
                            toast.success("Registration successful! Email sent.");
                            event.target.reset(); // Clear form on success
                        } else {
                            toast.error("Email submission failed. Please try again.");
                        }
                    } catch (error) {
                        toast.error("An error occurred during submission.");
                    }
                } else {
                    toast.error("Payment validation failed. Please try again.");
                }


                console.log(formData.get("name"));
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": formData.get("name"), //your customer's name
                "email": formData.get("email"),
                "contact": formData.get("phone")  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": formData.get("address")
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        event.preventDefault();

        // WEB 3 froms..............................................................................................................................................

        // const formData = new FormData(event.target);
        // formData.append("access_key", "5a362b95-d295-4ea4-a4c7-e7b6e7cd2d4c");

        // const saveFormSubmission = async () => {
        //     const response = await fetch("https://api.web3forms.com/submit", {
        //         method: "POST",
        //         body: formData,
        //     });
        //     const data = await response.json();
        //     if (!data.success) {
        //         throw new Error("Form submission failed");
        //     }
        //     return data;
        // };

        // toast.promise(
        //     saveFormSubmission(),
        //     {
        //         loading: "Submitting...",
        //         success: <b>Submitted successfully!</b>,
        //         error: <b>Submission failed. Please try again.</b>,
        //     }
        // ).then(() => {
        //     setFormData({ name: "", email: "", message: "", phone: "" })
        //     event.target.reset(); // Clear the form after success
        // });
    };

    // console.log(address)


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
                            <option value="21KM ₹500">21KM ₹500</option>
                            <option value="10KM ₹500">10KM ₹500</option>
                            <option value="5KM ₹500">5KM ₹500</option>
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
                            value={address}
                            name="address"
                            onChange={(e) => {
                                setIsOtherAddress(e.target.value === "Others");
                                setAddress(e.target.value);
                            }}
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
                                // value={address}
                                onChange={(e) => { setAddress(e.target.value) }}
                                type="text"
                                required
                                placeholder="Enter short address"
                                className="w-full border border-green-300 rounded-md p-2"
                            />
                        </div>
                    )}

                    {/* Category */}
                    <div className="mb-4">
                        <label className="block text-green-700 font-medium mb-2">
                            Category:  <span className="text-sm text-red-600">*Student - upto 12th only</span>
                        </label>

                        <p className="text-sm text-red-600">*Any misinformation will lead to disqualification</p>
                        <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={handleCategoryChange}
                            className="w-full border border-green-300 rounded-md p-2"
                        >
                            <option value="student">Select category</option>
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
                        <select
                            id="Blood_Group"
                            name="Blood_Group"
                            value={formData.Blood_Group}
                            onChange={handleChange}
                            required
                            className="w-full border border-green-300 rounded-md p-2"
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
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
                    //    onClick={paymentHandler}
                    >
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;

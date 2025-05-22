import { useState } from "react";
import { eventFormFields } from "./eventFormFields";
import { db } from "./firebase";
import { doc, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


export default function DynamicEventForm({ eventId }) {
    const fields = eventFormFields[eventId];
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" })); // Clear error on change
    };


    const validateForm = () => {
        const newErrors = {};
        fields.forEach(field => {
          if (!formData[field.name] || formData[field.name].trim() === "") {
            newErrors[field.name] = `${field.label} is required`;
          }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validateForm()) return;
        
    //     const eventDoc = doc(db, "eventRegistrations", eventId);
    //     const regRef = collection(eventDoc, "registrations");
    //     await addDoc(regRef, formData);
    //     toast.success("Registration successful! Redirecting to payment...");
    //     setTimeout(() => {
    //         navigate("/payment", { state: { eventId } });
    //     }
    //         , 2000); // Redirect after 1 seconds
    //     setFormData({});
    //     setErrors({});
    // };



    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      setIsLoading(true); // start loading
    
      const amount = 599 * 100; // ₹599 in paise
      const currency = "INR";
    
      const loadingToastId = toast.loading("Registering... Please wait");
    
      try {
        // Step 1: Create Order from Backend
        const orderRes = await fetch("https://cyclothon.onrender.com/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, currency }),
        });
    
        toast.dismiss(loadingToastId);
        setIsLoading(false); // stop loading
        const order = await orderRes.json();
    
        // Step 2: Launch Razorpay Checkout
        const options = {
          key: "rzp_live_B9n1PDzQiKCbp1", // ✅ Your Razorpay live key
          amount,
          currency,
          name: "ActiveForever",
          description: "Event Registration",
          image: "/logo.png", // ✅ Optional logo (public path)
          order_id: order.id,
          prefill: {
            name: formData.name || "",
            email: formData.email || "",
            contact: formData.phone || "",
          },
          theme: {
            color: "#10B981",
          },
          handler: async function (response) {
            try {
              // Step 3: Validate Payment Signature on Backend
              const validateRes = await fetch("https://cyclothon.onrender.com/order/validate", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(response),
              });
    
              const validateData = await validateRes.json();
    
              if (validateData.msg === "success") {
                // Step 4: Save to Firestore if valid
                const eventDoc = doc(db, "eventRegistrations", eventId);
                const regRef = collection(eventDoc, "registrations");
    
                await addDoc(regRef, {
                  ...formData,
                  paymentId: response.razorpay_payment_id,
                  createdAt: new Date(),
                });
    
                toast.success("Payment successful! Registration completed.");
                navigate("/thankyou");
              } else {
                toast.error("Payment validation failed.");
              }
            } catch (err) {
              toast.error("Validation failed. Try again.");
              console.error("Validation error:", err);
            }
          },
        };
    
        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", (err) => {
          toast.error("Payment failed. Try again.");
          console.error("Razorpay payment failed:", err);
        });
        rzp.open();
      } catch (error) {
        toast.dismiss(loadingToastId);
        toast.error("Failed to create Razorpay order.");
        setIsLoading(false); // stop loading
        console.error("Order creation error:", error);
      }
    };

    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!validateForm()) return;
      
    //     // Razorpay options
    //     const options = {
    //       key: "rzp_live_B9n1PDzQiKCbp1", // Replace with your Razorpay Key
    //       amount: 59900, // Amount in paisa (₹599)
    //       currency: "INR",
    //       name: "ActiveForever",
    //       description: "Event Registration",
    //       image: "/logo.png", // optional
    //       prefill: {
    //         name: formData.name || "",
    //         email: formData.email || "",
    //         contact: formData.phone || "",
    //       },
    //       handler: async function (response) {
    //         try {
    //           const eventDoc = doc(db, "eventRegistrations", eventId);
    //           const regRef = collection(eventDoc, "registrations");
      
    //           await addDoc(regRef, {
    //             ...formData,
    //             paymentId: response.razorpay_payment_id,
    //             createdAt: new Date(),
    //           });
      
    //           toast.success("Payment successful! Registration completed.");
    //           navigate("/thankyou");
    //         } catch (error) {
    //           toast.error("Error saving data after payment.");
    //           console.error(error);
    //         }
    //       },
    //       theme: {
    //         color: "#10B981",
    //       },
    //     };
      
    //     const rzp = new window.Razorpay(options);
    //     rzp.open();
    //   };
      

    return (
        <div className="">
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-green-100 shadow-md rounded-xl space-y-6 mt-32">
            <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                     Register Now
                </h1>
                {fields.map((field) => (
                    <div key={field.name}>
                        <label className="block text-gray-700 font-semibold mb-1">{field.label}</label>
                        {field.type === "select" ? (
                            <select
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                            >
                                <option value="">Select</option>
                                {field.options.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
                            />
                        )}
                        {errors[field.name] && (
                            <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow transition duration-300"
                >
                    Submit
                </button>
            </form>
            {isLoading && (
  <div className="fixed inset-0 z-50 bg-white bg-opacity-80 flex flex-col items-center justify-center">
    <img src="/images/running.webp" alt="Loading..." className="w-24 h-24" />
    <p className="mt-4 text-green-700 font-semibold">Processing Payment...</p>
  </div>
)}

        </div>
    );
}

import { useState, useEffect } from "react";
import { eventFormFields } from "./eventFormFields";
import { db } from "./firebase";
import { doc, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function DynamicEventForm({ eventId, price, category, date, message }) {
  const fields = eventFormFields[eventId];
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false);
  const [isDeadlineNear, setIsDeadlineNear] = useState(false);
  const [isFinalHour, setIsFinalHour] = useState(false);
  const [countdown, setCountdown] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const deadline = new Date(date);
      deadline.setHours(23, 59, 59, 999); // 11:59 PM

      if (now > deadline) {
        setIsRegistrationClosed(true);
        clearInterval(interval);
      } else {
        
          const diff = deadline - now;
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          // Build formatted string
          let countdownStr = "";
          if (days > 0) countdownStr += `${days} day${days > 1 ? "s" : ""} `;
          if (hours > 0) countdownStr += `${hours} hr${hours > 1 ? "s" : ""} `;
          if (minutes > 0) countdownStr += `${minutes} min `;
          countdownStr += `${seconds} sec`;

          setCountdown(countdownStr.trim());


        // Warning toast
        if (diff < 2 * 60 * 60 * 1000 && !isDeadlineNear) {
          setIsDeadlineNear(true);
          toast("⏰ Hurry! Only a few hours left to register.", {
            duration: 6000,
            style: {
              background: "#fef3c7",
              color: "#92400e",
              fontWeight: "bold",
            },
          });
        }

        if (diff < 60 * 60 * 1000) {
          setIsFinalHour(true);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date, isDeadlineNear]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (!formData[field.name] || formData[field.name].trim() === "") {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    const amount = price * 100;
    const currency = "INR";
    const loadingToastId = toast.loading("Registering... Please wait");

    try {
      const orderRes = await fetch("https://cyclothon.onrender.com/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });

      toast.dismiss(loadingToastId);
      setIsLoading(false);
      const order = await orderRes.json();

      const options = {
        key: "rzp_live_B9n1PDzQiKCbp1",
        amount,
        currency,
        name: "ActiveForever",
        description: "Event Registration",
        image: "/logo.png",
        order_id: order.id,
        prefill: {
          name: formData.name || "",
          email: formData.email || "",
          contact: formData.phone || "",
        },
        theme: { color: "#10B981" },
        handler: async function (response) {
          try {
            const validateRes = await fetch("https://cyclothon.onrender.com/order/validate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            const validateData = await validateRes.json();

            if (validateData.msg === "success") {
              const eventDoc = doc(db, "eventRegistrations", eventId);
              const regRef = collection(eventDoc, "registrations");

              await addDoc(regRef, {
                ...formData,
                price,
                category,
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
      setIsLoading(false);
      console.error("Order creation error:", error);
    }
  };

  if (isRegistrationClosed) {
  return (
    <div className="max-w-xl mx-auto p-6 mt-20 bg-gradient-to-br from-red-100 via-pink-100 to-red-50 text-center rounded-2xl shadow-xl relative overflow-hidden animate-fade-in-up">
      
      {/* Shine Effect */}
      <div className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine pointer-events-none"></div>
      
      {/* Lock Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-red-200 p-4 rounded-full animate-bounce shadow-inner">
          <svg
            className="w-10 h-10 text-red-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V9a5 5 0 00-10 0v2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-red-800 mb-2 tracking-wide drop-shadow">
        Registration Closed
      </h2>

      {/* Message */}
      <p className="text-gray-700 text-base font-medium mb-6">
        {message || "Sorry, registration for this event is now closed."}
      </p>

      {/* Optional CTA */}
      <a
        href="/"
        className="inline-block mt-2 px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition duration-300 shadow-md"
      >
        Explore More Events
      </a>
    </div>
  );
}


  return (
    <div className="">
  <Toaster position="top-center" reverseOrder={false} />
  <form
    onSubmit={handleSubmit}
    className="max-w-xl mx-auto p-6 bg-gray-950 shadow-lg rounded-2xl space-y-6 mt-16 border border-gray-800"
  >
    <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
      Register Now
    </h1>

    {countdown && (
      <div className="text-center mb-4">
        <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full shadow-md animate-pulse">
          <svg
            className="w-5 h-5 text-orange-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a9 9 0 100-18 9 9 0 000 18z" />
          </svg>
          <span className="text-orange-400 font-semibold">Registration closes in:</span>
          <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-3 py-1 rounded-md shadow-inner">
            {countdown}
          </span>
        </div>
      </div>
    )}

    {fields.map((field) => (
      <div key={field.name}>
        <label className="block text-orange-400 font-semibold mb-1">
          {field.label}
        </label>
        {field.type === "select" ? (
          <select
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors[field.name] ? "border-red-500" : "border-gray-700"
            } bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            <option value="">Select</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt} className="bg-gray-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors[field.name] ? "border-red-500" : "border-gray-700"
            } bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
          />
        )}
        {errors[field.name] && (
          <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
        )}
      </div>
    ))}

    <button
      type="submit"
      disabled={isRegistrationClosed || isLoading}
      className={`w-full py-2 px-4 ${
        isRegistrationClosed || isLoading
          ? "bg-gray-600 cursor-not-allowed"
          : "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
      } text-white font-semibold rounded-md shadow-md transition duration-300`}
    >
      {isLoading
        ? "Processing..."
        : isRegistrationClosed
        ? "Registration Closed"
        : `Submit (₹${price})`}
    </button>
  </form>

  {isLoading && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center">
      <img src="/images/running.webp" alt="Loading..." className="w-24 h-24 animate-pulse" />
      <p className="mt-4 text-orange-400 font-semibold">Processing Payment...</p>
    </div>
  )}
</div>

  );
}

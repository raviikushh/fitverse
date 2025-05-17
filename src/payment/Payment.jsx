import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { buttonFields } from "./buttonFields";
import MainPageNav from "@/pages/MainPageNav";
import Footer from "@/pages/Footer";

export default function Payment() {
    const location = useLocation();
    const { eventId } = location.state || {};
    const buttons = buttonFields[eventId] || [];
    // const [payment,setPayment] = useState(false);
    const[clicked,setClicked] = useState(false);
    console.log(buttons);
    useEffect(() => {
        const formsContainer = document.getElementById("razorpay-forms");

        // Clear old scripts/forms
        formsContainer.innerHTML = "";
        buttons.forEach((btn, index) => {
            const form = document.createElement("form");
            form.id = `razorpay-form-${index}`;

            const script = document.createElement("script");
            script.src = btn.src;
            script.setAttribute("data-payment_button_id", btn.id);
            script.async = true;

            form.appendChild(script);
            formsContainer.appendChild(form);
        });
        // setTimeout(() => {
        //     if(clicked){
        //         setPayment(true);
        //     }
        // },3000);
        return () => {
            formsContainer.innerHTML = "";
             // cleanup on unmount
        };
    }, [buttons,clicked]);

    return (
        <>
            <MainPageNav />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className=" bg-gray-50 flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6" >Complete Your Registration</h2>

                    {buttons.length === 0 ? (
                        <p className="text-gray-500 text-base">No payment options available for this event.</p>
                    ) : (
                        <div id="razorpay-forms" className="space-y-4 flex flex-col items-center justify-center" onClick={()=>setClicked(true)}/>
                    )}
                </div>
            </div>
            
            {/* {payment && <div><div className="text-center text-green-500 mt-4">Thank You!</div>
            <div className="text-center text-gray-500 mt-4">If you face any issues, please contact support.</div>
            </div>
            } */}
            </div>
            <Footer />
        </>
    );
}

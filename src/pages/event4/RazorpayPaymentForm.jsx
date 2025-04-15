import { useEffect } from "react";

const RazorpayPaymentForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_QJQao0GXm2YGIt');  
    script.async = true;

    const form = document.getElementById('razorpay-form');
    form.appendChild(script);

    return () => {
      form.innerHTML = ''; // cleanup if component unmounts
    };
  }, []);

  return <form id="razorpay-form"></form>;
};

export default RazorpayPaymentForm;


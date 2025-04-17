import { useEffect } from "react";

const RazorpayPaymentEvent6 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_QKAjR6B7kRCmsj');  
    script.async = true;

    const form = document.getElementById('razorpay-form');
    form.appendChild(script);

    return () => {
      form.innerHTML = ''; // cleanup if component unmounts
    };
  }, []);

  return <form id="razorpay-form"></form>;
};

export default RazorpayPaymentEvent6;






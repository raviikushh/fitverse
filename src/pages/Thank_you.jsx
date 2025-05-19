import { useNavigate } from "react-router-dom";

const Thank_you = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-10 text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="mx-auto mb-6 h-20 w-20 text-green-500" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-extrabold mb-4 text-green-800">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your registration/payment was successful. We appreciate your participation!
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Thank_you;

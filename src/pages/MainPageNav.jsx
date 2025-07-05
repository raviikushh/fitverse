import logo from '../assets/logo.png';
import { TfiAlignJustify } from "react-icons/tfi"
import { HashLink } from "react-router-hash-link";
import { Button } from "@/components/ui/button";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";


const MainPageNav = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [menuModal,setMenuModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [LoginStatus, setLoginStatus] = useState("Login");
    const navigate = useNavigate();
    const handleLogin = () => {
         // Prevent default form submission
        //  console.log(email,password);
        if(email == "activeforever00@gmail.com" && password == "1528@kadma") {
            localStorage.setItem("isLoggedIn", true); // Set login status in local storage
            // console.log("Login successful");
            // toast.success("Login successful! Redirecting to admin dashboard...");
            toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 1000)), // Simulate a delay
                 {
                   loading: 'Logging IN...',
                   success: <p>Login successful!!..</p>,
                 }
                 
               )
               setTimeout(() => {
                navigate('/admin'); 
               }, 1000);
            setLoginStatus("Logout"); // Update login status
            setIsLoggedIn(true);
            // Redirect to admin dashboard or perform any other action
            
        }
        else{
            toast.error("Invalid email or password! Please try again.");
        }
                // console.log("Login button clicked");
        setModalOpen(false); // Close the modal after login
    };

    const handleLogout = () => {   
        localStorage.removeItem("isLoggedIn"); // Remove login status from local storage
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1000)), // Simulate a delay
         {
           loading: 'Logging OUT...',
           success: <p>Logout successful!!..</p>,
         }
         
       )
       setTimeout(() => {
        navigate('/'); 
       }, 1000);
        // toast.success("Logout successful! Redirecting to home page...");
        setIsLoggedIn(false); // Update state
        setLoginStatus("Login"); // Reset login status
        setModalOpen(false); // Close the modal after logout
        // navigate('/'); // Redirect to home page or perform any other action
        // console.log("Logout successful");
     };

     useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedInStatus); // Update state based on local storage
        setLoginStatus(loggedInStatus ? "Logout" : "Login"); // Set login status text
        
    }, []);
    // console.log("isLoggedIn:", isLoggedIn);
    // console.log("LoginStatus:", LoginStatus);

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full bg-green-500 shadow z-50">
                {/* Mobile View */}
                <div className="md:hidden flex justify-between items-center p-4">
                    <div className="text-lg font-bold text-white">
                        <a href="#">
                            <img src={logo} alt="logo" className="h-14" />
                        </a>
                    </div>
                    <TfiAlignJustify className="text-3xl text-white" onClick={()=>setMenuModal(true)}/>               
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex items-center justify-between px-16 py-4">
                    {/* Logo */}
                    <div className="text-lg font-bold text-white">
                        <a href="#">
                            <img src={logo} alt="logo" className="h-14" />
                        </a>
                    </div>

                    {/* Nav Links */}
                    <div className="flex items-center space-x-8">
                        <HashLink
                            smooth
                            to="/about"
                            className="text-white text-lg hover:text-green-200 font-semibold font-inter"
                        >
                            About
                        </HashLink>
                        <HashLink
                            smooth
                            to="/contact"
                            className="text-white text-lg hover:text-green-200 font-semibold font-inter"
                        >
                            Contact
                        </HashLink>
                           {!isLoggedIn ? (
                                <Button asChild>
                                    <p className="cursor-pointer" onClick={() => setModalOpen(true)}>{LoginStatus}</p>
                                </Button>
                            )
                        : (
                                <Button asChild>
                                    <p className="cursor-pointer" onClick={handleLogout}>{LoginStatus}</p>
                                </Button>
                            )}
                            {
                                isLoggedIn && (
                                    <Button asChild>
                                        <p className="cursor-pointer" onClick={() => navigate('/admin')}>Admin</p>
                                    </Button>
                                )
                            }
                    </div>
                </div>
            </div>
            {/* Menu Modal */}
            {menuModal && (
                <div className="fixed inset-0 flex items-center mt-1 justify-center bg-black bg-opacity-50 z-20 ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative text-center">
                        <button
                            onClick={() => setMenuModal(false)}
                            className="absolute top-2 right-2 text-black hover:text-gray-800 text-xl"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col space-y-4">
                            <HashLink
                                smooth
                                to="/"
                                className="text-lg text-gray-800 hover:text-green-600 font-semibold"
                                onClick={() => setMenuModal(false)}
                            >
                                Home
                            </HashLink>
                            <HashLink
                                smooth
                                to="/about"
                                className="text-lg text-gray-800 hover:text-green-600 font-semibold"
                                onClick={() => setMenuModal(false)}
                            >
                                About
                            </HashLink>
                            <HashLink
                                smooth
                                to="/contact"
                                className="text-lg text-gray-800 hover:text-green-600 font-semibold"
                                onClick={() => setMenuModal(false)}
                            >
                                Contact
                            </HashLink>
                           {!isLoggedIn ? (
                                <Button asChild>
                                    <p
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setMenuModal(false);
                                            setModalOpen(true);
                                        }}
                                    >
                                        {LoginStatus}
                                    </p>
                                </Button>
                            )
                        :
                               ( <Button asChild>
                                    <p
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setMenuModal(false);
                                            handleLogout();
                                        }}
                                    >
                                        {LoginStatus}
                                    </p>
                                </Button>
                            )}
                                        {
                                isLoggedIn && (
                                    <Button asChild>
                                        <p className="cursor-pointer" onClick={() => {
                                            setMenuModal(false);
                                            navigate('/admin');
                                        }}>Admin</p>
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-2 right-2 text-black hover:text-gray-800 text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Login</h2>
                        <div>
                        <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 mb-2">Password</label>
                                <input
                                     type={showPassword ? "text" : "password"}
                                    className="w-full border border-gray-300 p-2 rounded"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                 <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute bottom-3 right-5  text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}

                                </button>
                            </div>
                            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full" onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPageNav;

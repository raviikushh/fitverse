import logo from '/images/logo.png';
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
        if(email == "admin" && password == "admin") {
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
      const [scrolled, setScrolled] = useState(false);
       useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
     useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedInStatus); // Update state based on local storage
        setLoginStatus(loggedInStatus ? "Logout" : "Login"); // Set login status text
        
    }, []);
    // console.log("isLoggedIn:", isLoggedIn);
    // console.log("LoginStatus:", LoginStatus);

    return (
  <div className='p-4'>
    <Toaster position="top-center" reverseOrder={false} />

    {/* Navbar */}
  <div className={`fixed top-4 left-1/2 -translate-x-1/2 
      w-[90%] md:w-[80%] 
      bg-white/10 backdrop-blur-xl border border-white/20 
      rounded-2xl z-50 px-4 py-1 md:py-4 flex items-center justify-between 
      transition-all duration-300 
      ${scrolled ? "shadow-lg" : "shadow-none"}`}>
      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center p-4 w-full">
        <div className="text-lg font-bold text-white">
          <a href="#">
            <img src={logo} alt="logo" className="h-14" />
          </a>
        </div>
        <div className="menu">
          <TfiAlignJustify
            className="text-3xl text-orange-500"
            onClick={() => setMenuModal(true)}
          />
        </div>
      </div>

      {/* Desktop View */}
      {/* <div className="hidden md:flex items-center justify-between px-16 py-4 "> */}
        {/* Logo */}
        <div className="text-lg font-bold text-white hidden md:block">
          <a href="#">
            <img src={logo} alt="logo" className="h-14" />
          </a>
        </div>

        {/* Nav Links */}
        <div className=" items-center space-x-8 hidden md:block">
          <HashLink
            smooth
            to="/about"
            className="text-white text-lg hover:text-orange-400 font-semibold font-inter transition-colors"
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/contact"
            className="text-white text-lg hover:text-orange-400 font-semibold font-inter transition-colors"
          >
            Contact
          </HashLink>

          {!isLoggedIn ? (
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
              <p className="cursor-pointer" onClick={() => setModalOpen(true)}>
                {LoginStatus}
              </p>
            </Button>
          ) : (
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
              <p className="cursor-pointer" onClick={handleLogout}>{LoginStatus}</p>
            </Button>
          )}

          {isLoggedIn && (
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
              <p className="cursor-pointer" onClick={() => navigate('/admin')}>
                Admin
              </p>
            </Button>
          )}
        </div>
      {/* </div> */}
    </div>

    {/* Menu Modal (Mobile) */}
    {menuModal && (
      <div className="fixed inset-0 flex items-center mt-1 justify-center bg-black bg-opacity-80 z-20">
        <div className="bg-black p-6 rounded-lg shadow-lg w-80 relative text-center border border-orange-500">
          <button
            onClick={() => setMenuModal(false)}
            className="absolute top-2 right-2 text-white hover:text-orange-400 text-xl"
          >
            &times;
          </button>
          <div className="flex flex-col space-y-4">
            <HashLink
              smooth
              to="/"
              className="text-lg text-white hover:text-orange-400 font-semibold"
              onClick={() => setMenuModal(false)}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/about"
              className="text-lg text-white hover:text-orange-400 font-semibold"
              onClick={() => setMenuModal(false)}
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/contact"
              className="text-lg text-white hover:text-orange-400 font-semibold"
              onClick={() => setMenuModal(false)}
            >
              Contact
            </HashLink>

            {!isLoggedIn ? (
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
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
            ) : (
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
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

            {isLoggedIn && (
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setMenuModal(false);
                    navigate('/admin');
                  }}
                >
                  Admin
                </p>
              </Button>
            )}
          </div>
        </div>
      </div>
    )}

    {/* Login Modal */}
    {modalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
        <div className="bg-black p-6 rounded-lg shadow-lg w-96 relative border border-orange-500">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-2 right-2 text-white hover:text-orange-400 text-xl"
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4 text-orange-400">Login</h2>
          <div>
            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-600 bg-black text-white p-2 rounded"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-600 bg-black text-white p-2 rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute bottom-3 right-5 text-orange-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600"
              onClick={handleLogin}
            >
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

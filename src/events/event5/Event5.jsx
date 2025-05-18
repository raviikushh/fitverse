import { useState, useEffect } from "react";
import MainPageNav from "../../pages/MainPageNav";
import Contact from "../event1/Contact";
import Footer from "../../pages/Footer";
import { Button } from "@/components/ui/button";
import BlurText from "../../components/BlurText";
import ShinyText from "../../components/ShinyText";
import SpotlightCard from "../../components/SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import StarBorder from "../../components/StarBorder";
import { HashLink } from "react-router-hash-link";
import { Category } from "./Category";

const Event5 = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1500); 
    
      return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <MainPageNav />

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl max-w-sm text-center relative">
            <h2 className="text-lg font-bold mb-2">🚫Important Information!</h2>
            <p className="text-gray-700"> ⚜️<span className="font-semibold text-green-500">BIB</span> collection will take place at Decathlon store <span className="font-semibold text-green-500">Bistupur</span> on 9th &10th May between 11 am to 8 pm 
            .</p>
            <Button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white"
            >
              Got it!
            </Button>
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <body>
        <div className="hero py-12 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-32 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-semibold mt-20">
          <div className="textarea">
            <h1 className="text-6xl">Summer </h1>
            <BlurText
              text="10K RUN"
              delay={170}
              animateBy="words"
              direction="top"
              className="text-6xl mb-8 font-semibold text-green-100"
            />
            <div className="btn flex justify-center items-center mt-4 gap-6">
              <StarBorder as="button" className="custom-class" color="white" speed="5s">
                <HashLink smooth to="/event5#register" className="hover:text-green-300">
                  Register Now
                </HashLink>
              </StarBorder>
              <Button
                variant="outline"
                className="bg-green-800 font-semibold text-md hover:text-green-400 hover:bg-green-700 py-5"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="cards mt-8 md:mt-0">
            <SpotlightCard
              className="custom-spotlight-card cursor-pointer bg-black"
              spotlightColor="cyan"
            >
              <div className="location flex gap-2">
                <GrLocation className="text-2xl text-green-300" />
                <h2>Decathlon store, Bistupur</h2>
              </div>
              <div className="date flex gap-2 mt-2">
                <FaRunning className="text-2xl text-green-500" />
                <h2>11 May, 2025</h2>
              </div>
              <div className="multiple flex gap-2 mt-2">
                <IoIosStarOutline className="text-2xl text-green-400" />
                <h2>Multiple Categories Available</h2>
              </div>
              <div className="registration bg-green-600 text-white p-2 rounded-lg mt-2 text-lg">
                <h2>Gifts for all the participants</h2>
                <h2 className="custom-class text-white">Register Now</h2>
                <ShinyText
                  text="Limited slots available"
                  disabled={false}
                  speed={5}
                  className="custom-class text-sm"
                />
              </div>
            </SpotlightCard>
          </div>
        </div>
        <Category />
        <Contact />
        <Footer />
      </body>
    </div>
  );
};

export default Event5;

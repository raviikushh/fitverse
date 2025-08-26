import MainPageNav from "../../pages/MainPageNav";
// import BlurText from "../BlurText"
import Contact from "../event1/Contact"
import Footer from "../../pages/Footer"
import { Button } from "@/components/ui/button";
import BlurText from "../../components/BlurText";
import ShinyText from "../../components/ShinyText";
import SpotlightCard from "../../components/SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import StarBorder from "../../components/StarBorder";
import { HashLink } from "react-router-hash-link";
import EventDetails7 from "./EventDetails7";
// import Register6 from "./Register6";
import DynamicEventForm from "../../database/DynamicEventForm"
import { useState } from "react";


const Event7 = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const price = selectedCategory === "10KM" ? 700 : selectedCategory === "5KM" ? 500 : 0;
  return (
    <div>
        <MainPageNav />
        <body className="bg-black text-orange-100">
  <div className="hero py-12 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-32  bg-fitverse-dark  text-white font-semibold mt-20">
    <div className="textarea">
      <h1 className="text-6xl text-orange-500">Jamshedpur</h1>
      <BlurText
        text="Night Run"
        delay={170}
        animateBy="words"
        direction="top"
        className="text-5xl mb-8 font-semibold text-orange-200"
      />
      <div className="btn flex justify-center items-center mt-4 gap-6">
        <Button variant="outline" className="bg-fitverse-dark font-semibold text-md hover:text-orange-400 hover:bg-orange-700 py-5">
          <HashLink smooth to="/event7#register" className="hover:text-orange-300">
            Register Below👇
          </HashLink>
        </Button>
        <Button
          variant="outline"
          className="bg-orange-800 font-semibold text-md hover:text-orange-400 hover:bg-orange-700 py-5"
        >
          Learn More
        </Button>
      </div>
    </div>

    <div className="cards mt-8 md:mt-0">
      <SpotlightCard className="custom-spotlight-card cursor-pointer bg-black" spotlightColor="orange">
        <div className="location flex gap-2">
          <GrLocation className="text-2xl text-orange-400" />
          <h2>Near JRD MAIN Gate</h2>
        </div>
        <div className="date flex gap-2 mt-2">
          <FaRunning className="text-2xl text-orange-500" />
          <h2>19 July 2025 | 11:00 pm IST</h2>
        </div>
        <div className="multiple flex gap-2 mt-2">
          <IoIosStarOutline className="text-2xl text-orange-300" />
          <h2>Night Run</h2>
        </div>
        <div className="registration bg-orange-600 text-white p-3 rounded-lg mt-3 text-lg">
          <h2>Medals for Finishers</h2>
          <h2 className="custom-class text-white">Multiple Categories Available</h2>
          <ShinyText
            text="Join the Night Run and experience the thrill of running under the stars!"
            disabled={false}
            speed={5}
            className="custom-class text-sm"
          />
        </div>
      </SpotlightCard>
    </div>
  </div>

  <EventDetails7 />

  <div className="col-span-2 flex flex-col items-center mt-8">
    <h2 className="text-2xl font-bold mb-4 text-orange-400">Select Category</h2>
    <div className="flex gap-8">
      <div
        className={`cursor-pointer border-2 rounded-xl p-6 shadow-lg transition-all duration-200 ${
          selectedCategory === "10KM"
            ? "border-orange-700 bg-orange-200 text-black"
            : "border-orange-400 bg-gray-900 text-orange-200"
        }`}
        onClick={() => setSelectedCategory("10KM")}
      >
        <h3 className="text-xl font-semibold mb-2">10KM</h3>
        <p className="text-lg font-bold">₹700</p>
      </div>

      <div
        className={`cursor-pointer border-2 rounded-xl p-6 shadow-lg transition-all duration-200 ${
          selectedCategory === "5KM"
            ? "border-orange-700 bg-orange-200 text-black"
            : "border-orange-400 bg-gray-900 text-orange-200"
        }`}
        onClick={() => setSelectedCategory("5KM")}
      >
        <h3 className="text-xl font-semibold mb-2">5KM</h3>
        <p className="text-lg font-bold">₹500</p>
      </div>
    </div>

    {selectedCategory && (
      <div className="mt-4 text-orange-300 font-medium">
        Selected: {selectedCategory}
      </div>
    )}
  </div>

  <DynamicEventForm
    eventId="Night_Run"
    price={price}
    category={selectedCategory}
    date={"2025-08-30"}
    message={
      "Online registration is closed now, for offline registrations please connect on 9304599119 number"
    }
  />

  <Contact />
  <Footer />
</body>

    </div>
  )
}

export default Event7
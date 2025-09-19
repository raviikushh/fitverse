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
import { HashLink } from "react-router-hash-link";
import EventDetails2 from "./EventDetails2";
import DynamicEventForm from "../../database/DynamicEventForm";
import { useState } from "react";

const Event2 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const price =
    selectedCategory === "Full Access" ? 500 :
    selectedCategory === "One-Day Pass" ? 300 : 0;

  return (
    <div>
      <MainPageNav />
      <div className="bg-black text-orange-100">
        {/* Hero Section */}
        <div className="hero py-12 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-32 bg-fitverse-dark text-white font-semibold mt-20">
          <div className="textarea">
            <h1 className="text-6xl text-orange-500">Virtual</h1>
            <BlurText
              text="Yoga Weekend"
              delay={170}
              animateBy="words"
              direction="top"
              className="text-5xl mb-8 font-semibold text-orange-200"
            />
            <p className="text-lg text-orange-100 mb-6">
              Relax and recharge with guided yoga and meditation sessions from
              the comfort of your home.
            </p>
            <div className="btn flex justify-center items-center mt-4 gap-6">
              <Button
                variant="outline"
                className="bg-fitverse-dark font-semibold text-md hover:text-orange-400 hover:bg-orange-700 py-5"
              >
                <HashLink
                  smooth
                  to="/event2#register"
                  className="hover:text-orange-300"
                >
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

          {/* Event Highlight Card */}
          <div className="cards mt-8 md:mt-0">
            <SpotlightCard
              className="custom-spotlight-card cursor-pointer bg-black"
              spotlightColor="orange"
            >
              <div className="location flex gap-2">
                <GrLocation className="text-2xl text-orange-400" />
                <h2>Online Sessions</h2>
              </div>
              <div className="date flex gap-2 mt-2">
                <FaRunning className="text-2xl text-orange-500" />
                <h2>15–16 Feb 2025</h2>
              </div>
              <div className="multiple flex gap-2 mt-2">
                <IoIosStarOutline className="text-2xl text-orange-300" />
                <h2>Yoga • Meditation • Mindfulness</h2>
              </div>
              <div className="registration bg-orange-600 text-white p-3 rounded-lg mt-3 text-lg">
                <h2>Guided by Certified Instructors</h2>
                <h2 className="custom-class text-white">
                  Flexible Participation Options
                </h2>
                <ShinyText
                  text="Recharge your body and mind this weekend with our virtual yoga retreat."
                  disabled={false}
                  speed={5}
                  className="custom-class text-sm"
                />
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Event Details Section */}
        <EventDetails2 />

        {/* Category Selection */}
        <div className="col-span-2 flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">
            Select Pass
          </h2>
          <div className="flex gap-8">
            <div
              className={`cursor-pointer border-2 rounded-xl p-6 shadow-lg transition-all duration-200 ${
                selectedCategory === "Full Access"
                  ? "border-orange-700 bg-orange-200 text-black"
                  : "border-orange-400 bg-gray-900 text-orange-200"
              }`}
              onClick={() => setSelectedCategory("Full Access")}
            >
              <h3 className="text-xl font-semibold mb-2">Full Access (2 Days)</h3>
              <p className="text-lg font-bold">₹500</p>
            </div>

            <div
              className={`cursor-pointer border-2 rounded-xl p-6 shadow-lg transition-all duration-200 ${
                selectedCategory === "One-Day Pass"
                  ? "border-orange-700 bg-orange-200 text-black"
                  : "border-orange-400 bg-gray-900 text-orange-200"
              }`}
              onClick={() => setSelectedCategory("One-Day Pass")}
            >
              <h3 className="text-xl font-semibold mb-2">One-Day Pass</h3>
              <p className="text-lg font-bold">₹300</p>
            </div>
          </div>

          {selectedCategory && (
            <div className="mt-4 text-orange-300 font-medium">
              Selected: {selectedCategory}
            </div>
          )}
        </div>

        {/* Registration Form */}
        <DynamicEventForm
          eventId="event2"
          price={price}
          category={selectedCategory}
          date={"2025-12-15"}
          message={
            "Registrations are closed!."
          }
        />

        {/* Contact & Footer */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Event2;

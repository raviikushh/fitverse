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
        <body className="bg-green-100/50">
        <div className="hero py-12 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-32 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-semibold mt-20">
                    <div className="textarea">
                        <h1 className="text-6xl">Jamshedpur </h1>
                        <BlurText
                            text="Night Run"
                            delay={170}
                            animateBy="words"
                            direction="top"
                            className="text-5xl mb-8 font-semibold text-green-100"
                        />
                        {/* <ShinyText
                            text="Join the most exciting cycling event of the year. Experience the thrill of cycling through scenic routes."
                            disabled={false}
                            speed={6}
                            className="text-white"
                        /> */}
                        <div className="btn flex justify-center items-center mt-4 gap-6">
                            <StarBorder
                                as="button"
                                className="custom-class"
                                color="white"
                                speed="5s"
                            >
                                <HashLink smooth to="/event7#register" className="hover:text-green-300">
                                    Register Below👇
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
                                <h2>Near JRD MAIN Gate</h2>
                            </div>
                            <div className="date flex gap-2 mt-2">
                                <FaRunning className="text-2xl text-green-500" />
                                <h2>19 july 2025 | 11:00 pm IST</h2>
                            </div>
                            <div className="multiple flex gap-2 mt-2">
                                <IoIosStarOutline className="text-2xl text-green-400" />
                                <h2>Night Run </h2>
                            </div>
                            <div className="registration bg-green-600 text-white p-2 rounded-lg mt-2 text-lg">
                                <h2>Medals for Finishers</h2>
                                <h2 className="custom-class text-white">Multiple Categories Availiable</h2>
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
                <EventDetails7/>
                <div className="col-span-2 flex flex-col items-center mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-green-900">Select Category</h2>
                        <div className="flex gap-8">
                            <div
                                className={`cursor-pointer border-2 rounded-xl p-6 shadow-lg transition-all duration-200 ${
                                    selectedCategory === "10KM"
                                        ? "border-green-700 bg-green-200"
                                        : "border-green-400 bg-white"
                                }`}
                                onClick={() => setSelectedCategory("10KM")}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-green-800">10KM</h3>
                                <p className="text-lg text-green-700 font-bold">₹700</p>
                            </div>
                            <div
                                className={`cursor-pointer border-2 rounded-xl p-6 shadow-lg transition-all duration-200 ${
                                    selectedCategory === "5KM"
                                        ? "border-green-700 bg-green-200"
                                        : "border-green-400 bg-white"
                                }`}
                                onClick={() => setSelectedCategory("5KM")}
                            >
                                <h3 className="text-xl font-semibold mb-2 text-green-800">5KM</h3>
                                <p className="text-lg text-green-700 font-bold">₹500</p>
                            </div>
                        </div>
                        {selectedCategory && (
                            <div className="mt-4 text-green-900 font-medium">
                                Selected: {selectedCategory}
                            </div>
                        )}
                    </div>
                <DynamicEventForm eventId="Night_Run" price={price} category={selectedCategory} date={'2025-08-30'} message={'Online registration is closed now, for offline registrations please connect on 9304599119 number'}/>
                {/* <Reg/> */}
                {/* <Register6/> */}
            <Contact/>
            <Footer/>
        </body>
    </div>
  )
}

export default Event7
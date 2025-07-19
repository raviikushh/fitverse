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
import EventDetails6 from "./EventDetails6";
// import Register6 from "./Register6";
import DynamicEventForm from "../../database/DynamicEventForm"


const Event6 = () => {
  return (
    <div>
        <MainPageNav />
        <body className="bg-green-100/50">
        <div className="hero py-12 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-32 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-semibold mt-20">
                    <div className="textarea">
                        <h1 className="text-6xl">21 Days </h1>
                        <BlurText
                            text="Transformation Challenge"
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
                                <HashLink smooth to="/event6#register" className="hover:text-green-300">
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
                                <h2>Online Zoom Calll</h2>
                            </div>
                            <div className="date flex gap-2 mt-2">
                                <FaRunning className="text-2xl text-green-500" />
                                <h2>1-21 June 2025</h2>
                            </div>
                            <div className="multiple flex gap-2 mt-2">
                                <IoIosStarOutline className="text-2xl text-green-400" />
                                <h2>Transformation Challenge </h2>
                            </div>
                            <div className="registration bg-green-600 text-white p-2 rounded-lg mt-2 text-lg">
                                <h2>Advanced BMI checkup</h2>
                                <h2 className="custom-class text-white">₹599 Only</h2>
                                <ShinyText
                                    text="First 100 participants get customised medal hanger "
                                    disabled={false}
                                    speed={5}
                                    className="custom-class text-sm"
                                />
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
                <EventDetails6/>
                <DynamicEventForm eventId="Transformation_Event" price='500' date="2025-06-21" message=""    />
                {/* <Reg/> */}
                {/* <Register6/> */}
            <Contact/>
            <Footer/>
        </body>
    </div>
  )
}

export default Event6
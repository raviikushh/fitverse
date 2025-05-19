import SpotlightCard from "../../components/SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import RazorpayPaymentForm from "./RazorpayPaymentForm";

const EventDetails6 = () => {
    // const navigate = useNavigate();

    return (
        <div className="" id="eventDetails">
            <div className="mt-16"></div>
            <div className="header flex justify-center items-center flex-col px-6">
                <h1 className="text-3xl font-semibold text-green-900">Event Details</h1>
                <h2 className="text-green-700 font-semibold text-lg">
                    This 21 days Transformation Challenge is Being Organised by Active Forever.
                </h2>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 py-4 px-8">
                {/* Card 1 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 240, 180, 0.3)">
                    <div className="location flex gap-2 items-center">
                        <GrLocation className="text-2xl text-green-600" />
                        <h2 className="text-xl font-semibold text-green-900">Event Information</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-green-800">
                        <h2>Video Call on Zoom Meeting
                        </h2>
                        <h2>6:30am - 7:30 am</h2>
                        <h2>Medals, Certificates for all the participants</h2>
                        <h2>Trophy, Medal, Certificate for Winner</h2>
                    </div>
                </SpotlightCard>

                {/* Card 2 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 240, 180, 0.3)">
                    <div className="date flex gap-2 items-center">
                        <FaRunning className="text-2xl text-green-600" />
                        <h2 className="text-xl font-semibold text-green-900">Event Facilities</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-green-800">
                        {/* <h2>T shirt 
                        </h2> */}
                        <h2>One Day Session by Dr. Anjali Lead Coach of Fit Bharat Mission
                        </h2>
                        <h2>
                          21 Online Yoga Session by Alisha, Ridhi and Sonal 
                        </h2>
                        <h2>Generic Diet Chart for All the participants</h2>
                        <h2>Lifestyle Enhancement Session by life Coach Aparajita Apra</h2>
                    </div>
                </SpotlightCard>

                {/* Card 3 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 240, 180, 0.3)">
                    <div className="multiple flex gap-2 items-center">
                        <IoIosStar className="text-2xl text-green-600" />
                        <h2 className="text-xl font-semibold text-green-900">Important Information</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-green-800">
                        <h2>Event Date: 1st-21st June 2025</h2>
                        <h2>Starts From 6:30 AM to 7:30 am</h2>
                        <h2>Registration Closes on 30th may</h2>
                    </div>
                </SpotlightCard>
            </div>
           

        </div>
    );
};

export default EventDetails6;

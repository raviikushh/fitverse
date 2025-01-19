import SpotlightCard from "./SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const EventDetails = () => {
    return (
        <div className="" id="eventDetails">
            <div className="mt-16"></div>
            <div className="header flex justify-center items-center flex-col px-6">
                <h1 className="text-3xl font-semibold text-blue-900">Event Details</h1>
                <h2 className="text-blue-700">
                    Join us for an unforgettable cycling experience through the scenic routes of Jamshedpur
                </h2>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 py-4 px-8">
                {/* Card 1 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 200, 255, 0.3)">
                    <div className="location flex gap-2 items-center">
                        <GrLocation className="text-2xl text-blue-600" />
                        <h2 className="text-xl font-semibold text-blue-900">Route Information</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-blue-800">
                        <h2>Starting Point: India Gate</h2>
                        <h2>Well-marked route</h2>
                        <h2>Traffic-free zones</h2>
                        <h2>Multiple aid stations</h2>
                    </div>
                </SpotlightCard>

                {/* Card 2 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 200, 255, 0.3)">
                    <div className="date flex gap-2 items-center">
                        <FaRunning className="text-2xl text-blue-600" />
                        <h2 className="text-xl font-semibold text-blue-900">Event Facilities</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-blue-800">
                        <h2>On-site medical assistance</h2>
                        <h2>Free parking at the venue</h2>
                        <h2>Refreshment zones</h2>
                        <h2>Professional photographers</h2>
                    </div>
                </SpotlightCard>

                {/* Card 3 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 200, 255, 0.3)">
                    <div className="multiple flex gap-2 items-center">
                        <IoIosStar className="text-2xl text-blue-600" />
                        <h2 className="text-xl font-semibold text-blue-900">Important Information</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-blue-800">
                        <h2>Event Date: 25th March 2025</h2>
                        <h2>Reporting Time: 6:00 AM</h2>
                        <h2>Bring your own helmet</h2>
                        <h2>Follow traffic rules</h2>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    );
};

export default EventDetails;

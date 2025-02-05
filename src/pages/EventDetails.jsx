import SpotlightCard from "./SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const EventDetails = () => {
    return (
        <div className="" id="eventDetails">
            <div className="mt-16"></div>
            <div className="header flex justify-center items-center flex-col px-6">
                <h1 className="text-3xl font-semibold text-green-900">Event Details</h1>
                <h2 className="text-green-700 font-semibold text-lg">
                This Event is Being Organised by Rotary, Jamshedpur Steel City and co-ordinated by Active Forever,on the occasion of World Cancer Day.
                </h2>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 py-4 px-8">
                {/* Card 1 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 240, 180, 0.3)">
                    <div className="location flex gap-2 items-center">
                        <GrLocation className="text-2xl text-green-600" />
                        <h2 className="text-xl font-semibold text-green-900">Route Information</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-green-800">
                        <h2>Starting Point : Uddipis Uphar, Bindal Mall
                        </h2>
                        <h2>Well-marked route</h2>
                        {/* <h2>through Marine drive</h2> */}
                        {/* <h2>Multiple aid stations</h2> */}
                    </div>
                </SpotlightCard>

                {/* Card 2 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 240, 180, 0.3)">
                    <div className="date flex gap-2 items-center">
                        <FaRunning className="text-2xl text-green-600" />
                        <h2 className="text-xl font-semibold text-green-900">Event Facilities</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-green-800">
                        <h2>T shirt 
                        </h2>
                        <h2>certificate & Medals
                        </h2>
                        <h2>
                            Refreshment
                        </h2>
                        <h2>Professional photographer  & Videography</h2>
                    </div>
                </SpotlightCard>

                {/* Card 3 */}
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white shadow-md" spotlightColor="rgba(180, 240, 180, 0.3)">
                    <div className="multiple flex gap-2 items-center">
                        <IoIosStar className="text-2xl text-green-600" />
                        <h2 className="text-xl font-semibold text-green-900">Important Information</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-green-800">
                        <h2>Event Date: 08th Feb 2025</h2>
                        <h2>Reporting Time: 5:30 AM</h2>
                        <h2>Flag Off: 6:00 AM</h2>
                        <h2>Bring your own Helmet
                        </h2>
                        <h2>Follow traffic rules</h2>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    );
};

export default EventDetails;

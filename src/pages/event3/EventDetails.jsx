import SpotlightCard from "../SpotlightCard";
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
                    This Event is Being Organised by Active Forever,on the occasion of HOLI.
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
                        <h2>Venue : Bindal Mall
                        </h2>
                        <h2>Well-marked route</h2>
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
                        <h2> Medals
                        </h2>
                        <h2>
                            Refreshments with Thandai
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
                        <h2>Event Date: 16 March 2025</h2>
                        <h2>Reporting Time: 5:30 AM</h2>
                        <h2>Celebrate Dry Holi After Run</h2>
                    </div>
                </SpotlightCard>
            </div>
            {/* <div className="cards flex justify-center items-center flex-col mt-10">
            <Card className="bg-white text-green-900 hover:scale-105 transform transition-transform duration-300 px-4 shadow-md w-96 md:w-96">
                <CardHeader>
                    <CardTitle className="text-green-600 text-2xl">21 KM</CardTitle>
                    <CardTitle className="text-green-900 text-2xl">First 50 Registrations will get Medals</CardTitle>
                </CardHeader>
                <CardContent>
                    {["Hydration point every 3k", "Refreshments", "Celebrate Dry Holi after run"].map((item, idx) => (
                        <div key={idx} className="c1 flex gap-2 items-center">
                            <IoIosStar className="text-green-600 text-xl" />
                            <h2 className="text-lg">{item}</h2>
                        </div>
                    ))}
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-green-600 text-white hover:bg-green-800" onClick={() => navigate("/register", { state: { category: "21KM ₹500" } })}>
                        Register
                    </Button>
                </CardFooter>
            </Card>
            </div> */}

        </div>
    );
};

export default EventDetails;

import SpotlightCard from "./SpotlightCard"
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const EventDetails = () => {
    return (
        <>
        <div className="" id="eventDetails">
            <div className="mt-16" ></div>
            <div className="header flex justify-center items-center flex-col px-6 ">
                <h1 className="text-3xl font-semibold" >Event Details</h1>
                <h2 className="text-slate-600">Join us for an unforgettable cycling experience through the scenic routes of Jamshedpur</h2>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 py-4 px-8 ">
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white" spotlightColor="rgba(100, 100, 100, 0.3)">
                    <div className="location flex gap-2 items-center">
                        <GrLocation className="text-2xl text-orange-600" />
                        <h2 className="text-xl font-semibold">Route Information</h2>
                    </div>
                        <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-slate-800">
                            <h2>Starting Point: India Gate</h2>
                            <h2>Well-marked route</h2>
                            <h2>Traffic-free zones</h2>
                            <h2>Multiple aid stations</h2>
                        </div>
                   
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white" spotlightColor="rgba(100, 100, 100, 0.3)">
                   
                    <div className="date flex gap-2 items-center">
                        <FaRunning className="text-2xl text-cyan-600 " />
                        <h2 className="text-xl font-semibold">Event Facilities</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-slate-800">
                            <h2>Starting Point: India Gate</h2>
                            <h2>Well-marked route</h2>
                            <h2>Traffic-free zones</h2>
                            <h2>Multiple aid stations</h2>
                        </div>
                    
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card cursor-pointer bg-white" spotlightColor="rgba(100, 100, 100, 0.3)">
                    <div className="multiple flex gap-2 items-center">
                        <IoIosStar className="text-2xl text-orange-600 " />
                        <h2 className="text-xl font-semibold">Important Information</h2>
                    </div>
                    <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-slate-800">
                            <h2>Starting Point: India Gate</h2>
                            <h2>Well-marked route</h2>
                            <h2>Traffic-free zones</h2>
                            <h2>Multiple aid stations</h2>
                        </div>
                
                </SpotlightCard>
            </div>
        </div>
        </>
    )
}

export default EventDetails
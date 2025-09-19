import SpotlightCard from "../../components/SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import RazorpayPaymentForm from "./RazorpayPaymentForm";

const EventDetails2 = () => {
    // const navigate = useNavigate();

    return (
      <div className="" id="eventDetails">
  <div className="mt-16"></div>
  <div className="header flex justify-center items-center flex-col px-6 text-center">
    <h1 className="text-3xl font-bold text-orange-500">Event Details</h1>
    <h2 className="text-gray-300 font-medium text-lg mt-2">
      This Jamshedpur Night Run is Being Organised by Active Forever.
    </h2>
  </div>

  <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 py-4 px-8">
    {/* Card 1 */}
    <SpotlightCard
      className="custom-spotlight-card cursor-pointer bg-black shadow-lg rounded-2xl border border-gray-800"
      spotlightColor="rgba(255, 165, 0, 0.25)"
    >
      <div className="location flex gap-2 items-center">
        <GrLocation className="text-2xl text-orange-500" />
        <h2 className="text-xl font-semibold text-orange-400">Event Information</h2>
      </div>
      <div className="info flex flex-col gap-2 mt-3 px-6 text-base text-gray-300">
        <h2>📅 Date: 19th July 2025</h2>
        <h2>📍 Venue: JRD MAIN GATE</h2>
        <h2>👕 T-Shirts, 🎖 E-Certificates, 🥤 Refreshments</h2>
        <h2>🏅 Medals for Finishers</h2>
      </div>
    </SpotlightCard>

    {/* Card 2 */}
    <SpotlightCard
      className="custom-spotlight-card cursor-pointer bg-black shadow-lg rounded-2xl border border-gray-800"
      spotlightColor="rgba(255, 165, 0, 0.25)"
    >
      <div className="date flex gap-2 items-center">
        <FaRunning className="text-2xl text-orange-500" />
        <h2 className="text-xl font-semibold text-orange-400">Event Facilities</h2>
      </div>
      <div className="info flex flex-col gap-2 mt-3 px-6 text-base text-gray-300">
        <h2>🥤 Refreshments for Participants</h2>
        <h2>🏅 Medals for Finishers</h2>
        <h2>📊 Multiple Categories Available</h2>
        <h2>🌌 Experience the thrill of Night Running!</h2>
      </div>
    </SpotlightCard>

    {/* Card 3 */}
    <SpotlightCard
      className="custom-spotlight-card cursor-pointer bg-black shadow-lg rounded-2xl border border-gray-800"
      spotlightColor="rgba(255, 165, 0, 0.25)"
    >
      <div className="multiple flex gap-2 items-center">
        <IoIosStar className="text-2xl text-orange-500" />
        <h2 className="text-xl font-semibold text-orange-400">Important Information</h2>
      </div>
      <div className="info flex flex-col gap-2 mt-3 px-6 text-base text-gray-300">
        <h2>📅 Date: 19th July 2025</h2>
        <h2>⏰ Starts at 11:00 PM IST</h2>
        <h2>🚨 Registration closes on 12th July</h2>
      </div>
    </SpotlightCard>
  </div>
</div>

    );
};

export default EventDetails2;

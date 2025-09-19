import SpotlightCard from "../../components/SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const EventDetails = () => {
  return (
    <div className="bg-fitverse-dark min-h-screen text-white" id="eventDetails">
      <div className="mt-16"></div>

      {/* Header */}
      <div className="header flex justify-center items-center flex-col px-6 text-center">
        <h1 className="text-3xl font-bold text-orange-500">Event Details</h1>
        <h2 className="text-orange-300 font-medium text-lg mt-2 max-w-3xl">
          This Event is Being Organised by Rotary, Jamshedpur Steel City and
          co-ordinated by Active Forever, on the occasion of World Cancer Day.
        </h2>
      </div>

      {/* Cards */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 py-4 px-8">
        {/* Card 1 */}
        <SpotlightCard
          className="custom-spotlight-card cursor-pointer bg-black/50 shadow-lg border border-orange-500/30"
          spotlightColor="rgba(255, 165, 0, 0.2)"
        >
          <div className="location flex gap-2 items-center">
            <GrLocation className="text-2xl text-orange-400" />
            <h2 className="text-xl font-semibold text-orange-500">
              Route Information
            </h2>
          </div>
          <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-gray-200">
            <h2>Starting Point : Uddipis Uphar, Bindal Mall</h2>
            <h2>Well-marked route</h2>
          </div>
        </SpotlightCard>

        {/* Card 2 */}
        <SpotlightCard
          className="custom-spotlight-card cursor-pointer bg-black/50 shadow-lg border border-orange-500/30"
          spotlightColor="rgba(255, 165, 0, 0.2)"
        >
          <div className="date flex gap-2 items-center">
            <FaRunning className="text-2xl text-orange-400" />
            <h2 className="text-xl font-semibold text-orange-500">
              Event Facilities
            </h2>
          </div>
          <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-gray-200">
            <h2>T-shirt</h2>
            <h2>Certificate & Medals</h2>
            <h2>Refreshment</h2>
            <h2>Professional Photographer & Videography</h2>
          </div>
        </SpotlightCard>

        {/* Card 3 */}
        <SpotlightCard
          className="custom-spotlight-card cursor-pointer bg-black/50 shadow-lg border border-orange-500/30"
          spotlightColor="rgba(255, 165, 0, 0.2)"
        >
          <div className="multiple flex gap-2 items-center">
            <IoIosStar className="text-2xl text-orange-400" />
            <h2 className="text-xl font-semibold text-orange-500">
              Important Information
            </h2>
          </div>
          <div className="info flex flex-col gap-2 mt-2 px-8 text-lg text-gray-200">
            <h2>Event Date: 08th Feb 2025</h2>
            <h2>Reporting Time: 5:30 AM</h2>
            <h2>Flag Off: 6:00 AM</h2>
            <h2>Bring your own Helmet</h2>
            <h2>Follow traffic rules</h2>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default EventDetails;

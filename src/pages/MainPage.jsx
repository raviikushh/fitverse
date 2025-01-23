import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import RollingGallery from "./RollingGallery";
import event_img from '../assets/event_img.jpg'
import MainPageNav from "./MainPageNav";


const MainPage = () => {
    const navigate = useNavigate();

    // Event details
    const event = {
        id: 1,
        name: "Cyclathon 2025",
        date: "Feb 08, 2025",
        location: "Jamshedpur",
        description: "Join us for an unforgettable cycling experience through scenic routes.",
        image: event_img, // Replace with actual image URL
    };

    return (
        <>
        <MainPageNav />
        <div className="bg-green-100 mt-[20%] md:mt-[6%] pt-8">
            {/* Main Content */}
            <main className="bg-green-100">
                <h1 className="text-center font-extrabold text-5xl md:text-6xl text-green-700 leading-tight tracking-wide mb-4 ">
                    ActiveForever: <span className="text-green-500">Inspiring Fitness, Empowering Lives</span>.
                </h1>
                <p className="text-center text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Join us for transformative activities, events, and programs designed to keep you moving and thriving!
                </p>

                <RollingGallery autoplay={true} pauseOnHover={true} />
                <section className="mb-8 px-6 pb-6">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-green-800">Upcoming Event</h2>
                    <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden border max-w-2xl mx-auto cursor-pointer hover:scale-105 transition-all mt-10 flex flex-col md:flex-row" onClick={() => navigate(`/event`)}>
                        <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-[500px] md:h-[500px] object-contain"
                        />
                        <div className="p-6">
                            <h3 className="text-3xl font-semibold">{event.name}</h3>
                            <p className="text-lg text-orange-600 md:mt-2">Cycling for a cause</p>
                            <p className="text-gray-600 mt-2">{event.date}</p>
                            <p className="text-gray-600 font-semibold">{event.location}</p>
                            <p className="mt-4 text-gray-700 md:text-lg">{event.description}</p>
                            <p className="text-green-600 font-semibold md:mt-2 text-lg text-justify">This Event is Being Organised by Rotary, Jamshedpur Steel City and co-ordinated by Active Forever,on the occasion of World Cancer Day.</p>
                            <Button
                                className="mt-6 bg-green-500 hover:bg-green-600 w-full "
                                onClick={() => navigate(`/event`)}
                            >
                                View Event Details
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-green-800 text-white flex justify-between py-4 px-1 md:px-6 mt-auto">
                <p>© 2025 Active Forever. All rights reserved.</p>
                <p>Built by <a href="https://ravi07.vercel.app/" className="underline text-blue-300">Ravi</a></p>
            </footer>
        </div>
        </>
    );
};

export default MainPage;

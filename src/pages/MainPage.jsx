import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { HashLink } from "react-router-hash-link";
import { Input } from "@/components/ui/input";
import RollingGallery from "./RollingGallery";
import event_img from '../assets/event_img.jpg'

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
        <div className="bg-green-100 md:-mt-0">
            {/* Navbar */}
            <div className="sticky top-0 z-50 backdrop:blur">
                {/* Mobile View */}
                <div className="mobile md:hidden flex justify-between p-4 bg-green-600">
                    <Dialog>
                        <div className="text-lg font-bold text-white">
                            <a href="#">
                                <img src={logo} alt="logo" className="h-14" />
                            </a>
                        </div>
                        <DialogTrigger asChild>
                            <CiMenuBurger className="text-3xl text-white" />
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white text-green-600 top-44 py-20">
                            <DialogTitle className="text-2xl font-semibold text-center">
                                <HashLink smooth to="/" className="hover:text-green-800">
                                    About
                                </HashLink>
                            </DialogTitle>
                            <DialogTitle className="text-2xl font-semibold text-center">
                                <HashLink smooth to="/" className="hover:text-green-800">
                                    Contact
                                </HashLink>
                            </DialogTitle>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Desktop View */}
                <div className="nav hidden md:block">
                    <nav className="flex items-center justify-around bg-green-600 py-4 shadow-md gap-48">
                        {/* Left Section: Logo */}
                        <div className="text-lg font-bold text-white">
                            <a href="#">
                                <img src={logo} alt="logo" className="h-14" />
                            </a>
                        </div>

                        {/* Center Section */}
                        <div className="hidden md:block">
                            <Input
                                type="text"
                                placeholder="Search events"
                                className="w-64 bg-white text-green-600 border border-green-300 placeholder-green-400"
                            />
                        </div>

                        {/* Right Section: Navigation Links */}
                        <div className="flex space-x-6">
                            <HashLink
                                smooth
                                to=""
                                className="text-white text-lg hover:text-green-200 font-semibold"
                            >
                                About
                            </HashLink>
                            <HashLink
                                smooth
                                to=""
                                className="text-white text-lg hover:text-green-200 font-semibold"
                            >
                                Contact
                            </HashLink>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="bg-green-100 ">
                <h1 className="text-center font-extrabold text-5xl md:text-6xl text-green-700 leading-tight tracking-wide mb-4">
                    ActiveForever: <span className="text-green-500">Inspiring Fitness, Empowering Lives</span>.
                </h1>
                <p className="text-center text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Join us for transformative activities, events, and programs designed to keep you moving and thriving!
                </p>

                <RollingGallery autoplay={true} pauseOnHover={true} />
                <section className="mb-8 ">
                    <h2 className="text-xl font-semibold mb-6 text-center">Upcoming Event</h2>
                    <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden border max-w-2xl mx-auto cursor-pointer hover:scale-105 transition-all" onClick={() => navigate(`/event`)}>
                        <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-[500px] object-fit"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">{event.name}</h3>
                            <p>Cycling for a cause</p>
                            <p className="text-gray-600 mt-2">{event.date}</p>
                            <p className="text-gray-600 font-semibold">{event.location}</p>
                            <p className="mt-4 text-gray-700">{event.description}</p>
                            <p className="text-green-600 font-semibold">This Event is Being Organised by Rotary, Jamshedpur Steel City and co-ordinated by Active Forever,on the occasion of World Cancer Day.</p>
                            <Button
                                className="mt-6 bg-green-500 hover:bg-green-600 w-full"
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
    );
};

export default MainPage;

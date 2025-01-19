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


const MainPage = () => {
    const navigate = useNavigate();

    // Event details
    const event = {
        id: 1,
        name: "Cyclothon 2025",
        date: "March 15, 2025",
        location: "Jamshedpur",
        description: "Join us for an unforgettable cycling experience through scenic routes.",
        image: "https://media.istockphoto.com/id/1002107936/photo/cyclists-racing-on-country-roads.jpg?s=612x612&w=0&k=20&c=1Cax1BiTqgJgs_KjniF4JtFzA7wKHIckw-h25aHNfJI=", // Replace with actual image URL
    };

    return (
        <div className="-mt-20 md:-mt-0">
            {/* Navbar */}
            <div className="sticky top-0 z-50 backdrop:blur">
            {/* Mobile View */}
            <div className="mobile md:hidden flex justify-between p-4 bg-blue-600">
                <Dialog>
                <div className="text-lg font-bold text-white">
                        <a href="#">
                            <img src={logo} alt="logo" className="h-14"/>
                        </a>
                    </div>
                    <DialogTrigger asChild>
                        <CiMenuBurger className="text-3xl text-white" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white text-blue-600 top-44 py-20">
                        <DialogTitle className="text-2xl font-semibold text-center">
                            <HashLink smooth to="/" className="hover:text-blue-800">
                                About
                            </HashLink>
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">
                            <HashLink smooth to="/" className="hover:text-blue-800">
                                Contact
                            </HashLink>
                        </DialogTitle>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Desktop View */}
            <div className="nav hidden md:block">
                <nav className="flex items-center justify-around bg-blue-600 py-4 shadow-md gap-48">
                    {/* Left Section: Logo */}
                    <div className="text-lg font-bold text-white">
                        <a href="#">
                            <img src={logo} alt="logo" className="h-14"/>
                        </a>
                    </div>

                    {/* Center Section */}
                    <div className="hidden md:block">
                        <Input
                            type="text"
                            placeholder="Search events"
                            className="w-64 bg-white text-blue-600 border border-blue-300 placeholder-blue-400"
                        />
                    </div>

                    {/* Right Section: Navigation Links */}
                    <div className="flex space-x-6">
                        <HashLink
                            smooth
                            to=""
                            className="text-white text-lg hover:text-blue-200 font-semibold"
                        >
                            About
                        </HashLink>
                        <HashLink
                            smooth
                            to=""
                            className="text-white text-lg hover:text-blue-200 font-semibold"
                        >
                            Contact
                        </HashLink>
                    </div>
                </nav>
            </div>
        </div>



            {/* Main Content */}
            <main className=""> {/* Added pt-20 to offset the fixed navbar */}
            <RollingGallery autoplay={true} pauseOnHover={true} />
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-6 text-center">Upcoming Event</h2>
                    <div className="bg-white shadow-lg rounded-md overflow-hidden border max-w-2xl mx-auto">
                        <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">{event.name}</h3>
                            <p className="text-gray-600 mt-2">{event.date}</p>
                            <p className="text-gray-600">{event.location}</p>
                            <p className="mt-4 text-gray-700">{event.description}</p>
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
            <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
                <p>© 2025 Active Forever. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainPage;

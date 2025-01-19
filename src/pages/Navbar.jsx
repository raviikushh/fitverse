import { CiMenuBurger } from "react-icons/ci";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { HashLink } from "react-router-hash-link";
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
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
                            <HashLink smooth to="/event#eventDetails" className="hover:text-blue-800">
                                Event Details
                            </HashLink>
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">
                            <HashLink smooth to="/event#register" className="hover:text-blue-800">
                                Register
                            </HashLink>
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">
                            <HashLink smooth to="/event#about" className="hover:text-blue-800">
                                About
                            </HashLink>
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">
                            <HashLink smooth to="/event#contact" className="hover:text-blue-800">
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
                    {/* <div className="hidden md:block">
                        <Input
                            type="text"
                            placeholder="Search events"
                            className="w-64 bg-white text-blue-600 border border-blue-300 placeholder-blue-400"
                        />
                    </div> */}

                    {/* Right Section: Navigation Links */}
                    <div className="flex space-x-6">
                        <HashLink
                            smooth
                            to="/event#eventDetails"
                            className="text-white text-lg hover:text-blue-200 font-semibold"
                        >
                            Event Details
                        </HashLink>
                        <HashLink
                            smooth
                            to="/event#register"
                            className="text-white text-lg hover:text-blue-200 font-semibold"
                        >
                            Register
                        </HashLink>
                        <HashLink
                            smooth
                            to="/event#about"
                            className="text-white text-lg hover:text-blue-200 font-semibold"
                        >
                            About
                        </HashLink>
                        <HashLink
                            smooth
                            to="/event#contact"
                            className="text-white text-lg hover:text-blue-200 font-semibold"
                        >
                            Contact
                        </HashLink>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

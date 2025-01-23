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



const MainPageNav = () => {
  return (
    <div>
        {/* Navbar */}
        <div className="fixed top-0 z-50 backdrop:blur right-0 left-0">
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
                                <HashLink smooth to="/about" className="hover:text-green-800">
                                    About
                                </HashLink>
                            </DialogTitle>
                            <DialogTitle className="text-2xl font-semibold text-center">
                                <HashLink smooth to="/contact" className="hover:text-green-800">
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
                                to="/about"
                                className="text-white text-lg hover:text-green-200 font-semibold"
                            >
                                About
                            </HashLink>
                            <HashLink
                                smooth
                                to="/contact"
                                className="text-white text-lg hover:text-green-200 font-semibold"
                            >
                                Contact
                            </HashLink>
                        </div>
                    </nav>
                </div>
            </div>
    </div>
  )
}

export default MainPageNav
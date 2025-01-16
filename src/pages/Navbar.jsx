import { CiMenuBurger } from "react-icons/ci";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop:blur">
        <div className="mobile md:hidden flex justify-end p-4 bg-black/90 ">
                <Dialog>
                    <DialogTrigger asChild>
                        {/* <Button variant="outline">Edit Profile</Button> */}
                        <CiMenuBurger className="text-3xl text-white " />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-black text-orange-600 top-44 py-20 ">
                        <DialogTitle className="text-2xl font-semibold text-center">
                        <HashLink smooth to="/event#eventDetails">
                            Event Details
                        </HashLink>
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">
                        <HashLink smooth to="/event#register">
                            Register
                        </HashLink>
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">
                        <HashLink smooth to="/event#about">
                            About
                        </HashLink>
                        </DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">
                        <HashLink smooth to="/event#contact">
                           Contact
                        </HashLink>
                        </DialogTitle>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="nav hidden md:block">
                <nav className="flex items-center justify-around bg-black/90 px-6 py-4 shadow-md ">
                    {/* Left Section: Logo */}
                    <div className="text-lg font-bold text-gray-200">
                        <a href="#">Cyclothon</a>
                    </div>
                    {/* Center Section */}
                    <div className="hidden md:block">
                        <Input type="text" placeholder="Search events" className="w-64" />
                    </div>
                    {/* Right Section: Navigation Links */}
                    <div className="flex space-x-6">
                        <HashLink smooth to="/event#eventDetails"  className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            Event Details
                        </HashLink>
                        <HashLink smooth to="/event#register"  className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            Register
                        </HashLink>
                        <HashLink smooth to="/event#about"  className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            About
                        </HashLink>
                        <HashLink smooth to="/event#contact"  className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            Contact
                        </HashLink>
                    </div>
                </nav>
            </div>

    </div>
  )
}

export default Navbar
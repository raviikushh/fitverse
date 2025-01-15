import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import BlurText from "./BlurText";
import ShinyText from "./ShinyText";
import SpotlightCard from "./SpotlightCard";
import { GrLocation } from "react-icons/gr";
import { FaRunning } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import StarBorder from "./StarBorder";
import { CiMenuBurger } from "react-icons/ci";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import EventDetails from "./EventDetails";
import { CategoryCard } from "./CategoryCard";


const LandingPage = () => {
    return (
        <div>
            <div className="mobile md:hidden flex justify-end p-4 bg-black/90">
                
                <Dialog>
                    <DialogTrigger asChild>
                        {/* <Button variant="outline">Edit Profile</Button> */}
                        <CiMenuBurger className="text-3xl text-white " />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-black text-orange-600 top-44 py-20 ">
                        <DialogTitle className="text-2xl font-semibold text-center">Event Details</DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">Register</DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">About</DialogTitle>
                        <DialogTitle className="text-2xl font-semibold text-center">Contact</DialogTitle>
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
                        <a href="#eventDetails" className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            Event Details
                        </a>
                        <a href="#register" className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            Register
                        </a>
                        <a href="#about" className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            About
                        </a>
                        <a href="#contact" className="text-gray-100 text-lg hover:text-orange-600 font-semibold">
                            Contact
                        </a>
                    </div>
                </nav>
            </div>


            <body>
                <div className="hero py-12 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-32 bg-gradient-to-r from-black/90 via-black/90 to-orange-900 text-white font-semibold ">
                    <div className="textarea">
                        <h1 className="text-6xl">Cyclothon 2025</h1>
                        <BlurText
                            text="Challenge Your Limits!"
                            delay={170}
                            animateBy="words"
                            direction="top"
                            className="text-6xl mb-8 font-semibold text-orange-600"
                        />
                        <ShinyText text="Join the most exciting cycling event of the year. Experience the thrill of cycling through scenic routes." disabled={false} speed={5} className='custom-class' /> <br />
                        <div className="btn flex justify-center items-center mt-4 gap-6">
                            {/* <Button variant="ghost" className='bg-orange-600 font-semibold text-md'>Register Now</Button> */}
                            <StarBorder
                                as="button"
                                className="custom-class"
                                color="white"
                                speed="5s"
                            >
                                Register Now
                            </StarBorder>
                            <Button variant="outline" className='bg-black/90 font-semibold text-md hover:text-orange-600 hover:bg-black hover:border-orange-600 py-5'>Learn More</Button>
                        </div>

                    </div>


                    <div className="cards mt-8 md:mt-0">
                        <SpotlightCard className="custom-spotlight-card cursor-pointer " spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className="location flex gap-2">
                                <GrLocation className="text-2xl text-orange-600" />
                                <h2>Jamshedpur</h2>
                            </div>
                            <div className="date flex gap-2 mt-2">
                                <FaRunning className="text-2xl text-cyan-600 " />
                                <h2>26 Jan, 2025</h2>
                            </div>
                            <div className="multiple flex gap-2 mt-2">
                                <IoIosStarOutline className="text-2xl text-yellow-600" />
                                <h2>Multiple Categories Available</h2>
                            </div>
                            <div className="registration bg-slate-800 text-white p-2 rounded-lg mt-2 text-lg">
                                <h2>Early Bird Registration</h2>
                                <h2 className='custom-class text-orange-500'>₹ 999 onwards </h2>
                                <ShinyText text="Limited slots available" disabled={false} speed={5} className='custom-class text-sm' />
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
                <EventDetails />
                <CategoryCard />
            </body>
        </div>
    )
}

export default LandingPage
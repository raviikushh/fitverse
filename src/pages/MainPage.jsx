import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import event_img from '../assets/event_img.jpg'
import MainPageNav from "./MainPageNav";
import event3 from '../assets/event3.jpg'
import event4 from '../assets/event4.jpg'
import event5 from '../assets/event5.jpg'
import event6 from '../assets/TRANSFORMATION CHALLENGE-1.jpg'
 
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import img5 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img1 from '../assets/img5.jpg'
// import img_medal from '../assets/img_medal.jpg'
import img6 from '../assets/img_last.jpg'



const MainPage = () => {
    const navigate = useNavigate();

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

      const images = [img1, img2, img3, img4, img5, img6];
    // Event details
    const event = {
        id: 1,
        name: "7 Days Transaformation Program",
        date: "24-30, MARCH 2025",
        location: "Jamshedpur",
        description: "Join us for an unforgettable 7 days transformation program.",
        image: event_img, // Replace with actual image URL
    };

    return (
        <>
            <MainPageNav />
            <div className=" mt-[10%] md:mt-[4%] overflow-hidden">
                {/* Main Content */}
                <main className="bg-gradient-to-b from-green-100 to-green-200 py-16 px-4">
                    {/* Carousel Centered */}
                    <div className="flex justify-center items-center mb-12">
                        <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-3xl"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        >
                        <CarouselContent>
                            {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-4">
                                <Card className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                                    <CardContent className="p-0">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-[400px] md:h-[500px] object-cover"
                                    />
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-green-600 text-white hover:bg-green-700" />
                        <CarouselNext className="bg-green-600 text-white hover:bg-green-700" />
                        </Carousel>
                    </div>

                    {/* Headline */}
                    <div className="text-center max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 leading-tight tracking-wide mb-4 animate-fade-in-up">
                        ActiveForever: <span className="text-green-600">Inspiring Fitness, Empowering Lives</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in-up delay-100">
                        Join us for transformative activities, events, and programs designed to keep you moving and thriving!
                        </p>
                        <div className="flex justify-center mt-4">
                        <a
                            href="#/xyz"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                        >
                            Explore Events
                        </a>
                        </div>
                    </div>
                    

                    <section className="mb-8 px-6 pb-6 py-6 bg-green-200 md:mt-8" id="xyz">
                        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-800">Upcoming Events</h2>

                           {/* Event 6 */}

                     <div className="bg-white shadow-lg rounded-md overflow-hidden border max-w-2xl mx-auto cursor-pointer hover:scale-105 transition-all mt-10  flex flex-col md:flex-row" onClick={() => navigate(`/event6`)}>
                            <img
                                src={event6}
                                alt={event}
                                className=" w-[400px] h-[500px] md:h-[500px] object-fit p-2 md:p-0"
                            />

                            <div className="p-6">
                                <h3 className="text-3xl font-semibold ">21 Days Transformation Challenge</h3>
                                <p className="text-gray-600 mt-2">1 June - 21 June 2025</p>
                                <p className="text-gray-600 font-semibold">Online Sessions</p>
                                <p className="md:mt-10 text-gray-700 md:text-lg">join us for an unforgettable Transformation Challenge</p>
                                <p className="text-green-600 font-semibold md:mt-10 text-lg text-justify">This Event is being organised by Active Forever</p>
                                <Button
                                    className="mt-6 bg-green-500 hover:bg-green-600 w-full"
                                    onClick={() => navigate(`/event6`)}
                                >
                                    View Event Details
                                </Button>
                            </div>
                        </div>

                        
                    </section>


{/* -------------------------------------------------- PAST EVENTS ----------------------------------------------------------- */}
                    

                    <section className="bg-green-300 py-6 px-6">
                        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-800">Past Events</h2>


  {/* Event 5 */}

  <div className="bg-white shadow-lg rounded-md overflow-hidden border max-w-2xl mx-auto cursor-pointer hover:scale-105 transition-all mt-10  flex flex-col md:flex-row" >
                            <img
                                src={event5}
                                alt={event}
                                className=" w-[400px] h-[500px] md:h-[500px] object-fit p-2 md:p-0"
                            />

                            <div className="p-6">
                                <h3 className="text-3xl font-semibold">Summer 10K RUN</h3>
                                <p className="text-gray-600 mt-2">11 May 2025</p>
                                <p className="text-gray-600 font-semibold">Decathlon store, Bistupur</p>
                                <p className="md:mt-10 text-gray-700 md:text-lg">join us for an unforgettable Summer Run</p>
                                <p className="text-green-600 font-semibold md:mt-10 text-lg text-justify">This Event is being organised by Active Forever</p>
                                <Button
                                    className="mt-6 bg-green-500 hover:bg-green-600 w-full"
                                    onClick={() => navigate(`/event5`)}
                                >
                                    View Event Details
                                </Button>
                                <Button
                                    className="mt-6 bg-red-400 cursor-not-allowed w-full"
                                    disabled
                                >
                                    Registration Closed
                                </Button>
                            </div>
                        </div>


                        {/* Event 4 */}

                        <div className="bg-white shadow-lg rounded-md overflow-hidden border max-w-2xl mx-auto cursor-pointer hover:scale-105 transition-all mt-10  flex flex-col md:flex-row" onClick={() => navigate(`/event4`)}>
                            <img
                                src={event4}
                                alt={event.name}
                                className=" w-[400px] h-[500px] md:h-[500px] object-fit p-2 md:p-0"
                            />

                            <div className="p-6">
                                <h3 className="text-3xl font-semibold">Walkathon 2025</h3>
                                <p className="text-gray-600 mt-2">22 April 2025</p>
                                <p className="text-gray-600 font-semibold">Kadma-Sonari Link Road</p>
                                <p className="md:mt-10 text-gray-700 md:text-lg">join us for an unforgettable Walkathon</p>
                                <p className="text-green-600 font-semibold md:mt-10 text-lg text-justify">This Event is being organised by Active Forever</p>
                                <Button
                                    className="mt-6 bg-green-500 hover:bg-green-600 w-full"
                                    onClick={() => navigate(`/event4`)}
                                >
                                    View Event Details
                                </Button>
                            </div>
                        </div>


                        {/* Event 3 */}
                        <div className="bg-white shadow-lg rounded-md overflow-hidden border max-w-2xl mx-auto cursor-pointer hover:scale-105 transition-all mt-10  flex flex-col md:flex-row" onClick={() => navigate(`/event3`)}>
                            <img
                                src={event3}
                                alt={event.name}
                                className=" w-[400px] h-[500px] md:h-[500px] object-fit p-2 md:p-0"
                            />

                            <div className="p-6">
                                <h3 className="text-3xl font-semibold">Jamshedpur Holi Half Marathon</h3>
                                <p className="text-gray-600 mt-2">16 March 2025</p>
                                <p className="text-gray-600 font-semibold">{event.location}</p>
                                <p className="md:mt-10 text-gray-700 md:text-lg">join us for an unforgettable Holi Marathon</p>
                                <p className="text-green-600 font-semibold md:mt-10 text-lg text-justify">This Event is being organised by Active Forever</p>
                                <Button
                                    className="mt-6 bg-green-500 hover:bg-green-600 w-full"
                                    onClick={() => navigate(`/event2`)}
                                >
                                    View Event Details
                                </Button>
                            </div>

                        </div>

                        {/* Event 1 */}
                    
                        <div className="past_events bg-white shadow-lg min-h-96 rounded-md overflow-hidden border max-w-2xl mx-auto cursor-pointer hover:scale-105 transition-all mt-14 flex flex-col  mb-8 p-6 gap-4" onClick={() => navigate(`/event`)}>
                            <h2 className="text-4xl font-extrabold mb-2 text-center text-black mt-2">Cyclathon 2025</h2>
                            <h2 className="text-xl font-semibold text-black text-center ">Challenge Your Limits!</h2>
                            <h2 className="font-bold">8th FEB, 2025</h2>
                            <h2 className="font-bold text-slate-500">Multiple Categories Available</h2>
                            <h2 className="text-lg text-justify text-green-800">This Event is Being Organised by Rotary, Jamshedpur Steel City and co-ordinated by Active Forever,on the occasion of World Cancer Day.</h2>
                            <Button
                                className="mt-6 bg-green-500 hover:bg-green-600 w-full"
                                onClick={() => navigate(`/event`)}
                            >
                                View Event Details
                            </Button>
                        </div>
                        
                    </section>



                </main>

                {/* Footer */}
                <footer className="bg-green-800 text-white flex justify-between py-4 px-1 md:px-6 mt-auto">
                    <p>© 2025 Active Forever. All rights reserved.</p>
                    <p>Built by <a href="https://www.dawndigitrix.com/" className="underline text-blue-300">Dawndigitrix</a></p>
                </footer>
            </div>
        </>
    );
};

export default MainPage;

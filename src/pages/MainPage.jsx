import React from "react";
import { events } from "@/mainpage_events/eventData";
import { splitEvents } from "../mainpage_events/splitEvents";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import event_img from '../assets/event_img.jpg'
import MainPageNav from "./MainPageNav";

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
import img7 from '../assets/img7.jpg'



const MainPage = () => {
    const navigate = useNavigate();
    const { upcoming, past } = useMemo(() => splitEvents(events), []);

    const renderCard = (event) => (
        <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"

        >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.startDate} - {event.endDate} • {event.mode}</p>
                <p className="mt-2 text-sm text-gray-700">{event.description}</p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    onClick={() => navigate(event.link)}
                >View Details</button>
            </div>
        </div>
    );


    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const images = [img7, img1, img2, img3, img4, img5, img6];
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
            <div className=" mt-[10%] md:mt-[4%] overflow-hidden font-poppins">
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


                    {/* Hero Section */}
                    <section className="text-center py-20 px-4 bg-white">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Transform Your Life with Active Forever</h1>
                        <p className="mt-4 text-lg max-w-2xl mx-auto">Join fitness challenges, track your progress, and become the best version of yourself with our online and offline events.</p>
                        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition">Browse Events</button>
                    </section>


                    {/* Upcoming Events */}
                    <section className="py-16 px-6">
                        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {upcoming.length > 0 ? upcoming.map(renderCard) : <p className="text-center col-span-full">No upcoming events</p>}
                        </div>
                    </section>

                    {/* Past Events */}
                    <section className="py-16 px-6 bg-gray-100">
                        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Past Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {past.length > 0 ? past.map(renderCard) : <p className="text-center col-span-full">No past events</p>}
                        </div>
                    </section>


                    {/* <section className="mb-8 px-6 pb-6 py-6 bg-green-200 md:mt-8" id="xyz">
                        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-800">Upcoming Events</h2>

                           

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
                                <Button
                                    className="mt-6 bg-red-600 cursor-not-allowed w-full"
                                    disabled
                                >
                                    Registrations will be closed by 30th May
                                </Button>
                            </div>
                        </div>

                        
                    </section> */}


                    {/* -------------------------------------------------- PAST EVENTS ----------------------------------------------------------- */}


                    {/* <section className="bg-green-300 py-6 px-6">
                        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-800">Past Events</h2>




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

                    </section> */}
                    {/* Why Choose Us */}
                    <section className="bg-white py-16 px-6">
                        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Why Choose Active Forever?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            {[
                                { title: 'Community Support', icon: '🤝' },
                                { title: 'Certified Coaches', icon: '🎓' },
                                { title: 'Real Results', icon: '📈' },
                                { title: 'Online & Offline Events', icon: '🌐' },
                            ].map((item) => (
                                <div key={item.title} className="p-6 bg-green-100 rounded-xl shadow">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* Testimonials */}
                    <section className="bg-green-100 py-16 px-6">
                        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">What Participants Say</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Best challenge I ever joined! Helped me lose 5kg in 21 days.",
                                "Super motivating and well-structured.",
                                "Loved the community support and the live sessions."
                            ].map((text, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow">
                                    <p className="text-gray-700 italic">“{text}”</p>
                                    <div className="mt-4 font-bold text-green-700">— Participant</div>
                                </div>
                            ))}
                        </div>
                    </section>

                </main>

                {/* Footer */}
                <footer className="bg-green-800 text-white flex justify-between py-4 px-1 md:px-6 mt-auto">
                    <p>© 2025 Active Forever. All rights reserved.</p>
                    <p>Built by <a href="https://ravi07.vercel.app/" className="underline text-blue-300">Dawndigitrix</a></p>
                </footer>
            </div>
        </>
    );
};

export default MainPage;

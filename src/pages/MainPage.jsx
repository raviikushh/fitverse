import React from "react";
import { events } from "@/mainpage_events/eventData";
import { splitEvents } from "../mainpage_events/splitEvents";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import MainPageNav from "./MainPageNav";
import { motion } from "framer-motion";

import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


import img1 from '/images/img1.jpg'
import img2 from '/images/img2.jpg'
import img3 from '/images/img3.jpg'
import img4 from '/images/img4.jpg'
import img5 from '/images/img5.jpg'
import img6 from '/images/img6.jpg'




const MainPage = () => {
    const navigate = useNavigate();
    const { upcoming, past } = useMemo(() => splitEvents(events), []);

    const renderCard = (event) => (
        <motion.div
        whileHover={{ scale: 1.05 }}
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
        >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-semibold text-green-800">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.startDate} to {event.endDate} • {event.mode}</p>
                <p className="mt-2 text-sm text-gray-700">{event.description}</p>
                <div className="mt-4 flex flex-col gap-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition" onClick={() => navigate(event.link)}>
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );


    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const images = [ img1, img2, img3, img4, img5, img6];
    

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
                                        <div className="p-0">
                                            <Card className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                                                <CardContent className="p-0">
                                                    <img
                                                        src={image}
                                                        alt={`Slide ${index + 1}`}
                                                        className="w-full h-[200px] md:h-[400px] object-cover"
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
                    <p>Built by <a href="https://ravi07.vercel.app/" className="underline text-blue-300">Ravi</a></p>
                </footer>
            </div>
        </>
    );
};

export default MainPage;

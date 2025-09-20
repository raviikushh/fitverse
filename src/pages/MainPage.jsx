import React, { useState, useEffect, useMemo } from "react";
import { events } from "@/mainpage_events/eventData";
import { splitEvents } from "../mainpage_events/splitEvents";
import { useNavigate } from "react-router-dom";
import MainPageNav from "./MainPageNav";
import { motion } from "framer-motion";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "/images/img1.webp";
import img2 from "/images/img2.webp";
import img3 from "/images/img3.webp";
import img4 from "/images/img4.webp";
import img5 from "/images/img5.webp";
import img6 from "/images/img6.jpg";
import loadingImg from "/images/running.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const MainPage = () => {
  const navigate = useNavigate();
  const { upcoming, past } = useMemo(() => splitEvents(events), []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2800); // 1.5s loading
    return () => clearTimeout(t);
  }, []);

  const renderCard = (event, i) => (
    <motion.div
      key={event.id}
      variants={fadeInUp}
      custom={i}
      whileHover={{ scale: 1.05 }}
      className="bg-fitverse-dark rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform cursor-pointer border border-gray-800"
    >
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        decoding="async"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-fitverse-orange">
          {event.title}
        </h3>
        <p className="text-sm text-fitverse-gray">
          {event.startDate} → {event.endDate} • {event.mode}
        </p>
        <p className="mt-2 text-sm text-fitverse-white">
          {event.description}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <button
            className="bg-fitverse-orange text-fitverse-black px-4 py-2 rounded-lg font-semibold hover:bg-fitverse-black hover:text-fitverse-orange border border-fitverse-orange transition"
            onClick={() => navigate(event.link)}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images = [img6, img2, img3, img4, img5, img1];

  if (loading) {
    return (
      <motion.div
        className="flex items-center justify-center h-screen bg-fitverse-black text-fitverse-orange text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div className="flex flex-col items-center justify-center min-h-screen bg-black gap-8">
        <div className="eyes-loader"></div>
        <div className="loader-circle mt-10"></div>
      </div>
      </motion.div>
    );
  }

  return (
    <>
      <MainPageNav />
      <div className="mt-[10%] md:mt-[4%] overflow-hidden font-poppins">
        {/* Main Content */}
        <main className="bg-fitverse-black py-16 px-4">
          {/* Carousel */}
          <motion.div
            className="flex justify-center items-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
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
                      <Card className="rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 bg-fitverse-dark">
                        <CardContent className="p-0">
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-[200px] md:h-[400px] object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-fitverse-orange text-fitverse-black hover:bg-fitverse-black hover:text-fitverse-orange border border-fitverse-orange" />
              <CarouselNext className="bg-fitverse-orange text-fitverse-black hover:bg-fitverse-black hover:text-fitverse-orange border border-fitverse-orange" />
            </Carousel>
          </motion.div>

          {/* Hero Section */}
          <motion.section
            className="text-center py-20 px-4 bg-fitverse-dark rounded-2xl shadow-xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-fitverse-orange drop-shadow-lg">
              Transform Your Life with Fitverse
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-fitverse-gray">
              Join fitness challenges, track your progress, and become the best
              version of yourself with our events & programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-fitverse-orange text-fitverse-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-fitverse-black hover:text-fitverse-orange border border-fitverse-orange transition"
            >
              Browse Events
            </motion.button>
          </motion.section>

          {/* Upcoming Events */}
          <motion.section
            className="py-16 px-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center text-fitverse-orange mb-10">
              Upcoming Events
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {upcoming.length > 0 ? (
                upcoming.map((e, i) => renderCard(e, i))
              ) : (
                <p className="text-center col-span-full text-fitverse-gray">
                  No upcoming events
                </p>
              )}
            </motion.div>
          </motion.section>

          {/* Past Events */}
          <motion.section
            className="py-16 px-6 bg-fitverse-dark rounded-xl shadow-inner"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center text-fitverse-orange mb-10">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {past.length > 0 ? (
                past.map((e, i) => renderCard(e, i))
              ) : (
                <p className="text-center col-span-full text-fitverse-gray">
                  No past events
                </p>
              )}
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            className="bg-fitverse-black py-16 px-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center text-fitverse-orange mb-10">
              Why Choose Fitverse?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { title: "Community Support", icon: "🤝" },
                { title: "Certified Coaches", icon: "🎓" },
                { title: "Real Results", icon: "📈" },
                { title: "Online & Offline Events", icon: "🌐" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  custom={i}
                  className="p-6 bg-fitverse-dark rounded-xl shadow-lg border border-gray-800"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-fitverse-white">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            className="bg-fitverse-dark py-16 px-6 rounded-xl mt-10 shadow-inner"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center text-fitverse-orange mb-10">
              What Participants Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Best challenge I ever joined! Helped me stay consistent.",
                "Super motivating and well-structured.",
                "Loved the community support and live sessions.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="bg-fitverse-black p-6 rounded-xl shadow border border-gray-800"
                >
                  <p className="text-fitverse-gray italic">“{text}”</p>
                  <div className="mt-4 font-bold text-fitverse-orange">
                    — Participant
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="bg-fitverse-black text-fitverse-gray flex justify-between py-4 px-4 md:px-8 mt-auto border-t border-gray-800">
          <p>© 2025 Fitverse. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://ravi07.vercel.app/"
              className="underline text-fitverse-orange hover:text-fitverse-orangeLight"
            >
              Ravi
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default MainPage;

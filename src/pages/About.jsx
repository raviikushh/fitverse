import Footer from "./Footer";
import MainPageNav from "./MainPageNav";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <MainPageNav />
      <main className="min-h-screen py-16 px-6 mt-20 bg-fitverse-dark">
        <section className="bg-black text-gray-300 py-8 md:py-16">
          <div className="container mx-auto px-6 text-center">
            {/* Heading */}
            <motion.h2
              className="text-4xl font-bold text-orange-500 mb-6"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About FitVerse
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              At <span className="text-orange-400 font-semibold">FitVerse</span>, we
              believe fitness is more than a routine — it’s a lifestyle. Our mission
              is to create a community that inspires and empowers people to achieve
              their health goals while staying motivated and consistent.
            </motion.p>

            {/* Cards */}
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.3 },
                },
              }}
            >
              {[
                {
                  title: "Our Mission",
                  text: "To make fitness fun, accessible, and part of everyday life through innovative challenges, events, and a supportive community.",
                },
                {
                  title: "Our Vision",
                  text: "Building a healthier future where people find strength, balance, and joy in staying active together.",
                },
                {
                  title: "Our Community",
                  text: "A growing family of fitness enthusiasts who motivate each other to push limits and celebrate progress.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/30 transition duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;

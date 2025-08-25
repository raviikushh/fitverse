import Footer from "./Footer";
import MainPageNav from "./MainPageNav";

const About = () => {
  return (
    <>
      <MainPageNav />
      <main className="bg-gray-100 min-h-screen py-12 px-6 mt-20">
        <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center py-10">
            <h1 className="text-4xl font-bold mb-4">About Fitverse</h1>
            <p className="text-lg">Your Digital Partner in Fitness & Wellness</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              <span className="font-semibold">Fitverse</span> is a modern
              fitness and wellness platform designed to connect individuals,
              trainers, and communities in one place. Built with{" "}
              <span className="font-semibold">React, Tailwind CSS, Firebase</span>,
              and other cutting-edge technologies, this project showcases how
              technology can transform healthy living into a seamless
              experience.
            </p>

            {/* Mission */}
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              At Fitverse, our vision is to create a digital space where people
              can explore events, join fitness programs, and stay motivated on
              their wellness journey. It’s not just about building muscle or
              running marathons—it’s about living better, every single day.
            </p>

            {/* Features */}
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              What This Project Offers
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                <span className="font-semibold">Event Management:</span>{" "}
                Browse upcoming and past events with auto-sorting features.
              </li>
              <li>
                <span className="font-semibold">Dynamic Forms:</span>{" "}
                Event-wise form submissions stored securely in Firebase.
              </li>
              <li>
                <span className="font-semibold">Admin Dashboard:</span>{" "}
                Manage event data, track participants, and download reports.
              </li>
              <li>
                <span className="font-semibold">Responsive Design:</span>{" "}
                Fully mobile-friendly and optimized with Tailwind CSS.
              </li>
            </ul>

            {/* Call to Action */}
            <div className="mt-10 text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Why I Built Fitverse
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                This project demonstrates my ability to design and build
                full-stack applications that combine{" "}
                <span className="font-semibold">frontend design</span>,
                <span className="font-semibold"> backend logic</span>, and{" "}
                <span className="font-semibold">cloud integration</span>.
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Fitverse is more than just a fitness app—it&apos;s a showcase of how
                I bring ideas to life with code.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

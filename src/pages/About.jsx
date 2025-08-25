import Footer from "./Footer";
import MainPageNav from "./MainPageNav";

const About = () => {
  return (
    <>
      <MainPageNav />
      <main className=" min-h-screen py-16 px-6 mt-20 bg-fitverse-black">
        <section className="bg-black text-gray-300 py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-orange-500 mb-6">
      About FitVerse
    </h2>
    <p className="max-w-2xl mx-auto text-lg leading-relaxed">
      At <span className="text-orange-400 font-semibold">FitVerse</span>, we believe fitness is more than a routine — 
      it’s a lifestyle. Our mission is to create a community that inspires and empowers 
      people to achieve their health goals while staying motivated and consistent.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/30 transition duration-300">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">Our Mission</h3>
        <p className="text-gray-400">
          To make fitness fun, accessible, and part of everyday life through
          innovative challenges, events, and a supportive community.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/30 transition duration-300">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">Our Vision</h3>
        <p className="text-gray-400">
          Building a healthier future where people find strength, balance, 
          and joy in staying active together.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/30 transition duration-300">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">Our Community</h3>
        <p className="text-gray-400">
          A growing family of fitness enthusiasts who motivate each other 
          to push limits and celebrate progress.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
};

export default About;
